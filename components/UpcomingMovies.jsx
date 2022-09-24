
import Image from 'next/image'

const upcomingMovies = [
  {
    id: 1,
    name: 'Hellraiser',
    imageSrc: require('../public/new1.jpg'),
    release_date: "Oct 4, 2022",
  },
  {
    id: 2,
    name: 'Strange World',
    imageSrc: require('../public/new2.jpg'),
    release_date: "Nov 2, 2022",
  },
  {
    id: 3,
    name: 'Baby Lon',
    imageSrc: require('../public/new_3.jpg'),
    release_date: "Dec 25, 2022",
  },
  {
    id: 4,
    name: 'Secret Invasion',
    imageSrc: require('../public/new_1.jpg'),
    release_date: "2023",
  },
]

export default function UpcomingMovies() {
  return (
    <div className="bg-[#333]">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-Roboto font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-sky-400 to-sky-600 sm:text-4xl py-3 md:border-l md:border-l-sky-500 md:px-2">Movies on theaters soon</h2>

        <div className="mt-6 grid grid-cols-3 gap-y-28 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {upcomingMovies.map((movie) => (
            <div key={movie.id} className="bg-slate-200 border-b rounded-lg">

              <div className="w-full h-full">
                <Image src={movie.imageSrc} layout="responsive" width={80} height={130} unoptimized={true}/> 

              <div className='px-2'>
                <h1 className='text-sm font-semibold font-Roboto tracking-wider'>
                  {movie.name}
                </h1>
                <div className='flex flex-row items-center gap-2 py-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                  <span className="font-semibold text-xs md:text-sm">{movie.release_date}</span> 
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

