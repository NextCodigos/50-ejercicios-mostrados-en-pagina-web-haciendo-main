/*
Dado un numero entero, inviertelo y devuelve el nuevo entero.

Ejemplos:
invertir(67)  //Devuelve: 76


Como Hacerlo:
-Funcion que reciba el nunero
-Convertir numero en string
-Crear un array para cada letra
-Darle la vuelta
-Unir el array en un sring
-Convertir el string en un entero

*/

function invertirNumero(numero) {

    let invertido = parseInt(numero // me convierte cualquier string en un entero
        .toString() //convertir en  cadena de texto
        .split('') //convertir string en un array
        .reverse() // damos la vuelta al array
        .join('') // unir con criterio de nada
    ) * Math.sign(numero); //me dice si es positivo o negativo .sign

    //console.log(typeof(invertido));
    return invertido;
}
document.write("El numero a invertir es -1256");
console.log("El numero invertido es", invertirNumero(-1256));
document.write("<br>El numero invertido es", invertirNumero(-1256));