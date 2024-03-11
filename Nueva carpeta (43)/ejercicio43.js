//dado un array de numero,sacar la media de todos ellos
//Ejemplo laMedia([1,2,3]);
//devuelve: 3

function laMedia(numeros){
    let suma = numeros.reduce((valorAcumulado, numeroActual) =>{

        return valorAcumulado + numeroActual;
    });

    let media = suma / numeros.length;

    return media;
}

console.log(laMedia([1,2,3,4,5,6, 20, 50]));