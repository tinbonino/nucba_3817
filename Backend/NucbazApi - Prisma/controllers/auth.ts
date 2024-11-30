import { Request,Response } from "express";

import  {IUser} from "../models/Usuario";

import bcrypt from "bcryptjs";

import { ROLES } from "../helpers/constants";

import randomstring from "randomstring";

import { sendEmail } from "../mailer/mailer";
import generarJWT from "../helpers/generarJWT";

import {prisma} from "../app"

export const register = async (req:Request, res:Response): Promise<void> => {

    const {nombre,email,password,rol}:IUser=req.body;

    const usuario:IUser = {nombre,email,password,rol};

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

    // await usuario.save();

    await prisma.user.create({
        data:usuario
    })

    await sendEmail(email,newCode)

    prisma.$disconnect;

    res.status(201).json({
        usuario
    })


  
}

export const login = async (req:Request,res:Response): Promise<void> =>{
    const {email, password}: IUser = req.body;

    try {
        // const usuario = await Usuario.findOne({email});
        const usuario = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if(!usuario){
            res.status(400).json({
                msg: "No se encontró el email en la base de datos"
            })
            return;
        }

        const validarPassword = bcrypt.compareSync(password, usuario.password);

        if (!validarPassword){
            res.status(400).json({
                msg:"La contraseña es incorrecta"
            });
            return;
        };

        const token = await generarJWT(usuario.id.toString());
        prisma.$disconnect;

        res.json({
            usuario,
            token
        })
    } catch (error){
        console.log(error);
        res.status(500).json({
            msg:"Error en el servidor"
        })
    }
}

export const verifyUser = async (req:Request, res:Response): Promise<void> =>{
    const {email,code}=req.body;

    try {
        // const usuario = await Usuario.findOne({email});

        const usuario = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if(!usuario){
            res.status(400).json({
                msg:"No se encontró el usuario en la base de datos"
            })
            return;

        }

        if(usuario.verified){
            res.status(400).json({
                msg:"El usuario ya está validado"
            })
            return;
        }

        if(usuario.code !== code){
            res.status(400).json({
                msg:"El código ingresado es incorrecto"
            })
            return
        }

        // const usuarioActualizado = await Usuario.findOneAndUpdate({email},{verified: true})

        const usuarioActualizado= await prisma.user.update({
            where: {
                email
            },
            data: {
                verified:true
            }
        })

        prisma.$disconnect;


        res.status(200).json({
            msg:"usuario verificado con éxito"
        })

    } catch(error){
        console.log(error);
        res.status(400).json({
            msg: "Error en el servidor"
        })
    }
}