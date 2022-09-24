import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { fetcher } from '../lib/api'
import { setToken } from '../lib/auth'
import { useUser } from '../lib/authContext'

const Register = () => {

     const router = useRouter()

     const [ data, setData ] = useState({email : '', password : '', username : ''})

     const { user, loading } = useUser()

     const handleSub = async(e) => {
          e.preventDefault()


          const res = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local/register`, {
            method : 'POST',
            headers : {
               'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
               email : data.email,
               username : data.username,
               password : data.password
            })   
          })

          setToken(res)
          router.redirect('/movies')

     }

     const handleChange = (e) => {
          setData({...data, [e.target.name] : e.target.value})
     }

  return (
    <div className='bg-slate-300 flex flex-col min-h-screen justify-center items-center md:w-[calc(50%_-_1rem)] w-[calc(90%_-_1rem)] mx-auto py-10 shadow-lg'>

     <h2 className='text-3xl font-bold bg-clip-text bg-gradient-to-r text-transparent from-pink-400 to-sky-600 pb-4'>
          Register
     </h2>

     <form className='flex flex-col gap-10 justify-between items-center' onSubmit={handleSub}>
          <input type="email" placeholder='email' className='px-2 py-1 rounded-lg outline-none' name='email' onChange={(e) => handleChange(e)}/>
          <input type="text" placeholder='username' className='px-2 py-1 rounded-lg outline-none' name='username' onChange={(e) => handleChange(e)}/>
          <input type="password" placeholder='password' className='px-2 py-1 rounded-lg outline-none' name='password' onChange={(e) => handleChange(e)}/>
          <p className='text-gray-700'>
               Already have an account? <Link href="/login"><span className='text-blue-500 font-semibold cursor-pointer'>Login</span></Link>
          </p>
          <button className='bg-white text-sm px-1 py-2 font-semibold tracking-wider text-gray-700 hover:bg-slate-400 active:bg-slate-500 active:text-white w-[80px] mx-auto rounded-lg'>
               Submit
          </button>
     </form>
    </div>
  )
}

export default Register