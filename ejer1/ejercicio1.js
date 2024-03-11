/*
BIEN
Advertyencias:

PRACTICAR Y RAZONAR

Hacer tabla multiplicar

*/

function tablaMultiplicar(numero) {
    //let resultado = "# Tabla del "+numero+" #"; es lo mismo abajo
    let resultado = ` <h1>Tabla del ${numero}  <br></h1>`; // concadenamos con \n salto linea

    for (let i = 0; i <= 10; i++) {
        let multiplicacion = (i * numero);

        //console.log(multiplicacion)
        //concadeno resultado para que se vea bien
        resultado += `<p>${i} x ${numero} = ${multiplicacion} <br></p>`;
        // 1 x 5 = 5 arriba hace que se vea asi en cada iteracion del bucle 
    }
    return resultado;

}

// console.log(tablaMultiplicar(5))
document.write(tablaMultiplicar(5))