/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Concatena dos cadenas de texto

const myName = "Jose " + "Sánchez";

console.log(myName);

const firstName = "Jose";
const lastName =  "Sánchez";

const completeName = firstName +  " " + lastName;

console.log(completeName);

// 2. Muestra la longitud de una cadena de texto

console.log(completeName.length);

// 3. Muestra el primer y último carácter de un string

console.log(completeName[0])
console.log(completeName[11])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(completeName.toUpperCase());
console.log(completeName.toLowerCase());


// 5. Crea una cadena de texto en varias líneas

const manyLinesString = `Hola, esta es
                        una cadena en
                        varias líneas`;

console.log(manyLinesString);

// 6. Interpola el valor de una variable en un string

const greeting = `Hola, mi nombre es: ${completeName}`;

console.log(greeting);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(greeting.replace(/\s+/g, "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(greeting.includes("Jose"));

// 9. Comprueba si dos strings son iguales

console.log(myName === completeName);

// 10. Comprueba si dos strings tienen la misma longitud

console.log(myName.length === completeName.length);