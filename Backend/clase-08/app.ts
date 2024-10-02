// import http from "http";

// const PORT = 8080;

// const server = http.createServer(async (req,res) => {

//   if(req.url === "/" && req.method==="GET"){
//     res.writeHead(200,{"Content-type":"application/json"});
//     res.write(JSON.stringify({msg:"Hola, soy el home"}));
//     res.end();
//     console.log("Petición GET concretada");
//     return;
//   }
//   if(req.url === "/anidado" && req.method==="GET"){
//     res.writeHead(200,{"Content-type":"application/json"});
//     res.write(JSON.stringify({msg:"Hola, soy una ruta anidada"}));
//     res.end();
//     console.log("Petición GET concretada");
//     return;
//   }
//   if(req.url === "/" && req.method==="POST"){
//     res.writeHead(200,{"Content-type":"application/json"});
//     res.write(JSON.stringify({msg:"Hola, soy un POST"}));
//     res.end();
//     console.log("Petición POST concretada");
//     return;
//   }

//   res.writeHead(404,{"Content-type":"application/json"});
//   res.write(JSON.stringify({msg:"¿Que andas buscando? esta ruta no existe"}))
//   res.end();
//   return;

// })

// server.listen(PORT, () => {
//   console.log("Servidor funcionando en el puerto",PORT)
// })

import express from "express";
const app = express();
const PORT= 8080;

// Seteamos el middleware

app.use(express.static("public"));

// app.get("/",(req,res) => {
//     res.send("Hola soy el home")
// })

app.get("/prueba",(req,res) => {
    res.sendFile(__dirname+"/public/prueba.html")
})

app.get("/elementos",(req,res) => {
    res.sendFile(__dirname+"/public/elements.html")
})

app.get("/otrapagina",(req,res) => {
    res.sendFile(__dirname+"/public/generic.html")
})


app.get("/empanada",(req,res) => {
    res.sendFile(__dirname+"/public/empanada.html")
})

app.get("*",(req,res) => {
  res.sendFile(__dirname+"/public/404.html")
})


app.listen(PORT,() => {
  console.log("Estamo andando en el puerto:",PORT)
})

