/*
enunciado:

Dada una cadena de texto, darle la vuelta e invertir el orden
de sus caracteres, sin usar metodos propios del lenguaje,
solo estructurasde control

ejemplos:

invertir('holas)  // Devuelve: 'aloh'

COMO HACERLO

-Funcion con parametro "cadena"
-Crear una variable para guardar la cadena invertida
-Bucle que recorra string y guarde los caracteres en las variables

*/

function invertir(texto){

    let invertido = "";
    //me recorre el texto y me saca cada letra del texto
    for(let letra of texto){// for of me saca los valores y el for in los indices
        //console.log(letra);me uestra cada una de las letras de la frase de arriba abajo
        invertido = letra + invertido;//wardo el valor de las letras en invertido para dar la vuelta
    }
    //console.log(invertido)
    return invertido;
}

function invertir(texto){
    //estoy haciendo crear un array primero con cada letra  del texto,le doi la vuelta a ese array 
    //y uno cada elemento de ese array en un solo string por este criteio de separacion en este caso ninguno.join('')
    return texto.split("").reverse().join('');
}

console.log("Texto invertido: ", invertir("rpasculetweb.es"))
