
/*

Enunciado

Dado una cadena de texto y un numero,recortar el string
mostrando los x primeros caracteres.

Ejemplo:
recortar('Curso Desarrollo web), 6 // Devuelve: 'cursos'

Como hacerlo
-Crear una funcion con parameros texto y hasta
-Comprobar que los datos son correctos
-Recortar string con substr
-Devolver resultado

*/


function recortar(texto, hasta){

    let resultado = "";

   // console.log(typeof texto, typeof hasta);
    if(typeof texto === 'string' && typeof hasta === 'number'){
        resultado = texto.substring(0, hasta);
    }else{
        resultado = "Introduce bien los datos!!";
    }
    return resultado;

}
    
console.log(

    recortar("Cursos Desarrollo web Victor RObles", 8)
);