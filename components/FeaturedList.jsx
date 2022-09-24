import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'



const FeaturedMovies = () => {

  const movies = [
    {
      id : 1,
      genres : 'Action',
      n_result : 344
    },
    {
      id : 2,
      genres : 'Asian',
      n_result : 111
    },
    {
      id : 3,
      genres : 'Apocalypse',
      n_result : 58
    },
    {
      id : 4,
      genres : 'Drama',
      n_result : 87
    },
    {
      id : 5,
      genres : 'Horror',
      n_result : 77
    },
    {
      id : 6,
      genres : 'Mystery',
      n_result : 37
    },
    {
      id : 7,
      genres : 'War',
      n_result : 37
    },
    {
      id : 8,
      genres : 'R rated',
      n_result : 37
    },
    {
      id : 9,
      genres : 'Superhero',
      n_result : 37
    },
    {
      id : 10,
      genres : 'Comedy',
      n_result : 37
    },
    {
      id : 11,
      genres : 'Sci-fi',
      n_result : 37
    },
  ]

  const [ genres, setGenres ] = useState('Sci-fi')

  return (
     <div className="bg-white z-20">
     <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
       <div>
         <h2 className="text-3xl font-Roboto font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-sky-400 to-sky-600 sm:text-4xl md:border-l md:border-l-sky-500 md:px-2">What to watch</h2>
         <p className="mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officia vitae dolore sit saepe adipisci laboriosam voluptatibus, rem hic quaerat, fuga eaque temporibus minima at aliquam cumque ipsa reprehenderit a?</p>
   
         <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {
              movies.map((m) => (
              <div className="border px-4 py-5 border-gray-200 pt-4 hover:scale-95 hover:shadow-lg" key={m.id} onClick={() => setGenres(m.genres)}>
                <dt className="font-medium text-gray-900">{m.genres}</dt>
                <dd className="mt-2 text-xs text-gray-500">Found results - <span className='font-semibold'>{m.n_result}</span></dd>
              </div>
              ))
            }
         </dl>
       </div>
       <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 relative">
        <div className='absolute -top-12 z-50 flex flex-row items-center gap-3 cursor-pointer'>
          <Link href="/movies">
            <h1 className='text-xl align-middle'>
              {genres} 
            </h1>
          </Link>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        {/* TBD */}
          <Image src={require('../public/poster.jpg')} layout="responsive" width={20} height={30} unoptimized={true}/>
          <Image src={require('../public/scifi_1.jpg')} layout="responsive" width={20} height={30} unoptimized={true}/>
          <Image src={require('../public/scifi_2.jpg')} layout="responsive" width={20} height={30} unoptimized={true}/>
          <Image src={require('../public/scifi_3.jpg')} layout="responsive" width={20} height={30} unoptimized={true}/>
       </div>
     </div>
   </div>
  )
}

export default FeaturedMovies


