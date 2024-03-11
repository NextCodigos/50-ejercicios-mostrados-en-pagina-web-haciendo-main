/*
Enunciado:
Dado un array de alumnos (nombre y nota) mostrar
cuantos alumnos estan suspensos y cuantos estan aprobados

*/

function suspensos(alumnos){
    let aprobados=0, suspensos=0;

    for(alumno of alumnos){
        //console.log(alumno)
        if(alumno[1] >= 5){
            aprobados++;

        }else{
            suspensos++;
        }
    
    }


    return {
        "aprobados": aprobados,
        "suspensos": suspensos
        }
}

console.log(suspensos([
    ["Victor", 10],
    ["Juan", 5],
    ["Pepe", 4],
    ["Maria", 8],
    ["Marta", 3]
]));
