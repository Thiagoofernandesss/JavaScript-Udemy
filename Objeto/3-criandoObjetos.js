// Usando notação literal
const obj1 ={}
//console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
//console.log(obj2)

//Funcções construstoras
function Produto (nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco*( 1- desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Celular', 1200.89, 0.15)

//console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Thiago',1200,3)
const f2 = criarFuncionario('Thiago',1200,0)

console.log(f1.getSalario(),f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome= 'Ana'
console.log(filha)

//Um função famossa que re