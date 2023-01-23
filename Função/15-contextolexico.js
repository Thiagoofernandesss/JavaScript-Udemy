const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exc(){
    const valor = 'Local'
    minhaFuncao()
}

exc()