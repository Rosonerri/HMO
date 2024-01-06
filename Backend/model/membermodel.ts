import { Schema, Types, model } from "mongoose"
import { iMemberData } from "../utils/interface";



const userModel = new Schema<iMemberData>(
    {
   firstName: {
    type: String
   },
   middleName: {
    type: String
   },
   lastName: {
    type: String
   },
   email: {
    type: String
   },
   avatar: {
    type: String
   },
   avatarID: {
    type: String
   },
   
   status: {
    type: String
   },
   user: [{
    type: Types.ObjectId,
    ref: "users"
   }],

   medicalHistory: [{
    type: Types.ObjectId,
    ref: "medicalHistory"
   }],
},
{timestamps: true}

);

export default model<iMemberData>("members", userModel )

