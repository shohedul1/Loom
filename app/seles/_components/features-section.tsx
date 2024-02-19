import { Lock, MessageCircle, MousePointer, MousePointerSquare, PencilLine } from 'lucide-react'
import React from 'react'

const Feature = () => {
    return (
        <div className='py-20'>
            <div className='text-center text-4xl md:text-6xl font-medium pb-16'>
            Features for Sellers
            </div>
            <div className='md:flex px-10 md:px-0 md:space-y-0 items-center justify-center md:space-x-10'>

                <div className='md:w-1/6 space-y-4'>
                    <div className='flex items-center gap-6'>
                        <div className='bg-black h-12 w-12 rounded-full items-center justify-center flex'>
                            <MousePointerSquare className='text-white h-6 w-6' />
                        </div>
                        <div className='text-xl font-medium'>
                            Calls-to-action
                        </div>
                    </div>
                    <div className='w-full h-20'>
                        Add links to relevant files and resources for your viewers to reference.
                    </div>

                </div>

                <div className='md:w-1/6 space-y-4'>
                    <div className='flex items-center gap-6'>
                        <div className='bg-black h-12 w-12 rounded-full items-center justify-center flex'>
                            <PencilLine className='text-white h-6 w-6' />
                        </div>
                        <div className='text-xl font-medium'>
                            Engagement insights
                        </div>
                    </div>
                    <div className='w-full h-20'>
                        See who watched your video, how long they watched, and monitor CTA performance.
                    </div>
                </div>

                <div className='md:w-1/6 space-y-4'>
                    <div className='flex items-center gap-6'>
                        <div className='bg-black h-12 w-12 rounded-full items-center justify-center flex'>
                            <MessageCircle className='text-white h-6 w-6' />
                        </div>
                        <div className='text-xl font-medium'>
                            Content security
                        </div>
                    </div>
                    <div className='w-full h-20'>
                        Control access to your video using email auth and password protection.
                    </div>
                </div>

                <div className='md:w-1/6 space-y-4'>
                    <div className='flex items-center gap-6'>
                        <div className='bg-black h-12 w-12 rounded-full items-center justify-center flex'>
                            <Lock className='text-white h-6 w-6' />
                        </div>
                        <div className='text-xl font-medium'>
                            Rich reactions
                        </div>
                    </div>
                    <div className='w-full h-20'>
                        Viewers can add comments and react to your video with emojis.


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Feature