//callstack
const hola = () => {
  console.log("Hola!");
}

const nucba = () => {
  console.log("Nucba");
}

const init = () => {
  console.log("Iniciando funcion init")
  hola();
  nucba();
};

init();

// Memory Heap

const obj1 = {valor:1};
const obj2 = obj1;

console.log(obj1,obj2);

obj2.valor=5;

console.log(obj1.valor);

console.log(obj1===obj2);

console.log(obj1,obj2)

const obj3={...obj1} // asigno a obj3 la variable obj1 sin apuntar al mismo lugar en memoria. Al crear una copia estoy creando un nuevo espacio en la memoria para obj3.

// es como decir "todo lo que está en obj1 lo quiero en obj3 pero no es obj1"


obj3.valor=18;
obj1.valor=1
console.log(obj1,obj3);

// Event Loop

console.log("Adios");

setTimeout(() => {
  console.log("Crunchyroll")
},2000);

console.log("Dinero, Hola")

// Stack/CallStack (Pila de platos): Va apilando de forma organizada las diferentes instrucciones que se llamen. Lleva un rastro de donde esta nuestra app y en que punto de ejecucion nos encontramos.

// Memory Heap: De forma desorganizada guarda la info de las variables/funciones, etc

// Schedule tasks: Se agrega a la cola de tareas las tareas programadas para ejecutarse

// Cola de tareas (task queue): Son las tareas que estan listas para pasar a la pila de llamadas y ejecutarse.
