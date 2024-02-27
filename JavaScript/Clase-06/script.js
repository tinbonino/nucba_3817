// const producto={
//     nombre:"Kingston Fury Beast DDR4 16 GB",
//     valoracion:5,
//     precio:59128,
//     caracteristicas:["Capacidad de 16 GB",
//                     "Velocidad de 3200 MHz",
//                     "DDR4 SDRAM",
//                     "Compatible con AMD Ryzen e intel"
//                 ]
// }

// console.log("Nombre: "+producto.nombre);
// console.log("#############################")
// console.log("#  Valoracion: "+producto.valoracion+" estrellas  #");
// console.log("#############################")
// console.log("Precio: $"+producto.precio);
// console.log("#############################")
// for(let i=0;i<producto.caracteristicas.length;i++) {
//     console.log(producto.caracteristicas[i]);
   
// }

// Desestructuración

//forma tradicional
let nombresEstudiantes = ["Jonnhy","Dante","Juan###","Gastón","Hector"];

// let nombre1=nombresEstudiantes[0];
// console.log(nombre1);
// let nombre2=nombresEstudiantes[1];
// console.log(nombre2);
// let nombre3=nombresEstudiantes[2];
// console.log(nombre3);
// let nombre4=nombresEstudiantes[3];
// console.log(nombre4);
// let nombre5=nombresEstudiantes[4];
// console.log(nombre5);

// desestructurando arrays

let [nombre1,nombre2,nombre3,nombre4,nombre5]=nombresEstudiantes;

console.log(nombre1);
console.log(nombre2);
console.log(nombre3);
console.log(nombre4);
console.log(nombre5);

// Salteando

let [nombre11,,nombre13,,]=nombresEstudiantes;

console.log(nombre11);
console.log(nombre13);

console.log("######################")
// objetos

let estudiante = {
    nombreEstudiante:"Juan",
    caracterFavorito:"#",
    edad:25
}

let {edad,nombreEstudiante}=estudiante;

console.log(nombreEstudiante);
console.log(edad)