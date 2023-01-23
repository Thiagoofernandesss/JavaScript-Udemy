function valorPlano(idade){
    let ValorFixo =100
    let Preco

    if(idade <= 10){
        Preco = ValorFixo +80
    }else if(idade > 10 && idade <= 30){
        Preco = ValorFixo + 50
    }else if(idade > 30 && idade <= 60){
        Preco = ValorFixo +95
    }else{
        Preco = ValorFixo +130
    }

    return "Valor do plano: " + Preco
}

console.log(valorPlano(10))
console.log(valorPlano(11))
console.log(valorPlano(31))
console.log(valorPlano(61))