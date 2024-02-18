import Image from "next/image"

const SecondSection = () => {
    return (
        <div>
            <div className="flex items-center justify-center md:space-x-20">
                <div className="w-full bg-[#eff0ff]">
                    <div className="md:py-40 py-16">
                        <div className="md:flex px-10 md:px-20 md:gap-20 md:space-y-0 flex-row-reverse">
                            <div className="text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1">
                                <div className="flex">
                                    <div className="space-y-10">
                                        <div className="space-y-1 md:text-md">
                                            <div className="text-[#2b1c50] font-medium md:leading-normal md:text-4xl">
                                                Keep your team engaged while collaborating asynchronously
                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-[#3d2e7c] leading-6 md:leading-10 font-light md:w-4/5">
                                                Using Loom, you can ask questions, share ideas, and exchange knowledge without time zones or busy calendars getting in the way.
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-[#2b1c50] font-medium md:leading-normal text-sm md:text-xl">
                                                Accelerate feedback loops

                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-[#3d2e7c] leading-6 md:leading-10 font-light md:w-4/5">
                                                Give clear and constructive feedback using async video to convey tone, mark up your screen, and record your message in context.
                                            </div>

                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-[#2b1c50] font-medium md:leading-normal text-sm md:text-xl">
                                                Streamline team standups
                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-[#3d2e7c] leading-6 md:leading-10 font-light md:w-4/5">
                                                Instead of spending extra effort to document your progress in writing, click record and update your team effortlessly using async video.
                                            </div>

                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-[#2b1c50] font-medium md:leading-normal text-sm md:text-xl">
                                                Bring everyone to the table

                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-[#3d2e7c] leading-6 md:leading-10 font-light md:w-4/5">
                                                Loom empowers any team to share ideas, collaborate equally, and focus on what&apos;s important, whether you&apos;re working across departments or across time zones.


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:p-0 ">
                                <Image src={'/image/image3.svg'} alt="image" width={1920} height={1000} className="object-cover md:rounded-[60px] rounded-[40px] w-full p-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection