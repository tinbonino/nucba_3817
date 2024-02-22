// variables var, let, const

// let dni=787878788;
// console.log(dni);

//  dni=1815456;

// console.log(dni)

// //var puede ser declarada y reasignada tantas veces quiera.
// //let puede ser declarada solo una vez y reasignada tantas veces quiera.
// //const puede ser declarada solo una vez y no puede ser reasignada.

// //array

// let nombres=["juan",2,5.8,true];

// console.log(nombres)

// nombres[3]="Sebastian";

// console.log(nombres)

//OPERADORES

//asignación

// let nombre;

// nombre="Nahuel";

// let contador=0;
// console.log("contador: "+contador);
// contador+=1;            //es lo mismo
// contador=contador+1;    //es lo mismo
// console.log("contador: "+contador);

// // Aritméticos
// let num1=14;
// let num2=234;
// console.log(num1+num2); // Suma
// console.log(num1-num2); // Resta
// console.log(num1*num2); // Multiplicación
// console.log(num1/num2); // División
// console.log(num1%num2); // Resto

// contador++;
// console.log("contador: "+contador);
// contador--;
// console.log("contador: "+contador);

// Comparación y condicionales


// funcion 1: Ingresar Nota
// funcion 2: Calcular promedio
// funcion 3: Definir si esta aprobado


function  ingresarNotas(){

    
    let nota;
    alert("Bienvenido a Notify - Ingrese 99 para terminar")
    do{
        nota=parseFloat(prompt("Ingrese la nota N° "+cantidad));
        if(nota!=99){
            console.log("Nota "+cantidad+" :"+nota);
            cantidad++;
            suma+=nota;  
        }
    } while(nota!=99)

}


function promedio(){

    let promedio=suma/cantidad;
    console.log("El Promedio es de: "+promedio);
    return promedio;
}

function aprobado(promedio){

    
    if(promedio>=7) {
        console.log("Felicitaciones aprobaste!");
    } else if (promedio <1) {
        console.log("Revisa lo que ingresaste, debe haber un error");
    } else {
        console.log("No alcanzaste la calificación necesaria, tenes otra oportunidad para seguir aprendiendo");
    }
    
}
//
let cantidad=1;
let suma=0;

ingresarNotas();
let promedioFinal=promedio();

aprobado(promedioFinal);