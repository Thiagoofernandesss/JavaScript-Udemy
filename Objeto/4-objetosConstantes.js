//pessoa -> 123
const pessoa ={nome: 'Thiago'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa 456
//pessoa ={nome: bia}
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa)
