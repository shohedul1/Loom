import { ArrowDown, ArrowUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SeventhSection = () => {
    return (
        <div className='bg-[#e3f3ff] mx-auto md:flex items-center justify-center md:space-x-40 md:space-y-0 pb-10'>
            <div className='md:flex md:space-y-0 space-y-10 md:space-x-40 '>

                <div className='flex items-center justify-center flex-col'>
                    <div className='flex items-center justify-center'>
                        <div>
                            <ArrowDown size={60} />
                        </div>
                        <div className='text-5xl font-medium md:text-[100px]'>
                            50%
                        </div>
                    </div>
                    <div className='py-4'>
                    fewer meetings across organizations
                    </div>
                    <Image src={"/logos/logo1.svg"} alt='logo' width={500} height={500} className='w-40' />
                </div>

                <div className='flex items-center justify-center flex-col'>
                    <div className='flex items-center justify-center'>
                        <div>
                            <ArrowUp size={60} />
                        </div>
                        <div className='text-5xl font-medium md:text-[100px]'>
                            50%
                        </div>
                    </div>
                    <div className='py-4'>
                    increase in traffic on webpages with Looms
                    </div>
                    <Image src={"/logos/logo4.svg"} alt='logo' width={500} height={500} className='w-20' />
                </div>

                <div className='flex items-center justify-center flex-col'>
                    <div className='flex items-center justify-center'>
                        <div>
                            <ArrowDown size={60} />
                        </div>
                        <div className='text-5xl font-medium md:text-[100px]'>
                            50%
                        </div>
                    </div>
                    <div className='py-4'>
                    boost in reply rates across sales outreach
                    </div>
                    <Image src={"/logos/logo3.svg"} alt='logo' width={500} height={500} className='w-40' />
                </div>
            </div>
        </div>
    )
}

export default SeventhSection