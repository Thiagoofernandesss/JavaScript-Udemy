const x = 'Global'


function fora (){
    const x = 'Local'
    function dentro(){
        return x 
    }
    return dentro
}

const minhaFunção = fora()

console.log(minhaFunção())