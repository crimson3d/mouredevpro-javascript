/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(a = 0, b = 0) {
    return a + b;
};

console.log(sum(5, 6))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function findMax(numbers) {
   let max = numbers[0]
   for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
   }
   return max
}

console.log(findMax([5, 3, 6, 29, 2, 98]))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function numberOfVocals(string) {
    const vocals = "aeiou";
    let totalVocals = 0;
    for (let i = 0; i < string.length; i++) {
        if (vocals.includes(string[i].toLowerCase())) {
            totalVocals++
        }
    }
    return totalVocals;
}

console.log(numberOfVocals("Hola esto es una prueba"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

const convertStringsToUpperCase = (array) => {
    let newUpperArray = [];

    array.forEach(value => {
        newUpperArray.push(value.toUpperCase());
    })

    return newUpperArray;
}

console.log(convertStringsToUpperCase(["hola", "prueba"]))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

const primeOrNot = (number = 0) => {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primeOrNot(7))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

const mergeCommonElements = (array1, array2) => {
    const commonElements = [];

    array1.forEach(element => {
        if (array2.includes(element)) {
            commonElements.push(element);
        }
    });

    return commonElements;
}

console.log(mergeCommonElements(["hola", "casa", 3, "prueba"], ["prueba", "casa", 3]))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumParNumbers(numbers) {
    let total = 0;
    numbers.forEach(value => {
        if (value % 2 === 0) {
            total += value;
        }
    })
    return total;
}

console.log(sumParNumbers([2, 4, 5, 6, 2]))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function numbersArray(numbers) {
    const newArray = [];
    numbers.forEach(value => {
        newArray.push(value * 2);
    })
    return newArray;
}

console.log(numbersArray([3, 4, 5, 6]))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertString(string) {
    let invertedString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        invertedString += (string[i]);
    }

    return invertedString;
}

console.log(invertString("arenera"))

// 10. Crea una función que calcule el factorial de un número dado

const factorialNumber = (number) => {
    if (number < 0) return -1;
    if (number === 0 || number === 1) return 1;

    let result = 1;
    for (let i = 2; i <= number; i++) {
        result += i;
    }
    
    return result;
}