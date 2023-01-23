function verificaEstoque(nomeFruta){
    switch(nomeFruta){
        case 'maca':
            return "Não vendemos maça aqui."
        case 'kiwi':
            return "Estamos em falta de kiwi."
        case 'melancia':
            return "Aqui está, são 3 reais o quilo."
        default:
            return "Erro!!!"
    }
}

console.log(verificaEstoque('melancia'))
console.log(verificaEstoque('maca'))
console.log(verificaEstoque('morango'))
