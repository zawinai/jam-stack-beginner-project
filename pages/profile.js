import React, { useState } from 'react'
import Image from 'next/image'
import { useFetchUser } from '../lib/authContext'
import { fetcher } from '../lib/api'
import { getTokenFromServerCookie } from '../lib/auth'

import { Router } from 'next/dist/client/router'
import ReviewListCard from '../components/ReviewListCard'

const Profile = ({res}) => {

     const { user } = useFetchUser()
     
  return (
    <div className='flex flex-col flex-grow min-h-screen items-center gap-3 md:w-full w-[calc(90%_-_1rem)] mx-auto py-10 shadow-lg'>
          <h1 className='text-2xl font-semibold font-Roboto'>
               Welcome <span className='text-blue-500'>{user && user}</span>
          </h1>
          <div className='w-full bg-gray-600'>
               <div className=' bg-gray-500 flex flex-row items-center justify-between py-3 px-6'>
                    <h1 className='text-2xl text-white font-Roboto font-semibold'>
                         Your previous reviews
                    </h1>
                    <p className='text-md font-bold text-white'>
                         {res.reviews.length} reviews
                    </p>
               </div>
               {
                    res.reviews.map((r) => (
                         <ReviewListCard r={r} key={r.id} res={res}/>
                    ))
               }
          </div>
    </div>
  )
}

export default Profile

export async function getServerSideProps({req}){
     const jwt = getTokenFromServerCookie(req)

     // console.log(req.headers.cookie.split(';'));

     if(!jwt){
          return {
               redirect : {
                    destination : "/"
               }
          }
     }else{
          const res = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?populate=reviews`, {
               headers : {
                    Authorization : `Bearer ${jwt}`
               }
          })

          return {
               props : {
                    res
               }
          }
     }
}





