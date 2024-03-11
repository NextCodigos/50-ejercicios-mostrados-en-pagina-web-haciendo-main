/*

Dados dos numeros,devolver cuantos numeros impares hay entre ellos

Ejemplos(1,100)  //Devuelve: 50

Como hacerlo:
-Funcion que reciba los dos numeros
Bucle de numeral al numero2
-Condicion, si el resto es distinto a cero es impar
-Aumentar en uno el contador
-Devolver contador

*/

function impares(numero1, numero2) {
    let contador = 0;

    while (numero1 < numero2) {
        if (numero1 % 2 !== 0) contador++;
        //console.log("El "+numero1+" es impar");

        numero1++;
    }

    return contador;
}

console.log("Numeros impares:", impares(1, 100));
document.write("Numeros impares:", impares(1, 100));

// document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");