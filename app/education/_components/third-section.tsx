import Image from "next/image"

const ThirdSection = () => {
    return (
        <div className="bg-[#c2cab5] mx-auto">
            <div className="py-10 md:p-20">
                <div className="md:flex px-10 md:space-y-0 md:space-x-20 items-center">
                    <div className="flex space-x-10">
                        <div className="space-y-10">
                            <div className="space-y-1 text-md">
                                <div className="text-[#1c2850] font-medium leading-normal text-3xl md:text-4xl pb-4">
                                Help everyone understand the assignment

                                </div>
                                <div className="text-xl text-[#1f3575] leading-8 font-light">
                                Use video to give directions and prepare students to do their best work.


                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="text-xl text-[#1f3575] leading-normal font-medium">
                                Show and tell


                                </div>
                                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                                From homework assignments to how-to videos, sharing instructions through Loom gives students more context and clarity.

                                </div>

                            </div>

                            <div className="space-y-1">
                                <div className="text-xl text-[#1f3575] leading-normal font-medium">
                                Prepare students with a pre-watch

                                </div>
                                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                                Dive straight into a discussion or activity by recording pre-watch videos to make the most of in-person time.
                                </div>
                            </div>

                           
                        </div>
                    </div>
                    <div className="lg:w-1/2 pt-10 md:pt-0">
                        <Image src={'/image/image25.webp'} alt="image" width={1920} height={1000} className="object-cover md:rounded-[60px] rounded-[40px] w-full p-10" />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection