import Link from "next/link";

interface ContenMenuProps {
    options: {
        label: string;
        emoji: React.ReactElement;
        href: string
    }[];
}

const ContenMenu: React.FC<ContenMenuProps> = ({options}) => {
  return (
    <div className="w-80 border border-gray-200 rounded-[40px] shadow-md bg-white absolute left-0 top-full flex justify-center">
       <ul className="flex flex-col items-start pl-10 space-x-1 py-1">
        {options.map((option,index)=>(
           <Link href={option.href} key={index}>
            <div className="cursor-pointer flex flex-col gap-1 hover:bg-gray-100 w-60 px-6 py-2 rounded-3xl">
               <div className="flex gap-4">
                <div>{option.emoji}</div>
                <div>{option.label}</div>
               </div>
            </div>
           
           </Link>
        ))}

       </ul>
    </div>
  )
}

export default ContenMenu;