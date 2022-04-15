class Student {    
    constructor(name, age, subjects){
      this.name = name
      this.age = age
      this.subjects = subjects
      }
}
  
const carloStudent = new Student("Andres", 15, ["NodeJs", "Php"])
console.log("Instanciar un objeto con atributos")
console.log(carloStudent)