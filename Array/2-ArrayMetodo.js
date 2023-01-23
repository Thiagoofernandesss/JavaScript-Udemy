const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
//Remove utimo elemento do array
pilotos.pop()
console.log(pilotos)
//Adiciona elementos na ultima posição do array
pilotos.push('Verstappen')
console.log(pilotos)
//Remove o primeiro elemento do array
pilotos.shift()
//Adiciona elemento na primeira posição do array
pilotos.unshift('Thiago')
//Medoto slpice dá de adicionar e remover
//Adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//Remover
pilotos.splice(3, 1)
console.log(pilotos)
//Novo array a partir do indice
const algunsPilotos1 = pilotos.slice(2) //Novo array
const algunsPilotos2 = pilotos.slice(1, 4) //Novo array Indice 1 até 3 (4 não entra)
console.log(pilotos)
console.log(algunsPilotos1)
console.log(algunsPilotos2)
