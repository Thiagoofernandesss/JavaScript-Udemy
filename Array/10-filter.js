Array.prototype.filter2 = function(callback){
    const newArray = []

    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Celular', preco: 800, fragil: true},
    {nome: 'Ipad', preco: 4000, fragil: true},
    {nome: 'Copo', preco: 18.99, fragil: false}, 
    {nome: 'Panela', preco: 10.99, fragil: false} 
]


const caro = produto => produto.preco >= 1000
const fragil = produto =>produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))
