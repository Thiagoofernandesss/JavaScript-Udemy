
function imprimirSoma(a ,b){
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 5, 6, 7)

function soma(a, b = 0){
    return a +b
}
console.log(soma(2, 2))
console.log(soma(2))
console.log(soma())