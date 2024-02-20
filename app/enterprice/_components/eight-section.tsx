import { Link, PlayCircle, Zap } from 'lucide-react'
import React from 'react'

const EightSection = () => {
    return (
        <div className='py-20 bg-[#e3f3ff]'>
            <div className='md:w-5/6 md:rounded-[80px] bg-[#1b224b] mx-auto'>
                <div className='py-16 px-10 pb-20'>

                    <div className='md:flex md:px-20 md:space-x-20 md:space-y-0 items-center justify-center'>
                        <div className='text-[#e3f3ff] flex space-y-10'>
                            <div className='space-y-10 flex flex-col items-center justify-center'>
                                <div className='text-4xl md:text-7xl md:text-center md:w-5/6 pt-20'>
                                    Loom meets your teams where they&apos;re at
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex items-center  text-white md:space-x-20 md:pt-20'>

                        <div className='py-4'>
                            <div className='flex items-center pb-4 gap-4'>
                                <div className='bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full'>
                                    <Link className='text-4xl text-[#1b224b]' />
                                </div>
                                <div className='text-[#d1d1f7] text-xl md:text-xl md:w-3/4'>Share Loom videos anywhere with a link</div>
                            </div>
                            <div className='text-[#d1d1f7] text-lg font-light leading-10 w-5/6'>
                            Our patented technology gives users the ability to hit record and share a video link in any tool they&apos;re already using.
                            </div>
                        </div>

                        <div className='py-4'>
                            <div className='flex items-center pb-4 gap-4'>
                                <div className='bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full'>
                                    <Zap className='text-4xl text-[#1b224b]' />
                                </div>
                                <div className='text-[#d1d1f7] md:text-2xl  text-xl md:w-3/4'>Supercharges mission-critical tools</div>
                            </div>
                            <div className='text-[#d1d1f7] text-lg font-light leading-10 w-5/6'>
                            Loom&apos;s integrations give your team the ability to using async video in their favorite tools, without breaking their workflow.
                          </div>
                        </div>

                        <div className='py-4'>
                            <div className='flex items-center pb-4 gap-4'>
                                <div className='bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full'>
                                    <PlayCircle className='text-4xl text-[#1b224b]' />
                                </div>
                                <div className='text-[#d1d1f7] md:text-2xl  text-xl  md:w-3/4'>Enhances internal systems</div>
                            </div>
                            <div className='text-[#d1d1f7] text-lg font-light leading-10 w-5/6'>
                            Integrate Loom&apos;s best-of-breed recorder & player into custom intranets and apps to add async video to internal systems.

                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default EightSection