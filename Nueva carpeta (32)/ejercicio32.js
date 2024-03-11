/*

Como hacerlo:
-Crear una funcion con parametro numeros
-Filtrar array
-Modificar contenido aeeay
-Devolver resultado

*/

function alCuadrado(numeros){

    let numeros_cuadrados = numeros
        .filter(numero => typeof numero === "number")
        // con map metemos resultados pow elevar al cuadrado en array con .map
        .map(numero => Math.pow(numero, 2))
    ;

    return numeros_cuadrados;
}

console.log(alCuadrado([23, 56, 77, "hola", true, ["hola"], 80]));