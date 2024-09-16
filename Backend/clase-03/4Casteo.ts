// Casteo mediante el operador as

let mensaje: any="Hola! como andan";
let longitud:number = (mensaje as string).length;
console.log(longitud);


//Casteo mediante el operador <tipo>

let valor:any = "100";

let numero: number = <number>valor;

console.log(numero);