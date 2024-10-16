import mongoose from "mongoose";

const connectDB = async () => {

    try {
        await mongoose.connect("mongodb+srv://tinbonino:O34yxr5pwTAlq9Nj@cluster0.u8s1s.mongodb.net/");
        console.log("Base de datos en el espacio...🚀")
    } catch (error){
        console.log("Error de conexion:",error);
    }
    
}

export default connectDB