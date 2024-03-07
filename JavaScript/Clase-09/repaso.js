let productos= [
    {id: 1, nombre: "Jean", precio: 15000},
    {id: 2, nombre: "Camisa", precio: 25000},
    {id: 3, nombre: "Zapatillas", precio: 150000},
    {id: 4, nombre: "Zapatillas Adidas", precio: 150000},
    {id: 5, nombre: "Zapatillas Puma", precio: 150000},
    {id: 6, nombre: "Cinturon", precio: 14000},
    {id: 7, nombre: "Medias", precio: 1000},
    {id: 8, nombre: "Gorro de lana", precio: 8000}
]

console.log(productos);

// Filtrar los productos cuyo precio sea mayor a $15000.

console.log("Productos cuyo valor es mayor a $15000");
console.log("----------------------------------------");
let productosMasCaros=productos.filter(producto=> producto.precio>15000);
console.log(productosMasCaros);


// Encontrar el primer producto cuyo nombre sea "Zapatillas".
let zapatilla=productos.find(producto=>producto.nombre==="Zapatillas");
console.log(zapatilla);
// Comprobar si todos los productos tienen un precio mayor a $4000.
let todosCaros=productos.every(producto=>producto.precio>4000);
console.log(todosCaros?"Todos son caros":"Hay productos economicos")


// Crear otro array con todos los productos menos el producto con id igual a 3.

let sinTres=productos.filter(producto=>producto.id!==3);
console.log(sinTres)

// Agregar un nuevo producto al final del array.

let nuevoProducto={id:9,nombre:"Empanada",precio:500};

productos.push(nuevoProducto);
console.log(productos);

// Agregar un nuevo producto al inicio del array.

let otroProducto={id:10,nombre:"Alfajor",precio:1300};

productos.unshift(otroProducto);
console.log(productos)
// Eliminar el último producto del array.

productos.pop();
console.log(productos);


// Convertir el array de productos en una cadena de texto separada por comas.

let arrayEnString=productos.map(producto=>producto.nombre).join(",");

console.log("Los productos son: "+arrayEnString)

// Utilizar el método map para mostrar todos los productos por consola.

productos.map(producto=>{
    console.log("ID: "+producto.id)
    console.log("Nombre:"+producto.nombre);
    console.log("Precio: $"+producto.precio);
    console.log("##########################")
})
