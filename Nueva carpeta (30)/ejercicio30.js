function eliminarDuplicdos(elementos){

    elementos = elementos.filter(elemento => {
        return typeof elemento === "number";
    });

    let sin_duplicados = new Set(elementos);

    return Array.from(sin_duplicados);
    //return new Set(elementos);
    //console.log(elementos);
}

console.log(eliminarDuplicdos(["uno", "dos", 1, 2 ,3, 3, 1, 4, "hola", 5]));