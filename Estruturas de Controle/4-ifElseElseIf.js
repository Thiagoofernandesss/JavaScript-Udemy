function clasificacao(pos){
    if(pos <= 4){
        console.log("Libertadores")
    }else if(pos <= 10){
        console.log("Copa do brasil")
    }else if(pos <=20){
        console.log("Mantém")
    }else{
        console.log("Rebaixamento")
    }
}

clasificacao(1)
clasificacao(8)
clasificacao(12)
clasificacao(23)