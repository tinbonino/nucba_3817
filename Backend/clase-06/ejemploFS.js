import {writeFile,readFile} from "fs";

// como escribir en un archivo

writeFile("archivo.txt","Lucre cerra esas ventanas por favor",(err) => {
  if(err){
    console.error("Error al escribir en el archivo.",err);
    return;
  }
  console.log("Se ha escrito el archivo correctamente");
});

//leer desde un archivo

readFile("archivo.txt","utf8",(err,data) => {
    if(err){
        console.error("Eror al leer el archivo.",err);
        return;
    }
    console.log("El contenido del archivo es:",data)
  
});