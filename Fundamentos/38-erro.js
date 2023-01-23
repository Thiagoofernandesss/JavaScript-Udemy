function tratarErroELancar(erro){
    //throw new Erro ('!!!')
    throw 10
}


function imprimeNome (obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    } finally{
        console.log('Fim!!')
    }
}

const obj = {nome: 'Roberto'}

imprimeNome(obj)