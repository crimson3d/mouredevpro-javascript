/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Captura una excepción utilizando try-catch

let myRandomObject;

try {
    console.log(myRandomObject.randomcosa)
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

// 2. Captura una excepción utilizando try-catch y finally

let myRandomObject2;

try {
    console.log(myRandomObject2.randomcosa)
} catch (error) {
    console.log("Se ha producido un error:", error.message)
} finally {
    console.log("Finally se ejecuta siempre!")
}

// 4. Crea una excepción personalizada

class theyAreTwoNumbersError extends Error {
    constructor(message, string1, string2) {
        super(message)
        this.string1 = string1
        this.string2 = string2
    }
    printError() {
        console.log(`Hay algún número: ${this.string1} y ${this.string2}`)
    }
}

// 3. Lanza una excepción genérica

function concatenateTwoStrings(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        throw new theyAreTwoNumbersError("Esta función solo concatena strings", string1, string2);
    }
    return string1 + " " + string2;
}

try {
    console.log(concatenateTwoStrings("Hola", "Mundo"))
    console.log(concatenateTwoStrings("Hola", 3))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}




// 5. Lanza una excepción personalizada

try {
    console.log(concatenateTwoStrings(5, 6));
} catch (error) {
    console.log("Error personalizado:", error.message)
    error.printError()
}

// 6. Lanza varias excepciones según una lógica definida

// Función para sumar dos números únicamente si son pares.
function addTwoPairs(a, b) {
    if ((typeof a !== "number") || (typeof b !== "number")) {
        throw new TypeError("Esta función solo acepta números pares")
    }
    if (!(a % 2 === 0)) {
        throw new Error("El primer número no es par")
    }
    if (!(b % 2 === 0)) {
        throw new Error("El segundo número no es par")
    }
    if (!(a % 2 === 0) && !(b % 2 === 0)) {
        throw new Error("Ninguno de los dos números es par")
    }
    return a + b;
}

// 7. Captura varias excepciones en un mismo try-catch

try {
    console.log(addTwoPairs(3, 4));
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

let values = ["456.98", "abc", "98.2", "23", "xyu"]

for (let i = 0; i < values.length; i++) {
    try {
        let floatValue = parseFloat(values[i])
        if (isNaN(floatValue)) {
            throw new Error(`El valor ${values[i]} no se puede transformar a float`)
        }
        console.log(`El valor ${values[i]} pasadoa a float es ${floatValue}`)
    } catch (error) {
        console.log(`Error al convertir ${values[i]}`, error.message)
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

class PropertyNotFoundError extends Error {
    constructor(property) {
        super(`La propiedad '${property}' no se encontró en el objeto`);
        this.property = property;
    }
}

function verifyObjectProperty(obj, property) {
    if (!obj.hasOwnProperty(property)) {
        throw new PropertyNotFoundError(property);
    }
    return `La propiedad ${property} existe en el objeto`
}

const person = {
    name: "Jose",
    age: 42
}

try {
    console.log(verifyObjectProperty(person, "age"));
    console.log(verifyObjectProperty(person, "surname"))
} catch (error) {
    if (error instanceof PropertyNotFoundError) {
        console.log("Error personalizado:", error.message)
    } else {
        console.log("Se ha producido un error", error.message)
    }
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

const retry = () => {
    let attempts = 0;
    const retrys = 10;
    let success = false;

    while (attempts < retrys && !success ) {
        try {
            operation();
            success = true;
        } catch (error) {
            attempts++
            console.log(`Intento ${attempts} fallido`)
        }
    }

    if (!success) {
        console.log("Se ha alcanzado el número máximo de intentos");
    }
}
