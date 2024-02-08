// var edad=15;
// var nombre="Fernando";
// var profesion="Programador";
// var edadDelPadre=56;

// console.log("////////////////////////////////");
// console.log("Bienvenido "+nombre);
// console.log("Su edad es de: "+edad);
// console.log("Profesión: "+profesion);
// console.log("No me interesa que la edad de su padre sea "+edadDelPadre);
// console.log("////////////////////////////////");


//Mini Calculadora no científica

var numero1=parseInt(prompt("Ingrese número")); //siempre devuelve un string
var numero2=parseInt(prompt("Ingrese otro número"));


var suma=numero1+numero2;
var resta=numero1-numero2;
var multiplicacion=numero1*numero2;
var division=numero1/numero2;

console.log("La suma de "+numero1 +" y "+numero2+" es: "+suma)
console.log("La resta de "+numero1 +" y "+numero2+" es: "+resta)
console.log("La multiplicación de "+numero1 +" y "+numero2+" es: "+multiplicacion)
console.log("La división de "+numero1 +" y "+numero2+" es: "+division)

alert("El resultado de la suma es: "+suma);