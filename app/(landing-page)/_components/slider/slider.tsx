import React from 'react'
import SliderOne from './_components/slider-one'
import SliderTwo from './_components/slider-two'
import SliderThird from './_components/slider-third'

const Sliders = () => {
    return (
        <div className='py-32'>
            <div className='text-[#2b1c50] px-6 md:w-3/5 mx-auto text-center flex justify-center items-center text-3xl md:text-5xl font-medium'>
                More than 25 million people across 400,000 companies choose Loom
            </div>
           <div className='pt-20'>
           <SliderOne />
           <SliderTwo/>
           <SliderThird/>
           </div>
        </div>
    )
}

export default Sliders