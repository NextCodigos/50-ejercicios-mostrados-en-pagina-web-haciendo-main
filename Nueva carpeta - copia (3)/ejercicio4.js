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

function invertir(texto) {

    let invertido = "";

    for (let letra of texto) {
        //console.log(letra);
        invertido = letra + invertido;
    }
    //console.log(invertido)
    return invertido;
}

document.writeln(" Texto a invertir rpasculetweb.es" + " <br/>");

document.write("Texto invertido: ", invertir("rpasculetweb.es"));