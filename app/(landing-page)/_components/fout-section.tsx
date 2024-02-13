'use client';

import { Button } from "@/components/ui/button";
import { MousePointerSquareDashed } from "lucide-react";


const FourtSection = () => {
    return (
        <div className="md:pt-10 pb-32 px-10">
            <div className="text-[#111019] md:text-center flex justify-center items-center md:text-6xl text-4xl font-medium pb-10 md:pb-20">
                So much more than a screen recorder
            </div>

            <div className="md:flex items-center justify-center">
                <div className="md:w-2/5 bg-[#b2b3f1] rounded-[60px] md:p-20">
                    <div className=" flex items-center justify-center py-20 ">
                        <video
                            className="w-[300px] h-[300px] rounded-full"
                            autoPlay
                            muted
                            loop
                        >
                            <source src="/videos/video3.mp4" ></source>
                        </video>
                    </div>
                </div>

                <div className="pt-10 md:ml-20 md:w-1/3">
                    <div className="flex gap-6">
                        <div className="hidden bg-[#d1d1f7] w-14 h-14 rounded full md:flex items-center justify-center">
                            <MousePointerSquareDashed className="text-6xl text-[#2b1c50]" />
                        </div>
                        <div className="w-full md:w-96">
                            <div className="text-[#111019] font-medium leading-normal md:text-4xl text-2xl">
                                Edit and personalize your video, your way
                            </div>
                            <div className="md:text-xl text-[#6a6684] leading-8 md:leading-10 font-light pt-6">
                                Edit your video like you edit a doc with Edit by Transcript, or easily stitch together video clips. Then tailor your video to your brand with a custom logo and thumbnail.
                            </div>
                            <Button className="md:text-lg mt-5 rounded-[40px] text-[#4b42ad] font-medium md:py-6 bg-[#eff0ff] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-400/90">
                                Start sharing
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourtSection;