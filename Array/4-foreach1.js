const aprovados = ['Thiago', 'Bia', 'Ana', 'Luiz', 'Cris', 'Josi', 'Lara']

aprovados.forEach(function(nome, indice){
    console.log(`${indice +1} - ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

for(i=0, i< aprovados.length, i++){
    return i +" - "+ +aprovados[i]
}