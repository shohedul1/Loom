import Image from "next/image"

const SecondSection = () => {
    return (
        <div>
            <div className="flex items-center justify-center md:space-x-20">
                <div className="w-full bg-[#89ccc2]">
                    <div className="md:py-20 py-16">
                        <div className="md:flex px-10 md:px-20 md:gap-20 md:space-y-0 flex-row-reverse">
                            <div className="text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1">
                                <div className="flex">
                                    <div className="space-y-10">
                                        <div className="space-y-1 md:text-md">
                                            <div className="text-black font-medium md:leading-normal md:text-4xl">
                                                Product marketing videos made easy

                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-black leading-6 md:leading-10 font-light md:w-4/5">
                                                Leverage Loom to create high-impact videos perfect for every step of your customes&apos;s journey.
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-[#2b1c50] font-medium md:leading-normal text-sm md:text-xl">
                                                Empower your customers

                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-black leading-6 md:leading-10 font-light md:w-4/5">
                                                Show customers how to get the most out of your product by creating informative videos that highlight new features.
                                            </div>

                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-black font-medium md:leading-normal text-sm md:text-xl">
                                                Make onboarding a breeze
                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-black leading-6 md:leading-10 font-light md:w-4/5">
                                                Welcome new customers and guide them through the steps they need to get started with easy-to-follow videos.

                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:p-0 ">
                                <Image src={'/image/image14.webp'} alt="image" width={1920} height={1000} className="object-cover md:rounded-[60px] rounded-[40px] w-full p-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection