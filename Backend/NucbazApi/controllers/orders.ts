import { Request,Response } from "express";
import Order, {IOrder} from "../models/orders";

import { ObjectId } from "mongoose";

export const getOrdenes = async (req:Request,res:Response): Promise<void>=>{
    const usuarioId: ObjectId = req.body.usuarioConfirmado._id;

    const consulta = {user:usuarioId};

    const orders = await Order.find({consulta});

    res.json({
        data:[...orders]
    })
};

export const createOrder = async(req:Request,res:Response): Promise<void> => {
    const usuario: ObjectId = req.body.usuarioConfirmado._id;

    const orderData: IOrder = req.body;

    const data = {
        ...orderData,
        user:usuario,
        createdAt: new Date(),
        status:"pending"
    }

    const order = new Order(data);

    order.save();

    res.status(201).json({
        order
    })
}