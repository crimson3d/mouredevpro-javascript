/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName;

if (myName === "Jose") {
    console.log("José Antonio Sánchez Fuentes");
};

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "Jose";
let password = 12345;

if ((user === "Jose") && (password === 12345)) {
    console.log("Correct user");
};

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 0;

if (number > 0) {
    console.log("El número es positivo");
} else if (number < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es 0");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 15;
let minAge = 18;

if (age >= 18) {
    console.log("Puede votar");
} else {
    console.log(`No puede votar, le falta ${minAge - age} años para poder hacerlo`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let adultoOMenor = (age >= 18) ? "Adulto" : "Menor";
console.log(adultoOMenor)


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Noviembre";

if (mes == "Marzo" || mes == "Abril" || mes == "Mayo") {
    console.log("Estamos en primavera");
} else if (mes == "Junio" || mes == "Julio" || mes == "Agosto") {
    console.log("Estamos en verano");
} else if (mes == "Septiembre" || mes == "Octubre" || mes == "Noviembre") {
    console.log("Estamos en otoño");
} else if (mes == "Diciembre" || mes == "Enero" || mes == "Febrero") {
    console.log("Estamos en invierno");
} else {
    console.log("Mes incorrecto");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == "Febrero") {
    console.log("El mes tiene 28 o 29 días");
} else if (mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre" || mes == "Diciembre") {
    console.log("El mes tiene 31 días");
} else if (mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre") {
    console.log("El mes tiene 30 días")
} else {
    console.log("Mes incorrecto");
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let languaje = "Italiano";

switch (languaje) {
    case "Español":
        console.log("Hola");
        break;
    case "Ingles":
        console.log("Hello");
        break;
    case "Frances":
        console.log("Bonjour");
        break;
    case "Italiano":
        console.log("Ciao");
        break;
    default:
        console.log("Lengua no soportada");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Estamos en primavera");
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Estamos en verano");
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("Estamos en otoño");
        break;
    case "Diciembre":
    case "Enero":
    case "Febrero":
        console.log("Estamos en invierno");
        break;
    default:
        console.log("Mes incorrecto");
};

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
    case "Febrero":
        console.log("El mes tiene 28 0 29 días");
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        console.log("El mes tiene 31 días");
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        console.log("El mes tiene 30 días");
        break;
    default:
        console.log("Mes incorrecto");
}