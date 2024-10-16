import express from "express";
import connectDB from "./database/connection";

import todoRoutes from "./routes/todoRoutes"

const app = express();

const PORT = 8080;

// Conexion a la base de datos

connectDB();

// Middlewares

app.use(express.json());

//Rutas

app.use("/todo",todoRoutes);

//Activamos el servidor

app.listen(PORT,() => {
  console.log("Servidor corriendo en el puerto",PORT);
})