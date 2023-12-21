"use client"

import axios, {AxiosError} from "axios"
import { FormEvent, useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

function Register() {

  const [error, newError] = useState()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)

  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password')

  try {
    const res = await axios.post('api/auth/signup', {name, email, password})
    console.log(res)

    const authres = await signIn('credentials', {
      email: res.data.email,
      password: password,
      redirect: true
    })

  } catch (error) {
    console.log(error)
    if (error instanceof AxiosError ) {
      if (error.response?.data.message){
      newError(error.response?.data.message)} else {newError(error.response?.data.msg)}
    }
  }}


  return (
    <div className="justify-center flex items-center ">
      
      <form onSubmit={handleSubmit} className=" border-3 place-self-end text-black h-screen pt-52">
      <h2 className="text-black pb-5"> Registrarse </h2>
        <input type='text' placeholder='Nombre de usuario' name='name' className='px-4 py-2 block mb-2 border-black border-2' />
        <input type='email' placeholder='****@gmail.com' name='email' className='px-4 py-2 block mb-2 border-black border-2'/>
        <input type='password' placeholder='******' name='password' className='px-4 py-2 block mb-2 border-black border-2'/>
        <button type='submit' className='p-2 border-2 '>Register</button>
        {error && <div className="text-white bg-red-500 max-w-20">
          {error}
          </div>}
      </form>

    </div>
  )
}

export default Register