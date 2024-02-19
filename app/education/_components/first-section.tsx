import { Check, Download } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const FirstSection = () => {
  return (
    <div className='md:py-20'>
      <div className='md:text-center space-y-4 px-10'>
        <div className="MD:text-3xl text-xl text-[#3d2e7e] font-medium">
        Loom for Education

        </div>
        <div className='text-5xl md:text-7xl flex md:justify-center font-medium md:py-2'>
        Connect and educate with easy-to-use video recording
        </div>
        <p className='text-xl md:text-3xl font-light md:w-1/2 md:mx-auto text-[#3b394e] leading-normal'>
        Use Loom to engage students in and outside the classroom
        </p>

        <div className='flex gap-4 md:justify-center pt-10'>
          <div className='flex'>
            <div className='text-white  justify-between text-md font-light rounded-[40px] border-4 border-indigo-40/90 py-4 md:py-6 bg-[#565add] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300'>
              <div className='flex items-center justify-center gap-4 md:justify-between px-6'>
                <Download className='md:w-6 md:h-6 h-4 w-4' />
                <div className='md:text-lg text-sm'>
                  Get Loom for Free

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='pt-10 md:pt-10'>
          <Image src={'/image/image23.webp'} alt='image' width={500} height={500} className="rounded-[20px] md:rounded-[80px] shadow-lime-400 shadow-xl md:w-2/3 mx-auto" />

        </div>

        <div className='text-4xl md:text-7xl flex md:justify-center font-medium pt-20 md:pt-28 pb-10 md:pb-20'>
        Why educators use Loom

        </div>

        <div className='md:justify-center flex'>
          <div className='flex flex-col space-y-6 pb-10'>


            <div className='flex gap-6 items-center '>
              <div className='bg-[rgb(200,245,227)] w-12 h-12 items-center justify-center flex rounded-full overflow-hidden'>
                <Check className='text-3xl' />
              </div>
              <div className='text-xl text-[#224229] font-light'>To enable individualized learning</div>
            </div>

            <div className='flex gap-6 items-center '>
              <div className='bg-[rgb(200,245,227)] w-12 h-12 items-center justify-center flex rounded-full overflow-hidden'>
                <Check className='text-3xl' />
              </div>
              <div className='text-xl text-[#224229] font-light'>To add context to assignments</div>
            </div>

            <div className='flex gap-6 items-center '>
              <div className='bg-[rgb(200,245,227)] w-12 h-12 items-center justify-center flex rounded-full overflow-hidden'>
                <Check className='text-3xl' />
              </div>
              <div className='text-xl text-[#224229] font-light'>To complement a curriculum</div>
            </div>

           

          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSection