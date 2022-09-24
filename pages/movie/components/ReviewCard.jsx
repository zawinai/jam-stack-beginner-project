import React, { useState } from 'react'
import { useFetchUser } from '../../../lib/authContext'
import { fetcher } from '../../../lib/api'

const ReviewCard = ({r, setEditReview, setEditTitle, setEditRating, setModal}) => {

     const [ openMenu, setOpenMenu ] = useState(true)

     const [ foundUpdate , setFoundUpdate ] = useState({})

     const {user} = useFetchUser()

     const handleDelete = async(id) => {

          try{ 

               const res = await fetcher(`http://localhost:1337/api/users?populate=*&[filters][username][$eqi]=${user}`)

               // console.log(res);

               const found = res[0].reviews.find((r) => r.id == id)

               if(found){
                    await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/reviews/${id}`, {
                         method  :"DELETE"
                    })

                    router.reload()
               }else{
                    console.log('Not found');
               }
          }catch(e){
               console.log(e);
          }
     }


     const handelEditBtn = async(id) => {
          try{

               // process env doesn't load
      
               const res = await fetcher(`http://localhost:1337/api/users?populate=*&[filters][username][$eqi]=${user}`)
         
                  const found = res[0].reviews.find((r) => r.id == id)
                  console.log(found);
         
                  if(found){
                       setFoundUpdate(found)
                       setEditReview(found.review)
                       setEditTitle(found.review_title)
                       setEditRating(found.rating)
                       setModal(true)
                  }else{
                   console.log("not found");
                  }
         
             }catch(e){
                  console.log(e);
             }
          }

  return (
     <div className="group relative mt-4 ml-4 bg-slate-200 bg-opacity-50 py-5 px-3" key={r.id}>
     <div>
        <p className='bg-slate-300 w-[50px] h-[50px] rounded-full px-1 py-2 font-semibold text-gray-700 text-lg text-center'>
             {r.attributes.reviewer}
        </p>
     </div>
     <div className='absolute top-8 left-12 pl-5 text-gray-600'>
        <p>21.1.10</p>
     </div>
   
     <div className="left-0 -mt-[2px] flex flex-col group-focus-within:visible relative">
        <div className="ml-4 -mb-[1px] inline-block overflow-hidden">
         <div className="h-3 w-3 origin-bottom-left rotate-45 transform border border-gray-400 bg-neutral-100"></div>
       </div>
   
       <div className="flex flex-col rounded-md border border-gray-400 bg-neutral-100 px-2 py-3 shadow-lg">
        <div className='flex flex-row items-center gap-3'>
             <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-yellow-500">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
             </div>
             <div>
                  <p className='textsm font-semibold'>{r.attributes.rating}<span className='textsm font-thin'>/10</span></p>
             </div>
        </div>
        <h1 className='text-center textxl font-bold'>
             {r.attributes.review_title}
        </h1>
        <div>
             {r.attributes.review}
         </div>
         {
             r.attributes.reviewer == user ? 
              <div className='absolute -top-10 right-1'>
                  <button className='' onClick = {() => setOpenMenu(!openMenu)}>   
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                       </svg>
                  </button>
                  <div className={`${openMenu ? 'hidden' : 'block'} bg-gray-200 px-3 py-2 absolute top-4 right-2`}>
                       <button onClick={() => handleDelete(r.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                              <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                            </svg>
                       </button>
                       <button onClick={() => handelEditBtn(r.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                              <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                            </svg>
                       </button>
                  </div>
             </div>
   
                  :
   
                  null
   
         }
       </div>
     </div>
   </div>
  )
}

export default ReviewCard