/* 

Enunciado:
Dado un numero, mostrar una escalera con escalones de "[-]"
usando el numero para los niveles de la escalera:

Ejemplo:
escalera(4)  //Devuelve:

[-]
[-][-]
[-][-][-]
[-][-][-][-]

Como hacerlo
-Funcion que reciba un numero
-Recorrer el numero de niveles de la escalera
-En cada iteracion pintar las escalones de ese nivel
-Haciendo un bucle desde 1 hasta el nivel en el que estamos
*/

function escalera(numero){
    let escalera_completa = "";//concadenamos los diferentes niveles y guardamospara mostrar al final

    for(let nivel = 1; nivel <= numero; nivel++){
        //console.log("Nivel:", nivel);
        let escalones = "";//rrelleno con el for de abajo

        for(let escalon = 1; escalon <= nivel; escalon++){
            escalones += "[-]";//actualizamos la variable de escalones de arriba lin27
        }
        //console.log("Nivel",nivel, escalones);
        escalera_completa += escalones + '\n';//añado todos los escalones que tengo
    }
    return escalera_completa;
}

console.log(escalera(7))