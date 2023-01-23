function tipoCarro(modelo){
    switch(modelo){
        case 'Hatch':
            return "Compra efetuada com sucesso."
        case 'Sedan':
            return "Tem certeza que não prefere este modelo."
        case 'Motos':
            return "Tem certeza que não prefere este modelo."
        case 'Caminhonetes':
            return "Tem certeza que não prefere este modelo."
        default:
            return "Não trabalhamos com este tipo de automóvel aqui."
    }
}

console.log(tipoCarro('Hatch'))
console.log(tipoCarro('Sedan'))
console.log(tipoCarro('Aviao'))
