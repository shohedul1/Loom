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
                            Connect and collaborate across teams

                            </div>
                            <div className="text-xl text-[#1f3575] leading-8 font-light">
                            Increase understanding and efficiency while working with other teams on projects.

                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="text-xl text-[#1f3575] leading-normal font-medium">
                            Pair development with design
                            </div>
                            <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                            From the first product prototypes to putting the final pixel in place, keep everyone on the same page with async video handoffs and updates.

                            </div>

                        </div>

                        <div className="space-y-1">
                            <div className="text-xl text-[#1f3575] leading-normal font-medium">
                            Partner with product owners
                            </div>
                            <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                            Demo products in development with product owners to clarify requirements and discuss trade-offs.
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="text-xl text-[#1f3575] leading-normal font-medium">
                               Send your video with a link 
                            </div>
                            <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                              use loom instantly-generated links to share your video in Slick, Figma, sketch, anywhere else team works
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 pt-10 md:pt-0">
                <Image src={'/image/image7.webp'} alt="image" width={1920} height={1000} className="object-cover md:rounded-[60px] rounded-[40px] w-full p-10" />


                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection