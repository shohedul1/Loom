import Navbar from '@/components/navbar/navbar';
import React from 'react'
import FirstSection from './_components/first-section';
import SecondSection from './_components/second-section';
import ThirdSection from './_components/third-section';
import FourthSection from './_components/four-section';
import Feature from './_components/features-section';
import FifthSection from './_components/fifth-section';
import Footer from './_components/footer';
import ButtomSection from './_components/bottom-section';
import ButtomCard from './_components/buttom-card';
import Quote from './_components/quote';
import Explore from './_components/explore';
import TenthSection from './_components/tenth-section';
import Slider from './_components/slider';

const TeamAlignment = () => {
  return (
    <div>
        <Navbar/>
        <FirstSection/>
        <SecondSection/>
        <Feature/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        <Quote/>
        <Explore/>
        <Slider/>
        <TenthSection/>
        <ButtomCard/>
        <ButtomSection/>
        <Footer/>
    </div>
  )
}

export default TeamAlignment;