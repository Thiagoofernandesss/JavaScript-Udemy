
// Factory 
function criarProduto(nome,preco){
    return{
        nome,
        preco: preco,
        desconto: 20
    }
}

console.log(criarProduto('Calça',200))
console.log(criarProduto('Camisa',150))