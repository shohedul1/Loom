import Image from 'next/image'
import React from 'react'

const FourthSection = () => {
  return (
    <div className='md:py-10'>
        <div className='px-10 md:text-center space-y-4'>
            <div className='text-3xl md:text-7xl md:justify-center font-medium pt-20'>
            Make hand-offs smooth
            </div>
            <p className='text-xl md:text-3xl font-light md:w-3/4 md:mx-auto text-[#3b394c] leading-normal'>
            Don&apos;t let key details get lost in a thread. Loom&apos;s async video makes it easy to share your vision with developers so they can help bring it to life.

            </p>
            <div className='py-10'>
            <Image src={'/image/image11.webp'} alt="image" width={1920} height={1000} className="object-cover rounded-[30px] md:rounded-[60px] md:w-3/4 md:mx-auto w-full md:p-20" />


            </div>

        </div>
    </div>
  )
}

export default FourthSection