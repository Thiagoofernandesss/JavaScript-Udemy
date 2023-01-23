const notas = [6.7, 5.5, 9.5, 10, 7.7]

for(let i in notas){
   console.log(i, notas[i])
}

const pessoa = {
   nome: 'Thiago',
   sobrenome: 'Costa',
   idade: 22,
   peso: 59
}

for (let atributo in pessoa){
   console.log(`${atributo} = ${pessoa[atributo]}`)
}