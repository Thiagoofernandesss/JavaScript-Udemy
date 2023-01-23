function calculaMedia(nota1, nota2, nota3){
    resultado =''
    media = ((nota1 + nota2 + nota3)/3).toFixed(1)
    if(media >= 7){
        resultado = 'Aprovado'
    }else{
        resultado = 'Reprovado'
    }
    return 'Média:' + media +resultado

}

console.log(calculaMedia(3, 10, 6))
console.log(calculaMedia(10, 10, 10))