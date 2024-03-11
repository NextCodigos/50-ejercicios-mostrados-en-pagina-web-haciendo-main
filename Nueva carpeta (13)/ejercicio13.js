/*

Dado un array,dividirlo en tantos sub-arrays
como sea necesario basandonos en un numero que indique su tamaño.

Dividirlo en arrays de x elementos

Ejemplos:

divideArray([7,8,9,10,5], 2) quiero que me divida el array de 2elementos(le indico arrays que quiero me meta los numeros yo le diga)
Devuelve:
[[7,8],[9,10],[5]]


Como hacerlo:
-Crear una funcion que reciba los dos parametros
-Crear un array
-Recorrer array e ir añadiendo sub arrays

*/

function divideArray(array_principal, numero_elementos){
    let arreglos = [];//[[0,1], [8,9], [3]]; un array vacio en el cual vamos a introducir otros subarrays

    for(let elemento of array_principal){//rrecorro arreglo principal
        
        let ultimo = arreglos[arreglos.length -1];

        //console.log(ultimo)
        if(!ultimo || ultimo.length === numero_elementos){//sino existe ultimo o es igual a nºelementos
            arreglos.push([elemento]);
        }else{
            ultimo.push(elemento);
        }

        //console.log(arreglos);
    }

    return arreglos;
}

console.log(divideArray([7,8,9,10,5,8,9,10,20], 3));