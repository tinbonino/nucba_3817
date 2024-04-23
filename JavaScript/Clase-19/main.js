// // Importar todo el modulo

// import * as funciones from "./funciones.js";
// //   todo como funciones desde ...

// console.log(funciones);

// funciones.saludar("La mejor camada");
// funciones.despedir("Gente");
// funciones.saludar(funciones.nombre);

// // Importar una función específica

// import { saludar,despedir,nombre } from "./funciones.js";

// saludar(nombre);
// despedir("estudiantes");
// saludar("Heladerias");
// despedir("Super Gridito");

import {
    saludar as saludin,
    despedir as chaucito,
    nombre as nombrecito
}
    from "./funciones.js";

    const saludar=(nombre) => {
      console.log("Este saludo es mas piola",nombre)
    }

    saludin("pedro");
    saludar(nombrecito);
    chaucito("menta granizada");

    