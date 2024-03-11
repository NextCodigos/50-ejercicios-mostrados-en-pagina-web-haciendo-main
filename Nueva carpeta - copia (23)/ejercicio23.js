/*

Enunciado:
Dada una cadena de texto ,poner en mayusculas la primera letra
de cada palabra en la cadena y luego devolver la cadena.

Ejemplos:
enMayuscula('hola soy victor)  // devuelve: 'Hola Soy Victor'

Como hacerlo:
-Crear una funcion con parametro de texto
-Poner la primera letra del string en mayisculas
-Recorrer el string completo
-Devolverelresultado
-Si el caracter anterior a la letra actual es un espacio
-Ponerlo en mayusculas
-Si el caracter no es un espacio añadirlo al resultado

*/


function enMayusculaOriginal(texto){
    let resultado =  ""; //texto[0].toUpperCase();

    for(letra in texto){//con for in necesito tener el indice
        //console.log(letra);
        if(texto[letra - 1] === " " || parseInt(letra) === 0){
            resultado += texto[letra].toUpperCase();
        }else{
            resultado += texto[letra];
        }
    }

    return resultado;
}
function enMayuscula(texto){
    let palabras = [];//array vacio

    for(let palabra of texto.split(" ")){

        palabras.push(palabra[0].toUpperCase() + palabra.substring(1))
    }

    return palabras.join(' ');

}

console.log(enMayuscula("hola visita vitorrobles.es cincuenta palabras"));