/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales

const zoo = ["cat", "dog", "lion", "tiger", "bird"];
console.log(zoo);

// 2. Añade dos más. Uno al principio y otro al final

zoo.push("girafe");
zoo.unshift("mouse");
console.log(zoo);

// 3. Elimina el que se encuentra en tercera posición

zoo.splice(2, 1);
console.log(zoo)

// 4. Crea un set que almacene cinco libros

const myBooks = new Set(["Book1", "Book2", "Book3", "Book4", "Book5"]);
console.log(myBooks)

// 5. Añade dos más. Uno de ellos repetido

myBooks.add("Book6");
myBooks.add("Book6");
console.log(myBooks);

// 6. Elimina uno concreto a tu elección

myBooks.delete("Book3");
console.log(myBooks);

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

 if (myMap.has(5)) {
    console.log(myMap.get(5));
 }

// 9. Añade al mapa una clave con un array que almacene los meses de verano

myMap.set("meses de verano", ["Junio", "Julio", "Agosto"]);
console.log(myMap.get("meses de verano"));

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

const myArray3 = [];
const mySet2 = new Set(myArray3);
myMap.set("nuevo array", mySet2);
console.log(myMap);