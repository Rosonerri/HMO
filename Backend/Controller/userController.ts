import { Response, Request } from "express"
import crypto from "crypto"
import userModel from "../model/userModel"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()


export const createUser = async (req:Request, res:Response) =>{
try {
    const {email} = req.body
    const token = crypto.randomBytes(3).toString("hex")

    const user = await userModel.create({
        email,
        token,
        status: "main"
    })

    return res.status(200).json({
        message: "User created successfully",
        data: user
    })

} catch (error) {
    return res.status(404).json({
        message: "Error creating user"
    })
}
} 

export const signInUser = async (req:any, res:Response) =>{
    try {
        const {email, token } = req.body

        const getUser = await userModel.findOne({ email })

        if (getUser){
            if(getUser.token === token){
                if(getUser.verify){
                    const encrypt = jwt.sign( {id: getUser._id}, process.env.JWT_SECRET!, {expiresIn: "1d"});


                    req.session.isAuth = true;
                    req.session.userId = getUser._id;


                    return res.status(200).json({
                        message: "Welcome back",
                        data: encrypt 
                    });
                } else{
                    return res.status(404).json({
                        message: "Account hasn't been Verified",
                    });
                }
            } else {
                return res.status(404).json({
                    message: "Error Reading Token"
                });
            }
        } else{
            return res.status(404).json({
                message: "Error Reading User"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: "Error"
        })
    }
}