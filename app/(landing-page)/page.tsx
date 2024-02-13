import Navbar from '@/components/navbar/navbar';
import React from 'react'
import FirstSection from './_components/first-section';
import Sliders from './_components/slider/slider';
import SecondSection from './_components/second-section';
import ThirdSection from './_components/third-section';
import FourtSection from './_components/fout-section';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <Sliders />
      <SecondSection />
      <ThirdSection />
      <FourtSection/>

    </div>
  )
}

export default LandingPage