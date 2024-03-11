/*

Enunciado:
Dado un string, ponerlo completo en matusculas o minusculas dependiendo de si hay mas mayuscuals o minusculas por defecto en el string.
si hay mas maysculas ponerlo en mayusculas.
si hay mas minuscuals ponerlo todo en minusculas.

Ejempols:
maysMinus("JOAQuin")  / devuelve: JOAQUIN
maysMinus("Victor")  / devuelve: victor

COmo hacerlo:

-Crear una funcion con parametro texto
-Crear dos contadores pra mayus y minus.
-Recorrer el texto y comprobar si 
las leteras que vamos recorriendo son mayus.
.Aumentar contadores
-Convertir a mayus o minus y devolver resultado
*/

function mayusMinus(texto){

    let mayusculas = 0;
    let minusculas = 0;
    let resultado = "";

    for(let letra of texto){
        if(/[A-Z]/.test(letra)){
            mayusculas++
        }else{
            minusculas++
        }
    }

    if(mayusculas > minusculas){
        resultado = texto.toUpperCase();
    }else{
        resultado = texto.toLowerCase();

    }

    return resultado;
}

//console.log(mayusculas, minusculas)
console.log(mayusMinus("VICTORROBLESweb.es"));