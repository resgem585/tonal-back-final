import Juego from "../models/Juego.js";
import User from "../models/User.js"
import Temaz from "../models/Temaz.js";
import Tonal from "../models/Tonal.js"
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
    async createTemaz( _ , { title,description, image} ) {
        const newTemaz = { title, description, image };
        const temaz = await Temaz.create( newTemaz ); //returns { }
        return await Temaz.find()
    },
    async updateTemaz( _, { _id, title, description,  image } ) {
        const temaz = { title, description, image }
        return await Temaz.findByIdAndUpdate(_id, temaz,  {new: true})
    },
    async deleteTemaz(_, {_id}){
        await Temaz.findByIdAndDelete( _id );
        return await Temaz.find();
    
    },  

    // Tonal
    async createTonal( _ , { title, significado, description,  image} ) {
        const newTonal = { title, significado, description, image };
        const tonal = await Tonal.create( newTonal ); //returns { }
        return await Tonal.find()
    },
    async updateTonal( _, { _id, title, significado, description,  image } ) {
        const tonal = { title, significado, description,  image }
        return await Tonal.findByIdAndUpdate(_id, tonal,  {new: true})
    },
    async deleteTonal(_, {_id}){
        await Tonal.findByIdAndDelete( _id );
        return await Tonal.find();
    
    },  

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

    }
}

export default Mutation;