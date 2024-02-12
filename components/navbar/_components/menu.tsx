'use client';
import {
    AlignJustify,
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
import React, { useState } from "react";
import ContenMenu from "./content-menu";

interface MenuItem {
    title: string,
    menu: string,
    options: {
        label: string,
        emoji: React.ReactElement,
        href: string
    }[];
}

const items: MenuItem[] = [
    {
        title: 'Use Cases',
        menu: "use-cases",
        options: [
            { label: "Team Alignment", emoji: <UserPlus className="text-orange-500" />, href: 'team-alignment' },
            { label: "Seles", emoji: <DollarSign className="text-gray-500" />, href: 'seles' },
            { label: "Enginnering", emoji: <Building className="text-blue-500" />, href: '/enginnering' },
            { label: "Design", emoji: <Code className="text-rose-500" />, href: '/design' },
            { label: "Marketing", emoji: <PaintBucket className="text-indigo-500" />, href: '/marketing' },
            { label: "Customer Support", emoji: <BarChart className="text-indigo-400" />, href: '/customer-support' },
            { label: "Product Management", emoji: <Settings className="text-lime-500" />, href: '/product-management' },
            { label: "Education", emoji: <GraduationCap className="text-indigo-500" />, href: '/education' },
        ]

    },
    {
        title: 'For Business',
        menu: "for-business",
        options: [
            { label: "Bird Al", emoji: <Sparkles className="text-indigo-500" />, href: 'bird-all' },
            { label: "Enterprice", emoji: <Building2 className="text-gray-500" />, href: '/enterprice' },
            { label: "Bird HO", emoji: <Home className="text-indigo-500" />, href: '/' },
            { label: "Customers", emoji: <Smile className="text-rose-500" />, href: '/' },
            { label: "Security", emoji: <Lock className="text-rose-500" />, href: '/' },
            { label: "Video Hosting", emoji: <BarChart className="text-indigo-500" />, href: '/' },
            { label: "Video Library", emoji: <GraduationCap className="text-yellow-500" />, href: '/' },
        ]

    },

    {
        title: 'Resurces',
        menu: "resurces",
        options: [
            { label: "Blog", emoji: <AlignJustify className="text-orange-500" />, href: '/' },
            { label: "Help & Suppor", emoji: <LifeBuoy className="text-green-500" />, href: '/' },
            { label: "Download", emoji: <Download className="text-indigo-500" />, href: '/' },
            { label: "BirdSDK", emoji: <Code2Icon className="text-rose-500" />, href: '/' },
            { label: "Screen Redorder", emoji: <Headphones className="text-indigo-500" />, href: 'screen-redorde' },
            { label: "Comminuty", emoji: <GraduationCap className="text-yellow-500" />, href: '/' },
        ],

    },

    {
        title: 'Company',
        menu: "company",
        options: [
            { label: "About Us", emoji: <Info className="text-orange-500" />, href: '/about-us' },
            { label: "Careers", emoji: <LifeBuoy className="text-green-500" />, href: '/careers' },
            { label: "Newsroom", emoji: <Download className="text-indigo-500" />, href: '/newsroom' },
        ],
    }
]


const NavigationMenuBar = () => {
    const [activeMenu, setActionMenu] = useState<string | null>(null);

    const handleMouseEnter = (menu: string) => {
        setActionMenu(menu);
    };

    const handleMouseLeave = () => {
        setActionMenu(null)
    }

    const rendrMenu = (item: MenuItem) => {
        const { title, menu, options } = item;
        return (
            <div className="flex items-center relative"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}>
                <div className="flex items-center">
                    <div className=" flex items-center">
                       <div className="w-24">{title}</div>
                        <div><ChevronDown className="h-5 w-3" /></div>
                    </div>
                    <div className="mt-20">
                        {activeMenu === menu && (
                            <ContenMenu
                                options={options.map((option) => (
                                    {
                                        ...option,
                                        href: option.href
                                    }
                                ))} />

                        )}

                    </div>

                </div>

            </div>
        )
    }

    return (
        <div className="hidden text-md font-light space-x-4 w-full items-center xl:flex">
            {
                items.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="cursor-pointer hidden xl:block">
                            {rendrMenu(item)}
                        </div>
                    </React.Fragment>
                ))
            }

        </div>
    )
}

export default NavigationMenuBar