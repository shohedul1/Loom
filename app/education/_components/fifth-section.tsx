import Image from "next/image"

const FifthSection = () => {
    return (
        <div className="bg-[#628fb4] mx-auto">
            <div className="py-20">
                <div className="md:flex md:space-y-0 items-center justify-center ">
                    <div className="md:order-1 md:pr-0">
                        <div className="flex flex-col space-y-10 md:flex-row md:items-center md:space-x-40">
                            <div className="order-2 md:order-1 w-full md:w-1/2">
                                <Image src={'/image/image16.webp'} alt="image" width={1920} height={1000} className="object-cover md:rounded-[60px] rounded-[40px] w-full p-10" />
                            </div>

                            <div className="order-1 md:order-2 md:flex-1 px-10 md:px-0 space-y-10">
                                <div className="space-y-1 text-md">
                                    <div className="text-[#f1ebea] font-medium leading-normal text-2xl md:text-4xl pb-4">
                                        Centralize and share knowledge

                                    </div>
                                    <div className="text-md text-[#f4edec] md:leading-8 font-light">
                                        Collect and organize all the information your team needs in one easy-to-access place.

                                    </div>

                                </div>

                                <div className="space-y-1 text-md">
                                    <div className="text-[#ffffff] font-medium leading-normal text-xl">
                                    Stay organized


                                    </div>
                                    <div className="text-sm md:text-md text-[#efefef] leading-6 md:leading-10 font-light">
                                    Categorize your videos by project or team in a secure workspace that's easy to manage.

                                   </div>

                                </div>

                                <div className="space-y-1 text-md">
                                    <div className="text-[#f6f2f2] font-medium leading-normal text-xl">
                                    Ramp new hires faster


                                    </div>
                                    <div className="text-sm md:text-md text-[#fbf2f2] leading-6 md:leading-10 font-light">
                                    Make videos documenting critical company systems and processes so new hires can get up to speed on their own.

                                    </div>

                                </div>


                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default FifthSection