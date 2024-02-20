// function sumar(num1,num2) {


//     let resultado=num1+num2;
//     // alert("el resultado de la suma es: "+resultado)
//     console.log(resultado)
// }

// sumar(5,25);
// sumar(48,5);
// sumar(885,15);
// sumar(15,29);
// sumar(99,44);

// // function tradicional

// function saludar(nombre){
//     return "Hola! "+nombre;
// }


// let mensajeSaludo=saludar("Pedro");
// console.log(mensajeSaludo);

// // arrow function

// const despedir = (nombre)=>  "Adios "+nombre


// let mensajeDespedida=despedir("Pedro");
// console.log(mensajeDespedida)


// function recursiva

// function factorial(n){        // n=5
//     if(n<=1) return 1;  
//     return n*factorial(n-1)  //5*4*3*2*1
// }

// let resultado=factorial(6);

// console.log(resultado)

//callback

const alertHola = (nombre)=> {
    return alert("Hola! "+nombre)
}
const consoleHola = (nombre)=> {
    return console.log("Hola! "+nombre)
}

const procesarEntrada =(callback) => {
    const nombre = prompt("Por favor ingrese su nombre");
    callback(nombre);
}

procesarEntrada(consoleHola) // podria cambiar el argumento por alertHola
