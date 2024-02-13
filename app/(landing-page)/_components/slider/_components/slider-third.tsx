'use client';
import Slider from 'react-infinite-logo-slider';
import Image from 'next/image';

const SliderThird = () => {
    return (
        <div>

            <Slider
                width="200px"
                duration={100}
                blurBorders={true}
            >
                <Slider.Slide>
                    <Image
                        src={"/logos/logo1.svg"} width={100} height={100} alt='image'
                        style={{ width: "auto", height: "auto" }} // Adjusted style
                        property='true'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image
                        src={"/logos/logo2.svg"} width={100} height={100} alt='image'
                        style={{ width: "auto", height: "auto" }} // Adjusted style
                        property='true'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image
                        src={"/logos/logo3.svg"} width={100} height={100} alt='image'
                        style={{ width: "auto", height: "auto" }} // Adjusted style
                        property='true'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image
                        src={"/logos/logo4.svg"} width={100} height={100} alt='image'
                        style={{ width: "auto", height: "auto" }} // Adjusted style
                        property='true'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image
                        src={"/logos/logo5.svg"} width={100} height={100} alt='image'
                        style={{ width: "auto", height: "auto" }} // Adjusted style
                        property='true'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image
                        src={"/logos/logo6.svg"} width={100} height={100} alt='image'
                        style={{ width: "auto", height: "auto" }} // Adjusted style
                        property='true'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image
                        src={"/logos/logo7.svg"} width={100} height={100} alt='image'
                        style={{ width: "auto", height: "auto" }} // Adjusted style
                        property='true'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image
                        src={"/logos/logo8.svg"} width={100} height={100} alt='image'
                        style={{ width: "auto", height: "auto" }} // Adjusted style
                        property='true'
                    />
                </Slider.Slide>
                
                <Slider.Slide>
                    <Image
                        src={"/logos/logo10.svg"} width={100} height={100} alt='image '
                        style={{ width: "auto", height: "auto" }} // Adjusted style
                        property='true'
                    />
                </Slider.Slide>
                <Slider.Slide>
                    <Image
                        src={"/logos/logo11.svg"} width={100} height={100} alt='image'
                        style={{ width: "auto", height: "auto" }} // Adjusted style
                        property='true'
                    />
                </Slider.Slide>



            </Slider>
        </div>
    )
}

export default SliderThird