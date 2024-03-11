/*

Dado un array de objetos de peliculas (titulo,director,vista)
mostrar todas las peliculas indicando
cual has visto y cual no.

Ejemplo:
misPeliculas(peliculas);

Devuelve:
Ya as visto:"El señor de los anillos de Peter Jacson"
Te falta por ver:"La liga de la justicia de Zack Snyder"

Como hacerlo:
-Crear un array de objetos
-Crear funcion para recorrer y mostar array.

*/

function misPeliculas(peliculas){
    for(pelicula of peliculas){
        //console.log(p);
        let para_mostrar = `"${pelicula.titulo} de ${pelicula.director}"`;

        //para comprobar pelicula
        if(pelicula.vista){
            console.log("Ya as visto:", para_mostrar);
        }else{
            console.log("Te falta por ver:", para_mostrar);

        }
    }

    return peliculas;
}

//arrays de objetos
const coleccion_de_peliculas = [
    {
        titulo: "El señor de los anillos",
        director: "Peter Jacson",
        vista: true
    },
    {
        titulo: "La liga de la justicia ",
        director: "Zack Snyder ",
        vista: false
    },
    {
        titulo: " Los vengadores: Endgame",
        director: "Joe Ruso",
        vista: true
    },
    {
        titulo: "Batman vs Superman",
        director: "Zack Snyder",
        vista: false
    }
];

console.log(misPeliculas(coleccion_de_peliculas));


