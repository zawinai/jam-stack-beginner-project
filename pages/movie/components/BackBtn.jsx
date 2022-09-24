import React from 'react'
import { useRouter } from 'next/router'

const BackBtn = () => {

     const router = useRouter()

  return (
     <button onClick={() => router.back()} className="bg-white w-[90px] px-3 py-1 flex flex-row flex-1 justify-around items-center rounded-md hover:bg-slate-200 active:bg-slate-600 active:text-white mt-10 ml-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-5">
               <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <span>Back</span>
     </button>
  )
}

export default BackBtn