import Image from 'next/image'
import React from 'react'

const ThirdSection = () => {
  return (
    <div>
      <div className='mx-auto text-center flex justify-center items-center md:text-6xl text-3xl font-medium py-14'>
        Capture, Edit, and Share
      </div>

      <div className='md:py-20'>
        <div className='md:w-5/6 md:rounded-[80px] bg-[#eff0ff] md:mx-auto py-20'>
          <div className='md:flex items-center justify-center'>
            <div className='px-10 md:px-0 md:w-2/5'>
              <Image src={'/image/image3.svg'} width={1920} height={1080} alt="image" className="p-10" />
            </div>
            <div className='pt-10 md:pt-10 px-10 md:ml-20 md:w-3/5'>
              <div className='flex gap-6'>
                <div>
                  <div className='text-[#2b1c50] font-medium leading-normal text-3xl md:text-5xl'>
                    Create eye-catching video in a snap
                  </div>
                  <div className='text-xl text-[#3d2e7c] leading-10 font-light pt-6'>
                    Record videos from your screen, webcam, or both. Capture from any application, then use Loom&apos;s native editing to highlight details, add fun extras, and engage your audience. Loom makes it easy to share on the best free screen recorder. The free version of Loom supports recording up to 720p quality. Need more? Upgrade for sharp, clear HD or 4K presentation.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col-reverse md:flex-row md:items-center md:justify-center px-10 md:pt-20'>
            <div className='md:ml-10 md:w-3/5'>
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='w-full md:w-96'>
                  <div className='text-[#2b1c50] font-medium leading-normal text-3xl md:text-5xl'>
                    Create eye-catching video in a snap
                  </div>
                  <div className='text-xl text-[#3d2e7c] leading-10 font-light pt-6'>
                    Record videos from your screen, webcam, or both. Capture from any application, then use Loom&apos;s native editing to highlight details, add fun extras, and engage your audience. Loom makes it easy to share on the best free screen recorder. The free version of Loom supports recording up to 720p quality. Need more? Upgrade for sharp, clear HD or 4K presentation.
                  </div>

                </div>
                <div>
                </div>
              </div>
            </div>
            <div className='bg-[#eff0ff] md:ml-6 py-10 md:w-3/5'>
              <Image src={'/image/image1.svg'} width={1920} height={1080} alt="image" className="p-10" />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdSection