


const FirstSection = () => {
    return (
        <div className="py-20 bg-[#eff0ff]">
            <div className="flex flex-col justify-center space-y-4">
                <div className="text-5xl md:text-7xl flex justify-center font-medium px-10 text-[#2b1c50]">
                    Work faster and smarter with Loom AI
                </div>
                <p className="text-xl md:text-3xl font-light md:text-center md:w-2/3 mx-auto px-10 md:px-0 text-[#3d2e7c]">
                    Record better video messages with automatic titles, summaries, share messages, and more. You record, Loom AI does the rest.
                </p>
                <div className="flex gap-4 md:justify-center px-10 py-4">
                    <div className="flex">
                        <div className="text-white px-6 justify-between text-md font-light border-4 rounded-[40px] border-indigo-400/90 md:py-4 bg-[#565add] hover:scale-110 transition-all duration-300 hover:shadow-indigo-300">
                            <div className="flex items-center justify-center">
                                <div className="text-lg py-4 md:py-0">
                                    Try Loom Al for free
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:pt-20 w-5/6 mx-auto md:px-10">
                    <div>
                        <video className="rounded-[40px] shadow-indigo-400 shadow-2xl xl:w-5/6 xl:mx-auto" controls>
                            <source src="/videos/video7.mp4" type="video/mp4"/>
                        </video>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default FirstSection