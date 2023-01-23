const pessoa = {
    nome: 'Thiago',
    idade: 20,
    endereco:{
        logradouro: 'Rua XXX',
        numero: 147
    }
}

const {nome, idade} = pessoa
console.log (nome, idade)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)
