import React, { useState } from 'react'
import Card from '../components/Card'
import useSWR from 'swr'
import Link from 'next/link'

import { fetcher } from '../lib/api'

import { useFetchUser } from '../lib/authContext'
import Modal from '../components/Modal'

const Films = ({movies}) => {

     const { user } = useFetchUser()
     
     const [ pageIndex, setPageIndex ] = useState(1)
     
     const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/movies?pagination[page]=${pageIndex}&pagination[pageSize]=10`, fetcher, { fallbackData : movies})     

     const [ modal, setModal ] = useState(false)
     
  return (
    <div className='pt-10'>
     <div className='text-center'>
          <h1 className='bg-clip-text text-transparent bg-gradient-to-tr from-cyan-400 to-sky-500 py-10 text-5xl font-extrabold text-center font-Roboto'>
               Hello { user ? user : "There!" }
          </h1>
          <div className='flex flex-row justify-center items-center gap-5'>
               <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
               </Link>
               {
                    user ?
               <Link href="/profile">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
               </Link>
                    
                    :

               <Link href="/register">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
               </Link>

                    
               }

          </div>
     </div>
     <Modal modal={modal} setModal={setModal}/>
     <ul className='flex flex-row flex-wrap justify-center gap-3 pt-8'>
          {
               !data ? 
               <p>Loading..</p>
               : 
               !data.data ? 
               <p>Loading..</p>
               : 
               data.data.map((movie) => (
                    <Card movie={movie} key={movie.id} setModal={setModal}/>
               )) 
          }
     </ul>
     <div className='flex flex-row justify-center gap-1 py-5'>
          {
               !data ?
               null
               :
               !data.meta ?
               null
               :
               !data.meta.pagination ?
               null
               :
               Array.from({length: data.meta.pagination.pageCount}, (item, index) => index + 1).map((page, index) => (
                    <div key={index}>
                         <button className={`px-3 py-1 font-semibold font-Sono ${ data.meta.pagination.page == page ? "border-[2px] border-blue-600 rounded-lg text-gray-600" : "bg-slate-400 text-white hover:bg-slate-300 hover:text-gray-600 rounded-lg"}`} onClick={() => setPageIndex(page)}>
                              {page}
                         </button>
                    </div>
               ))
          }
     </div>
    </div>
  )
}

export default Films

export async function getStaticProps(){
     const res = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/movies?pagination[page]=1&pagination[pageSize]=10`)

     return{
          props : {
               movies : res.data
          }
     } 
}
