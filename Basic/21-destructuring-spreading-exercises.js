/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myArray = [1, 2, 3, 4];

let [element1, element2] = myArray;
console.log(element1)
console.log(element2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [element3, element4, element5, element6, element7 = 0] = myArray;
console.log(element6)
console.log(element7)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let game = {
    title: "Super Mario World",
    year: 1990,
    genre: "plataformas",
    platform: {
        name: "Super Nintendo",
        bits: 16,
        manufacturer: "Nintendo"
    }
};

let {genre, title} = game;
console.log(genre);
console.log(title);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {title: gameTitle, year: launch} = game;
console.log(gameTitle);
console.log(launch);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let {platform: {name: consoleSystem, bits} } = game;
console.log(consoleSystem);
console.log(bits);

// 6. Usa propagación para combinar dos arrays en uno nuevo

let oldSystems = ["Game&Watch", "Famicom", "Super Famicom", "Game Boy"];
let newSystems = ["Game Cube", "Wii", "Wii U", "Switch"];

let oldAndNews = [...oldSystems, ...newSystems];

console.log(oldAndNews);

// 7. Usa propagación para crear una copia de un array

let oldNintendo = [...oldSystems];

console.log(oldNintendo);

// 8. Usa propagación para combinar dos objetos en uno nuevo

let medium = {
    format: "cartridge",
    memory: 48,
    color: "gray"
}

let allData = {...game, ...medium};
console.log(allData);

// 9. Usa propagación para crear una copia de un objeto

let newMedium = {...allData};
console.log(newMedium);

// 10. Combina desestructuración y propagación

let {title: titleName, format, ...newCopy} = allData;
console.log(titleName);
console.log(format);
console.log(newCopy);