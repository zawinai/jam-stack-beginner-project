import React from 'react'

const DetailsBudget = ({movie, props}) => {
  return (
     <div className='flex felx-row justify-between items-center border-b py-2'>
          <h2 className='text-2xl font-semibold border-l-4 border-l-sky-700 px-2 py-1'>
              {props}
          </h2>
          <div>
               {
                    props == "Budget" ? movie.attributes.budget :  movie.attributes.revenue == 0.0 ? 'TBD' : movie.attributes.revenue
               }
          </div>
     </div>
  )
}

export default DetailsBudget