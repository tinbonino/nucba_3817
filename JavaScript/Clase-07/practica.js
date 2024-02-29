let comida="milanesa a caballo";

//longitud

console.log("El largo de la variable es: "+comida.length+" caracteres");

console.log("###########################")
//reemplazar caballo por pony

console.log(comida.replace("caballo","pony"));

console.log("###########################")
// todo en mayusculas y minusculas

console.log(comida.toUpperCase());
console.log(comida.toLowerCase());

// Preguntar si contiene la palabra hamburguesa
console.log("###########################")

console.log(comida.includes("hamburguesa")?"Incluye la palabra":"No la incluye");

// Cual es la primer letra de la variable

console.log("La primer letra es: "+comida.charAt(0));

console.log("###########################")

// concatenar dos platos

let otraComida="papas fritas";

const menuCompleto=comida.concat(" con ", otraComida,"  🍟");
console.log(menuCompleto)

console.log("###########################")
// extraer una parte del string

console.log(comida.slice(0,8));
console.log(comida)

console.log("#############JUAN##########")
// quitar espacios al principio y al final

let comidaConEspacios="       pan       ";
console.log(comidaConEspacios);
console.log(comidaConEspacios.trim());
