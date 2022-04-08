//Creacion de objetos y asignacion de propiedades
let mycar = new Object();
mycar.make = 'Ford';
mycar.model = 'Mustang';
mycar.year = '1969';

console.log(mycar); //Mostramos por consola el objeto carro

//Declaración de un objeto con variables locales y públicas

const myModule = (()=>{
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto";
    const privateBar = [1,2,3,4];
    const baz = "Soy un valor que va a ser expuesto";
     
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
        publicBaz:baz
    };

    return exported;
})()

console.log(myModule);