function formulaBhaskara(a, b, c,){

        let delta = (Math.pow(b,2)) - 4 * a* c
        let x1Linha= ((-b + Math.sqrt(delta)) / 2* a)
        let x2Linha= ((-b - Math.sqrt(delta)) / 2* a)

        if(delta < 0){
            return "Delta negativo" + "\n"+
            "X1: " + x1Linha + "\n"+
            "X2: " + x2Linha +"\n"

        }else{
            return "Delta: " + delta +"\n"+
            "X1: " + x1Linha + "\n"+
            "X2: " + x2Linha +"\n"
        }

}

console.log(formulaBhaskara(1,10,24))