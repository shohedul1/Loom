import Image from "next/image"

const SecondSection = () => {
    return (
        <div>
            <div className="flex items-center justify-center md:space-x-20">
                <div className="w-full bg-[#e3efd8]">
                    <div className="md:py-20 py-16">
                        <div className="md:flex px-10 md:px-20 md:gap-20 md:space-y-0 flex-row-reverse">
                            <div className="text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1">
                                <div className="flex">
                                    <div className="space-y-10">
                                        <div className="space-y-1 md:text-md">
                                            <div className="text-[#2b1c50] font-medium md:leading-normal md:text-4xl">
                                            Plan your product roadmap

                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-[#3d2e7c] leading-6 md:leading-10 font-light md:w-4/5">
                                            Make better product decisions with async video by increasing team transparency and delivering clearer feedback.


                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-[#2b1c50] font-medium md:leading-normal text-sm md:text-xl">
                                            Align your team


                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-[#3d2e7c] leading-6 md:leading-10 font-light md:w-4/5">
                                            Keep your team in sync as you dive into research, review objectives, and align on your product’s big picture.


                                            </div>

                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-[#2b1c50] font-medium md:leading-normal text-sm md:text-xl">
                                            Evaluate ideas faster
                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-[#3d2e7c] leading-6 md:leading-10 font-light md:w-4/5">
                                            Determine what ideas are a priority and what ideas you&apos;ll circle back on by delivering feedback via video.

                                            </div>

                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-[#2b1c50] font-medium md:leading-normal text-sm md:text-xl">
                                            Dive into the details
                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-[#3d2e7c] leading-6 md:leading-10 font-light md:w-4/5">
                                            Record walkthroughs of product specs and timelines so everyone knows how you&apos;ll bring your product to life.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:p-0 ">
                                <Image src={'/image/image22.webp'} alt="image" width={1920} height={1000} className="object-cover md:rounded-[60px] rounded-[40px] w-full p-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection