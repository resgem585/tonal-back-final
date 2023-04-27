import Juego from "../models/Juego.js"
import User from "../models/User.js"


const Query = {

    async getUser() {
        const users = await User.find()
        return users
    },    

    async login(_,{email,password} ) {
        const verifyUser = await User.findOne( { email, password } ); //
        console.log(verifyUser)
         return verifyUser
    },

    // Juegos
    async getJuegos() {
        const Juegos = await Juego.find();
        return Juegos
    },
}

export default Query