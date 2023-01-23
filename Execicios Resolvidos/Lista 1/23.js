function statusAluno(codigo,nota1, nota2, nota3){
    if(nota1 > nota2 && nota1 > nota3){
        situacao='Aprovado'
        media =((nota1 * 4) + (nota2 * 3) + (nota3 * 3))/10
        if(media < 5){
            situacao='Reprovado'
        }
        return "Código do aluno: "+codigo + '\n'+
                    "Nota 1: " + nota1.toFixed(2) +'\n'+
                    "Nota 2: " + nota2.toFixed(2) +'\n'+
                    "Nota 3: " + nota3.toFixed(2) +'\n'+
                    "Média: " + media.toFixed(2) +'\n'+
                    "Situação: " + situacao
    }else if (nota2 > nota1 && nota2 > nota3){
        situacao='Aprovado'
        media =((nota2 * 4) + (nota1 * 3) + (nota3 * 3))/10
        if(media < 5){
            situacao='Reprovado'
        }
        return "Código do aluno: "+codigo + '\n'+
                    "Nota 1: " + nota1.toFixed(2) +'\n'+
                    "Nota 2: " + nota2.toFixed(2) +'\n'+
                    "Nota 3: " + nota3.toFixed(2) +'\n'+
                    "Média: " + media.toFixed(2) +'\n'+
                    "Situação: " + situacao   
    }else{
        situacao='Aprovado'
        media =((nota3 * 4) + (nota1 * 3) + (nota2 * 3))/10
        if(media < 5){
            situacao='Reprovado'
        }
        return "Código do aluno: "+codigo + '\n'+
                    "Nota 1: " + nota1.toFixed(2) +'\n'+
                    "Nota 2: " + nota2.toFixed(2) +'\n'+
                    "Nota 3: " + nota3.toFixed(2) +'\n'+
                    "Média: " + media.toFixed(2) +'\n'+
                    "Situação: " + situacao
    }
}

console.log(statusAluno(12345678,7,4.2,5))