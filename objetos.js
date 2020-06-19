/*
  Objetos
*/

const persona = {
  nombre: "Carlos",
  edad: 24,
  leGustaJavaScript: true,
  saludar: function () {
    console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años")
  }
}

// Acceder a los atributos del objeto
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.leGustaJavaScript)

persona.saludar()