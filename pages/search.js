import React from 'react'
import { useRouter } from 'next/router'

// TBD

const Search = () => {

     const router = useRouter()

  return (
    <div className='bg-slate-100 fle flex-grow min-h-screen relative'>
     <div className='absolute top-5 left-4 cursor-pointer' onClick={() => router.back()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
     </div>
     <div className='w-1/2 mx-auto pt-20'>
     <div className="pt-2 relative mx-auto text-gray-600">
        <input className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search"/>
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
     </div>
    </div>
  )
}

export default Search