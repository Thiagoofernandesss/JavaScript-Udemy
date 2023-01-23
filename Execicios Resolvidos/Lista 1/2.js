function informaLado(L1, L2, L3){
    if(L1 == L2 && L1== L3){
       return "Triângulo: Equilátero"
    }else if(L1 == L2 && L1 != L3){
        return "Triângulo: Isósceles"
    }else if(L1 == L3 && L1 != L2){
        return "Triângulo: Isósceles"
    }else if(L3 == L2 && L3 != L1){
        return "Triângulo: Isósceles"
    }else{
        return "Triângulo: Escaleno"
    }
}

console.log(informaLado(3,3,3))
console.log(informaLado(1,4,4))
console.log(informaLado(4,1,4))
console.log(informaLado(4,4,1))
console.log(informaLado(4,3,2))