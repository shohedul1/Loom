'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";

const SixSection = () => {
    return (
        <div className="py-20 px-10">
            <div className="text-[#2b1c50] text-center justify-center items-center text-4xl md:text-6xl font-medium md:pb-20 mb-10">
                Video messaging for all use cases
            </div>
            <div className="md:flex items-center justify-center md:space-x-20 space-y-10 md:space-y-0">
                <div className="bg-[#e8f5e3] rounded-[40px] md:w-80 p-10 hover:scale-105 hover:shadow-xl">
                    <Image src={'/image/six1.svg'} alt="image"
                        width={1920}
                        height={1080}
                        className="rounded-xl h-40 w-80"

                    />
                    <div className="text-2xl items-center justify-center flex pt-10 text-[#224229]">
                        Sales
                    </div>
                    <div className="text-[rgb(49,91,57)] text-center leading-8 pt-4 h-24">
                        Personalize your pitch with video outreach to close more deals.

                    </div>
                </div>

                <div className="bg-[#e8f5e3] rounded-[40px] md:w-80 p-10 hover:scale-105 hover:shadow-xl">
                    <Image src={'/image/image4.jpg'} alt="image"
                        width={1920}
                        height={1080}
                        className="rounded-xl h-40 w-80"

                    />
                    <div className="text-2xl items-center justify-center flex pt-10 text-[#224229]">
                       Enginneering
                    </div>
                    <div className="text-[rgb(49,91,57)] text-center leading-8 pt-4 h-24">
                        Add visuall context to your code to accelerete your sprints.

                    </div>
                </div>

                <div className="bg-[#e8f5e3] rounded-[40px] md:w-80 p-10 hover:scale-105 hover:shadow-xl">
                    <Image src={'/image/six2.svg'} alt="image"
                        width={1920}
                        height={1080}
                        className="rounded-xl h-40 w-80"

                    />
                    <div className="text-2xl items-center justify-center flex pt-10 text-[#224229]">
                        Customer uspport
                    </div>
                    <div className="text-[rgb(49,91,57)] text-center leading-8 pt-4 h-24">
                       Troubleshot over video to reach resolutions faster.

                    </div>
                </div>

                <div className="bg-[#e8f5e3] rounded-[40px] md:w-80 p-10 hover:scale-105 hover:shadow-xl">
                    <Image src={'/image/image3.jpg'} alt="image"
                        width={1920}
                        height={1080}
                        className="rounded-xl h-40 w-80"

                    />
                    <div className="text-2xl items-center justify-center flex pt-10 text-[#224229]">
                        Design
                    </div>
                    <div className="text-[rgb(49,91,57)] text-center leading-8 pt-4 h-24">
                        Share ideas and provide feedback over video to enhance designs.

                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center pt-20">
                <Button
                className="text-lg mt-6 rounded-[40px] text-[#4b42ad] font-medium p-6 bg-[#eff0ff] hover:shadow-indigo-500 transition-all duration-300 shadow-md"
                >
                    See all use cases

                </Button>

            </div>

        </div>
    )
}

export default SixSection