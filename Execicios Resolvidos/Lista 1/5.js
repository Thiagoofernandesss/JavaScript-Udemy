function arredondaNumero(numero){
    return 'R$ ' + numero.toFixed(2)
}

console.log(arredondaNumero(0.30000000000000004))