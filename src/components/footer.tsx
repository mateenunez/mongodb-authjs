"use client"
import { useSession } from "next-auth/react"
import React from 'react'
import Link from 'next/link'


function Footer() {
  const {data: status } = useSession()
  console.log(status)

  return ( 
    <div className="pt-12">
        <div className={status ? ("text-sm text-white flex justify-between bg-gradient-to-r from-emerald-500 to-teal-400 p-5") : ("text-sm text-white flex justify-between bg-gradient-to-r from-red-500 to-orange-500 p-5")}>

            <Link href="/"><h1>Sobre mi</h1></Link>

            <Link href="https://github.com/mateenunez?tab=repositories"><h1>GitHub</h1></Link>

            <h1>Otras redes</h1>
        </div>
    </div>
  )
}

export default Footer