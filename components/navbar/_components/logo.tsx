import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Link href={"/"}>
            <Image 
            src={'/image/Logo.svg'}
            alt='image'
            width={150}
            height={150}
            className='w-40'
            
            />
        </Link>
    </div>
  )
}

export default Logo