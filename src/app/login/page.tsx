"use client"

import axios, {AxiosError} from "axios"
import { FormEvent, useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"




function Login() {

  const [error, newError] = useState("")
  const router = useRouter()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)

  const email = formData.get('email')
  const password = formData.get('password')

  try {
    const authres = await signIn('credentials', {
      email: email,
      password: password,
      redirect: false
    })

    if (authres?.error) {newError(authres.error as string)} else router.push('/verified')
    if (authres?.ok) return router.push('/verified')

  } catch (error) {
    console.log(error)
    if (error instanceof AxiosError ) {
      if (error.response?.data.message){
      newError(error.response?.data.message)} else {newError(error.response?.data.msg)}
    }
  }}


  return (
    <div  className="justify-center flex items-center">
      
      <form onSubmit={handleSubmit} className="pt-52 border-3 place-self-end text-black h-screen">
      <h2 className="text-black pb-5"> Iniciar sesion </h2>
        <input type='email' placeholder='****@gmail.com' name='email' className='px-4 py-2 block mb-2 border-black border-2'/>
        <input type='password' placeholder='******' name='password' className='px-4 py-2 block mb-2 border-black border-2'/>
        <button type='submit' className='p-2 border-2 '>Login</button>
        {error && <div className="text-white bg-red-500 max-w-20">
          {error}
          </div>}
      </form>

    </div>
  )
}

export default Login