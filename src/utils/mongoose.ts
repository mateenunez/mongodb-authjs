import mongoose from "mongoose"

const { MONGODB_URI } = process.env;


export async function connectDB(){  

    if (!MONGODB_URI) {
    throw new Error("MONGODB_URI must be defined");
    }

   const {connection} = await mongoose.connect(MONGODB_URI)

   try {
    if (connection.readyState === 1){
        console.log("Connected to database")
        return Promise.resolve(true)
       }
   } catch (error) {
    console.log('Otro status')
    console.log(error)
    return Promise.reject(false)
   }
}