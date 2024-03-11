/*
Dado un string, devolver cuales son las letas que aparecen solo una vez y cual es la primera.


Ejemplo
soloUnaVez("frase frase HOY")

Devuelve: [["H", "O", "Y"], "H"]

*/

function soloUnaVez(texto){
    
    //definir variables
    let contadores = {},
        resultado = []
        letras = texto.split('').filter(letra => letra.trim().length >=1)
        ;
        //generar contadores
        for(letra of letras){
            //console.log(letra)
            if(!contadores[letra]){
                contadores[letra] = 1;
            }else{
                contadores[letra]++;
            }
        }


        //eliminar la letras que se repitan
        for(letra in contadores){
            if(contadores[letra] === 1){
                resultado.push(letra);
            }
                
        }           
     /*es lo mismo que arriba

       for(letra in contadores){
            if(contadores[letra] >= 2){
                delete contadores[letra];
            }else{
                resultado.push(letra);
            }
        }*/


        return [resultado, resultado[0]];
        
}

console.log(soloUnaVez("frase frase HOY"));