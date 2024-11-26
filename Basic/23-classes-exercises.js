/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Crea una clase que reciba dos propiedades

class Console {
    constructor (name, bits) {
        this.name = name
        this.bits = bits
    }
    static playGame() {
        console.log(`La consola ejecuta un juego`)
    }
}

let console1 = new Console("Super Nintendo", 16)
console.log(console1)

// 2. Añade un método a la clase que utilice las propiedades

class Persona {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    walk() {
        console.log(`${this.name} de ${this.age} años de edad camina`)
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función

let persona1 = new Persona("Carlos", 13);
console.log(persona1.name)
console.log(persona1.age)
persona1.walk()

// 4. Añade un método estático a la primera clase



// 5. Haz uso del método estático

Console.playGame();

// 6. Crea una clase que haga uso de herencia

class Robot extends Persona {
    constructor(name, age, type) {
        super(name)
        super(age)
        this.type = type
    }

    walk() {
        console.log("The robot walk slowly");
    }
}

// 7. Crea una clase que haga uso de getters y setters

class Car {
    #name
    #year
    #color
    constructor(name, year, color) {
        this.#name = name
        this.#year = year
        this.#color = color
    }

    get name() {
        return this.#name
    }

    set name(name) {
        this.#name = name
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

const car1 = new Car("Polo", 2020, "Red");
console.log(car1.name);
car1.name = "Golf";
console.log(car1.name);

// 10. Sobrescribe un método de una clase que utilice herencia 