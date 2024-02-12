import Navbar from '@/components/navbar/navbar';
import React from 'react'
import FirstSection from './_components/first-section';
import Sliders from './_components/slider/slider';

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <FirstSection/>
        <Sliders/>
        
    </div>
  )
}

export default LandingPage