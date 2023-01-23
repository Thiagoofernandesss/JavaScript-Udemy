const fabricantes = ["Mercedres", "Audi", "BMW"]

function imprimeFabricante(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimeFabricante)