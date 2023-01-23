console.log(Math.ceil(6.1))

const ob1 ={}
ob1.nome = 'Bola'
ob1['nome']= 'Bola2'

console.log(ob1.nome)

function Obj (nome){
    this.nome =nome
}

const objt2 = new Obj ('Cadeira')
const objt3 = new Obj ('Mesa')

console.log(objt2.nome)
console.log(objt3.nome)