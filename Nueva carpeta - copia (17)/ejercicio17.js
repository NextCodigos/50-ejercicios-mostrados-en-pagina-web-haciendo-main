/*

Dado un numero, mostrar los numeros de 1 hasta el numero.
Pero para multiplos de tres imprimir "buzz" en lugar del
numero y para los multiplos de cinco imprimir "lighyear".
Para multuiplos de 3 y 5 imprimen "BuzzLightyear".

Ejempplo:
buzz(5);  
 Devuelve:
 1
 2
buzz
4
lightyear

Como hacerlo:
-Crear una funcion que reciba el numero
-Condiciones numero actual multiplo de 3 o 5
-Crear funcion para recorrer y mostrar
-Bucle del 1 al numero

*/

function buzz(numero){

    if(numero % 3 === 0 && numero % 5 === 0){
        resultado = "BuzzLightyear";
    }else if(numero % 3 === 0){
        resultado = "buzz";
    }else if(numero % 5 === 0){
        resultado = "lightyear";
    }else{
        return numero;
    }
    return resultado;
}

//console.log(buzz(15));comprobar

function imprimir(numero){
    for(let i = 1; i <= numero; i++){
        //console.log(i);comprobar
        console.log(buzz(i));
    }
}

imprimir(20);