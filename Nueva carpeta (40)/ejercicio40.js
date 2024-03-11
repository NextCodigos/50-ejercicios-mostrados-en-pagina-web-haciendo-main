function altoBajo(numeros){

    let ordenados = numeros.sort((a,b) => a - b);

    //json
    return {
        bajo: ordenados[0],
        alto: ordenados[ordenados.length -1]
    }
}

console.log(altoBajo([88, 100, 1, 2, 3, 43, 20, 12, 600, 900,22]));