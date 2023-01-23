function encontraPares(numeroInicial,NumeroFinal){
    let pares =[]
    let quantidade =0
    for(i=numeroInicial; i<=NumeroFinal; i++){
        if(i%2 == 0){
            pares.push(i)
            quantidade++
        }
    }
    return "Pares: "+ pares+'\n'+ "Quantidade Pares: "+ quantidade
}

console.log(encontraPares(1,100))
