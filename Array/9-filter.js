const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Celular', preco: 800, fragil: true},
    {nome: 'Ipad', preco: 4000, fragil: true},
    {nome: 'Copo', preco: 18.99, fragil: false}, 
    {nome: 'Panela', preco: 10.99, fragil: false} 
]

console.log(produtos.filter(function (p){
    return p.preco> 1500
}))

const caro = produto => produto.preco >= 1000
const fragil= produto =>produto.fragil

console.log(produtos.filter(caro).filter(fragil))