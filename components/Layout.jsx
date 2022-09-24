import React from 'react'
import Nav from './Nav'
import { useRouter } from 'next/router'
import { ContextProvider } from '../lib/authContext'

const Layout = ({user, loading, children}) => {

  const router = useRouter()


  return (
    <ContextProvider value={{user, loading}}>
      <div  className={`min-h-screen flex flex-col flex-grow ${ router.pathname == '/movies' ? 'bg-[#333]' : ''}`}>
       <Nav/>
         <div className={`flex flex-col ${router.pathname == '/login' ? 'flex-grow justify-center items-center' : ''}`}>
              {
                children
              }
         </div>
      </div>
    </ContextProvider>
  )
}

export default Layout