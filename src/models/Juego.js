import { Schema, model } from "mongoose";

const juegoSchema = new Schema({
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

export default model('juegos_catalog', juegoSchema)