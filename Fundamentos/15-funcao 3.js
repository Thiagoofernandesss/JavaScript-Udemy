//armazenação uma função numa variável

const imprimirSoma = function (a, b){
    console.log(a+b)
}

imprimirSoma(2,3)

//Armazenado uma função arrow em uma variável

const soma =(a, b) => {
    return a + b
}

console.log(soma(2,1))

//retorno implicito

const substracao = (a ,b) => a - b

console.log(substracao(0,1))