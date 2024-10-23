import {Model, Schema, model} from "mongoose";

import { ROLES } from "../helpers/constants";

export interface IUser {
    nombre: string;
    email: string;
    password: string;
    rol?:string;
    code?:string;
    verified?:boolean
}


const UserSchema = new Schema<IUser>({
    nombre: {
        type:String,
        required: [true, "El nombre es obligatorio"]
    },
    email: {
        type:String,
        required: [true, "El email es obligatorio"]
    },
    password: {
        type:String,
        required: [true, "El password es obligatorio"]
    },
    rol: {
        type: String,
        default:ROLES.user
    },
    code:{
        type:String
    },
    verified: {
        type:Boolean,
        default:false
    }
});

// Con este método podemos enviar la info al usuario filtrando lo que no queremos.

UserSchema.methods.toJSON = function() {

   const {__v,password,_id,code,...usuario} = this.toObject();

    return usuario
}

const Usuario: Model<IUser> = model<IUser>("Usuario",UserSchema);

export default Usuario;

