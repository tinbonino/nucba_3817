import { Request,Response } from "express";
import Student, {IStudent} from "../models/student";

export const getStudents = async ({},res:Response) => {

    const condicion = {estado:true};

    const students = await Student.find(condicion);

    res.json(
        {
            students
        }
    )

};

export const getStudentByDNI = async (req:Request,res:Response) =>{

    const {dni} = req.params;

    const student : IStudent | null = await Student.findOne({dni:dni}); 

    res.json(
        {
            student
        }
    )


}

export const createStudent = async (req:Request,res:Response) => {

    const studentData:IStudent = req.body;

    const student = new Student(studentData);

    await student.save();

    res.json( {
        msg:"Todo piola amigo",
        student
    })


}