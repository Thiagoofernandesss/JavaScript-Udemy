function filtraNumero(array){
    const resultado = []

    for(let item of array){
        if(typeof item == "number")
        resultado.push(item)
        
    }
    return resultado
}

console.log(filtraNumero([1, 2, 'Thiago', '3', 4, 5, 'Bia', 'Leandro']))
console.log(filtraNumero(['Thiago', '3', 'Bia', 'Leandro']))