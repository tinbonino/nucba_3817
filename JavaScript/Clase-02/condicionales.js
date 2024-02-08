//Solo pueden acceder a la discoteca mayores de 18 años.


// let edad=parseInt(prompt("Ingrese su edad"));

// if(edad>=18){
//     console.log("Bienvenido usted puede entrar")
// }
// else {
//     console.log("Usted es muy pequeño, no puede ingresar")
// }

// console.log("Gracias por acercarse a nuestro local")


// Solo ingresan gratis aquellas personas mayores de 25 y menores de 60 años.

// let edad=prompt("Ingrese su edad");

// if(edad>=25 && edad<=50){
//     console.log("Usted ingresa gratis")
// } else {
//     console.log("Usted debe pagar entrada")
// }



// Si es menor de 18 no ingresa, si es mayor a 60 llamamos a la policia. Sino ingresa sin problemas


// if(edad <18){  // buscando menores de 18 años
//     console.log("Sos muy chico anda a tu casa");
// } else if (edad>=60) { // buscando mayores o iguales a 60 años
//     console.log("La policia ya está en camino");
// } else {  // todos los demas
//     console.log("Adelante, sea bienvenido");
// }


/////// switch////////

// let fruta=prompt("Ingrese su fruta favorita").toLowerCase(); //ToUpperCase

// console.log(fruta);
// switch(fruta){
//     case "banana":
//         console.log("La banana es amarilla")
//         break;
//     case "manzana":
//         console.log("La manzana puede ser roja o verde");
//         break;
//     case "frutilla":
//         console.log("La frutilla es roja");
//         break;
//     default: 
//         console.log("No trabajamos esa fruta");
// }


/////////Operador Ternario///////////


// Condición: Si hay sol voy a la playa


let clima="nube";

if(clima=="sol"){
    console.log("voy a la playa")
} else {
    console.log("Me quedo en mi casa");
}



clima=="sol"?console.log("voy a la playa"):console.log("me quedo en mi casa");

//condición ? valor verdadero             : valor falso    

