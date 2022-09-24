import React, { createContext, useState, useEffect, useContext } from "react";
import { getUserFromLocalCookie } from "./auth";

let userState;

const Auth = createContext({
     user : null,
     loading : false
})


export const ContextProvider = ({value,children}) => {

     const { user } = value;

     useEffect(() => {
          if(!userState && user){
               userState = user
          }
     },[])

     return (
     <Auth.Provider value={value}>
          {children}
     </Auth.Provider>
)}


export const useUser = () => useContext(Auth)

export const useFetchUser = () => {
     const [ data, setUser ] = useState({
          user : userState || null,
          loading : userState === undefined
     })

     useEffect(() => {
          if(userState !== undefined){
               return
          }

          let isMounted = true

          const resolveUser = async() => {
               const user = await getUserFromLocalCookie()
     
               if(isMounted){
                    setUser({user , loading : false})
               }

          }

          resolveUser()


          return () => {
               isMounted = false
          }
     },[])

     return data
}




