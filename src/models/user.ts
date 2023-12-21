import { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
    name : {type: String,
            minLength: [3, "Nombre muy corto"],
            maxLength: [30, "Nombre muy largo"],
            required: [true, "El campo nombre es requerido"]},
    email : {type: String,
            required : [true, "El campo email es requerido"], 
            unique: true, 
            pattern: [{$regex : /@gmail.com/},
                    "Email no valido"]},
    password : {
        type: String,
        required : [true, "El campo contraseña es requerido"], 
        select: false
    }
}) 

const User = models.User || model('User', UserSchema)

export default User