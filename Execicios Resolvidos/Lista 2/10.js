function simboloMais(numero){
    retorno = ""

    for(i=0; i<numero; i++){
        retorno = retorno + "+"
    }

    return retorno
}

console.log(simboloMais(3))
console.log(simboloMais(1))
console.log(simboloMais(5))