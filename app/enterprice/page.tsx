import Navbar from '@/components/navbar/navbar'
import React from 'react'
import FirstSection from './_components/first-section'
import SecondSection from './_components/second-section'
import ThirdSection from './_components/third-section'
import FourthSection from './_components/fourth-section'
import Quote from './_components/quote'
import FifthSection from './_components/fifth-section'
import SixthSection from './_components/sixth-section'
import SeventhSection from './_components/seventh-section'
import ButtomCard from './_components/buttom-card'
import ButtomSection from './_components/bottom-section'
import Footer from './_components/footer'
import EightSection from './_components/eight-section'
import NinthSection from './_components/ninth-section'
import TenthSection from './_components/tenth-section'

const Enterprice = () => {
  return (
    <div>
        <Navbar/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <Quote />
        <FifthSection/>
        <SixthSection/>
        <SeventhSection/>
        <EightSection/>
        <NinthSection/>
        <TenthSection/>
        <ButtomCard/>
        <ButtomSection/>
        <Footer/>
    </div>
  )
}

export default Enterprice