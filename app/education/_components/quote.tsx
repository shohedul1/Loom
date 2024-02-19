import Image from 'next/image'
import React from 'react'

const Quote = () => {
  return (
    <div className='py-10'>
         <div className="rounded-[80px] p-10 md:p-20 flex flex-col items-center space-y-10">
            <div>
              <Image src={"/image/slick1.svg"} alt="image" width={500} height={500} className="w-40" />
            </div>
            <div className="md:text-3xl font-medium md:w-3/5 text-center">
            Loom, with the little face bubble in the corner, is so powerful. It works so much better than traditional formats, where an audio track runs over animation or a slideshow. Having a real face in the corner adds personality and brings the storytelling to life.
            </div>
            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
             
              <div className="text-[#6c6684] text-center">
                <div className="font-medium">Alex Berman</div>
                <div className="text-sm">Chief Marketing Sumsung</div>

              </div>

            </div>

          </div>
    </div>
  )
}

export default Quote