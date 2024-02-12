import { Button } from "@/components/ui/button";
import Link from "next/link";

const FirstSection = () => {
    return (
        <div className="mt-[20px]">
            <section className="xl:py-36 py-10 px-10 bg-[#d1d1f7]">
                <div className="md:items-center flex flex-col">
                    <div className="lg:text-5xl xl:text-6xl text-4xl justify-center font-medium text-[#2b1c50] pt-10">
                        One video is worth a thousand words
                    </div>
                    <p className="text-xl xl:text-3xl font-light xl:w-2/3 text-[#3b2e7c] justify-center pt-14 md:text-center  ">
                        Easily record and share AI-powered video messages with your teammates and customers to supercharge productivity
                    </p>
                    <div className="flex gap-4 py-4 xl:pt-10">
                        <Link href={"/free"}>
                            <Button className="xl:text-3xl text-xl md:justify-center md:flex font-light rounded-[60px] border-8 border-indigo-400/90 py-9 px-10 xl:py-12 xl:px-24 bg-[#565add] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300">
                                Get Loom for free
                            </Button>
                        </Link>
                    </div>

                    <div className="xl:pt-28">
                        <video className="rounded-[40px] shadow-indigo-400 shadow-2xl xl:w-5/6 xl:mx-auto"
                           autoPlay
                           muted
                           loop
                        >
                            <source src="/videos/video1.mp4" ></source>

                        </video>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default FirstSection;