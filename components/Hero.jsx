import React, { useState, useEffect } from 'react'

import Image from 'next/image'

const Hero = () => {

  
  const [ wp, setWp ] = useState(0)

  useEffect(() => {
    const wd = typeof window !== 'undefined' && window

    const checkWd = () => {
         const update = typeof wd !== 'undefined' && wd.pageYOffset
         setWp(update)
        }
        
        checkWd()

    typeof wd !== 'undefined' && wd.addEventListener('scroll', checkWd )


  },[])



  return (
    <div className='pb-20'>
    <div className='fixed top-0 left-0 bg-gradient-to-t from-white via-white to-gray-300 block w-full h-full'>
      <Image src={require("../public/images/back.jpg")} layout="responsive"  width={1900} height={1000} className="mix-blend-overlay" unoptimized={true}/>
    </div>
    <div className={`${wp > 0 ? `opacity-0 delay-100` : 'opacity-100'}  absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-44 text-center sm:top-40`}>
      <h1 className='font-extrabold text-5xl font-Roboto'>
        Welcome to <span className='bg-clip-text bg-gradient-to-r text-transparent from-sky-300 to-rose-300'>SMDB</span>
      </h1>
      <p className='font-thin font-Roboto'>
        SMDB is an opensource movie review sharing platform where movie lovers can share their reviews & rate openly to the world.
      </p>
    </div>
  </div>
  )
}

export default Hero