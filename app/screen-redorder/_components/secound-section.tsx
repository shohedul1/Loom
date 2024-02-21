import { Book, Computer, Fullscreen, Link, MessageCircle, PencilLine, Scissors, ScreenShare, Share, Video, VideoIcon } from 'lucide-react'
import React from 'react'

const SecoundSection = () => {
  return (
    <div className='px-10'>
        <div className='text-4xl md:text-6xl flex justify-center font-medium pt-16 md:pt-28 pb-20'>
        Top features of Loom&apos;s free screen recorder
        </div>

        <div className='justify-center space-y-6 md:space-y-0 md:flex md:space-x-20'>
            
            <div className='flex flex-col space-y-6'>
                <div className='flex gap-3 items-center'>
                    <div className='bg-[#e8f5e3] p-3 items-center justify-center flex rounded-full'>
                        <Computer className='w-5 h-5 text-green-600'/>
                    </div>
                    <div className='md:text-xl text-[#22422] font-light'>
                    Capture screen and audio on MacOS, Windows, and Chrome

                    </div>
                </div>

                <div className='flex gap-3 items-center'>
                    <div className='bg-[#e8f5e3] p-3 items-center justify-center flex rounded-full'>
                        <ScreenShare className='w-5 h-5 text-green-600'/>
                    </div>
                    <div className='md:text-xl text-[#22422] font-light'>
                    Enjoy easy screen recording from iOS and Android devices
                    </div>
                </div>

                <div className='flex gap-3 items-center'>
                    <div className='bg-[#e8f5e3] p-3 items-center justify-center flex rounded-full'>
                        <Share className='w-5 h-5 text-green-600'/>
                    </div>
                    <div className='md:text-xl text-[#22422] font-light'>
                    Easily share Looms with an instant link to your video
                    </div>
                </div>

                <div className='flex gap-3 items-center'>
                    <div className='bg-[#e8f5e3] p-3 items-center justify-center flex rounded-full'>
                        <Scissors className='w-5 h-5 text-green-600'/>
                    </div>
                    <div className='md:text-xl text-[#22422] font-light'>
                    Make quick edits in the browser or mobile app
                    </div>
                </div>

                <div className='flex gap-3 items-center'>
                    <div className='bg-[#e8f5e3] p-3 items-center justify-center flex rounded-full'>
                        <Link className='w-5 h-5 text-green-600'/>
                    </div>
                    <div className='md:text-xl text-[#22422] font-light'>
                    Add external links to share valuable outside resources
                    </div>
                </div>

            </div>

            <div className='flex flex-col space-y-6'>
                <div className='flex gap-3 items-center'>
                    <div className='bg-[#e8f5e3] p-3 items-center justify-center flex rounded-full'>
                        <MessageCircle className='w-5 h-5 text-green-600'/>
                    </div>
                    <div className='md:text-xl text-[#22422] font-light'>
                    Get feedback, comments, and even emojis from recipients

                    </div>
                </div>

                <div className='flex gap-3 items-center'>
                    <div className='bg-[#e8f5e3] p-3 items-center justify-center flex rounded-full'>
                        <Book className='w-5 h-5 text-green-600'/>
                    </div>
                    <div className='md:text-xl text-[#22422] font-light'>
                    Use drawing tools for annotations and emphasis
                    </div>
                </div>

                <div className='flex gap-3 items-center'>
                    <div className='bg-[#e8f5e3] p-3 items-center justify-center flex rounded-full'>
                        <PencilLine className='w-5 h-5 text-green-600'/>
                    </div>
                    <div className='md:text-xl text-[#22422] font-light'>
                    Embed videos anywhere to increase reach and visibility
                    </div>
                </div>

                <div className='flex gap-3 items-center'>
                    <div className='bg-[#e8f5e3] p-3 items-center justify-center flex rounded-full'>
                        <Video className='w-5 h-5 text-green-600'/>
                    </div>
                    <div className='md:text-xl text-[#22422] font-light'>
                    Closed captioning for accessible, inclusive sharing
                    </div>
                </div>

                <div className='flex gap-3 items-center'>
                    <div className='bg-[#e8f5e3] p-3 items-center justify-center flex rounded-full'>
                        <Fullscreen className='w-5 h-5 text-green-600'/>
                    </div>
                    <div className='md:text-xl text-[#22422] font-light'>
                    Full-screen and custom screen capture sizing options
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SecoundSection