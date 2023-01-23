function valorAnuidade(mes,valor){
    switch(mes){
        case 1:
            Montante= (valor*(Math.pow((1+0.05),0))).toFixed(2)
            return "Valor: " + Montante
        case 2:
            Montante= (valor*(Math.pow((1+0.05),1))).toFixed(2)
            return "Valor: " + Montante
        case 3:
            Montante= (valor*(Math.pow((1+0.05),2))).toFixed(2)
            return "Valor: " + Montante
        case 4:
            Montante= (valor*(Math.pow((1+0.05),3))).toFixed(2)
            return "Valor: " + Montante
        case 5:
            Montante= (valor*(Math.pow((1+0.05),4))).toFixed(2)
            return "Valor: " + Montante
        case 6:
            Montante= (valor*(Math.pow((1+0.05),5))).toFixed(2)
            return "Valor: " + Montante
        case 7:
            Montante= (valor*(Math.pow((1+0.05),6))).toFixed(2)
            return "Valor: " + Montante
        case 8:
            Montante= (valor*(Math.pow((1+0.05),7))).toFixed(2)
            return "Valor: " + Montante
        case 9:
            Montante= (valor*(Math.pow((1+0.05),8))).toFixed(2)
            return "Valor: " + Montante
        case 10:
            Montante= (valor*(Math.pow((1+0.05),9))).toFixed(2)
            return "Valor: " + Montante
        case 11:
            Montante= (valor*(Math.pow((1+0.05),10))).toFixed(2)
            return "Valor: " + Montante
        case 12:
            Montante= (valor*(Math.pow((1+0.05),11))).toFixed(2)
            return "Valor: " + Montante
        
    }
}

console.log(valorAnuidade(1,100))
console.log(valorAnuidade(2,100))
console.log(valorAnuidade(3,100))
console.log(valorAnuidade(4,100))
console.log(valorAnuidade(5,100))