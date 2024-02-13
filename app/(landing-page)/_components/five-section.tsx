'use client';

import { Button } from "@/components/ui/button";

const FiveSection = () => {
  return (
    <div>
        <div className="md:w-5/6 mx-auto bg-[#eff0ff] md:rounded-[80px] md:p-20 items-center justify-center">
            <div className="text-[#2b1c50] mx-auto flex justify-center items-center text-3xl md:text-6xl py-6 font-medium">
            Keep your content safe
            </div>
            <div className="text-xl md:w-2/3 md:text-3xl text-[#3d2e7c] leading-relaxed font-light justify-center text-center mx-auto w-4/5">
            Enterprise-grade security to keep your data and your customer&apos;s data private and secure. We offer SSO, SCIM as well as custom data retention policies and privacy settings.
            </div>

            <div className="items-center justify-center flex py-10">
                <Button
                className="md:text-xl py-6 font-light rounded-[40px] border-4 border-indigo-400/90 md:p-5 bg-[#565add] hover:scale-110 hover:shadow-indigo-500 transition-all duration-300 shadow-md"
                >
                    Get Started
                </Button>

            </div>

        </div>
    </div>
  )
}

export default FiveSection;