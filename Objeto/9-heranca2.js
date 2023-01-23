//Cadeia de protótipos (prototype chain)
const avo ={ attr1: 'A'}
const pai ={__proto__:avo, attr2: 'B'}
const filho ={__proto__:pai, attr3: 'C'}

console.log(filho.attr1)