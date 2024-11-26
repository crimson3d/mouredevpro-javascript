/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Escribe un comentario en una línea

// esto es un comentario en una línea

// 2. Escribe un comentario en varias líneas

/* esto es
un comentario
en varias
lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myName = "Jose";
let myAge = 41;
let isGerman = true;
let myUndefined = undefined;
let myNull = null;
let mySymbol = Symbol("prueba simbol");
let myBigInt = BigInt(782349382948239429384897238491849823947239478);

// 4. Imprime por consola el valor de todas las variables

console.log(myName);
console.log(myAge);
console.log(isGerman);
console.log(myUndefined);
console.log(myNull);
console.log(mySymbol);
console.log(myBigInt);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isGerman);
console.log(typeof myUndefined);
console.log(typeof myNull);
console.log(typeof mySymbol);
console.log(typeof myBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myName = "Jose Antonio";
myAge = 42;
isGerman = false;
myUndefined = undefined;
myNull = null;
mySymbol = "pruebita";
myBigInt = 3892746873264732746982379470239740972198036491862983746097;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myName = 42;
myAge = "Jose Antonio";
isGerman = "Si";
myUndefined = 54;
myNull = 52;
mySymbol = null;
myBigInt = undefined;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myName2 = "Joe";
const myAge2 = 40;
const isGerman2 = true;
const myUndefined2 = undefined;
const myNull2 = null;
const mySymbol2 = Symbol("prueba2");
const myBigInt2 = BigInt(432876487237409318904270186242343214124234234);

// 9. A continuación, modifica los valores de las constantes

// myName2 = "Kevin";
// myAge2 = 39;
// isGerman2 = false;
// myUndefined2 = 2;
//myNull2 = 3;
// mySymbol2 = "prueba3"
// myBigInt2 = 29384709382094818967489126903470912809380129739862719386129837;

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// comentadas todas las líneas del ejercicio 9 (NO SE PUEDEN REASIGNAR CONST!!)