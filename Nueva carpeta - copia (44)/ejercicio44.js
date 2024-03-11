/*
Dado un array de string, devolver otro con los valores que 
esten formados por mas de dos palabras

*/

function dosPalabras(elementos){

    let nuevos_elementos = [];

    for(palabra of elementos){// for of me saca contenido for in los indices
        //console.log(palabra);
        if(palabra.split(' ').length >= 2){
            nuevos_elementos.push(palabra);
        }
    }

    return nuevos_elementos;
}

console.log(dosPalabras(["hola", "san francisco", "ciudad real", "ramon"]));