/*

Dado un string y un numero,repetir el string 
tantas veces como el numero indique.

Ejemplo:

repiteme("ramon", 2)   //Devuelve ramonramon

Como hacerlo:
-Crear una funcion que reciba los dos parametros
-Bucle hasta el numero
-Concatenar string

*/

// Funcion clasica
function repiteme(texto, numero_repeticiones){
    let resultado = "";// string vacio

    for(let i = 0; i < numero_repeticiones; i++){
        resultado += texto;// resultado le concadenamos el texto y se repite tantas veces como sea necesario
    }

    return resultado;//vemos el resultado

}

console.log(repiteme("Ramon", 8));//llamamos funcion repiteme 8veces
/*
//Funcion propotipo
String.prototype.repiteme = function repiteme(numero_repeticiones){
    let resultado = "";

    for(let i = 0; i < numero_repeticiones; i++){
        resultado += this;
    }

    return resultado;

}

console.log("Ramon Pascual web".repiteme(5))*/