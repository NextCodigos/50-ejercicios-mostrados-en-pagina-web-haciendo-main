//dado un array de aficiones ,devolver cuales son las aficiones mas comunes de los usuarios


function aficiones(arrObj){
    let mapeo = {};

    arrObj.forEach(objeto => {// seria lo mismo for(objeto of arrObj){}
        //console.log(objeto)
        for(aficion of objeto.aficiones){
            //console.log(aficion)
            if(!mapeo[aficion]){
                mapeo[aficion] = 1;
            }else{
                mapeo[aficion]++;
            }
        }
    })

    return mapeo;
}


const usuarios = [
    { nombre: "Victor", aficiones:["informatica", "cine", "videojuegos"]},
    { nombre: "Ramon", aficiones:["informatica", "futbol", "tenis"]},
    { nombre: "Paco", aficiones:["informatica", "cine", "surf"]},
    { nombre: "Pepe", aficiones:["informatica", "cine", "videojuegos", "futbol", "surf"]},
]

console.log(aficiones(usuarios));