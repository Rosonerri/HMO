import { Request, Response } from "express";
import memberModel from "../model/membermodel";
import userModel from "../model/userModel";
import { Types } from "mongoose";

export const createMember = async (req:Request, res:Response)=>{
    try {
        const {userId} = req.params
        const {firstName, relationship} = req.body

        const getUser = await userModel.findById(userId)
        if(getUser){

            const user = await memberModel.create({
                firstName,
                status: "member",
                relationship
            });

            getUser.members.push(new Types.ObjectId(user._id))
            getUser.save()

            return res.status(200).json({
                message: "Member created Successfuly",
                data: user
            })
        }else{
            return res.status(404).json({
            message: "Error Occurred while Creating Member"
            })
        }
       
    } catch (error) {
        return res.status(404).json({
         message: "Error"
        })
    }
}


export const viewMyMember  =  async (req:Request, res:Response) =>{
    try{
        const {userId} = req.params
       
        const getUser = await userModel.findById(userId).populate({
            path: "members"
        });
        if(getUser){
            return res.status(200).json({
                message: "Member Loaded Succesfully",
                data: getUser
            })
        }else{
            return res.status(404).json({
                message: "Error Loading Members"
            })
        }

    }catch (error){
        return res.status(404).json({
            message: "Error"
        })
    }
}


export const loginMember  = async (req:Request, res:Response) =>{
    try{
        const {userId} = req.params 
        const {firstName, token} = req.body

        const getUser: any  = await userModel.findById(userId).populate({
            path: "members"
        })
          
    const getMember = getUser?.members.some((el: any) => el.firstName === firstName)

        if (getMember && getUser.token === token){
            return res.status(200).json({
                message: "Member Gotten Successfully",
                data: getUser
            })
        }else{
            return res.status(404).json({
                message: "Access Denied"
            })
        }
           }catch(error){
        return res.status(404).json({
            message: "Error"
        })
    }
}

//Update Member Info


export const updateMemberNames = async (req: Request, res: Response) => {
    try{

    }catch(error){
        
    }
}