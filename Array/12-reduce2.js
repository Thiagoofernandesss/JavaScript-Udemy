const alunos = [
    {nome: 'Thiago', nota: 7.3, bolsista: false},
    {nome: 'Bia', nota: 8.5, bolsista: true},
    {nome: 'Ana', nota: 6.5, bolsista: false},
    {nome: 'Lara', nota: 9.0, bolsista: true},
    {nome: 'Leandro', nota: 5.0, bolsista: true},
]


//Desafio 1: Todos os alunos são bolsista?
const totosBolsistas =(resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(totosBolsistas))

//Desafio 2: Algum aluno é bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))