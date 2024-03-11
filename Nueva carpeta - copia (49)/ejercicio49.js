/*

Dado un objeto,comprobar si existe una propiedad en concreto.

Ejemplos:
existePropiedad(niObjeto, "nombre")  Devuelve: true

*/

function existePropiedad(objeto, propiedad){
    if(typeof objeto == 'object' && typeof propiedad === "string" &&
    hasOwnProperty.call(objeto, propiedad)// es lo mismo de antes:  objeto.hasOwnProperty(propiedad)
    ){
     return true;
    }
    
    return false;

}
let usuario ={
    nombre: "victor",
    apellido:"Robles"
}

console.log(existePropiedad(usuario, "nombre"));