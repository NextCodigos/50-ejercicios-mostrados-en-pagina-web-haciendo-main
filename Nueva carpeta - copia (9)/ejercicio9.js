/*

Dados 2arrays ,devolver array con solo los elementos comunes 
entrea ambos.

Ejemplos:
elementosComunes([4,5,6,7], [7,8,9,7,5])  // Devuelve: [5,7]

Como hacerlo;
-Funcion que reciba dos arrays
-Filtrar array y evaluando una condicion
-Devolver array nuevo


*/

function elementosComunes(array1, array2) {

    const filtrado = array1.filter(elemento => { //funcion filter crea un  nuevo array con todos los elementos que cumplan con la condicon implementada por la funcion dada:
        // si esa palabra  tiene mas de 6caracteres dentro genera otro array
        return array2.includes(elemento);
        //metodo includes:determina si una cadena de texto puede ser encontrada dentro de una cadena de texto, devolviendo true o false segun corresponda
    });

    return filtrado;
}

console.log(elementosComunes([4, 5, 6, 7], [7, 8, 9, 7, 5]));
console.log(elementosComunes(["ramon", "Paco", "Pepe", "Andres"], ["juan", "ramon", "jesus", "victor", "Andres"]));
document.write("<br>Los elementos son [4, 5, 6, 7], [7, 8, 9, 7, 5]<br>");
document.write(elementosComunes([4, 5, 6, 7], [7, 8, 9, 7, 5] + "<br>"));
document.write(
    elementosComunes(
        ["ramon", "Paco", "Pepe", "Andres"], ["juan", "ramon", "jesus", "victor", "Andres"] + "<br>"
    )
);

document.write(elementosComunes(["ramon", "Paco", "Pepe", "Andres"], ["juan", "ramon", "jesus", "victor", "Andres"]));