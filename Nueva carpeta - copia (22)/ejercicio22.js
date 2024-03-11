/*

Enunciado:
Dados sos numeros, indicar cual es mayor y cual es menor.

Ejemplos:

mayorMenor(8, 6)  
Devuelve:
EL NUMERO MAYOR ES: 8
EL NUMERO MENOR ES: 6

Como hacerlo:
-Crear una funcion
-Condiciones para ver cual es mayor
-Devolver resultado

*/

function mayorMenor(numero1, numero2){
    let resultado ="";

    if(numero1 === numero2){
        resultado = "Los numero son iguales !!";

    }else if(numero1 > numero2){
        resultado = "El numero mayor es: "+numero1+"\n";
        resultado += "El numero menor es: "+numero2;
    }else if(numero1 < numero2){
        resultado = "El numero mayor es: "+numero2+"\n";
        resultado += "El numero menor es: "+numero1;
    }else{
        resultado = "Introduce numeros correctos";
    }

    return resultado;
}

console.log(mayorMenor(199, 189));//si meto letras me cide introduzca un numero