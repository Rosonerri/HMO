import { Application, Request, Response } from "express";



export const mainApp = async (app:Application) =>{
try {
    app.get("api", (req:Request, res:Response) =>{
        try {
            return res.status(200).json({
                message: "Welcome to my Api"
            })
        } catch (error) {
            return res.status(404).json({
                message: "Error While Loading Api"
            })
        }
    })
} catch (error) {
    return error
}
}