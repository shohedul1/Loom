import Navbar from '@/components/navbar/navbar'
import React from 'react'
import FirstSection from './_components/first-section'
import SecoundSection from './_components/secound-section'
import ThirdSection from './_components/third-section'
import FeedbackSection from './_components/feedback-section'
import Slider from './_components/slider'
import TenthSection from './_components/tenth-section'
import Faqs from './_components/faqs'
import ButtomSection from './_components/bottom-section'
import ButtomCard from './_components/buttom-card'
import Footer from './_components/footer'

const SereenRedorder = () => {
  return (
    <div>
      <Navbar/>
      <FirstSection/>
      <SecoundSection/>
      <ThirdSection/>
      <FeedbackSection/>
      <Slider/>
      <TenthSection/>
      <Faqs/>
      <ButtomCard/>
      <ButtomSection/>
      <Footer/>
    </div>
  )
}

export default SereenRedorder