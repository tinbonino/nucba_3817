// length concat startswith endswith split slice replace replaceAll toUpperCase toLowerCase charAt trim

let ciudad="Honolulu";

let estado="Hawaii";


console.log(ciudad.toUpperCase());
console.log(ciudad.toLowerCase());
console.log("La longitud de la ciudad es: "+ciudad.length+" caracteres");
console.log(ciudad.concat(", ",estado));
console.log(ciudad.slice(4,8));



//template strings


console.log(`Hola vengo a concatenar sin el + en la ciudad ${ciudad} que corresponde al estado de ${estado}`);

console.log("Hola vengo a concatenar usando el + en la ciudad de: "+ciudad+" que corresponde al estado de "+estado);


console.log(ciudad.replace("u","e"))
console.log(ciudad.replaceAll("u","🛻"))

// alert("Mira que locos mis emojis: 🛻🛻🛻🛻")

let comida="eMpAnAd         A";
console.log(comida)
let comidaNormalizada=comida.trim().replaceAll(" ","").toLowerCase();



console.log(comidaNormalizada);




let palabraArreglada=comidaNormalizada.charAt(0).toUpperCase()+comidaNormalizada.slice(1);
console.log(palabraArreglada)


