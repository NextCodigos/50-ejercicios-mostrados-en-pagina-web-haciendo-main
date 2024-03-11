/*

Enunciado:
Dado un texto y una busqueda,censurar todas las coincidencias
de la busqueda en el texto con [-CENSURADO-].

ENUNCIADO:
Si texto y la busqueda estan vacio mostrar
"No puedes leer el texto y la busqueda" en el caso 
de que ambos parametros no lleguen.

Ejemplos:
censurado("hola hola", "hola") // dEVUELVE [-censurado-] [-censurado-]

CENSURADO() // DEVUELVE: "No puedes leer el texto y la busqueda"


COMO HACERLO:
-Funcion que reciba un texto y una busqueda
-Condiciones en el caso de que lagun parametro de false
-Reemplazar la busqueda por [-censurado-]  en el texto

*/

function censurado(texto=false, busqueda=false){
    
    let resultado = "";

    if(!texto && !busqueda){
        resultado = "No puedes leer el texto y la busqueda";
        
    }else if(!texto && busqueda){
        resultado = "No puedes leer el texto";
        
    }else if(texto && !busqueda){//si existe el texto y no existe la busqueda entoces..
        resultado = "No puedes hacer la busqueda";

    }else if(texto && busqueda){//si existe el texto y si existe la busqueda entoces..
        //resultado = texto.replace(new RegExp(busqueda, 'gi'), "[-CENSURADO-]");
        resultado =texto.replace( new RegExp(busqueda, 'gi'), "[-CENSURADO-]");//expresion regular gloabas mayus y minus
        //voy a buscar busqueda dentro de texto y lo voy a reemplazar por [-CENSURADO-] 
    }

    return resultado;
}

console.log(censurado("hola78 holamanola hola caracola", "hola"))