interface Persona {
    nombre: string;
    edad: number;
    direccion:string
}

function actualizarPersona(persona:Persona,cambios:Partial<Persona>):Persona {
    return {
        ...persona,
        ...cambios
    }
}



const alumno: Persona={
    nombre: "Seba",
    edad:25,
    direccion:"Calle loca 123"
}

const cambios:Partial<Persona>={
    
    edad: 33,
    
}
console.log(alumno);
const estudianteActualizado=actualizarPersona(alumno,cambios);
console.log(estudianteActualizado);

