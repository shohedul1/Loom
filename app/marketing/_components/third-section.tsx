import Image from "next/image"

const ThirdSection = () => {
    return (
        <div className="bg-[#efdaf9] mx-auto">
            <div className="py-10 md:p-20">
                <div className="md:flex px-10 md:space-y-0 md:space-x-20 items-center">
                    <div className="flex space-x-10">
                        <div className="space-y-10">
                            <div className="space-y-1 text-md">
                                <div className="text-[#1c2850] font-medium leading-normal text-3xl md:text-4xl pb-4">
                                    Create engaging content

                                </div>
                                <div className="text-xl text-[#1f3575] leading-8 font-light">
                                    Capture and keep your customers’ interest throughout their journey.

                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="text-xl text-[#1f3575] leading-normal font-medium">
                                    Move from blog to vlog

                                </div>
                                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                                    Capture valuable information at scale. Simply hit record and start producing videos you can embed anywhere on the web to shed light on important topics.

                                </div>

                            </div>

                            <div className="space-y-1">
                                <div className="text-xl text-[#1f3575] leading-normal font-medium">
                                    Make the most of your video
                                </div>
                                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                                    Record a Loom and use it in paid ad campaigns, email marketing, social media, or anywhere else your customers interact with you online.
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="text-xl text-[#1f3575] leading-normal font-medium">
                                    Capture important feedback
                                </div>
                                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                                    Monitor and measure the responses to your video. Loom comes stocked with features your audience can use to react to, comment on, or share your video.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 pt-10 md:pt-0">
                        <Image src={'/image/image15.webp'} alt="image" width={1920} height={1000} className="object-cover md:rounded-[60px] rounded-[40px] w-full p-10" />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection