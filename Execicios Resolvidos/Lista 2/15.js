function receberSomenteOsParesDeIndicesPares(array){
    const resultado = []

    for(i= 0; i< array.length; i++){
        if(array[i] % 2 == 0 && i % 2 == 0){
            resultado.push(array[i])
        }
    }

    return resultado

}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))