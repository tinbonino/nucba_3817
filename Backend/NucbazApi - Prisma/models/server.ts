import express,{ Express } from "express";

// import { dbConnection } from "../database/config";
import authRoutes from "../routes/auth";
import orderRoutes from "../routes/orders"
import issuesRoutes from "../routes/issues"

import cors from "cors"

// creamos la clae server

export class Server {
    app: Express;
    port: string | number | undefined;
    authPath: string;
    ordersPath:string;
    issuesPath:string

    // configuramos el constructor para poder crear instancias de la clase. Todo lo que esta dentro del constructor se ejecuta al crear la instancia.

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = "/auth";
        this.ordersPath="/orders";
        this.issuesPath="/issues"

        //método para conectar a la db
        // this.conectarDB();
        //método para ejecutar los middlewares
        this.middlewares();
        // // método para cargar las rutas
        this.routes();

    }

    //definimos los métodos

    //método para conectara a la db

    // async conectarDB():Promise<void> {
    //     await dbConnection();
    // }

    //método para ejecutar los middlewares

    middlewares():void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    //método para cargar las rutas

    routes(): void {
        this.app.use(this.authPath,authRoutes);
        this.app.use(this.ordersPath,orderRoutes);
        this.app.use(this.issuesPath,issuesRoutes)
    }

    //método para escuchar el puerto correspondiente

    listen(): void {
        this.app.listen(this.port, () => {
            console.log("Servidor inicializado en puerto",this.port)
          
        })
    }


}