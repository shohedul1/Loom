import Image from "next/image"

const ThirdSection = () => {
  return (
    <div className="bg-[#e3f2ff] mx-auto">
        <div className="py-10 md:p-20">
            <div className="md:flex px-10 md:space-y-0 md:space-x-20 items-center">
                <div className="flex space-x-10">
                    <div className="space-y-10">
                        <div className="space-y-1 text-md">
                            <div className="text-[#1c2850] font-medium leading-normal text-3xl md:text-4xl pb-4">
                                Get your message across
                            </div>
                            <div className="text-xl text-[#1f3575] leading-8 font-light">
                            Keep everyone on track and in the loop using streamlined communication that scales.
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="text-xl text-[#1f3575] leading-normal font-medium">
                                Share ideas in high resolution
                            </div>
                            <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                                Speak to your vision while sharing your desing as you record your screen, camera or both whit loop

                            </div>

                        </div>

                        <div className="space-y-1">
                            <div className="text-xl text-[#1f3575] leading-normal font-medium">
                               Add context to your concept
                            </div>
                            <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                              Use video to document the thinking behind your ideas and loop in the right people the right time, with the right contex.
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="text-xl text-[#1f3575] leading-normal font-medium">
                               Send your video with a link 
                            </div>
                            <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                              use loom instantly-generated links to share your video in Slick, Figma, sketch, anywhere else team works
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 pt-10 md:pt-0">
                <Image src={'/image/image1.svg'} alt="image" width={1920} height={1000} className="object-cover md:rounded-[60px] rounded-[40px] w-full p-10" />


                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection