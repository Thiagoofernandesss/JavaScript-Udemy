const alunos = [
    {nome: 'Thiago', nota: 7.3, bolsista: false},
    {nome: 'Bia', nota: 8.5, bolsista: true},
    {nome: 'Ana', nota: 6.5, bolsista: false},
    {nome: 'Lara', nota: 9.0, bolsista: true},
    {nome: 'Leandro', nota: 5.0, bolsista: true},
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)