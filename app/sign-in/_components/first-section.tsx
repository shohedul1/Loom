import Image from 'next/image'
import React from 'react'

const FirstSection = () => {
    return (
        <div className='flex items-center justify-center '>
            <div className='px-10 w-full md:w-[500px]'>
                <div className='text-3xl md:text-4xl font-semibold justify-center flex pt-10'>
                    Sign in to Loom
                </div>
                <div className='py-10 space-y-2 '>
                    <div className='border py-4 px-10 rounded-full justify-center flex items-center space-x-2'>
                        <Image src={'/logos/facebooklogo.png'} alt='facebook' width={20} height={20} className='object-cover rounded-full w-6 h-6' />
                        <div className='text-lg font-medium'>
                            Sing in with facebook
                        </div>
                    </div>
                    <div className='border py-4 px-10 rounded-full justify-center flex items-center space-x-2'>
                        <Image src={'/logos/googlelogo.webp'} alt='facebook' width={20} height={20} className='object-cover rounded-full w-6 h-6' />
                        <div className='text-lg font-medium'>
                            Sign in with Google
                        </div>
                    </div>

                    <div className='border py-4 px-10 rounded-full justify-center flex items-center space-x-2'>
                        <Image src={'/logos/linkedinglogo.png'} alt='facebook' width={20} height={20} className='object-cover rounded-full w-6 h-6' />
                        <div className='text-lg font-medium'>
                            Sign in with Linkedin
                        </div>
                    </div>
                    <div className='border py-4 px-10 rounded-full justify-center flex items-center space-x-2'>
                        <Image src={'/logos/twitterlogo.png'} alt='facebook' width={20} height={20} className='object-cover rounded-full w-6 h-6' />
                        <div className='text-lg font-medium'>
                            Sign in with Twitter
                        </div>
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
    )
}

export default FirstSection