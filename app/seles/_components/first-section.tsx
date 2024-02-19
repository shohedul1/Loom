import { Check, Download } from 'lucide-react'
import React from 'react'

const FirstSection = () => {
  return (
    <div className='md:py-20'>
      <div className='md:text-center space-y-4 px-10'>
        <div className="MD:text-3xl text-xl text-[#3d2e7e] font-medium">
        LOOM FOR SALES
        </div>
        <div className='text-5xl md:text-7xl flex md:justify-center font-medium md:py-2'>
        Sell faster and smarter with Loom
        </div>
        <p className='text-xl md:text-3xl font-light md:w-1/2 md:mx-auto text-[#3b394e] leading-normal'>
        Sales teams use video messages to boost outreach engagement, accelerate deals, and streamline onboarding
        </p>

      
        <div className='pt-10 md:pt-10'>
          <video className="rounded-[20px] md:rounded-[80px] shadow-indigo-400 shadow-xl md:w-2/3 mx-auto"
            autoPlay
            muted
            loop
          >
            <source src="/videos/video1.mp4" ></source>

          </video>
        </div>

        <div className='text-4xl md:text-7xl flex md:justify-center font-medium pt-20 md:pt-28 pb-10 md:pb-20'>
          Why teams connect with Loom

        </div>

        <div className='md:justify-center flex'>
          <div className='flex flex-col space-y-6 pb-20'>


            <div className='flex gap-6 items-center '>
              <div className='bg-[rgb(200,245,227)] w-12 h-12 items-center justify-center flex rounded-full overflow-hidden'>
                <Check className='text-3xl' />
              </div>
              <div className='text-xl text-[#224229] font-light'>To record presentations</div>
            </div>

            <div className='flex gap-6 items-center '>
              <div className='bg-[rgb(200,245,227)] w-12 h-12 items-center justify-center flex rounded-full overflow-hidden'>
                <Check className='text-3xl' />
              </div>
              <div className='text-xl text-[#224229] font-light'>To deliver feedback faster</div>
            </div>

            <div className='flex gap-6 items-center '>
              <div className='bg-[rgb(200,245,227)] w-12 h-12 items-center justify-center flex rounded-full overflow-hidden'>
                <Check className='text-3xl' />
              </div>
              <div className='text-xl text-[#224229] font-light'>To share knowledge</div>
            </div>




          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSection