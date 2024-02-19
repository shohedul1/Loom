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
                            Don&apos;t let communication slow down development

                            </div>
                            <div className="text-xl text-[#1f3575] leading-8 font-light">
                            Say goodbye to marked-up PDFs. Loom gives you a faster, more effective way to review work with your team.

                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="text-xl text-[#1f3575] leading-normal font-medium">
                            Streamline collaboration
                            </div>
                            <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                            Get feedback right when you need it so you can iterate quickly and get sign-off sooner.

                            </div>

                        </div>

                        <div className="space-y-1">
                            <div className="text-xl text-[#1f3575] leading-normal font-medium">
                            Mark up your screen
                            </div>
                            <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                            Use Loom&apos;s drawing tool to illustrate your ideas on screen and add clarity to your design concepts.
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="text-xl text-[#1f3575] leading-normal font-medium">
                            Make feedback fun
                            </div>
                            <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                            Quickly respond to teammates' videos with a few comments, or a few emoji to give two thumbs up or twenty.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 pt-10 md:pt-0">
                <Image src={'/image/image10.webp'} alt="image" width={1920} height={1000} className="object-cover md:rounded-[60px] rounded-[40px] w-full p-10" />


                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection