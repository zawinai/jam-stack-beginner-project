import React from 'react'
import Image from 'next/image'

const Backdrop = ({movie}) => {

     const backdropLoader = ({src}) => {
          return `https://image.tmdb.org/t/p/original/${movie.attributes.backdrop_path}`
        }
        
       const posterLoader = ({src}) => {
          return `https://image.tmdb.org/t/p/original/${movie.attributes.poster_path}`
        }
           

  return (
     <div className='p-1 md:p-12'>
          <div className='bg-gradient-to-t from-white border-[2px] border-double border-gray-400 to-gray-700 relative'>
               <Image loader={backdropLoader} src={`https://image.tmdb.org/t/p/original/${movie.attributes.backdrop_path}`} className="mix-blend-overlay mx-auto" width={500} height={300} layout='responsive' unoptimized={true} priority/>
               <div className="absolute hidden md:block md:-bottom-10 md:left-10 w-[150px] h-[200px]">
                    <Image loader={posterLoader} src={`https://image.tmdb.org/t/p/original/${movie.attributes.poster_path}`} layout="fill" objectFit="contain" unoptimized={true} priority/>
               </div>
          </div>
     </div>
  )
}

export default Backdrop