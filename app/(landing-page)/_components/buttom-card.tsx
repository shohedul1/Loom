import { Download } from "lucide-react"

const ButtomCard = () => {
  return (
    <div className="pb-40 px-10">
        <div className="border p-10 items-center justify-center md:flex md:w-4/5 mx-auto md:p-20 rounded-[60px] md:rounded-[80px] md:justify-between">
           <div className="text-2xl md:text-5xl items-center font-medium flex text-center px-6">
           Loom works wherever you do.
           </div>
           <div className="flex">
            <div className="mt-6 text-white mx-auto w-60 justify-between py-6 font-light rounded-[40px] border-4 border-indigo-400/90 md:py-6 bg-[#565add] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300">
                <div className="flex items-center justify-center gap-4 md:justify-between px-6">
                    <Download  className="md:-w-6 md:h-6"/>
                    <div className="md:text-lg text-sm">
                        Get Loom for free
                    </div>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default ButtomCard