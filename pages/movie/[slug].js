import React, { useState } from 'react'
import { fetcher } from '../../lib/api'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useFetchUser } from '../../lib/authContext'
import { getTokenFromLocalCooie, getTokenFromServerCookie } from '../../lib/auth'

// Components
import Modal from '../../components/Modal'
import Description from './components/Description'
import SlugFooter from '../../components/SlugFooter'
import ReviewCard from './components/ReviewCard'
import Backdrop from './components/Backdrop'
import BackBtn from './components/BackBtn'
import ReviewForm from './components/ReviewForm'
import DetailsCompanies from './components/DetailsCompanies'
import DetailsCredits from './components/DetailCredits'
import DetailsKeywords from './components/DetailsKeywords'
import DetailsBudget from './components/DetailsBudget'
import Details from './components/Details'

const MovieDetails = ({movie, jwt}) => {

     const router = useRouter()

     // Will replace with useReducer soon

     const [ open, setOpen ] = useState(true)

     const [ modal, setModal ] = useState(false)

     const [ editReview, setEditReview ] = useState('')

     const [ editTitle, setEditTitle ] = useState('')

     const [ editRating, setEditRating ] = useState('')

     const [ id, setId ] = useState(null)

     const { user } = useFetchUser()
    
          
          const handleEdit = async() => {
               try{
           
                    const res = await fetcher(`http://localhost:1337/api/reviews/${foundUpdate.id}`, {
                         method : 'PUT',
                         headers : {
                              'Content-Type' : 'Application/json',
                              Authorization : `Bearer ${jwt}`
                         },
                         body : JSON.stringify(
                              {
                                   data : {
                                        review : editReview,
                                        reviewer : user,
                                        movie : movie.id,
                                        user_reviewer : user,
                                        movie_title : movie.attributes.title,
                                        review_title : editTitle,
                                        rating : editRating
                                   }
                              }
                         ) 
                    })

                    if(res){
                         router.reload()
                    }

                  }catch(e){
                       console.log(e);
                  }
          
     }

     

     
  return (
    <div className='flex flex-col gap-3 pb-10 bg-gradient-to-t from-transparent to-gray-100' >
          {/* Wiil fix this ugly prop drilling */}
          <Modal modal={modal} setModal={setModal} id={id} setId={setId} editReview={editReview} setEditReview ={setEditReview} editTitle={editTitle} setEditTitle={setEditTitle} editRating={editRating} setEditRating={setEditRating} handleEdit={handleEdit}/>
          <BackBtn/>

          <div>
               <Backdrop movie={movie}/>
               {
                    movie && movie.attributes ? 
                    <Description movie={movie} />
                    :
                    <P>Loading...</P>
               }
          </div>

          <div className='bg-gray-300 p-5 rounded-xl w-3/4 md:w-1/2 mx-auto'>
               <p className='font-[600] font-Roboto'>
                    {movie.attributes.overview}
               </p>
          </div>

          <div className='flex flex-col gap-1 px-10'>

               {/* i will DRY this later */}
               <DetailsCompanies movie={movie}/>
               <DetailsCredits movie={movie}/>
               <DetailsKeywords movie={movie}/>
               
               <DetailsBudget movie={movie} props="Revenue"/>
               <DetailsBudget movie={movie} props="Budget" />

               <div className='flex flex-row items-center'>
                    <h2 className='text-2xl font-semibold border-l-4 border-l-sky-700 px-2 py-1'>
                         User Reviews <span className='text-base font-thin'>({ movie.attributes.reviews.data.length ? movie.attributes.reviews.data.length > 1 ? movie.attributes.reviews.data.length + " reviews" : movie.attributes.reviews.data.length +" review" : "no review yet"})</span>
                    </h2>
                    {
                         open ? 
                         <button onClick={() => setOpen(!open)} >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                         </button>
                         :
                         <button onClick={() => setOpen(!open)}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                              </svg>
                         </button>

                    }
               </div>
               <div>
                    {
                         user ? null : 
                         !open ?  null : <p className='text-md font-light font-Roboto text-center'>Please  <span className='cursor-pointer text-blue-500'><Link href="/login">Log in</Link></span> to add reviews</p>
                    }
                    {
                         user &&
                         open ? 
                              <ReviewForm movie={movie}/>
                         :
                         null
                    }
                    <div className='flex flex-col gap-4'>

                         {
                              open ?         
                                   movie.attributes.reviews.data.map((r) => (
                                        <ReviewCard r={r} key={r.id} editReview={editReview} setEditReview={setEditReview} setEditTitle={setEditTitle} setEditRating={setEditRating} setModal={setModal}/>
                                   ))
                              :
                              
                              null
                         }
                    </div>
               </div>
          
          </div>
          <SlugFooter/>
  a  </div>
  )
}

export default MovieDetails


export async function getServerSideProps({req, params}){

     const { slug } = params

     const jwt = typeof window !== 'undefined' ? getTokenFromLocalCooie : getTokenFromServerCookie(req)

     const res = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/movies/${slug}?populate=*`, jwt ? {
          headers : {
               Authorization : `Bearer${jwt}`
          }
     }: '')
     // const res = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/movies/${slug}`)


     if(res.data){
          return {
               props : {
                    movie : res.data,
                    jwt : jwt ? jwt : ''
               }
          }
     }else{
          return {
               props : {
                    error : res.error.message
               }
          }
     }

}
