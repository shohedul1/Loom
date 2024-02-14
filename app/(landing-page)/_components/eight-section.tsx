'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


const EightSectiton = () => {
    return (
        <div className="py-32 items-center justify-center flex">
            <div className="md:w-5/6 md:rounded-[80px] bg-[#2b1c50] items-center justify-center flex">
                <div className="md:py-20 pt-10">
                    <div className="md:flex md:px-20 md:space-x-20 md:space-y-0">
                        <div className="text-white flex space-y-10">
                            <div className="flex-col flex items-center justify-center space-y-10">

                                <div className="text-md">FROM OUR BLOG</div>

                                <div className="md:text-6xl text-4xl w-full text-center">
                                    How to use async video messaging to improve communication
                                </div>



                                <div className="md:flex md:space-x-10 space-y-10 md:space-y-0 items-center justify-center px-10 md:px-20">

                                    <div className="md:w-1/2 bg-[#9f92ec] rounded-[60px] p-10 md:p-20 space-y-10 items-center justify-center flex flex-col hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:scale-105">
                                        <div className="text-3xl">
                                            When to Choose Synchronous Vs. Asynchronous Communication
                                        </div>
                                        <p className="leading-10 items-center flex justify-center">
                                            This guide explores the intricacies of sync vs. async communication, helps you decide which is the best for your workflow, and introduces how screen recording like Loom bridges the gap between these communication styles.
                                        </p>
                                        <div className="flex space-x-10">
                                            <span>Read the article</span>
                                            <ArrowRight className="text-3xl" />

                                        </div>
                                    </div>

                                    <div className="md:w-1/2 bg-[#9f92ec] rounded-[60px] p-10 md:p-20 space-y-10 items-center justify-center flex flex-col hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:scale-105 ">
                                        <div className="text-3xl">
                                            7 Tips for Overcoming Camera Anxiety
                                        </div>
                                        <p className="leading-[35px] items-center flex justify-center">
                                            It can feel vulnerable to record a video message — almost like public speaking — especially if you&apos;re not getting feedback from another person in real life. Here are 7 tips for overcoming camera anxiety, so you can communicate with greater clarity, and build stronger relationships at work.
                                        </p>
                                        <div className="flex space-x-10">
                                            <span>Read the article</span>
                                            <ArrowRight className="text-3xl" />

                                        </div>
                                    </div>
                                </div>

                                <div className="pb-10 md:pb-0">
                                    <Button className="text-md font-light w-40 rounded-[40px] border-4 border-indigo-400/90 p-8 bg-[#565add] hover:scale-110 hover:shadow-indigo-500 transition-all duration-300 shadow-md">
                                        Explore our blog
                                    </Button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default EightSectiton