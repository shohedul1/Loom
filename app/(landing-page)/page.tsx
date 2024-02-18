import Navbar from '@/components/navbar/navbar';
import React from 'react'
import FirstSection from './_components/first-section';
import Sliders from './_components/slider/slider';
import SecondSection from './_components/second-section';
import ThirdSection from './_components/third-section';
import FourtSection from './_components/fout-section';
import FiveSection from './_components/five-section';
import SixSection from './_components/six-section';
import SevenSection from './_components/seven-section';
import EightSectiton from './_components/eight-section';
import NineSection from './_components/nine-section';
import TenthSection from './_components/tenth-section';
import ButtomCard from './_components/buttom-card';
import ButtomSection from './_components/bottom-section';
import Footer from './_components/footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <Sliders />
      <SecondSection />
      <ThirdSection />
      <FourtSection/>
      <FiveSection/>
      <SixSection/>
      <SevenSection/>
      <EightSectiton/>
      <NineSection/>
      <TenthSection/>
      <ButtomCard/>
      <ButtomSection/>
      <Footer/>
    </div>
  )
}

export default LandingPage;