document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const exerciseListEl = document.getElementById('exerciseList');
    const searchInput = document.getElementById('searchInput');
    const codeDisplay = document.getElementById('codeDisplay');
    const consoleOutput = document.getElementById('consoleOutput');
    const runBtn = document.getElementById('runBtn');
    const clearConsoleBtn = document.getElementById('clearConsoleBtn');
    const currentExerciseTitle = document.getElementById('currentExerciseTitle');

    // State
    let exercises = [];
    let currentCode = '';

    // Initialize
    fetchExercises();

    // Event Listeners
    searchInput.addEventListener('input', (e) => filterExercises(e.target.value));
    runBtn.addEventListener('click', runCurrentCode);
    clearConsoleBtn.addEventListener('click', clearConsole);
    
    // Event delegation for exercise list
    exerciseListEl.addEventListener('click', (e) => {
        const item = e.target.closest('.exercise-item');
        if (item) {
            loadExercise(item.dataset.path, item, item.dataset.name);
        }
    });

    async function fetchExercises() {
        try {
            const response = await fetch('exercises.json');
            if (!response.ok) throw new Error('Failed to load exercises');
            exercises = await response.json();
            renderList(exercises);
        } catch (error) {
            console.error('Error:', error);
            exerciseListEl.innerHTML = `<div style="padding: 1rem; color: #ef4444;">Error cargando ejercicios. Asegúrate de ejecutar esto en un servidor (live server).</div>`;
        }
    }

    function renderList(list) {
        exerciseListEl.innerHTML = list.map(ex => `
            <div class="exercise-item" data-path="${ex.path}" data-name="${ex.name}">
                ${ex.name}
            </div>
        `).join('');
    }

    function filterExercises(query) {
        const filtered = exercises.filter(ex => 
            ex.name.toLowerCase().includes(query.toLowerCase())
        );
        renderList(filtered);
    }

    async function loadExercise(path, element, name) {
        // Highlight active
        document.querySelectorAll('.exercise-item').forEach(el => el.classList.remove('active'));
        if(element) element.classList.add('active');

        currentExerciseTitle.textContent = name;
        runBtn.disabled = true;
        codeDisplay.textContent = 'Cargando...';
        clearConsole();

        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error('Failed to load code');
            const text = await response.text();
            
            currentCode = text;
            codeDisplay.textContent = text;
            runBtn.disabled = false;
        } catch (error) {
            codeDisplay.textContent = `Error cargando el archivo: ${error.message}`;
        }
    }

    function runCurrentCode() {
        if (!currentCode) return;
        
        clearConsole();
        logToConsole(`>>> Ejecutando ${currentExerciseTitle.textContent}...\n`, 'info');

        // Create a sandbox iframe to execute code safely and isolate scope
        const iframe = document.createElement('iframe');
        // Usar visibility hidden en lugar de display none para asegurar que el entorno de ejecución (window) esté activo
        iframe.style.visibility = 'hidden';
        iframe.style.position = 'absolute';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = 'none';
        document.body.appendChild(iframe);

        const win = iframe.contentWindow;
        
        // Crear referencias a las funciones de logging antes de eval
        const originalLog = win.console.log;
        const originalError = win.console.error;

        // Interceptar funciones de interacción (alert, prompt, confirm)
        win.alert = (msg) => {
            logToConsole(`[ALERT] ${msg}`, 'info');
        };

        win.prompt = (msg, defaultValue) => {
            // Usar el prompt real del navegador para pedir datos al usuario
            const result = window.prompt(msg, defaultValue);
            logToConsole(`[PROMPT] ${msg} : "${result}"`, 'info');
            return result;
        };

        win.confirm = (msg) => {
            const result = window.confirm(msg);
            logToConsole(`[CONFIRM] ${msg} : ${result}`, 'info');
            return result;
        };

        // Interceptar document.write para ejercicios antiguos
        win.document.write = (...args) => {
            logToConsole(args.join(' '));
        };
        win.document.writeln = (...args) => {
            logToConsole(args.join(' '));
        };

        // Mock console.log inside iframe
        win.console.log = (...args) => {
            const output = args.map(arg => {
                if (typeof arg === 'object') {
                    try {
                        return JSON.stringify(arg, null, 2);
                    } catch (e) {
                        return String(arg);
                    }
                }
                return String(arg);
            }).join(' ');
            logToConsole(output);
        };

        win.console.error = (...args) => {
             const output = args.map(arg => {
                 if (typeof arg === 'object') {
                     try {
                         return JSON.stringify(arg, null, 2);
                     } catch (e) {
                         return String(arg);
                     }
                 }
                 return String(arg);
             }).join(' ');
             logToConsole('ERROR: ' + output, 'error');
        };

        try {
            // Execute the code
            const result = win.eval(currentCode);
            // Si la ejecución retorna algo, mostrarlo
            if (result !== undefined && result !== null) {
                logToConsole(String(result));
            }
        } catch (e) {
            logToConsole(`Error de ejecución: ${e.message}`, 'error');
            logToConsole(`Stack: ${e.stack}`, 'error');
        }

        // Clean up
        setTimeout(() => {
            document.body.removeChild(iframe);
        }, 1000); // Dar un poco más de tiempo por si hay operaciones asíncronas rápidas
    }

    function logToConsole(text, type = 'log') {
        const line = document.createElement('div');
        line.textContent = text;
        if (type === 'error') line.style.color = '#ef4444';
        if (type === 'info') line.style.color = '#38bdf8';
        
        // Remove placeholder if exists
        const placeholder = consoleOutput.querySelector('.placeholder-text');
        if (placeholder) placeholder.remove();

        consoleOutput.appendChild(line);
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }

    function clearConsole() {
        consoleOutput.innerHTML = '<div class="placeholder-text">El resultado de la ejecución aparecerá aquí...</div>';
    }
});
