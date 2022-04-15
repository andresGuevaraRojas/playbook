const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)
console.log("Ejemplo: Uso de map para convertir las tres pimeras letras de los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)