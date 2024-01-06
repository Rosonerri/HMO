import { Schema, Types, model } from "mongoose"
import { iMedicalData } from "../utils/interface";



const medicalHistoriesModel = new Schema(
    {
   doctotName: {
    type: String
   },
   hospitalName: {
    type: String
   },
   Diagnosis: {
    type: String
   },
   status: {
    type: String
   },
   member: [{
    type: Types.ObjectId,
    ref: "members"
   }],

},
{timestamps: true}

);

export default model<iMedicalData>("medicalHistories", medicalHistoriesModel )

