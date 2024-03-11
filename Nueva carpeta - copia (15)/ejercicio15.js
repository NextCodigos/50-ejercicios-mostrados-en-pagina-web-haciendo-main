
2020/*
Dada una cadena de texto, devolver el caracter mas usado.

Ejemplo:
masUsado("Victorroblesweb.es")  // Devuelve Lo que mas se repite es: e

Como hacerlo:
-Crear una funcion que reciba el texto.
-Maprear letras en un json
-Recorreremos el mapeo
-Hacemos condicion para ver que contador es mayor

*/

function masUsado(texto){

    let mapeo_letras = {};
    let maximo_repeticiones = 0;// wardo cual es el valor en cada momento
    let letra_mas_repetida = "";//cual es la letra mas repetida

    for(let letra of texto){
        //console.log(letra)
        //añadir propiedad por cada una de estas letras al objeto  json
        if(!mapeo_letras[letra]){
            mapeo_letras[letra] = 1;
        }else{//si si existe mapeo json letra
            mapeo_letras[letra]++;
        }
    }// con in me saca el indice de las letras
    for(let letra in mapeo_letras){
        //console.log(letra);
        // en cada iteracion comprobar: si la letra que se esta recorriento su valor numerico en base a las repeticiones del string es mayor al anterior que hay, entonces lo wardo dentro de maximo repeticiones y ademas dentro de letra repetida wardo la letra en el caso que se cumpla esta condicion
        if(mapeo_letras[letra].toString().trim().length ===1 && mapeo_letras[letra] > maximo_repeticiones){// .trim() elimina espacios
            maximo_repeticiones = mapeo_letras[letra];
            letra_mas_repetida = letra;
        }
    }
   // console.log(mapeo_letras); comprobar 
    return letra_mas_repetida;
    //console.log(maximo_repeticiones, letra_mas_repetida);comprobar es correcto
}
console.log("La letra mas repetida es;",masUsado("He subido un nuevo video a mi canal de you tube"));