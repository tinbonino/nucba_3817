function imprimirId(id:number | string) {
    console.log("ID:",id)
}

imprimirId(500);
imprimirId("EFT454")

function obtenerResultado(): number | string {
    return Math.random() < 0.5 ? 10 : "Error";
}

let resultado:number | string = obtenerResultado();
console.log(resultado);
