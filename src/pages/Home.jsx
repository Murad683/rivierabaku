import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import HomeMenuShowcase from '../components/HomeMenuShowcase'
import HomeAtmosphere from '../components/HomeAtmosphere'
import HomeInfoSummary from '../components/HomeInfoSummary'
import HomeReservationCTA from '../components/HomeReservationCTA'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
      <Hero />
      <HomeMenuShowcase />
      <HomeAtmosphere />
      <HomeReservationCTA />
      <HomeInfoSummary />
      <About />
      <Testimonials />
    </>
  )
}

export default Home
