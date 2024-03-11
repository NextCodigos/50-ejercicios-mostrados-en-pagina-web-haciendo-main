//validacion email con expresion regular

function comprobarEmail(email){

    //comprobacion email
    return /^\w+@\w+\.\w+$/gi.test(email);

}

console.log(comprobarEmail("victor@victorrrobles.com"));