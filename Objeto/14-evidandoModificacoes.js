//Object.preventExtensions
//Esse método não pode adicionar atributos do objetos, apenas modificalos e exclui-los

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível:',Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'
delete produto.tag
console.log(produto)

//Object.seal
//Esse método não pode adicionar e excluir atributos do objetos
const pessoa ={ nome: 'Thiago', idade: 22}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade=28
console.log(pessoa)

//Object.freeze
//Esse método não pode adicionar,excluir e alterar os atributos do objetos
