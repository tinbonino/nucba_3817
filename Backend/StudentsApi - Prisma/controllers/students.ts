import { Request,Response } from "express";
import  {IStudent} from "../models/student";
// import Camada from "../models/camada";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getStudents = async ({},res:Response) => {

    const condicion = {estado:true};

    // const students = await Student.find(condicion)
    // .populate("camada","nombre diasDeCursada");

    const students = await prisma.student.findMany({
        where:condicion
    })

    prisma.$disconnect();

    res.json(
        {
            students
        }
    )
    console.log("Estudiantes enviados")

};

export const getStudentByDNI = async (req:Request,res:Response) =>{

    const {dni} = req.params;

    // const student : IStudent | null = await Student.findOne({dni:dni})
    // .populate("camada","nombre");
     const student = await prisma.student.findUnique({
        where:{
            dni:+dni
        }
     })

     prisma.$disconnect()

    if(!student){
        res.status(404).json(
            {
                msg:"No existe ese DNI en la DB"
            }
        )
        prisma.$disconnect()
        return;
    }


    res.json(
        {
            student
        }
    )


}

export const createStudent = async (req:Request,res:Response) => {

    const studentData:IStudent = req.body;

    const {dni,nombre,camada,email} = studentData;

    //buscamos la camada para ver si existe

    // const camadaData = await Camada.findOne({nombre:camada})

    const camadaData = await prisma.camada.findUnique({
        where:{
            nombre:camada
        }
    })

    //Verificamos si existe

    if(!camadaData) {
        res.json(
            {
                msg:"La camada no existe"
            }
        )
        prisma.$disconnect()
        return;
    }

    //verificamos si falta algun dato

    if(!dni || !nombre || !camada || !email) {
        res.json(
            {
                msg:"Faltan datos en la petición"
            }
        ) 
        prisma.$disconnect()
        return;
    }

    //validamos si existe el estudiante

    // const alumnoEnDB = await Student.findOne({dni:dni});

    const alumnoEnDB= await prisma.student.findUnique({
        where:{
            dni:dni
        }
    })

    if(alumnoEnDB) {
        res.json({
            msg:"El estudiante ya existe"
        })

        prisma.$disconnect()
        return;
    }

   
    const student = {
        dni,
        nombre,
        email,
        camada:camadaData?.nombre
    };

    // await student.save();

    const studentToSave = await prisma.student.create({
        data:student
    })

    prisma.$disconnect()

    res.json( {
        msg:"Todo piola amigo",
        studentToSave
    })
    
    console.log("Estudiante creado con éxito")

}

export const updateStudent = async(req:Request,res:Response)=>{

    const {dni}= req.params;

    const {estado,camada,...data} =req.body;

    // const student = await Student.findOneAndUpdate({dni:dni},data,{new:true})

    const student = await prisma.student.update({
        where:{
            dni:+dni,
        },
        data:data
    })

    prisma.$disconnect()

    res.json(
        {
            msg:"Estudiante actualizado correctamente",
            student
        }
    )

}

export const deleteStudent = async(req:Request,res:Response)=>{
    const {dni}= req.params;
    //Hard delete
    // const student = await Student.findOneAndDelete({dni:dni});

    const student = await prisma.student.delete({
        where: {
            dni:+dni
        }
    })
    
    prisma.$disconnect()

    if (!student){
        res.json({
            msg:"El estudiante no existe"
        })
        prisma.$disconnect()
        return;
    }

    res.json({
        msg:"Estudiante eliminado de la base de datos",
        student
    })
}

