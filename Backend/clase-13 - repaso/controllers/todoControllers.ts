import { Request, Response } from "express";

import Todo, {ITask} from "../models/todoModel";

// Creamos los controllers

export const getTasks = async (req:Request,res:Response) => {
    try {
        const tasks = await Todo.find();
        res.status(200).json(tasks);
    }catch (error){
        res.status(500).json({error:"No se pudo obtener las tareas"})
    }
};

export const createTask = async (req:Request,res:Response) => {
    try {
    const task:ITask = req.body;

    const {title}=task;

    const newTask = new Todo({title})

    await newTask.save();

    res.status(200).json(
        {
            msg:"Tarea creada exitosamente",
            newTask
        }
    )

    } catch (error){
        res.status(500).json({error:"No se pudo crear la tarea"})
    }
  
}

export const updateTask = async (req:Request,res:Response) => {
    try {
        const {id} =req.params;
        const {completed}=req.body;

        const task = await Todo.findOneAndUpdate({_id:id},{completed},{new:true})

        if(!task){
            res.status(400).json(
                {
                    Error:"No se encontró la tarea"
                }
            )
        } else {
            res.status(200).json(task)
        }
    } catch(error){
        res.status(500).json({Error:"No se pudo actualizar la tarea"})
    }
  
}

export const deleteTask = async (req:Request,res:Response) => {
    try{
        const {id}=req.params;

        const task= await Todo.findOneAndDelete({_id:id});

        if(!task){
            res.status(400).json({
                msg:"La tarea no existe"
            })
        } else {
            res.status(200).json({
                msg: "Tarea eliminada correctamente"
            })
        }
    } catch (error){
        res.status(500).json({
            error:"No se pudo eliminar la tarea"
        })
    }
  
}

