import { Download } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const FourthSection = () => {
  return (
    <div className='md:py-10 bg-[#c0a2a2]'>
      <div className='px-10 md:text-center space-y-4'>
        <div className='text-3xl md:text-7xl md:justify-center font-medium pt-20'>
          Record once and personalize for all
        </div>
        <p className='text-xl md:text-3xl font-light md:w-3/4 md:mx-auto text-[#3b394c] leading-normal'>
          Send customized outreach to many prospects with just one video recording using Loom variables
        </p>

        <div className='flex gap-4 md:justify-center pt-10'>

          <div className='flex'>
            <div className='text-white  justify-between text-md font-light rounded-[40px] border-4 border-indigo-40/90 py-4 md:py-6 bg-[#565add] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300'>
              <div className="px-6">
                <div className='md:text-lg text-sm'>
                  Get Loom for Free
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='py-10'>
          <video className="rounded-[20px] md:rounded-[80px] shadow-indigo-400 shadow-xl md:w-2/3 mx-auto"
            autoPlay
            muted
            loop
          >
            <source src="/videos/video5.mp4" ></source>

          </video>
        </div>

        

      </div>
    </div>
  )
}

export default FourthSection