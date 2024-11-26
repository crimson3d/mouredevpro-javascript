/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Crea una variable para cada operación aritmética

 let sum = 5 + 4;
 let rest = 50 - 29;
 let mult = 4 * 3;
 let div = 8 / 2;
 let mod = 10 % 2;
 let exp = 30 ** 2;
 let inc = 40;
 inc++;
 let dec = 40;
 dec--;


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let number = 5;
number += sum;
number -= rest;
number *= div;
number /= mult;
number %= exp;
number ** inc;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(sum === sum);
console.log(sum == sum);
console.log(6 > 5);
console.log("5" !== 5);
console.log("9" <= 10);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(sum == rest);
console.log("6" === 6);
console.log(17 > 20);
console.log(sum != sum);
console.log(rest <= mult);

// 5. Utiliza el operador lógico and

console.log(5 > 4 && sum < rest);

// 6. Utiliza el operador lógico or

console.log(5 > 4 || sum > rest);

// 7. Combina ambos operadores lógicos

console.log(5 > 6 && sum > rest || 7 <= 8 )

// 8. Añade alguna negación

console.log(!(sum < rest))

// 9. Utiliza el operador ternario

const isBoiling = false;

isBoiling ? console.log("Yes, is too hot") : console.log("No, it´s cold")

// 10. Combina operadores aritméticos, de comparáción y lógicas

let result = (sum + rest) * div >= mult / sum && mult * mult;
console.log(result);