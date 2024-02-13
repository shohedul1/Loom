'use client';

import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";


const SecondSection = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-full md:w-5/6 md:rounded-[80px] bg-[#2b1c50]">
                <div className="md:py-20">
                    <div className="md:flex md:px-20 md:space-x-20 md:space-y-0 ">
                        <div className="w-full">
                            <Image src={"/image/image1.svg"}
                                width={500}
                                height={500}
                                property='true'
                                style={{ width: "100%", height: "auto" }} // Adjusted style
                                alt="image"
                                className="w-full object-cover rounded-md p-10"
                            />


                        </div>


                        <div className="text-white flex space-y-10 md:-w-1/2">
                            <div className="md:space-y-10 flex flex-col px-4 py-10">
                                <div className="text-2xl md:text-3xl">NEW</div>
                                <div className="text-5xl md:text-7xl pb-4 md:pb-0">Sales Features</div>
                                <div className="text-xl md:text-3xl w-5/6">
                                    From prospecting to deal close and onboarding, Loom video messages help sellers better connect with key stakeholders, generate more pipeline, and close more deals.
                                </div>
                                <div className="md:flex pt-10 md:py-10">
                                    <div className="space-y-10">
                                        <div className="flex items-center gap-4">
                                            <Check className="text-3xl text-indigo-500" />
                                            <span className="text-xl">Auto Titles</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Check className="text-3xl text-indigo-500" />
                                            <span className="text-xl">Auto Summaries</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Check className="text-3xl text-indigo-500" />
                                            <span className="text-xl">Auto Chapters</span>
                                        </div>
                                    </div>

                                    <div className="space-y-10 py-10 md:py-0 md:ml-20">
                                        <div className="flex items-center gap-4">
                                            <Check className="text-3xl text-indigo-500" />
                                            <span className="text-xl">Auto Tasks</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Check className="text-3xl text-indigo-500" />
                                            <span className="text-xl">Auto wordremoval</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Check className="text-3xl text-indigo-500" />
                                            <span className="text-xl">Auto Removal</span>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <Button
                                        className="text-md font-light w-[200px] rounded-[40px] border-4 border-indigo-400/90 py-6 bg-[#565add] hover:scale-110 hover:shadow-indigo-300 transition-all duration-300 shadow-md">
                                        Explorem Loom for Sales
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

export default SecondSection