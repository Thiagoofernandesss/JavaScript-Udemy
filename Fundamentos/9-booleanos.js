let isativo= false
console.log(isativo)

isativo = true
console.log(isativo)

isativo = 1
console.log(!!isativo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-11)
console.log(!!' ')
console.log(!![])   
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isativo=true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isativo = false))
