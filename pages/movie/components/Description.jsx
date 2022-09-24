import React from 'react'

const Description = ({movie}) => {
  return (
     <div  className='flex md:flex-row flex-col md:justify-between px-10'>
     <div className='flex flex-col gap-3'>
          <div className='mb-3'>
               <h2 className='text-4xl font-extrabold font-Roboto text-gray-800'>
                    {movie.attributes.title}
               </h2>
               <div className='flex flex-row gap-1 items-center text-sm text-gray-600'>
                    <p>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                         </svg>
                    </p>
                    <p className='text-gray-700 font-semibold'>
                         {movie.attributes.release_date} 
                    </p>
                    <p>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>
                    </p>
                    <p className='text-gray-700 font-semibold'>{parseInt(movie.attributes.runtime)} <span className='font-thin'>mins</span></p>
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                    </svg>
                    </p>
                    <p className='text-gray-700  font-semibold'>
                         {movie.attributes.original_language}
                    </p>
               </div>
          </div>
          
          <div className=''>
               <ul className='flex flex-row gap-1'>
                    {
                         eval(movie.attributes.genres).map((g, index) => (
                              <li key={index} className="border border-gray-500 text-center text-xs rounded-xl px-2 py-1 text-gray-700 hover:text-gray-500 hover:border-gray-400 cursor-pointer">
                                   {g.name}
                              </li>
                         ))
                    }
               </ul>
          </div>

     </div>

     <div className='flex flex-col gap-1 pt-3'>
          <p>
               Vote average <span className='font-semibold'>{parseInt(movie.attributes.vote_average)}</span>/10
          </p>
          <div className='flex flex-row'>
          {
               Array.from({length: parseInt(movie.attributes.vote_average)}, (item, index) => index + 1).map((v, index) => (
                         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-yellow-500" key={index}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                         </svg>
               ))
          }
          </div>
     </div>
     
</div>
  )
}

export default Description