import Cta from '@/components/Cta'
import Faq from '@/components/Faq'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Stats from '@/components/Stats'
import Testimonial from '@/components/Testimonial'
 
 
import React from 'react'

const Home = () => {
  return (
   <>
    <div className='grid-background'></div>
      <Hero/>
      <Features/>
      <Stats/>
      <HowItWorks/>
      <Testimonial/>
      <Faq/>
      <Cta/>
          
    </>
  )
}

export default Home
