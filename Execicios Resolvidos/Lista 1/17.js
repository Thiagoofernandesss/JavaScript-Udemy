function atualizaSalario(plano,salario){
    switch(plano){
        case 'A':
            return "Novo salário: " + (salario*1.10).toFixed(2)
        case 'B':
            return "Novo salário: " + (salario*1.15).toFixed(2)
        case 'C':
            return "Novo salário: " + (salario*1.20).toFixed(2)
        default:
            return "Plano inválido!!"
    }
}

console.log(atualizaSalario('A',1000))
console.log(atualizaSalario('B',1000))
console.log(atualizaSalario('C',1000))
console.log(atualizaSalario('D',1000))