import { Schema, model } from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    },
    role: [ //relacion de un a muchos, un usuario tiene muliples roles
        {
            ref: "Role",
            type: Schema.Types.ObjectId
        }
    ],
}, {
    timestamps: true,
    versionKey: false

})  

export default userSchema;