function informaDia(numero){
    switch(numero){
        case 1:
            return 'Domingo'
        case 2:
            return 'Segunda'
        case 3:
            return 'Terça'
        case 4:
            return 'Quarta'
        case 5:
            return 'Quinta'
        case 6:
            return 'Sexta'
        case 7:
            return 'Sábado'
    }
}

console.log(informaDia(1))
console.log(informaDia(6))

