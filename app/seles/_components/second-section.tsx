import Image from "next/image"

const SecondSection = () => {
    return (
        <div>
            <div className="flex items-center justify-center md:space-x-20">
                <div className="w-full bg-[#1f1f3d]">
                    <div className="md:py-20 py-16">
                        <div className="md:flex px-10 md:px-20 md:gap-20 md:space-y-0 flex-row-reverse">
                            <div className="text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1">
                                <div className="flex">
                                    <div className="space-y-10">
                                        <div className="space-y-1 md:text-md">
                                            <div className="text-[#f6f6f6] font-medium md:leading-normal md:text-4xl">
                                            Personalized
                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-[#ffffff] leading-6 md:leading-10 font-light md:w-4/5">
                                            Use Loom to record a personalized pitch or demo to boost responses on your sales outreach
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-[#ffffff] font-medium md:leading-normal text-sm md:text-xl">
                                            Shareable

                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-[#ffffff] leading-6 md:leading-10 font-light md:w-4/5">
                                            Instantly share your video with customers via link, email, or messaging tool — no downloading required
                                            </div>

                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-[#ffffff] font-medium md:leading-normal text-sm md:text-xl">
                                            Actionable
                                            </div>
                                            <div className="pt-4 text-sm md:text-md text-[#f5f5f5] leading-6 md:leading-10 font-light md:w-4/5">
                                            Get notified when a prospect views your video so you can immediately follow up
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:p-0 ">
                                <div className="text-5xl font-bold text-white">Use video to unlock revenue</div>
                                <div className="text-[#ffffff] font-medium md:leading-normal md:text-4xl mt-5">From prospecting to deal close and onboarding, Loom video messages help sellers better connect with key stakeholders, generate more pipeline, and close more deals.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection