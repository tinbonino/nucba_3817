// Diferencia entre for, forEach y map

let cars=["ford","Hyundai","Merecedes","BMW"];

// EL for debe 

// - definir una variable de control e inicializarla
// - establecer una prueba lógica para definir su alcance
// - incrementar la variable de control

for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
}

// forEach

// - No define variable de control
// - No establece prueba lógica, automaticamente recorre todo el array
// - No debo incrementar ninguna variable

console.log("######################")
console.log("Veamos con el forEach()")
console.log("######################")

cars.forEach((car)=>{
    console.log(car)
})



//map

// - No define variable de control
// - No establece prueba lógica, automaticamente recorre todo el array
// - No debo incrementar ninguna variable
// - devuelve un array con el resultado

let autosColor=cars.map((car)=>{
    return car+" rojo";
})

console.log(autosColor)

// let cars=["ford","Hyundai","Merecedes","BMW"];

let autosCortos=cars.filter((auto)=>{
    return auto.length<5
})

console.log(autosCortos)

let numeritos=[6,5,15,25,5500];

let numerosAltos=numeritos.filter(numero=>numero>20)

console.log(numerosAltos)

//find

let numeroMuyAlto=numeritos.find(numero=>numero>20);

console.log(numeroMuyAlto);

//every
// todos deben cumplir la condicion
console.log(numeritos.every(numero=>numero>4));
console.log(numeritos.every(numero=>numero>500)); 

//some

//alguno debe cumplir la condicion
console.log(numeritos.some(numero=>numero>500));

