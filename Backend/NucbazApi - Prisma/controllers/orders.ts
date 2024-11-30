import { Request,Response } from "express";
// import Order, {IOrder} from "../models/orders";

// import { ObjectId } from "mongoose";

import { prisma } from "../app";

export const getOrdenes = async (req:Request,res:Response): Promise<void>=>{
    const usuarioId: number = req.body.usuarioConfirmado.id;

    // const consulta = {user:usuarioId};

    // const orders = await Order.find({consulta});

    const orders = await prisma.order.findMany({
        where: {
            user:usuarioId
        },
        include: {
            shippingDetails:true
        }
    })

    prisma.$disconnect;

    res.json({
        data:[...orders]
    })
};

export const createOrder = async(req:Request,res:Response): Promise<void> => {
    const usuario: number = req.body.usuarioConfirmado.id;

    const orderData = req.body;

    const {price,shippingCost,total,items, shippingDetails} = orderData;
    // const data = {
    //     ...orderData,
    //     user:usuario,
    //     createdAt: new Date(),
    //     status:"pending"
    // }



    const order = await prisma.order.create({
        data: {
            price,
            shippingCost,
            total,
            items:{
                create:[...items]
            },
            user:usuario,
            shippingDetails: {
                create: {
                    ...shippingDetails
                }
            }
        },
        include: {
            shippingDetails:true,
            items:true
        }
    })

    // order.save();

    prisma.$disconnect();

    res.status(201).json({
        order
    })
}