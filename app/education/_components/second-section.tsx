import Image from "next/image"

const SecondSection = () => {
    return (
        <div>
            <div className="flex items-center justify-center md:space-x-20">
                <div className="w-full bg-[#b7efe6]">
                    <div className="md:py-20 py-16">
                        <div className="md:flex px-10 md:px-20 md:gap-20 md:space-y-0 flex-row-reverse">
                            <div className="text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1">
                                <div className="flex">
                                    <div className="space-y-10">
                                        <div className="space-y-1 md:text-md">
                                            <div className="text-black font-medium md:leading-normal md:text-4xl">
                                            Record lessons and enable individualized learning
                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-black leading-6 md:leading-10 font-light md:w-4/5">
                                            Meet the needs of each student no matter where they are and how they learn best.
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-[#2b1c50] font-medium md:leading-normal text-sm md:text-xl">
                                            Lessons you can pause, play, and rewind


                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-black leading-6 md:leading-10 font-light md:w-4/5">
                                            Whether students need information repeated or are ready to move on, recorded video lets them master material at their own paces
                                            </div>

                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-black font-medium md:leading-normal text-sm md:text-xl">
                                            Make catching up on missed work a breeze

                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-black leading-6 md:leading-10 font-light md:w-4/5">
                                            Quickly record and share a video with instructions and materials that were missed so students can get back on track outside of class.


                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:p-0 ">
                                <Image src={'/image/image24.webp'} alt="image" width={1920} height={1000} className="object-cover md:rounded-[60px] rounded-[40px] w-full p-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection