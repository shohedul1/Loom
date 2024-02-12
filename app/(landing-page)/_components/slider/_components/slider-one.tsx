'use client';
import Slider from 'react-infinite-logo-slider';
import Image from 'next/image';
const SliderOne = () => {
    return (
        <div>
            <Slider 
            width="200px"
            duration={60}
            >
                <Slider.Slide>
                    <Image 
                    src={"/logos/logo1.svg"} width={100} height={100} alt='image'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image 
                    src={"/logos/logo2.svg"} width={100} height={100} alt='image'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image 
                    src={"/logos/logo3.svg"} width={100} height={100} alt='image'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image 
                    src={"/logos/logo4.svg"} width={100} height={100} alt='image'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image 
                    src={"/logos/logo5.svg"} width={100} height={100} alt='image'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image 
                    src={"/logos/logo6.svg"} width={100} height={100} alt='image'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image 
                    src={"/logos/logo7.svg"} width={100} height={100} alt='image'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image 
                    src={"/logos/logo8.svg"} width={100} height={100} alt='image'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image 
                    src={"/logos/logo9.svg"} width={100} height={100} alt='image'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image 
                    src={"/logos/logo10.svg"} width={100} height={100} alt='image'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image 
                    src={"/logos/logo11.svg"} width={100} height={100} alt='image'
                    />
                </Slider.Slide>
               


            </Slider>
           
           
        </div>
    )
}

export default SliderOne