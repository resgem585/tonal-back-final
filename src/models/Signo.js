import { Schema, model } from "mongoose";

const signoSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String, 
        require: true
    },
    image: {
        type: String,
        requiere: true
    }
})

export default model('signo', signoSchema)