import Image from "next/image"

const FourthSection = () => {
  return (
    <div className="bg-[#111019]">
        <div className="md:text-center items-center flex flex-col py-20 md:py-0 px-10">
            <div className="text-3xl md:text-6xl flex md:justify-center font-medium pb-10 text-[#f1f0f3]">
            Drive community and visibility at scale
            </div>
            <div className="md:flex items-center justify-center md:space-x-16 pt-10 md:pt-20">
               <Image src={'/image/image1.svg'} width={400} height={400} alt="image"/>
                <Image src={'/image/image4.svg'} alt="image" width={300} height={100} className="hidden md:block"/>
                <Image src={'/image/image3.svg'} alt="image" width={420} height={400} className="hidden md:block"/>

              

              


            </div>


        </div>
    </div>
  )
}

export default FourthSection