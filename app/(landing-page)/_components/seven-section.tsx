import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const SevenSection = () => {
  return (
    <div className="px-10">
      <div className="text-[#2b1c50] w-full text-center flex justify-center items-center text-4xl md:text-6xl font-medium pb-20">
        Powerful features for easy, custom recording
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="md:flex md:gap-[30px]">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#cff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">Screen and camera recording</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#cff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">Trim and stitch video clips</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#cff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">Transcriptions and closed captions</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#cff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">Custom background</span>
            </div>
          </div>
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#cff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">Easy sharing and embedding</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#cff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">Download and upload</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#cff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">Video privacy controls</span>

            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#cff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">Video and viewer insights</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-20">
                <Button
                className="text-lg mt-6 rounded-[40px] text-[#4b42ad] font-medium p-6 bg-[#eff0ff] underline hover:shadow-indigo-500 transition-all duration-300 shadow-md"
                >
                  See all features

                </Button>

            </div>
    </div>
  )
}

export default SevenSection