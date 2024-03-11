function calcularDias(dias){
    let anios = Math.floor(dias/365);//Math.floor para redondear
    let dias_restantes = (dias%365);
    let meses = Math.floor(dias_restantes/30);//Math.floor para redondear
    dias_restantes = dias_restantes%30;
    
    //console.log(dias_restantes)
    return `Equivale a ${anios} años, ${meses} meses  y ${dias_restantes} dias.`
}

console.log(calcularDias(9920));