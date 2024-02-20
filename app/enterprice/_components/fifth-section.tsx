import { Check } from 'lucide-react'
import React from 'react'

const FifthSection = () => {
    return (
        <div className='py-20 bg-[#111019]'>
            <div className='md:text-center items-center md:justify-center flex flex-col px-10'>
                <div className='md:text-6xl flex md:justify-center font-medium pb-10 text-[#f1f0f3] text-3xl'>
                    Enterprise-grade data protection
                </div>
                <p className='md:text-3xl font-light md:w-1/2 md:mx-auto text-[#bbb6c6] leading-loose text-xl'>
                    Loom protects any and all data on our platform, so you can communicate confidently.
                </p>
            </div>

            <div className='md:flex items-center justify-center pt-10 md:py-20 px-10'>
                <div className='space-y-8 md:w-1/3'>
                    <div className='flex gap-6'>
                        <div className='bg-[#f1f0f3] p-4 w-14 h-14 items-center justify-center flex rounded-full'>
                            <Check className='text-4xl' />
                        </div>
                        <div className='md:text-xl text-[#bbb6c6] md:w-3/4'>
                        GDPR, CCPA, and SOC 2 Type 2 compliant
                        </div>

                    </div>
                    <div className='flex gap-6'>
                        <div className='bg-[#f1f0f3] p-4 w-14 h-14 items-center justify-center flex rounded-full'>
                            <Check className='text-4xl' />
                        </div>
                        <div className='md:text-xl text-[#bbb6c6] md:w-3/4'>
                        Equipped with advanced admin controls to protect sensitive information internally
                        </div>

                    </div>

                </div>
                <div className='py-10 md:py-0 items-center justify-center space-y-8 md:w-1/3'>

                    <div className='flex gap-6'>
                        <div className='bg-[#f1f0f3] p-4 w-14 h-14 items-center justify-center flex rounded-full'>
                            <Check className='text-4xl' />
                        </div>
                        <div className='md:text-xl text-[#bbb6c6] md:w-3/4'>
                        Built on the AWS-backbone with secure and reliable infrastructure
                        </div>

                    </div>

                    <div className='flex gap-6'>
                        <div className='bg-[#f1f0f3] p-4 w-14 h-14 items-center justify-center flex rounded-full'>
                            <Check className='text-4xl' />
                        </div>
                        <div className='md:text-xl text-[#bbb6c6] md:w-3/4'>
                        Secured with encrypted data and industry-standard security frameworks
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FifthSection