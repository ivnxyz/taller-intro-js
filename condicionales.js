/*
  Operadores de comparación
*/

const a = 10
const b = 5

console.log(a == b)
console.log(a != b)
console.log(a >= b)
console.log(a <= b)

/*
  Operadores lógicos
*/

// And
console.log('true && false = ' + (true && false))
console.log('true && true = ' + (true && true))

// Or
console.log('true || false = ' + true || false)

// Not
console.log('!true = ' + !true)

/*
  == vs. ===
*/

console.log(0 == "0")
console.log(0 == [])
console.log(0 == false)

console.log(0 === "0")
console.log(0 === [])
console.log(0 === false)