function capi(numero){
    let procesado = parseInt(numero
                    .toString()
                    .split('')
                    .reverse()
                    .join('')
        
        );

        return numero === procesado;
}

console.log(capi(2002));