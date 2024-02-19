import Image from "next/image"

const SecondSection = () => {
    return (
        <div>
            <div className="flex items-center justify-center md:space-x-20">
                <div className="w-full bg-[#bbded7]">
                    <div className="md:py-20 py-16">
                        <div className="md:flex px-10 md:px-20 md:gap-20 md:space-y-0 flex-row-reverse">
                            <div className="text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1">
                                <div className="flex">
                                    <div className="space-y-10">
                                        <div className="space-y-1 md:text-md">
                                            <div className="text-[#2b1c50] font-medium md:leading-normal md:text-4xl">
                                                Get more out of code reviews
                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-[#3d2e7c] leading-6 md:leading-10 font-light md:w-4/5">
                                                Review and submit code with increased context and clarity. Async video lets engineers accelerate their development cycle.


                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-[#2b1c50] font-medium md:leading-normal text-sm md:text-xl">
                                                Demo code in context

                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-[#3d2e7c] leading-6 md:leading-10 font-light md:w-4/5">
                                                Record a demo of the code or application you&apos;re working on easily with narrated async video.
                                            </div>

                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-[#2b1c50] font-medium md:leading-normal text-sm md:text-xl">
                                                Hit record and review code
                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-[#3d2e7c] leading-6 md:leading-10 font-light md:w-4/5">
                                                Don&apos;t wait for the next standup to give feedback. Hit record and deliver more personal, precise feedback.
                                            </div>

                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-[#2b1c50] font-medium md:leading-normal text-sm md:text-xl">
                                                Squash the bugs
                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-[#3d2e7c] leading-6 md:leading-10 font-light md:w-4/5">
                                            Replicate and record bugs in your development environment to document, diagnose, and resolve them faster.

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:p-0 ">
                                <Image src={'/image/image6.webp'} alt="image" width={1920} height={1000} className="object-cover md:rounded-[60px] rounded-[40px] w-full p-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection