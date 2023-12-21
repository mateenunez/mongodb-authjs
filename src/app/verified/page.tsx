"use client"
import { useSession } from "next-auth/react"
import Image from "next/image"

function Verified() {

  const {data: session, status } = useSession()
  console.log(status)

  return (
    <div className='h-screen overflow-y-hidden'>
        <h1 className="flex pt-7 pl-7 text-lg">Bienvenido, si desea ingresar a la informacion de usuarios verificados haz click en el boton debajo.</h1>
        <p className="flex p-7 text-sm">Esta pagina hecha en NextJS realiza registros de cuentas y autoriza las mismas con NextAuth. </p>
        <div className="p-32 flex gap-x-96">
          <div>
            <h1 className="text-lg pb-16"> Hola!     tu cuenta fue validada correctamente.</h1>
            <ul className="list-disc">
              <li><h1 className="pb-3"> Tu nombre es: {session?.user?.name}</h1></li>
              <li><h1> Tu email es: {session?.user?.email}</h1></li>
            </ul>
          </div>
          

          <div className="flex justify-between">
            <Image src="/img/incoming-mail-svgrepo-com.jpg" alt="Usuario valido" width={250} height={250} className="p-5"/> 
            <div>
            <Image src="/img/shield-ok-svgrepo-com.jpg" alt="Usuario valido" width={80} height={50} className="flex"/> 
            </div>
          </div>
        
        </div>
    </div>
  )
}

export default Verified