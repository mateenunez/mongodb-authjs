"use client"
import { useSession } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"


export default function Home() {
  const {data: status } = useSession()
  console.log(status)

  return (
    
    <main className='h-screen overflow-x-hidden'>
      <h1 className="flex pt-7 pl-7 text-lg">Bienvenido, si desea ingresar a la informacion de usuarios verificados haz click en el boton debajo.</h1>
      <p className="flex p-7 text-sm">Esta pagina hecha en NextJS realiza registros de cuentas y autoriza las mismas con NextAuth. </p>
      <div className="justify-center flex flex-row pt-32 ">

      <Link href={'/verified'}><h2 className="border-black border p-2 hover:scale-110 duration-150">Acceder a pagina verificada</h2></Link>
      </div>

      <div className=" flex justify-center pt-12 w-screen overflow-hidden ">
      <Image src={status ? ("/img/person-reading-a-book-question-mark-svgrepo-green-com.jpg") : ("/img/person-reading-a-book-question-mark-svgrepo-com.jpg")} width={300} height={300} alt="Imagen de pagina principal" className="place-self-center"></Image>
      </div>
      
      
      
    </main>
  )
}
