'use client';

import Image from "next/image";
import { useState } from "react";

const SecondSection = () => {
    const [activeTitle, setActiveTitle] = useState('Titles');

    const handleTitleClick = (title: any) => {
        setActiveTitle(title)
    }

    const renderContent = () => {
        switch (activeTitle) {
            case 'Titles':
                return (
                    <div className="md:py-8">
                        <h2 className="py-10 text-3xl font-medium">
                            These titles write themselves
                        </h2>
                        <p className="text-3xl leading-relax text-[#3d2e7c] font-light">
                            Shorten the distance between your team and your customers with Bird Ai. We summarize your videos so you can share message in a fraction of the time.
                        </p>

                    </div>
                )

            case 'Summaries':
                return (
                    <div className="md:py-8">
                        <h2 className="py-10 text-3xl font-medium">
                            These Summaries write themselves
                        </h2>
                        <p className="text-3xl leading-relax text-[#3d2e7c] font-light">
                            Hey this is text
                        </p>

                    </div>
                )

            case 'Chapters':
                return (
                    <div className="md:py-8">
                        <h2 className="py-10 text-3xl font-medium">
                            These Chapters write themselves
                        </h2>
                        <p className="text-3xl leading-relax text-[#3d2e7c] font-light">
                            this is differnt text
                        </p>

                    </div>
                )
            case 'Tasks':
                return (
                    <div className="md:py-8">
                        <h2 className="py-10 text-3xl font-medium">
                            These Tasks write themselves
                        </h2>
                        <p className="text-3xl leading-relax text-[#3d2e7c] font-light">
                            Shorten the distance between your team and your customers with Bird Ai. We summarize your videos so you can share message in a fraction of the time.
                        </p>

                    </div>
                )

            default:
                return null;
        }
    }
    return (
        <>
            <div className="bg-[#eff0ff] md:pt-10 flex items-center justify-center space-x-20">
                <div className="md:w-2/4">
                    <div className="text-3xl md:text-7xl font-medium text-[#2b1c50] px-10 md:px-6 pb-6">
                        Instantly better Birds
                    </div>
                    <div className="md:flex md:space-x-6 md:pl-6">
                        {['Titles', 'Summaries', 'Chapters', 'Tasks'].map((title) => (
                            <div
                                key={title}
                                className={`hidden items-center justify-center md:flex rounded-3xl cursor-pointer
                        ${activeTitle === title ? 'bg-[#d1d1f7] text-[#3d2e7c] hover:scale-110 transition-transform duration-300'
                                        : 'text-[#4b42ad] hover:shadow-md hover:scale-110 hover:shadow-indigo-800 hover:text-[#3d2e7c transition-transform duration-300]'}`}

                                onClick={() => handleTitleClick(title)}
                            >
                                <div className="text-md py-4 px-6">{title}</div>

                            </div>
                        ))}
                    </div>

                    <div className="px-10 hidden md:block h-96">
                        {renderContent()}
                    </div>
                </div>
                <Image src={'/image/image1.svg'} width={1920} height={1080} alt="image" className="hidden md:block w-1/3"/>
            </div>
            <div className="md:hidden bg-[#eff0ff]">
                <div className="px-10">
                    <div className="md:hidden pt-6">
                    <Image src={'/image/image1.svg'} width={1920} height={1080} alt="image" className="p-10"/>
                    <div className="pt-10 pb-4 text-2xl font-medium text-[#2b1c50]">
                        These titles write themselves
                    </div>
                    <div className="lending-relaxed text-[#3d2e7c] font-light">
                    Shorten the distance between your team and your customers with Bird Ai. We summarize your videos so you can share message in a fraction of the time.

                    </div>
                    </div>

                </div>
                
                <div className="px-10">
                    <div className="md:hidden pt-6">
                    <Image src={'/image/image1.svg'} width={1920} height={1080} alt="image" className="p-10"/>
                    <div className="pt-10 pb-4 text-2xl font-medium text-[#2b1c50]">
                        These titles write themselves
                    </div>
                    <div className="lending-relaxed text-[#3d2e7c] font-light">
                    Shorten the distance between your team and your customers with Bird Ai. We summarize your videos so you can share message in a fraction of the time.

                    </div>
                    </div>

                </div>

                <div className="px-10">
                    <div className="md:hidden pt-6">
                    <Image src={'/image/image1.svg'} width={1920} height={1080} alt="image" className="p-10"/>
                    <div className="pt-10 pb-4 text-2xl font-medium text-[#2b1c50]">
                        These titles write themselves
                    </div>
                    <div className="lending-relaxed text-[#3d2e7c] font-light">
                    Shorten the distance between your team and your customers with Bird Ai. We summarize your videos so you can share message in a fraction of the time.

                    </div>
                    </div>

                </div>

                <div className="px-10">
                    <div className="md:hidden pt-6">
                    <Image src={'/image/image1.svg'} width={1920} height={1080} alt="image" className="p-10"/>
                    <div className="pt-10 pb-4 text-2xl font-medium text-[#2b1c50]">
                        These titles write themselves
                    </div>
                    <div className="lending-relaxed text-[#3d2e7c] font-light">
                    Shorten the distance between your team and your customers with Bird Ai. We summarize your videos so you can share message in a fraction of the time.

                    </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SecondSection;