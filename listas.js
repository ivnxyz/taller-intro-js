/*
  Listas
*/

// Definir una lista
const lista = ["Hola", 2, 3.4, true] // Lista con elementos
const lista2 = [] // Lista vacía
console.log(lista)

// Agregar elementos
lista.push("JS")
console.log(lista)

// Acceder a un elemento
console.log("Elemento en la posición 2: " + lista[2])

// No podemos re-declarar una lista cuando está como const
// lista = [] <- Esto nos da un error
lista.splice(2, 1)
console.log(lista)