'use client';
import React,{useState} from "react";
import { Button } from "@/components/ui/button";
import { X,AlignJustify } from "lucide-react";
import Link from "next/link";


const ActionButtons = () => {
  return (
    <div className="flex items-center md:justify-end md:space-x-6 sm:px-10">
        <div className="flex xl:space-x-6">
            <Link href={"/pricing"} className="xl:flex items-center hidden">
                <div className="font-light flex">Pricing</div>
            </Link>
            <Link href={"/sign-in"} className="xl:flex items-center hidden">
                <div className="font-light flex xl:w-12">Sign in</div>
            </Link>
        </div>
        <div className="flex lg:space-x-4 items-center">
            <Link href={"/free"}>
                <Button
                className="hidden md:flex text-sm font-light rounded-[40px] border-4 border-indigo-400/90 py-6 bg-[#565add] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300"
                >
                    Get Bird for Free
                </Button>
            
            </Link>
            <Link href={"/contact"}>
                <Button
                className="hidden md:hidden xl:flex text-md text-[#565add] py-6 font-light bg-[#eff0ff] rounded-[40px] border-4 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300"
                >
                    Contact
                </Button>
            
            </Link>

        </div>

    </div>
  )
}

export default ActionButtons