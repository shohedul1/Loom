'use client';

import { Button } from "@/components/ui/button";
import { Check, Dot, Star } from "lucide-react";

const FirstSection = () => {
    return (
        <div className="px-10">
            <div className="space-y-6 flex flex-col sm:text-center pt-6 md:pt-32 pb-14 md:px-0">
                <div className="text-4xl md:text-7xl font-medium">
                    Choose the plan that fits your needs.
                </div>
            </div>
            <div>

                <div className="md:flex">
                    <div className="md:w-1/3 w-full">
                        <div className="p-10 pt-16 md:p-20 rounded-[40px] bg-[#eff0ff]">
                            <div className="text-3xl md:text-5xl font-medium">Starter</div>
                            <div className="text-xl pt-4 pb-8">For individuals</div>
                            <div className="text-2xl md:text-3xl font-medium">Free</div>
                            <Button className="my-8 text-sm md:text-md font-light rounded-[40px] border-4 border-indigo-400/90 p-6 bg-[#565add] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300">
                                Sing Up, It&apos;s Free
                            </Button>
                            <div className="font-medium text-md md:text-lg pb-4">Includes:</div>
                            <div className="flex space-y-4 flex-col text-sm">
                                <div className="flex space-x-2">
                                    <div>
                                        <Dot className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Up to 25 videos/person</div>

                                </div>
                                <div className="flex space-x-2">
                                    <div>
                                        <Dot className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Up to 5 mins/video</div>

                                </div>

                            </div>
                            <hr className="border-indigo-300 my-5" />
                            <div className="font-medium text-md md:text-lg pb-4">Key Features</div>
                            <div className="flex space-y-4 flex-col text-sm">
                                <div className="flex space-x-2">
                                    <div>
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Screen recording & cam bubble</div>

                                </div>
                                <div className="flex space-x-2">
                                    <div>
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Unlimited transcriptions</div>

                                </div>
                                <div className="flex space-x-2">
                                    <div>
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500"> Video privacy controls</div>

                                </div>
                                <div className="flex space-x-2">
                                    <div>
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Viewer insights</div>

                                </div>

                                <div className="flex space-x-2">
                                    <div>
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Team workspace</div>

                                </div>

                            </div>


                        </div>
                    </div>

                    <div className="md:w-1/3 w-full">
                        <div className="p-10 pt-16 md:p-20 rounded-[40px] bg-white my-[-20px] md:mt-[-20px] md:my-0 border md:-mx-10 z-20">
                            <div className="text-3xl md:text-5xl font-medium">Business</div>
                            <div className="text-xl pt-4 pb-8">For teams</div>
                            <div className="flex gap-2 items-center justify-center">
                                <div className="text-2xl md:text-3xl font-medium">$12.50</div>
                                <div className="text-[12px]">USD/Creator/mo (annually)</div>
                            </div>
                            <Button className="my-8 text-sm md:text-md font-light rounded-[40px] border-4 border-indigo-400/90 p-6 bg-[#565add] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300">
                                Start Free 14-Day Trial
                            </Button>
                            <div className="font-medium text-md md:text-lg pb-4">Includes:</div>
                            <div className="flex space-y-4 flex-col text-sm">
                                <div className="flex space-x-2">
                                    <div>
                                        <Dot className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Unlimited videos</div>

                                </div>
                                <div className="flex space-x-2">
                                    <div>
                                        <Dot className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Unlimited recording length</div>

                                </div>

                            </div>
                            <hr className="border-indigo-200/90 my-5" />
                            <div className="font-medium text-md md:text-lg pb-4">Everything in Starter, plus</div>
                            <div className="flex space-y-4 flex-col text-sm">
                                <div className="flex space-x-2">
                                    <div>
                                        <Star className="w-6 h-6 text-[#81ef5f] " />
                                    </div>
                                    <div className=" text-[#81ef5f]">Loom AI add-on available</div>

                                </div>
                                <div className="flex space-x-2">
                                    <div>
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Edit by Transcript</div>

                                </div>
                                <div className="flex space-x-2">
                                    <div>
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500"> Remove Loom branding</div>

                                </div>
                                <div className="flex space-x-2">
                                    <div>
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Embed links in video</div>

                                </div>

                                <div className="flex space-x-2">
                                    <div>
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Import and download</div>

                                </div>
                                <div className="flex space-x-2">
                                    <div>
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Password protected videos</div>

                                </div>

                            </div>


                        </div>
                    </div>

                    <div className="md:w-1/3 w-full">
                        <div className="p-10 pt-16 md:p-20 rounded-[40px] bg-[#eff0ff]">
                            <div className="text-3xl md:text-5xl font-medium">Enterprise</div>
                            <div className="text-xl pt-4 pb-8">For scaling teams</div>
                            <div className="text-2xl md:text-3xl font-medium">Let&apos;s Talk</div>
                            <Button className="my-8 text-sm md:text-md font-light rounded-[40px] border-4 border-indigo-400/90 p-6 bg-[#565add] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300">
                                Contact Sales
                            </Button>
                            <div className="font-medium text-md md:text-lg pb-4">Includes:</div>
                            <div className="flex space-y-4 flex-col text-sm">
                                <div className="flex space-x-2">
                                    <div>
                                        <Dot className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Unlimited videos</div>

                                </div>
                                <div className="flex space-x-2">
                                    <div>
                                        <Dot className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Unlimited recording length</div>

                                </div>

                            </div>
                            <hr className="border-indigo-300 my-5" />
                            <div className="font-medium text-md md:text-lg pb-4">Everything in Business, plus</div>
                            <div className="flex space-y-4 flex-col text-sm">
                                <div className="flex space-x-2">
                                    <div>
                                        <Star className="w-6 h-6 text-[#81ef5f] " />
                                    </div>
                                    <div className=" text-[#81ef5f]">Loom AI add-on available</div>

                                </div>

                                <div className="flex space-x-2">
                                    <div>
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Salesforce integration (Beta)</div>

                                </div>
                                <div className="flex space-x-2">
                                    <div>
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Request email to view</div>

                                </div>
                                <div className="flex space-x-2">
                                    <div>
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500"> SSO (SAML) and SCIM</div>

                                </div>
                                <div className="flex space-x-2">
                                    <div>
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-500">Advanced content privacy</div>

                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FirstSection