import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedToday = () => {
  return (

    <div className="relative mt-10 bg-[#fffef4] pt-10 sm:pt-0 mb-10 px-5 py-5">
      <h2 className="text-3xl font-Roboto font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-sky-400 to-sky-600 sm:text-4xl py-3 md:border-l md:border-l-sky-500 md:px-2">today's picked</h2>
     
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
    <div className="content">
        <div className="flex items-center gap-3">
          <hr className="w-10 bg-orange-500 border "/>
        </div>
        <p className="text-lg lg:text-xl xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 ">
          Top Gun: Maverick
        </p>
        <p className="mt-5 md:text-md">
        After more than thirty years of service as one of the Navy’s top aviators and dodging the advancement in rank that would ground him Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.
        </p>
        <div className="flex gap-4 mt-10">
       
        <Link href="/movie/8">
          <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-sky-300 to-rose-300 hover:from-pink-500 hover:to-sky-300  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">View
            <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-rose-300 to-sky-300 "></span>
           </button>
        </Link>
          </div>
    
      </div>
      <div className="relative sm:mt-0 mt-10 px-6 sm:px-0">
          <div className='w-full h-full relative'>
           <Image src={require('../public/pickedBack.jpg')} layout="responsive" width={100} height={60} unoptimized={true}/>   
               <div className='absolute bottom-8 left-8 w-[15%] h-[15%] hidden md:block'>
                  <Image src={require('../public/picked.jpg')} layout="responsive" width={60} height={90} unoptimized={true}/>    
               </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default FeaturedToday