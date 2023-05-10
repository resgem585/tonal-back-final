import { Schema, model } from "mongoose";

const tonalSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    significado: {
        type: String,
        requiere: true
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

export default model('tonal_signo', tonalSchema)