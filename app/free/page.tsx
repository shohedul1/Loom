import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Free = () => {
    return (
        <div className='relative h-full w-full bg-white'>
            <div className="absolute h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                <Link className='absolute top-0 left-0 z-10' href={'/'}>
                    <Image
                        src={'/image/Logo.svg'}
                        alt='image'
                        width={100}
                        height={100}
                        className='w-40'

                        property="true"
                    />
                </Link>

                <div className='flex flex-col justify-center items-center rounded-[40px]'>
                    <div className='flex items-center justify-center'>
                        <div className='p-10 bg-white border md:p-20 w-5/6 mx-auto rounded-[40px] z-10 mt-40'>
                            <div className='md:text-4xl text-3xl w-4/5 mx-auto font-medium justify-center flex text-center'>
                                Record your Loom in Seconds
                            </div>
                            <div className='py-10 space-y-4'>
                                <div className='border py-4 rounded-full justify-center flex items-center space-x-2'>
                                    <Image src={'/logos/googlelogo.webp'} alt='facebook' width={20} height={20} className='object-cover rounded-full w-6 h-6' />
                                    <div className='text-lg font-medium'>
                                        Sign in with Google
                                    </div>
                                </div>

                                <div className='flex items-center'>
                                    <hr className='w-1/2 border-gray-300' />
                                    <div className='mx-4'>
                                        OR
                                    </div>
                                    <hr className='w-1/2 border-gray-300' />
                                </div>

                                <div className='pt-6'>
                                    <div className='text-md font-medium'>
                                        Work Email
                                    </div>
                                    <input className='w-full border py-2 mt-2 px-4 rounded-full justify-center flex items-center space-x-2 text-md'
                                        type='text'
                                        placeholder='name@company.com' />
                                </div>

                                <div className='p-4 mt-4 items-center justify-center flex bg-[#ededed] rounded-full text-[#a19e9e] font-medium'>
                                    Continue
                                </div>
                                
                                <div className='text-center text-sm mt-4'>
                                    By signing up, you acknowledge that you have read and understood, and agree to Loom&apos;s Terms and Privacy Policy.

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Free;
