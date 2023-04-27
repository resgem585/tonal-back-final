import Juego from "../models/Juego.js";
import User from "../models/User.js"

const Mutation = {
    
    // Juegos
    async createJuego( _ , { title,description, image} ) {
        const newJuego = { title, description, image };
        const movie = await Juego.create( newJuego ); //returns { }
        return await Juego.find()
    },
    async updateJuego( _, { _id, title, description,  image } ) {
        const juego = { title, description,  image }
        return await Juego.findByIdAndUpdate(_id, juego,  {new: true})
    },
    async deleteJuego(_, {_id}){
        await Juego.findByIdAndDelete( _id );
        return await Juego.find();
    
    },  

    // Temazcal



    // Nahuatl

    // USER
    async createUser(_, {email, password }){
        const newUser = { email, password}
        const user = await User.create( newUser )
        return await User.find() // puede ser solo user, regresar el usuario.
    },
    async updateUser(_, { _id, email, password } ){
        return await User.findByIdAndUpdate(_id, { email, password, }, {new: true})
    },
    async deleteUser( _, {_id}){
        const user = await User.findByIdAndDelete(_id);
        if(!user){
            
         throw new Error('User not found');
        }
        return user


    },
}

export default Mutation;