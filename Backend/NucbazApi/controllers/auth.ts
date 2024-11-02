import { Request,Response } from "express";

import Usuario, {IUser} from "../models/Usuario";

import bcrypt from "bcryptjs";

import { ROLES } from "../helpers/constants";

import randomstring from "randomstring";

import { sendEmail } from "../mailer/mailer";

export const register = async (req:Request, res:Response): Promise<void> => {

    const {nombre,email,password,rol}:IUser=req.body;

    const usuario = new Usuario({nombre,email,password,rol});

    // Encriptamos el password

    const salt = bcrypt.genSaltSync();

    usuario.password = bcrypt.hashSync(password,salt);

    // verificamos si es admin

    const adminKey = req.headers["admin-key"];

    if(adminKey===process.env.KEYFORADMIN){
        usuario.rol = ROLES.admin;
    }

    //creamos y almacenamos el codigo de verificacion

    const newCode = randomstring.generate(6);

    usuario.code=newCode;

    await usuario.save();

    await sendEmail(email,newCode)

    res.status(201).json({
        usuario
    })


  
}