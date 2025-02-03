import { Request, Response } from "express"

export const createRoomController = (req:Request,res:Response) =>{
    // TODO create-room
    // db save
    try {
        res.status(201).json({roomId: 123})
    } catch (error) {
        
    }
}