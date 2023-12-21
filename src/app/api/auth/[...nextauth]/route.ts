import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectDB } from "@/utils/mongoose"
import User from "@/models/user"
import bcrypt from "bcryptjs"


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label:"Email", type:"text"},
                password: {label:"Password", type:"password"}
              },
            async authorize(credentials, req){
                await connectDB()
                const userFound = await User.findOne({email: credentials?.email}).select("+password")
                if (!userFound) throw new Error("Credencial invalida")

                const passwordMatched = await bcrypt.compare(credentials!.password, userFound.password)
                if (!passwordMatched) throw new Error("Credencial invalida")

                console.log(userFound)
                return userFound
            }
        })
    ],
    callbacks:{
        jwt({token, user}){
        if (user){
            token.user = user      
        }
        return token
        },
        session({session, token}){
            console.log(session, token)
        return session
        }
    },
    pages: {
        signIn: '/login'
    }
})

export { handler as GET, handler as POST }