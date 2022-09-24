import React,{ useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { useFetchUser } from '../lib/authContext'
import { unsetToken } from '../lib/auth'

const Nav = () => {

     const router = useRouter()

     const { user } = useFetchUser()

     const [ open, setOpen ] = useState(false)

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
     <div className={`${wp > 0 ? 'bg-white text-[#333] shadow-xl' : 'text-[#333]'} ${router.pathname == '/movies' || router.pathname == '/search' ? "hidden" : ""}  flex flex-row justify-between items-center px-6 md:px-52 py-3 sticky top-0 z-[1000]`}>
     <Link href="/">
          <div className='flex flex-row items-center gap-[0.5px]'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
               </svg>
               <h1 className='text-3xl font-extrabold cursor-pointer font-Owl'>
                   SMDB
               </h1>
          </div>
     </Link>
     <div className='flex flex-row justify-around items-center gap-6 font-Roboto font-semibold tracking-wider'>
          <Link href="/search">
               <h2 className='cursor-pointer hover:text-white hover:scale-125 delay-100'>
                    Search
               </h2>
          </Link>
          <Link href="/movies">
               <h2 className='cursor-pointer'>
                    Movies
               </h2>
          </Link>
          <div>
          <div className="relative inline-block text-left">
  <div>
    <button type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => setOpen(!open)}>
     {
          !user ? "Join Us!" : user
     }
      
      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </button>
  </div>

  <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${open ? 'visible' : 'invisible'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
    <div className="py-1" role="none">
     {
          user ? 
          <Link href="/profile" >
               <p className="text-gray-700 block px-4 py-2 text-sm cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0">
                    Profile
               </p>
          </Link>
          :
          <div>
               <Link href="/login">
                    <p className="text-gray-700 block px-4 py-2 text-sm cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-1">Sign in</p>
               </Link>

               <Link href="/register">
                   <p className="text-gray-700 block px-4 py-2 text-sm cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-2">Sign up</p>
               </Link>
          </div>

     }
      {
          user ? 
        <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3" onClick={() => unsetToken()}>Log out</button>
      :
      null
      }
    </div>
  </div>
</div>
          </div>
     </div>
    </div>
  )
}

export default Nav

{/* <div className={`${wp > 0 ? 'bg-white text-[#333] shadow-xl' : 'text-[#333]'} ${router.pathname == '/movies' ? 'bg-gray-100 static' : ''} flex flex-row justify-between items-center px-6 md:px-52 py-3 sticky top-0 z-20`}> */}