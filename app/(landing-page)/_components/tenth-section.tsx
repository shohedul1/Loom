'use client';
import Image from "next/image";
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TenthSection = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1.67,
    slideslaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    className: 'w-full'
  }

  if (isMediumScreen) {
    settings.slidesToShow = 1.67
  } else if (isSmallScreen) {
    settings.slidesToShow = 1
  }


  return (
    <div className="py-20 md:pb-20 flex flex-col items-center justify-center pb-32">
      <Slider {...settings} className="w-full">
        <>
          <div className="bg-[#e3f3ff] rounded-[60px] md:rounded-[80px] p-10 md:p-20 flex flex-col md:items-center space-y-10 mb-10 mx-6">
            <div>
              <Image src={"/image/slick1.svg"} alt="image" width={500} height={500} className="w-40" />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              Loom has been the light of my life since you showed me it. I never tire of hearing this from folks. Not even an investor... yet.
            </div>
            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image src={"/image/image4.jpg"} alt="image" width={500} height={500} className="w-40 rounded-full" />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Alex Berman</div>
                <div className="text-sm">Chief Marketing Sumsung</div>

              </div>

            </div>

          </div>

        </>
        <>
          <div className="bg-[#e3f3ff] rounded-[60px] md:rounded-[80px] p-10 md:p-20 flex flex-col md:items-center space-y-10 mb-10 mx-6">
            <div>
              <Image src={"/image/slick2.svg"} alt="image" width={500} height={500} className="w-40" />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              Loom has been the light of my life since you showed me it. I never tire of hearing this from folks. Not even an investor... yet.
            </div>
            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image src={"/image/image3.jpg"} alt="image" width={500} height={500} className="w-40 rounded-full" />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Alex Berman</div>
                <div className="text-sm">Chief Marketing Sumsung</div>

              </div>

            </div>

          </div>

        </>
        <>
          <div className="bg-[#e3f3ff] rounded-[60px] md:rounded-[80px] p-10 md:p-20 flex flex-col md:items-center space-y-10 mb-10 mx-6">
            <div>
              <Image src={"/image/slick3.svg"} alt="image" width={500} height={500} className="w-40" />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              Loom has been the light of my life since you showed me it. I never tire of hearing this from folks. Not even an investor... yet.
            </div>
            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image src={"/logos/logo1.svg"} alt="image" width={500} height={500} className="w-40 rounded-full" />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Alex Berman</div>
                <div className="text-sm">Chief Marketing Sumsung</div>

              </div>

            </div>

          </div>

        </>
       
      </Slider>

    </div>
  )
}

export default TenthSection