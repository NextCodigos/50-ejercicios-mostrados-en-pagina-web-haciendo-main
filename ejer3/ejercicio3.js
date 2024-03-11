/*
Dada una palabra buscarla en una frase y devolver cuantas veces aparece en ella.

La frase y la palabra deben ser parametro de una funcion.

ejemplo:
coincidencias("soy la frase", "victor") // Devuelve: 0

COMO HACERLO:

-Funcion con dos parametros "frase" y "busqueda"
-Poner string en minusculas y limpiarlo(eliminar puntos comas guiones ,etc)
-Comporbar si la busqueda esta inckluida en la frase
-Mapear esas palabras y hace un contador de cada una(dentro de objeto JSON)
-Devolver el contador de la busqueda

*/

//limpiar frase de puntos y comas ,etc:

function coincidencas(frase, busqueda) {
    let text_limpio = frase.toLowerCase().replace(/[!¿?.,=]/gi, ""); //.replace(/[!¿?.,=]/gi, '')quita simbolos y sutituye por la nada
    //si quiero añada algo entre palabras entre comillas despues gi
    // para decirle elimine let text_limpio = frase.toLowerCase().replace(/[!¿?.,=]/gi, '')
    let resultado = 0;
    //console.log(text_limpio);
    //en el caso que exista la palabra enla frase:abajo
    if (text_limpio.includes(busqueda)) {
        let palabras = text_limpio.split(" ");
        let mapa = {};

        //recorrer cada palabra que se encuenrtra en array de palabras con for
        //co of( conseguir el valor da cada elemento que hay dentro de una array) seria como un foreach
        for (let palabra of palabras) {
            if (mapa[palabra]) { //esta a cero pero damos valor 1 en json y si hay mas de una suma sino nada
                mapa[palabra]++;
            } else {
                mapa[palabra] = 1;
            }
        }

        resultado = mapa[busqueda];

        //console.log(palabras);
        //console.log(mapa);
    } else {
        resultado = 0;
    }
    return resultado;
}

document.write(
    "Numero de coincidencias en la frase: ",
    //coincidencas("Hola, que tal, soy RAMON pascual. ramon ramon","que"),
    coincidencas("Esta es mi frase", "paco")
);