//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome ='Cadeira'
produto.preco=220

console.log(produto)
delete produto.preco
console.log(produto)

const carro ={
    modelo: 'A4',
    Valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        Endereco:{
            Numero: 123,
            logradoro: 'Rua ABC'
        }
    }
}