
function elQueMasAparece(datos){

    let mapeo = {}, mas_frecuente = "", mayor_valor = 0;

    if(typeof datos === "string"){
        datos = datos.split(" ");
    }

    for(let elemento of datos){

        if(mapeo[elemento]){
            mapeo[elemento]++;

        }else{
            mapeo[elemento] = 1;
        }
        
    }

    for(let elemento in mapeo){
        if(mapeo[elemento] > mayor_valor){
            
            mayor_valor = mapeo[elemento];
            mas_frecuente = elemento;

        }
    }

    //console.log(mayor_valor, mas_frecuente);
    //hago JSON abajo
    return {
        "mas_frecuente": mas_frecuente,
        "mayor_valor": mayor_valor
    };
}

console.log(elQueMasAparece("victor robles hola victor"))
console.log(elQueMasAparece([1,2,3,4,4,4]))