function imprimirInfo(valor:string | number):void {
    if(typeof valor === "string"){
        console.log("El valor es un string: ",valor);
    } else if ( typeof valor ==="number"){
        console.log("El valor es un numero",valor);
    } else {
        console.log("El vlaor es de un tipo desconocido")
    }
}

imprimirInfo("Hola");
imprimirInfo(999);
// imprimirInfo(true) no lo acepta porque el argumento puede ser solo string o number