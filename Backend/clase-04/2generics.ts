// generics simple

// function obtenerValor<T>(valor:T): T {
//     return valor;
// }

// function obtenerConAny(valor:any):any{
//     return valor;
// }

// const numero:number =99;
// const texto:string ="Lalalal";

// const numeroConT=obtenerValor(numero);
// const stringConT=obtenerValor(texto);

// console.log(numeroConT)
// console.log(stringConT)

// const numeroConAny=obtenerConAny(numero);
// const stringConAny=obtenerConAny(texto);

// console.log(stringConAny)

function obtenerPrimerElemento<T>(array:T[]): T | undefined {
    if(array.length>0){
        return array[0]
    }
    return undefined
}

const numeros : number[] =[99,2,5,9];
const primerNumero :  number | undefined = obtenerPrimerElemento(numeros);
console.log(primerNumero);

const palabras :string[] = ["Zule","Nahuel","Jonnhy"];

const primeraPalabra: string | undefined = obtenerPrimerElemento(palabras);
console.log(primeraPalabra);