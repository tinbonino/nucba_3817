interface Empleado {
    id:number;
    nombre:string;
    cargo:string;
    sueldo:number;
}

class ClaseEmpleado implements Empleado {
   //Define automaticamente las propiedades
    constructor(
        
        public id:number,
        public nombre:string,
        public cargo:string,
        public sueldo:number

    ) {
        //asigna automaticamente los parametros a las propiedades de instancia
    }
}

class ClaseDirector extends ClaseEmpleado {

    constructor(
        id:number,
        nombre:string,
        cargo:string,
        sueldo:number,
        public area:string

    ) {
        super(id,nombre,cargo,sueldo);
    }

    contratar(nuevoEmpleado:Empleado) {
        console.log(`Contratando nuevo empleado ${nuevoEmpleado.nombre} para el area ${this.area}`)
    }
    despedir(nuevoEmpleado:Empleado) {
        console.log(`Despidiendo a empleado ${nuevoEmpleado.nombre} del area ${this.area}`)
    }
}

const empleado1:Empleado = new ClaseEmpleado(1,"Hector","vendedor",1500000);
const empleado2:Empleado = new ClaseEmpleado(2,"Zulema","desarrolladora",2000000);
const empleado3:Empleado = new ClaseEmpleado(4,"Lucre","ciberseguridad",3000000)

const director1:ClaseDirector= new ClaseDirector(3,"Franco","Director",5000000,"Desarrollo");
const director2:ClaseDirector= new ClaseDirector(3,"Martin","Director",6000000,"Ciberseguridad");

director1.contratar(empleado2);
director1.contratar(empleado1);
director1.despedir(empleado1);

director2.contratar(empleado3);
director2.despedir(empleado1);

console.log("Nombre:",empleado1.nombre);

console.table(empleado1);
console.table(empleado2);
console.table(empleado3);
console.table(director1);
console.table(director2);




