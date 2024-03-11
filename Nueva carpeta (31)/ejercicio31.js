/*

Como hacerlo:

-Crear una funcion con parametro angulo
-Condiciones para detectar angulo
-Devolver resultado

*/

function angulo(abertura){
    let resultado = "Angulo Completo";

    if(abertura < 90){
        resultado = "Angulo agudo";
    
    }else if(abertura === 90){
        resultado = "Angulo Recto";
    
    }else if(abertura > 90 && abertura < 180){
        resultado =  " Angulo obtuso";

    }else if(abertura === 180){
        resultado = "Angulo Llano";
    
    }else if(abertura > 180 && abertura < 360){
        resultado = "Angulo concavo";

    }

    return resultado;
}

console.log(angulo(70));