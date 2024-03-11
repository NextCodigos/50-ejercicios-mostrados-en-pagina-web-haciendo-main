/*
Enunciado:
Dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8
en una lista con guiones donde cada numero debeempezar por nº

ejemplo:
---Del 100 al 0---

- nº100-8-8-8-8-8....de 8 en 8
- 92
- nº84
- nº76
- nº68
- nº60
- nº52
- nº44
- nº36
- nº28
- nº20
- nº12
- nº4
--- FIN ---


COMO HACERLO:
-Funcion que reciba un numero
-Inicializar variable con encabezado
-Bucle del numero cero
-Concatenar guion, n2, numero y salto de linea
-Restar 8
-Concatenar FIN


*/

function hastaCero(numero){
    let resultado = `--- Del ${numero} al 0 --- \n`;//template string ``

    while(numero > 0){
        resultado += `- nº${numero} \n`;
        numero -= 8;
    }

    if(numero <= 0){
        resultado += "- nº0 \n";

    }

    resultado += "--- FIN ---";

    return resultado;
}

console.log(hastaCero(987));