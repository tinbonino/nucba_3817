let helados=["banana split", "pistachio", "cereza","chocolate"];
let heladosProhibidos=["crema del cielo", "menta granizada","super gridito"];

//concat - toString - indexof - length

console.log("La longitud del array es de: "+helados.length+" elementos");


console.log("el helado mas feo está en la posición: "+heladosProhibidos.indexOf("super gridito"))

console.log(helados.toString());

console.log(helados.concat(heladosProhibidos)); //solo lo muestra concatenado

console.log(helados) // sigue igual que antes

let nuevosHelados=helados.concat(heladosProhibidos);

console.log(nuevosHelados);

// push - unshift - pop

helados.push("chocolate con almendras");

console.log(helados);

helados.unshift("brownie");
console.log(helados);

let heladoQueLeGustaSoloADante=heladosProhibidos.pop();  // quitamos el peor helado
console.log(heladosProhibidos);
console.log(heladoQueLeGustaSoloADante) // pop() retorna lo que  elimina;


let mejorHelado=helados.shift();
console.log(mejorHelado);
console.log(helados);

console.log("Es un "+typeof(mejorHelado));

//join - reverse - slice

console.log(helados.join(" - "));
console.log(helados.join(" # "));
console.log(helados.join(" "));

console.log(heladosProhibidos.reverse());

heladosLocos=helados.slice(1,4);
console.log(helados);
console.log(heladosLocos);


