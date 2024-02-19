import Image from "next/image"

const FifthSection = () => {
  return (
    <div className="bg-[#58584a] mx-auto">
        <div className="py-20">
            <div className="md:flex md:space-y-0 items-center justify-center ">
                <div className="md:order-1 md:pr-0">
                    <div className="flex flex-col space-y-10 md:flex-row md:items-center md:space-x-40">
                        <div className="order-2 md:order-1 w-full md:w-1/2">
                        <Image src={'/image/imame20.webp'} alt="image" width={1920} height={1000} className="object-cover md:rounded-[60px] rounded-[40px] w-full p-10" />
                        </div>

                        <div className="order-1 md:order-2 md:flex-1 px-10 md:px-0 space-y-10">
                            <div className="space-y-1 text-md">
                                <div className="text-[#f1ebea] font-medium leading-normal text-2xl md:text-4xl pb-4">
                                Go to market with confidence

                                </div>
                                <div className="text-md text-[#f4edec] md:leading-8 font-light">
                                Launch your product in less time with less stress by sharing key details and coordinating across teams with Loom.
                                </div>

                            </div>

                            <div className="space-y-1 text-md">
                                <div className="text-[#ffffff] font-medium leading-normal text-xl">
                                Align with Marketing


                                </div>
                                <div className="text-sm md:text-md text-[#efefef] leading-6 md:leading-10 font-light">
                                Manage cross-functional launch efforts by sharing key timelines and strategies over async video messages.
                                </div>

                            </div>

                            <div className="space-y-1 text-md">
                                <div className="text-[#f6f2f2] font-medium leading-normal text-xl">
                                Empower the Sales team

                                </div>
                                <div className="text-sm md:text-md text-[#fbf2f2] leading-6 md:leading-10 font-light">
                                Record demos and highlight the value of new features so your Sales team can turn your new release into new revenue.


                                </div>

                            </div>
                            <div className="space-y-1 text-md">
                                <div className="text-[#f6f2f2] font-medium leading-normal text-xl">
                                Prepare Support for success


                                </div>
                                <div className="text-sm md:text-md text-[#fbf2f2] leading-6 md:leading-10 font-light">
                                Share product training videos with Support to ensure they can serve customers at a level of excellence.

                                </div>

                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default FifthSection