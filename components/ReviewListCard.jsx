import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { fetcher } from '../lib/api'
import { useRouter } from 'next/router'

const ReviewListCard = ({r}) => {

     const [ id, setId ] = useState(undefined)

     const router = useRouter()

     const pusher = async(movie) => {
          const data = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/movies?filters[title][$eqi]=${movie}`)

          if(data){
               await setId(data.data[0].id);
               if(id){
                    router.push(`movie/${id}`)

               }
          }

     }
     

  return (
          <div className="my-auto mx-auto hover:scale-95 active:bg-gray-700" key={r.id} onClick={() => pusher(r.movie_title)}>
               <div className='py-10'>
                 <div className="max-w-md mx-auto xl:max-w-5xl lg:max-w-5xl md:max-w-2xl bg-gray-700 max-h-screen shadow-2xl flex-row rounded relative">
                   <div className="p-2 bg-gray-800 text-blue-900 rounded-t flex flex-row items-center justify-between">
                     <h1 className="text-white  md:text-2xl capitalize">{r.movie_title}</h1>
                     <div className='flex flex-row items-center gap-3'>
                         <p className='text-white font-semibold'>
                              <span className='font-thin text-sm text-gray-300'>Your rated</span> {r.rating}/10
                         </p>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                         </svg>
                     </div>
                   </div>
                   <div className="p-2 w-full h-full overflow-y-auto text-gray-100">
                     <div className='text-center'>
                          <h1 className='text-xl'>
                              <q>
                                   {r.review_title}
                              </q>     
                          </h1>
                     </div>
                     <div>
                         <p className="text-justify py-2">
                            {r.review}
                         </p>
                         <div className='text-end text-gray-400'>
                              <p>{r.updatedAt.slice(0,10)}</p>
                         </div>
                     </div>
                   </div>
                 </div>
               </div>
        </div>
  )
}

export default ReviewListCard
