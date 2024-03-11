/*

Dada una cadena de texto, comprobar si es polindromo o no.
Se leen igual de dereacha a izquierda

ejem:
ana, bob, otto, allivessevilla

No tener en cuenta espacios raros

Como hacerlo:
-Funcion con parametro "texto"
-Separar-el-texto-en-un-array- de letras
-Darle la vuelta
-Unir el array de letras en un string y comparar con el parametro

*/

function palindromo(texto) {
    let invertido = texto
        .split('') // dentro de invertido un array con .split
        .reverse() //doy la vuelta al array
        .join('') //lo que pongo enmedio comillas me separa las letras
    ;
    return (invertido === texto); // Es lo mismo que abajo pero mas corto
    //console.log(invertido)
    /*
    if(invertido === texto ){
        return true;
    }else{
        return false;
    }*/

}

document.write("Es un palindormo? " + palindromo("1234321"));
document.write("Es un numero palindormo? " + palindromo("2134321"));