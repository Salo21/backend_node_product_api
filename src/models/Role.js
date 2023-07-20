import { Schema, model } from "mongoose";


const rolSchema = new Schema({
    name: string
},
    {
        versionKey: false
    }
)


export default model("Role", rolSchema)