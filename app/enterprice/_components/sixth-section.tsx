import React from 'react'

const SixthSection = () => {
  return (
    <div className='md:py-20 py-20 bg-[#e3f3ff] relative'>
        <div className='md:text-center items-center justify-center flex flex-col px-10'>
            <div className='text-4xl md:text-7xl flex md:justify-center font-medium pb-4 text-[#1b224b] md:w-2/3'>
            Use Loom for all types of communication
            </div>
            <p className='md:text-3xl font-light md:w-2/3 md:mx-auto text-[#1f357f] leading-loose text-xl'>
            Async video can be used for internal and external messages, presentations, and updates by teams across the organization.
            </p>
            <video className='rounded-[20px] xl:w-5/6 xl:mx-auto mt-10 md:hidden'
             autoPlay
             muted
             loop
             >
                <source src='/videos/video1.mp4' type='video/mp4' />
            </video>
        </div>
        <div className='hidden md:flex items-center justify-center flex-col'>
            <div className='text-6xl font-medium text-center justify-center mt-40 md:px-20 leading-loose text-gradient bg-gradient-to-b from-blue-500 to-blue-200 bg-clip-text text-transparent'>
               Announce Project Sales Videos Projects Videos Marketing Videos Culture Important Messages Talks and Presentations Plan Brainstorm Explanations Explore New Ideas Journal Entries React to News and Events Share Knowledge Share Ideas Collab
            </div>
            <video className='rounded-[40px] md:w-2/3 absolute z-10'
             autoPlay
             muted
             loop
             >
                <source src='/videos/video1.mp4' type='video/mp4' />
            </video>
        </div>
    </div>
  )
}

export default SixthSection