function primeiroEUltimo(elementos){
    const primeiro = elementos.shift()
    const ultimo = elementos.pop()

    return [primeiro, ultimo]
}

console.log(primeiroEUltimo([7, 14, 15]))