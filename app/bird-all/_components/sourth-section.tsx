import Image from 'next/image';
import React from 'react'

const SourthSection = () => {
    return (
        <div className='pt-10 md:pt-0 bg-[#eff0ff]'>
            <div className='md:flex items-center justify-center'>
                <div className='px-10 md:px-0 md:w-2/5'>
                    <Image src={'/image/image1.svg'} width={1920} height={1080} alt="image" className="p-10" />
                </div>
                <div className='pt-10 md:pt-20 px-10 md:ml-20 md:w-1/3'>
                    <div className='gap-6'>
                        <div className='text-[#2b1c50] font-medium leading-normal text-3xl md:text-5xl'>
                            Filler word removal
                        </div>
                        <div className='text-xl text-[#3d2e7c] leading-10 font-light pt-6'>
                            From Google Workspace to Stack, Bird videos seamlessly integrate with hudreds of tools you use every day.
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row md:items-center md:justify-center px-10'>
                <div className='md:ml20 md:w-1/3'>
                    <div className='flex flex-col md:flex-row gap-6'>
                        <div className='w-full md:w-96'>
                            <div className='text-[#2b1c50] font-medium leading-normal text-3xl md:text-5xl'>
                                Silence removal
                            </div>
                            <div className='text-xl text-[#3d2e7c] leading-10 font-light pt-5'>
                            From Google Workspace to Stack, Bird videos seamlessly integrate with hudreds of tools you use every day.


                            </div>
                        </div>

                    </div>
                </div>

                <div className='md:w-2/5 bg-[#eff0ff] md:ml-6 py-10'>
                <Image src={'/image/image3.svg'} width={1920} height={1080} alt="image" className="p-10" />
                </div>
            </div>
        </div>
    )
}

export default SourthSection;