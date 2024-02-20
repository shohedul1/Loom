import SliderOne from '@/app/(landing-page)/_components/slider/_components/slider-one';

const SecondSection = () => {
  return (
    <div className="bg-[#111019]">
        <div className="md:pt-32">
            <div className="text-[#f1f0f3] px-6 md:w-full mx-auto text-center flex justify-center items-center md:text-5xl text-3xl font-medium">
            Thousands of leading enterprises trust Loom
            </div>
            <div className='py-20'>
                <SliderOne/>
            </div>
        </div>
    </div>
  )
}

export default SecondSection;