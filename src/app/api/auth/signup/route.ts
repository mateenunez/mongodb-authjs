import { NextResponse } from "next/server"
import User from "@/models/user"
import bcrypt from "bcryptjs"
import { connectDB } from "@/utils/mongoose"


export async function POST(request: Request) {
  
  const {name, email, password} = await request.json()
  if (!password || password.length < 6){
    return NextResponse.json({
      message: "La contraseña debe contener al menos 6 caracteres"
    }, {
      status: 411
    })
  }
  
  await connectDB()
  const userFound = await User.findOne({email})
  if (userFound){
    return NextResponse.json({
      msg: "Este email ya esta registrado."
    }, {status: 409})
  } else {

    try {
    const hashedPas = await bcrypt.hash(password, 5)

    const user = new User({
      name,
      email,
      password: hashedPas
    })

    const savedUser = await user.save()
    return NextResponse.json(savedUser)
    } catch (error) {
      if (error instanceof Error){
        return NextResponse.json({msg: error.message})
      }
      
    }
    
  } 
}



