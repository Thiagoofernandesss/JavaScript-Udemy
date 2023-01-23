function calculadora(x,operação,y){
    switch(operação){
        case '+':
            return "Resultado: " +(x+y)
        case '-':
            return "Resultado: " +(x-y)
        case '/':
            return "Resultado: " +(x/y)
        case '*':
            return "Resultado: " +(x*y)
    }
}

console.log(calculadora(2,'+',2))
console.log(calculadora(2,'-',2))
console.log(calculadora(2,'/',2))
console.log(calculadora(2,'*',2))