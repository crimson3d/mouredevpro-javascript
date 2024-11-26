/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

// Resuelto con WHILE

let count = 1;

while (count <= 20) {
    console.log(count);
    count++;
};

// Resuelto con FOR

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

// Resuelto con WHILE

let start = 1;
let sum = 0;

while (start <= 100) {
    sum += start;
    start++;
}

console.log(sum)

// Resuelto con FOR

let total = 0;

for (let i = 1; i <= 100; i++) {
    total += i;
}

console.log(total);


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

// Resuelto con FOR

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Resuelto con DO WHILE

let i2 = 1;

do {
    if (i2 % 2 === 0) {
        console.log(i2);
    };
    i2++;
} while (i2 <= 50);

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

// Resuelto con FOR

let alumns = ["Jose", "May", "Lara", "Mar"]

for (let i = 0; i < alumns.length; i++) {
    console.log(alumns[i])
}

// Resuelto con FOR OF

for (let value of alumns) {
    console.log(value);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

// Resuelto con FOR OF

const lotOfText = "Hola, esta cadena de texto tiene muchas vocales, concretamente:"
let totalVocals = 0;

for (let value of lotOfText.toLowerCase()) {
    if (value === "a" || value === "e" || value === "i" || value === "o" || value === "u" || value === "á" || value === "é" || value === "í" || value === "ó" || value === "ú") {
        totalVocals++
    }
}

console.log(`${lotOfText} ${totalVocals}`);

// Resuelto con FOR OF y simplificando la condición con un SET

const lotOfText2 = "Hola, esta cadena de texto tiene muchas vocales, de verdad que sí, concretamente:";
let totalVocals2 = 0;
const vocals = new Set(["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"])


for (let value of lotOfText2.toLowerCase()) {
    if (vocals.has(value)) {
        totalVocals2++
    }
}

console.log(`${lotOfText2} ${totalVocals2}`);


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// Resuelto con un FOR

const randomNumbers = [12, 34, 45, 67, 2, 4];
let product = 1;

for (let value of randomNumbers) {
    product *= value;
}

console.log(product);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let multiply = 5;

for (let i = 1; i <=10; i++) {
    console.log(`${i} * ${multiply} = ${i * multiply}`)
}

// 8. Usa un bucle para invertir una cadena de texto

const textToInvert = "Esto es una prueba";
let invertedText = "";

for (let i = textToInvert.length - 1; i >= 0; i--) {
    invertedText += textToInvert[i];
}

console.log(invertedText);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci


const fiboSecuence = [0, 1];

for (let i = 2; i < 10; i++) {
    fiboSecuence[i] = fiboSecuence[i - 1] + fiboSecuence[i - 2];
};

console.log(fiboSecuence);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

const randomNumbers2 = [20, 3, 10, 50, 67, 9, 11];
const biggerThanTen = [];

for (let value of randomNumbers2) {
    if (value > 10) {
        biggerThanTen.push(value);
    }
}

console.log(biggerThanTen);