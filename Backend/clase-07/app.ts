import express, {Application} from "express";
import { getController,postController } from "./controllers/controllers";
// Inicializamos la app de express

const app:Application = express();

// Estableciendo el middleware para poder leer JSON

app.use(express.json()); // Permite que cuando lleguen peticiones en JSON se puedan parsear.

// Creamos las rutas

app.post("/set",postController);
app.get("/obtener",getController);

//Ponemos el servidor a escuchar

app.listen(3000, () => {
  console.log("El servidor está escuchando en el puerto 3000");
})