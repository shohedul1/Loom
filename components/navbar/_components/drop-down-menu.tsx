'use client';
import {
    AlignJustify,
    ArrowRight,
    BarChart,
    Building,
    Building2,
    Camera,
    ChevronDown,
    Code,
    Code2Icon,
    DollarSign,
    Download,
    GraduationCap,
    Headphones,
    Home,
    Info,
    LibrarySquare,
    LifeBuoy,
    Lock,
    Newspaper,
    PaintBucket,
    Settings,
    Smile,
    Sparkles,
    UserCircle2,
    UserPlus

} from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface DropDrownMenuProps {
    onClose: () => void;
}



const DropdrownMenu: React.FC<DropDrownMenuProps> = ({ onClose }) => {
    const handleLinkClick = () => {
        onClose();
    }
    return (
        <div className="w-screen h-screen bg-gray-400 pt-10 pb-20 px-10 items-center justify-center absolute top-[74px] right-0 xl:hidden overflow-x-auto ">

            <Accordion type="single" collapsible className="pt-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Use Cases</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href={'/team-alignment'}
                            className="flex pl-4 w-[200px] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                            onClick={handleLinkClick}
                        >
                            <div><UserPlus className="w-6 h-6 text-orange-400" /></div>
                            <div>Team Alignment</div>
                        </Link>
                        <Link
                            href={'/seles'}
                            className="flex pl-4 w-[200px] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                            onClick={handleLinkClick}
                        >
                            <div><DollarSign className="w-6 h-6 text-gray-500" /></div>
                            <div>Seles</div>
                        </Link>
                        <Link
                            href={'/enginnering'}
                            className="flex pl-4 w-[200px] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                            onClick={handleLinkClick}
                        >
                            <div><Building className="w-6 h-6 text-blue-500" /></div>
                            <div>Enginnering</div>
                        </Link>
                        <Link
                            href={'/design'}
                            className="flex pl-4 w-[200px] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                            onClick={handleLinkClick}
                        >
                            <div><DollarSign className="w-6 h-6 text-rose-500" /></div>
                            <div>Design</div>
                        </Link>
                        <Link
                            href={'/design'}
                            className="flex pl-4 w-[200px] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                            onClick={handleLinkClick}
                        >
                            <div><PaintBucket className="w-6 h-6 text-indigo-500" /></div>
                            <div>Marketing</div>
                        </Link>
                        <Link
                            href={'/customer-support'}
                            className="flex pl-4 w-[200px] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                            onClick={handleLinkClick}
                        >
                            <div><BarChart className="w-6 h-6 text-indigo-400" /></div>
                            <div>Customer Support</div>
                        </Link>
                        <Link
                            href={'/product-management'}
                            className="flex pl-4 w-[200px] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                            onClick={handleLinkClick}
                        >
                            <div><Settings className="w-6 h-6 text-lime-500" /></div>
                            <div>Product Management</div>
                        </Link>
                        <Link
                            href={'/education'}
                            className="flex pl-4 w-[200px] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                            onClick={handleLinkClick}
                        >
                            <div><GraduationCap className="w-6 h-6text-indigo-500" /></div>
                            <div>Education</div>
                        </Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>For Busines</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href={'/bird-all'}
                            className="flex pl-4 w-[200px] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                            onClick={handleLinkClick}
                        >
                            <div><Sparkles className="w-6 h-6 text-indigo-500" /></div>
                            <div>Bird Al</div>
                        </Link>
                        <Link
                            href={'/enterprice'}
                            className="flex pl-4 w-[200px] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                            onClick={handleLinkClick}
                        >
                            <div><Building2 className="w-6 h-6text-gray-500" /></div>
                            <div>Enterprice</div>
                        </Link>
                        <Link
                            href={'/'}
                            className="flex pl-4 w-[200px] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                            onClick={handleLinkClick}
                        >
                            <div><Smile className="w-6 h-6 text-rose-500" /></div>
                            <div>Customers</div>
                        </Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Resurces</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href={'/screen-redorde'}
                            className="flex pl-4 w-[200px] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                            onClick={handleLinkClick}
                        >
                            <div><Headphones className="w-6 h-6 text-indigo-500" /></div>
                            <div>Screen Redorder</div>
                        </Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Company</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href={'/about-us'}
                            className="flex pl-4 w-[200px] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                            onClick={handleLinkClick}
                        >
                            <div><Info className="w-6 h-6 text-orange-500" /></div>
                            <div>About Us</div>
                        </Link>
                        <Link
                            href={'/careers'}
                            className="flex pl-4 w-[200px] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                            onClick={handleLinkClick}
                        >
                            <div><LifeBuoy className="w-6 h-6 text-green-500" /></div>
                            <div>Careers</div>
                        </Link>
                        <Link
                            href={'/newsroom'}
                            className="flex pl-4 w-[200px] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                            onClick={handleLinkClick}
                        >
                            <div><Download className="w-6 h-6 text-indigo-500" /></div>
                            <div>Newsroom</div>
                        </Link>
                        <div className="flex pt-10">

                        </div>
                    </AccordionContent>
                </AccordionItem>

                <Link href={"/pricing"}
                    className="flex flex-1 items-center justify-between text-xl px-6 my-6 py-4 hover:text-lime-500 ">
                    Pricing
                    <div><ArrowRight className="h-6 w-6" /></div>
                </Link>

                <Link href={"/contact"}
                    className="flex flex-1 items-center justify-between text-xl px-6 my-4 hover:text-lime-500 ">
                    Contact Seles
                    <div><ArrowRight className="h-6 w-6" /></div>
                </Link>
            </Accordion>
            <div className="md:pt-20 pt-10 pb-20">
                <div className="flex items-center justify-center space-x-4">
                    <Link href={"/sign-in"}>
                        <Button
                            className=" md:hidden xl:hidden text-md text-[#565add] py-6 font-light bg-[#eff0ff] rounded-[40px] border-4 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300"
                        >
                            Signin to logo
                        </Button>

                    </Link>
                    <Link href={"/free"}>
                        <Button
                            className=" md:hidden xl:hidden text-md text-[#eff0ff] py-6 font-light bg-[#565add] rounded-[40px] border-4 border-[#9497e1] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300"
                        >
                            Try Bird for Free

                        </Button>
                    </Link>



                </div>
            </div>


        </div>
    )
}

export default DropdrownMenu;