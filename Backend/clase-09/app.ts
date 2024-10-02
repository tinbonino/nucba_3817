import express from "express";

import { getPokemonById,getSimplePokemonById,getMultiplePokemon } from "./controllers/pokemon";


const app = express();
const PORT = 8080;

// Seteamos el middleware

app.use(express.json());

//Creamos las rutas
app.get("/pokemon/full/:id",getPokemonById);

app.get("/pokemon/simple/:id",getSimplePokemonById);

app.get("/pokemon/multiple",getMultiplePokemon);

//Inicializamos el servidor

app.listen(PORT,() => {
  console.log("Servidor inicializado en el puerto",PORT)
})

