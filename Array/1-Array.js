let aprovados = new Array('Bia','Lara','Ana')
console.log(aprovados)

aprovados = ['Bia', 'Lara', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

//Formas de colocar no array
aprovados[3] = 'Paulo'
aprovados.push('Thiago')

console.log(aprovados)
//Ordem alfabética
aprovados.sort()
console.log(aprovados)
console.log(aprovados.length)
//Excluindo Array
delete aprovados[0]
console.log(aprovados[1])
//Excluir/adicionar elementos
console.log(aprovados)
aprovados.splice(1,1)
console.log(aprovados)