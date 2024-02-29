let frase="Tengo calor";

console.log(frase.length);

console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(frase.toUpperCase().replace("TENGO","HACE"))
//                 primero paso - Busco "TENGO" y lo
//                a mnayusculas      reemplazo

console.log(frase.replaceAll("o","e"))

//indexof trim split y typeof

console.log(frase.indexOf("calor"));

let fraseParaTrim="     No se escribir bien   ";
console.log(fraseParaTrim);
console.log(fraseParaTrim.trim());

console.log(fraseParaTrim.replaceAll(" ","")) // elimino todos los espacios

let fraseSpliteada=fraseParaTrim.trim().split(" ");
console.log(fraseSpliteada);

let numerito=23;
let stringcito="hola";
let booleancito=true;

console.log("Esa variable es un "+typeof(numerito));
console.log("Esa variable es un "+typeof(stringcito));
console.log("Esa variable es un "+typeof(booleancito));

// repeat charAt y concat

console.log(fraseParaTrim.trim().repeat(23));

console.log(stringcito.charAt(2));

console.log(stringcito.concat(fraseParaTrim.trim()));

// startsWith endsWith include

console.log(stringcito.startsWith("h")); //true
console.log(stringcito.startsWith("hol")); //true
console.log(stringcito.startsWith("x")); //false

console.log(stringcito.endsWith("a")); // true
console.log(stringcito.endsWith("ola")); //true
console.log(stringcito.endsWith("bola")); //false
console.log(stringcito.endsWith("x")); //false

console.log(stringcito.includes("o")); //true
console.log(stringcito.includes("ho")); //true
console.log(stringcito.includes("f")); // false

//slice

let stringSlice="Tenemos hambre";
let nuevoString=stringSlice.slice(8,14);
console.log(stringSlice);
console.log(nuevoString);
console.log(stringSlice);