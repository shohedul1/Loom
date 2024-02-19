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
                                    Boost customer outreach with Loom AI
                                </div>
                                <div className="text-xl text-[#1f3575] leading-8 font-light">
                                    Keep everyone on track and in the loop using streamlined communication that scales.
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="text-xl text-[#1f3575] leading-normal font-medium">
                                    Instant polish
                                </div>
                                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                                    Loom AI automatically removes 'ums', 'ahs', and awkward silences so you don't need to re-record

                                </div>

                            </div>

                            <div className="space-y-1">
                                <div className="text-xl text-[#1f3575] leading-normal font-medium">
                                    Capture attention
                                </div>
                                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                                    Loom AI generates titles, summaries, CTAs (and more!) designed to boost buyer and customer engagement, increasing the likelihood of conversion
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="text-xl text-[#1f3575] leading-normal font-medium">
                                    Share faster
                                </div>
                                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                                    Loom AI instantly drafts a message to accompany your video so you can share in one click
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-10">

                        <video className=" rounded-[20px] md:rounded-[80px] shadow-indigo-400 shadow-xl md:w-2/3 mx-auto"
                            autoPlay
                            muted
                            loop
                            width={1920} height={1000}
                        >
                            <source src="/videos/video4.mp4" ></source>

                        </video>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection