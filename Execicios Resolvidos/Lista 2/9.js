function repetir(conteudo, vezes){
    const array = []
    for(i=0; i<vezes; i++){
        array.push(conteudo)
    }
    return array
}

console.log(repetir("Código", 2))
console.log(repetir(7, 4))