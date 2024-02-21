'use client';
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdrownMenu from "./drop-down-menu";


const ActionButtons = () => {
    const [isDropdownVisible, setDropdownVisble] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisble(!isDropdownVisible);
    }

    const closeDropdown = () => {
        setDropdownVisble(false);
    }

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
                        className=" hidden xl:flex md:flex text-md text-[#eff0ff] py-6 font-light bg-[#565add] rounded-[40px] border-4 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300"
                    >
                        Try Loom for Free
                    </Button>
                </Link>
          
                <Link href={"/contact"}>
                    <Button
                        className="hidden md:hidden lg:flex xl:flex text-md text-[#565add] py-6 font-light bg-[#eff0ff] rounded-[40px] border-4 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300"
                    >
                        Contact Seles
                    </Button>

                </Link>

            </div>

            {isDropdownVisible && (
                <div
                    onClick={toggleDropdown}
                    className="bg-[#565add] p-3 rounded-full xl:hidden"
                >
                    <X className="w-6 h-6 text-[#eff0ff] text-center justify-center rounded-full" />

                </div>
            )}

            {!isDropdownVisible && (
                <div
                    onClick={toggleDropdown}
                    className="bg-[#eff0ff] p-3 rounded-full xl:hidden"
                >
                    <AlignJustify className="w-6 h-6 text-[#565add] text-center justify-center rounded-full" />

                </div>
            )}

            {isDropdownVisible && (
                <DropdrownMenu onClose={closeDropdown} />
            )}

            {isDropdownVisible && (
               <div onClick={toggleDropdown}></div>
            )}

        </div>
    )
}

export default ActionButtons