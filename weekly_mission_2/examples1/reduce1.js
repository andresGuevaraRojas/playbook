const numbers = [1, 2, 3, 4, 5]
const result_of_reduce = numbers.reduce((acc, element) => acc + element, 0)
console.log("Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)