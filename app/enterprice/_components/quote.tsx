import Image from 'next/image';
import React from 'react'

const Quote = () => {
  return (
    <div className='py-10 bg-[#111019]'>
          <>
          <div className="bg-[#1b224b] md:w-3/5 md:mx-auto mx-8 rounded-[60px] md:rounded-[80px] p-10 md:p-20 flex flex-col md:items-center space-y-10 mb-10">
            <div>
              <Image src={"/logos/logo3.svg"} alt="image" width={500} height={500} className="w-40" />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#e3f3ff] md:text-center md:w-5/6">
            Our staff enthusiastically embraced Loom. Rich asynchronous communication is essential to our team&apos;s working environment. The Jira Cloud and Confluence integrations are seamless and very powerful.            
            </div>
            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image src={"/image/image4.jpg"} alt="image" width={500} height={500} className="rounded-full object-cover  h-12 w-12" />
              </div>
              <div className="text-[#e3f3ff]">
                <div className="font-medium">Alex Berman</div>
                <div className="text-sm">Chief Marketing Sumsung</div>

              </div>

            </div>

          </div>

        </>
    </div>
  )
}

export default Quote;