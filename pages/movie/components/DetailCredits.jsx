import React from 'react'

const DetailsCredits = ({movie}) => {
  return (
     <div className='flex felx-row justify-between items-center border-b py-2'>
          <h2 className='text-2xl font-semibold border-l-4 border-l-sky-700 px-2 py-1'>
               Keywords
          </h2>
          <div className='flex flex-row items-center gap-1'>
               {
                    eval(movie.attributes.credits).slice(0,5).map((n, index) => (
                         <div key={index}>
                              <p className='text-sm'>
                                   {n.name}/
                              </p>
                         </div>
                    ))
               }
          </div>
     </div>
  )
}

export default DetailsCredits