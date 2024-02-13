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
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }} // Adjusted style
            className='w-40'
            property="true"
            
            />
        </Link>
    </div>
  )
}

export default Logo