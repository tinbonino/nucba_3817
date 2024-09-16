interface Producto {
    id:number;
    nombre:string;
    precio:number;
    disponible:boolean;

    calcularDescuento(descuento:number):number; // Las interfaces se comportan como un conjunto de reglas. Puedo definir la firma de una funcion para luego desarrollarla en objetos o clases.
}

// Ahora definiremos la clase

class Producto implements Producto {
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
    
    constructor(id:number,nombre:string,precio:number,disponible:boolean) {
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.disponible=disponible;
    }

    calcularDescuento(descuento: number): number {
        return this.precio-this.precio*(descuento/100)
    }
}

let producto1 = new Producto(1,"empanada",1500,true);
let producto2 = new Producto(2,"pizza",7500,true);
let producto3 = new Producto(3,"hamburguesa",15000,false);

console.log(producto1.calcularDescuento(50))
console.log(producto2.calcularDescuento(50))
console.log(producto3.calcularDescuento(40))

const producto: Producto = {
    id: 1,
    nombre:"empanada",
    precio: 1000,
    disponible: true,
    
    calcularDescuento(descuento:number):number {
        return this.precio - this.precio*(descuento/100);
    }
  }

  console.log(producto.calcularDescuento(10));