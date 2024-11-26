/*
Clase 7 en vídeo | 21/08/2024
Console y módulos
https://www.youtube.com/live/PAnxhBE5kIE?si=V0F_NsKO9lmhhatu&t=555
*/

// 1. Crea un función que utilice error correctamente

function sumTwo(a, b) {
    if (!(typeof a === "number") || !(typeof b === "number")){
        console.error("Solo funcionan números")
    }
    return a + b;
}

sumTwo(3, "jaja")

// 2. Crea una función que utilice warn correctamente

function sumTwo2(a, b) {
    console.warn("Solo funcionarán números")
    if (!(typeof a === "number") || !(typeof b === "number")){
        console.error("Solo funcionan números")
    }
    return a + b;
}

sumTwo2(3, 3)

// 3. Crea una función que utilice info correctamente

function sumTwo3(a, b) {
    console.warn("Solo funcionarán números")
    if (!(typeof a === "number") || !(typeof b === "number")){
        console.error("Solo funcionan números")
    }
    console.info("Si todo sale bien la suma se realizará")
    return a + b;
}

sumTwo3(3, 3)

// 4. Utiliza table

const consoles = [
    {
        name: "Super Nintendo",
        year: 1982,
        country: "Japan"
    },
    {
        name: "Mega Drive",
        year: 1980,
        country: "EEUU"
    }
]

console.table(consoles)

// 5. Utiliza group

console.group("Developer: ")
console.log("Jose")
console.log("Javascript")
console.log("Neewie")
console.groupEnd()

// 6. Utiliza time

console.time("Tiempo de ejecución")

for (let i = 0; i < 20000; i++) {

}

console.timeEnd("Tiempo de ejecución")

// 7. Valida con assert si un número es positivo

let number = -5;

console.assert(number > 0, "El número no es positivo");

// 8. Utiliza count

console.count("wow")
console.count("wow")
console.count("wow")

// 9. Utiliza trace

function doingThings() {
    doingThings2()
}

function doingThings2() {
    console.trace("Hasta aquí")
}

doingThings();

// 10. Utiliza clear

console.clear()
