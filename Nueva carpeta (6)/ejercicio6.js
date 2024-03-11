/*

Dibujar un cuadrado hueco con asteriscos

ejemplo:

cuadrado(4)

Devuelve: 4por arriba 4por abajo y 4 por los lados

****
*  *
*  *
****


COMO HACERLO

-Funcion para crear el lado de arriba y abajo del cuadrado
-Funcion que haga los lados y el hueco del cuadrado
-Bucle de 0 al tamaño del lado de menos 2 para equilibrar
con el asterisco de izq a der.
-Ir concadenado en una variable cada linea de cuadrado.
-Mostrar el cuadrado

por minuto 5.30 vid26 ejercicio 6 por la mitad
*/

function lado(numero) {
    let lado = "";

    for (let i = 0; i < numero; i++) {
        lado += "*"; //la parte arriba cuadrado
    }
    return lado;
}


function cuadrado(numero) { //contenido del cuadrado

    //Lado arriba
    let dibujo = lado(numero) + "\n";

    let contenido = ""; //me guarda el dibujo de mi cuadrado

    //Filas
    for (let i = 0; i < (numero - 2); i++) {
        contenido = "*";

        //Contenido Nuevo
        for (let x = 0; x < (numero - 2); x++) {
            contenido += " ";

        }
        contenido += "*";

        //añadir fila al dibujo
        dibujo += contenido + "\n";
        dibujo += contenido + "<br>";
    }
    //Lado abajo
    dibujo += lado(numero);

    return dibujo;

}

console.log(cuadrado(10));
document.write(cuadrado(10));