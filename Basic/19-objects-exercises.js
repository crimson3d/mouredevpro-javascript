/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Crea un objeto con 3 propiedades

let car = {
    name: "Volkswagen Scirocco",
    color: "White",
    engine: "22cv",
};

// 2. Accede y muestra su valor

console.log(car.name);
console.log(car.color);
console.log(car.engine);

// 3. Agrega una nueva propiedad

car.doors = 4;
console.log(car);

// 4. Elimina una de las 3 primeras propiedades

delete car.engine;
console.log(car);

// 5. Agrega una función e invócala

car.drive = function() {
    console.log(`El coche ${this.name} anda`)
}

car.drive()

// 6. Itera las propiedades del objeto

console.log(car)

for (let key in car) {
    if (typeof car[key] !== "function") {
        console.log(key + ": " + car[key])
    }
}

// 7. Crea un objeto anidado

car.origin = {
    country: "Germany",
    city: "Colonia"
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(car.origin.country);
console.log(car.origin.city);

// 9. Comprueba si los dos objetos creados son iguales

const person = {
    name: "Jose",
    age: 42,
    city: "El Ejido"
}

const person2 = {
    name: "Jose",
    age: 42,
    city: "El Ejido"
}

console.log(person === person2) 
// False porque comparamos referencias en memoria

const compareObjets = (object1, object2) => {
    let propierties1 = Object.entries(object1)
    let propierties2 = Object.entries(object2)

    console.log(propierties1)
    console.log(propierties2)

    if (propierties1.length !== propierties2.length) {
        return "Los objetos no son iguales";
    }

    for (let i = 0; i < propierties1.length; i++) {
        for(let j = 0; j < propierties1[i].length; j++) {
            if  (propierties1[i][j] !== propierties2[i][j]) {
                 return "Los objetos no son iguales";
            }
        }
    }

    return "Los objetos son iguales";
    return true;
};

console.log(compareObjets(person, person2));

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(car.name === car.origin.city);