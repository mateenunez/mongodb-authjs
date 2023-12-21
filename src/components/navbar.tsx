"use client"
import { useSession } from "next-auth/react"
import Link from "next/link"

function Navbar() {
  const {data: status } = useSession()
  console.log(status)


  return (
    <div className="m-10 flex justify-between font-medium ">
        <Link href={'/'} className="hover:scale-110 duration-150"> <h1>Pagina principal</h1></Link>
        
        <div className="flex gap-5 font-light">

        {status ? (<Link href={'/api/auth/signout'} className="hover:text-red-500 hover:scale-110 duration-150"> <h3>Signout</h3></Link>) : 
        (<><Link href={'/login'} className="hover:scale-110 duration-150"> <h3>Login</h3></Link>
        <Link href={'/register'} className="hover:scale-110 duration-150"> <h3>Register</h3></Link></>)}
        
        </div>
    </div>
  )
}

export default Navbar