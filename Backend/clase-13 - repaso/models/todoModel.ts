import { Model,model,Schema } from "mongoose";

// creamos la interface

export interface ITask {
    title:string;
    completed:boolean
}

// creamos el schema

const TaskSchema: Schema = new Schema(
    {
        title: {
            type:String,
            required:true
        },
        completed: {
            type:Boolean,
            default:false
        }
    }
)

// Creamos el model

const Todo:Model<ITask> = model<ITask>("Tasks",TaskSchema);

export default Todo;