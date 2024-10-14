import { Request,Response } from "express";
import Student, {IStudent} from "../models/student";
import Camada from "../models/camada";
export const getStudents = async ({},res:Response) => {

    const condicion = {estado:true};

    const students = await Student.find(condicion)
    .populate("camada","nombre diasDeCursada");

    res.json(
        {
            students
        }
    )

};

export const getStudentByDNI = async (req:Request,res:Response) =>{

    const {dni} = req.params;

    const student : IStudent | null = await Student.findOne({dni:dni})
    .populate("camada","nombre");

    if(!student){
        res.json(
            {
                msg:"No existe ese DNI en la DB"
            }
        )
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

    const camadaData = await Camada.findOne({nombre:camada})

    //Verificamos si existe

    if(!camadaData) {
        res.json(
            {
                msg:"La camada no existe"
            }
        )
        return;
    }

    //verificamos si falta algun dato

    if(!dni || !nombre || !camada || !email) {
        res.json(
            {
                msg:"Faltan datos en la petición"
            }
        ) 
        return;
    }

    //validamos si existe el estudiante

    const alumnoEnDB = await Student.findOne({dni:dni});

    if(alumnoEnDB) {
        res.json({
            msg:"El estudiante ya existe"
        })
        return;
    }

   
    const student = new Student({
        dni,
        nombre,
        email,
        camada:camadaData?._id
    });

    await student.save();

    res.json( {
        msg:"Todo piola amigo",
        student
    })


}

export const updateStudent = async(req:Request,res:Response)=>{

    const {dni}= req.params;

    const {estado,camada,...data} =req.body;

    const student = await Student.findOneAndUpdate({dni:dni},data,{new:true})

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
    const student = await Student.findOneAndDelete({dni:dni});

    //Soft delete

    // const student = await Student.findOneAndUpdate({dni:dni},{estado:false},{new:true})

    if (!student){
        res.json({
            msg:"El estudiante no existe"
        })
        return;
    }

    res.json({
        msg:"Estudiante eliminado de la base de datos",
        student
    })
}

