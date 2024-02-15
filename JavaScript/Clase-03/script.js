// //for

// for(let i=1;i<=10;i++){
//     // console.log("El valor actual de i es: "+i);
//     let nombre=prompt("Ingrese su nombre");
//     if (nombre=="pepe"){
//         console.log("pepe, vos estas acomodado");
//         continue;
//     }
//     console.log("Usted es el estudiante N° "+i+" Adelante, ya está inscripto")
// }

// console.log("Fin de las inscripciones")

//arrays

// let alumno1="hector";
// let alumno2="jonnhy";
// let alumno3="lucre";


let alumnos=["hector","jonnhy","lucre","gabriel","alan","Pedro"];
// // posiciones    0        1       2         3       4
// // console.log(alumnos);
// // console.log(alumnos[0]);
// // console.log(alumnos[1]);
// // console.log(alumnos[2]);
// // console.log(alumnos[3]);
// // console.log(alumnos[4]);

// for(let i=0;i<alumnos.length;i++){
//     console.log(alumnos[i])
// }

//for of

for (let alumno of alumnos){
    console.log(alumno)
}

//while

// let ahorros= 0;
// let objetivo=5000;

// while(ahorros<objetivo){
//     // ahorros+=1000;
//     console.log("Ahorros actuales: "+ahorros)
// }

// console.log("Felicitaciones, lograste tu objetivo");