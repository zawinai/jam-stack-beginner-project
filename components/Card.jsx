import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({movie, setModal}) => {

  const loadPoster = ({src}) => {
    // proess env does't load
    return `https://image.tmdb.org/t/p/original/${movie.attributes.poster_path}`
  }



  return (
    <div className='flex flex-col justify-between bg-black w-[calc(50%_-_1rem)] lg:md:w-[calc(20%_-_1rem)] md:w-[calc(20%_-_1rem)] sm:w-[calc(40%_-_1rem)]'>
      <Link href={'movie/'+ movie.id}>
        <div>
          <Image loader={loadPoster} src={`https://image.tmdb.org/t/p/original/${movie.attributes.poster_path}`} width={300} height={430} unoptimized={true}/>
          <div className='px-3'>
            <div className='flex flex-row items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <p className='text-gray-100'>{movie.attributes.vote_average}</p>
            </div>

            <h3 className='text-gray-200 font-extrabold font-Roboto break-words text-md'>
                 {movie.attributes.title}
            </h3>
          </div>

        </div>

    </Link>
        <div className='px-2 py-3 flex flex-col gap-2 justify-between'>


          <div className='mx-auto py-4'>
            <div className='flex flex-row items-center bg-slate-200 px-2 py-1 font-extrabold text-gray-900'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
              </svg>
              <p className='text-xs text-center'>
                Watch List
              </p>
            </div>
          </div>

          <div className='flex flex-row items-center justify-between px-2 text-gray-200'>
            <div className='flex flex-row items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>

              <h3 className='text-xs font-bold'>
                View trailer
              </h3>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </div>

        </div>
      </div>
  )
}

export default Card
