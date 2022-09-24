import React, { useState } from 'react'
import { fetcher } from '../../../lib/api'
import { useFetchUser } from '../../../lib/authContext'

const ReviewForm = ({movie}) => {

     const {user} = useFetchUser()

     const [ review, setReview ] = useState({value : ''})

     const [ title, setTitle ] = useState({value : ''})

     const [ rating, setRating ] = useState(0)

     const handleSub = async(e) =>{
          e.preventDefault()

          // const jwt = getTokenFromLocalCooie()

          try{

               await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/reviews`, {
                    method : 'POST',
                    headers : {
                         'Content-Type' : 'Application/json',
                         Authorization : `Bearer ${jwt}`
                    },
                    body : JSON.stringify(
                         {
                              data : {
                                   review : review.value,
                                   reviewer : user,
                                   movie : movie.id,
                                   user_reviewer : user,
                                   movie_title : movie.attributes.title,
                                   review_title : title.value,
                                   rating : rating
                              }
                         }
                    ) 
               })
               router.reload()

          }catch(e){
               console.log(e);
          }

     }

     const handleChange = (e) => {
          setReview({ value : e.target.value})
     }

  return (
     <form className='border border-gray-400 bg-slate-200 py-2 px-3 mb-5 relative' onSubmit={handleSub}>
          <div className='px-3 py-3'>
               <div className='w-1/2 mx-auto'>
                 <div className="relative mt-1 rounded-md shadow-sm flex flex-col gap-3">
                    <div className='flex flex-row mx-auto'>
                         {
                              Array(10).fill().map((_, index) => (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill={`${rating >= index + 1 ? 'currentColor' : 'white' }`} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500" key={index} onClick={() => setRating(index + 1)}>
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                              ))
                         }
                    </div>
                   <input type="text" name="price" id="title" className="block outline-none w-1/2 mx-auto py-3 rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Add title" onChange={(e) => setTitle({value : e.target.value})}/>
                 </div>
               </div>
          </div>
          <textarea rows={8} placeholder='Add a comment' className='bg-white w-full bg-transparent outline-none px-1 py-1' onChange={(e) => handleChange(e)} />
               <button type='Submit' className='bg-sky-500 text-gray-200 px-4 py-1 rounded-lg hover:bg-sky-400 hover:text-gray-400 absolute -bottom-9 right-5'>
                    Add
               </button>
     </form>
  )
}

export default ReviewForm