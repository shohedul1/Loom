import Image from "next/image"

const FifthSection = () => {
  return (
    <div className="bg-[#ffedec] mx-auto">
        <div className="py-4">
            <div className="md:flex md:space-y-0 items-center justify-center md:p-40">
                <div className="md:order-1 md:pr-0">
                    <div className="flex flex-col space-y-10 md:flex-row md:items-center md:space-x-40">
                        <div className="order-2 md:order-1 w-full md:w-1/2">
                        <Image src={'/image/image1.svg'} alt="image" width={1920} height={1000} className="object-cover md:rounded-[60px] rounded-[40px] w-full p-10" />
                        </div>

                        <div className="order-1 md:order-2 md:flex-1 px-10 md:px-0 space-y-10">
                            <div className="space-y-1 text-md">
                                <div className="text-[#6f1f1d] font-medium leading-normal text-2xl md:text-4xl pb-4">
                                Build quality connections with your team
                                </div>
                                <div className="text-md text-[#6f1f1d] md:leading-8 font-light">
                                Loom helps you develop and build close connections to your team so you can do your best work together.



                                </div>

                            </div>

                            <div className="space-y-1 text-md">
                                <div className="text-[#6f1f1d] font-medium leading-normal text-xl">
                                Maximize professional development

                                </div>
                                <div className="text-sm md:text-md text-[#6f1f1d] leading-6 md:leading-10 font-light">
                                Use Loom’s platform to document knowledge so you can share valuable lessons and learn from each other.

                                </div>

                            </div>

                            <div className="space-y-1 text-md">
                                <div className="text-[#6f1f1d] font-medium leading-normal text-xl">
                                Deliver thoughtful recognition

                                </div>
                                <div className="text-sm md:text-md text-[#6f1f1d] leading-6 md:leading-10 font-light">
                                Highlight a coworker&pos;s exceptional work, or celebrate your tea&apos;s success using async video shoutouts.



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