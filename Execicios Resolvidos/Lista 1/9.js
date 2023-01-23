function statusAluno(nota){
    if (nota < 38){
        return "Reprovado: " + nota
    }else if( nota >= 38){
        nota =Math.ceil(nota/5)*5
        if(nota>=40){
            return "Aprovado: " + nota
        }else{
            return "Reprovado: " + nota
        }
    }
}

console.log(statusAluno(38))