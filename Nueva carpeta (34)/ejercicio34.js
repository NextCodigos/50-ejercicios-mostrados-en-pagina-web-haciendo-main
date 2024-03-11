/*
Como hacerlo
-Funcion con dos parametros
-Template string y operaciones
-Devolver resultado

*/

function calculadora(numero1, numero2){
    let resultado = `
la suma es: ${numero1+numero2}   
la resta es: ${numero1-numero2}   
la multiplicacion es: ${numero1*numero2}   
la division es: ${numero1/numero2}   
    
    `;

    return resultado;
}

console.log(calculadora(10, 10));