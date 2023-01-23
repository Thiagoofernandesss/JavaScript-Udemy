function jurosSimples(capitalInicial, taxa, meses){
    let montante = capitalInicial +(capitalInicial*(taxa/100)*meses)
    let juros = capitalInicial * (taxa/100) * meses
    return "Valor investido: " + capitalInicial +"\n"
            +"Juros: " + juros +"\n"
            +"Montante: " + montante
}

function jurosCompostos(capitalInicial, taxa, meses){
    let montante = (capitalInicial*Math.pow((1+(taxa/100)),meses)).toFixed(2)
    let juros = (montante - capitalInicial).toFixed(2)

    return "Valor investido: " + capitalInicial +"\n"
    +"Juros: " + juros +"\n"
    +"Montante: " + montante
}
console.log(jurosSimples(4000,2,18))
console.log(jurosCompostos(4000,2,18))