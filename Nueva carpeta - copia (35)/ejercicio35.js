
function primeroYultimo(elementos){

    let nuevos_elementos = [];
    nuevos_elementos.push(elementos[0], elementos[elementos.length -1]);

    return nuevos_elementos;
}

console.log(primeroYultimo([100, 200, 300, 780]));