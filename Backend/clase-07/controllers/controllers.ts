import { Request, Response } from "express";

export const getController = (req:Request,res:Response) => {
  const method=req.method;
  const timestamp= new Date().toLocaleDateString();

  console.log(`[${timestamp}] Método: ${method} ejecutando el controlador get`);

  res.json({
    message:"Hola! Estamos en el back! 💪",
    method,
    timestamp
  })

}

export const postController = (req:Request,res:Response) => {
    const method=req.method;
    const timestamp= new Date().toLocaleDateString();

    console.log(`[${timestamp}] Método: ${method} ejecutando el POST`);

    const saludo=req.body.saludo;

    if(!saludo){
        console.error(`[${timestamp}] Falta el campo "saludo" en la solicitud`)
        res.status(400).json({
            error:"Campo ausente",
            message:"Falta el campo saludo en la solicitud"
        })
        return;
    }

    res.status(201).json({
        message:"Hola esto es un mensaje desde el back: Saludo recibido",
        recievedSaludo:saludo,
        method,
        timestamp
    })

  
}