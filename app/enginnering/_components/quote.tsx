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
              Loom has been the light of my life since you showed me it. I never tire of hearing this from folks. Not even an investor... yet.
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