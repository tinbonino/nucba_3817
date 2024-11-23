import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    try {
        // creamos una camada

        const camada = await prisma.camada.create({
            data:{
                nombre:3917,
                dias: "Martes y Jueves",
                modulo: "Backend"
            }
        })
        console.log(camada);
        prisma.$disconnect()

    } catch (error){
        console.log(error)
        prisma.$disconnect()
    }
};

main()