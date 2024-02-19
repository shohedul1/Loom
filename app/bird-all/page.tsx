import React from 'react'
import FirstSection from './_components/first-section'
import Navbar from '@/components/navbar/navbar'
import SecondSection from './_components/second-section'
import ThirdSection from './_components/third-section'
import SourthSection from './_components/sourth-section'
import Faqs from './_components/faqs'
import TenthSection from './_components/testimonials'
import ButtomCard from './_components/buttom-card'
import ButtomSection from './_components/bottom-section'
import Footer from './_components/footer'

const BirdAll = () => {
  return (
    <div>
      <Navbar/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <SourthSection/>
      <Faqs/>
      <TenthSection/>
      <ButtomCard/>
      <ButtomSection/>
      <Footer/>
      
    </div>
  )
}

export default BirdAll