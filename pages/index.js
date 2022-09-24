import Head from 'next/head'

import UpcomingMovies from '../components/UpcomingMovies'
import FeaturedMovies from '../components/FeaturedList'
import Footer from '../components/Footer'
import FeaturedToday from '../components/FeaturedToday'
import Hero from '../components/Hero'

export default function Home() {

  return (
      <div className='flex flex-col'>
        <Hero/>
        <div className='pt-40 z-50'>
          <FeaturedToday/>
          <UpcomingMovies/>
          <FeaturedMovies/>
          <Footer/>
        </div>
      </div>
  )
}

