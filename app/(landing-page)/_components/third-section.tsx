'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";

const ThirdSection = () => {
    return (
        <div className="py-20 items-center flex flex-col justify-center">
            <div className="px-12">
                <div className="text-[#2b1c50] md:text-center flex md:justify-center items-center text-3xl md:text-6xl font-medium">
                    The easiest screen recorder you&apos;ll ever use
                </div>
                <div className="pt-6 py-15 md:pb-24 text-[#3dZe7c] text-xl flex md:text-3xl font-light items-center justify-center">
                    Record in a few clicks. Share anywhere. Collaborate better.
                </div>
            </div>

            <div className="items-center justify-center flex space-x-20">
                <div className="w-full md:w-5/6 md:rounded-[80px] bg-[#eff0ff]">
                    <div className="md:py-40 py-16">
                        <div className="md:flex md:px-20 md:gap-20 md:space-y-0 flex-row-reverse">
                            <div className="text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1">
                                <div className="flex space-x-10 w-full">
                                    <div className="hidden rounded-full bg-[#ffedec] h-6 w-6 p-4 md:flex justify-center items-center">
                                        <div className="bg-rose-500 rounded-full p-2 animate-pulse duration-1000">
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-[#2b1c50] font-medium leading-normal w-2/3">
                                            Lightning fast screen recording
                                        </div>
                                        <div className="text-lg text-[#3dZe7c] md:leading-10 font-light w-5/6 py-4">
                                            Easily record your screen and camera. Record on any device using Loom&apos; Chrome extension, desktop app or mobile app.

                                        </div>
                                        <Button className="font-light md:text-lg mt-6 rounded-[40px] border-4 border-indigo-400/90 py-6 bg-[#565add] hover:scale-110 transition-all duration-300 shadow-dm">
                                            Download now
                                        </Button>

                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 mb-10 md:mb-0 order-1 p-10 md:p-0 ">
                                <div className="bg-yellow-500 flex items-center justify-center py-20 rounded-full">
                                    <video
                                        className="w-[200px] h-[200px] rounded-full"
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        <source src="/videos/video2.mp4" ></source>
                                    </video>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ThirdSection