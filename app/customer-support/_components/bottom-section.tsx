import Link from 'next/link'
import React from 'react'

const ButtomSection = () => {
  return (
    <div>
      <section className='flex flex-col md:flex p-10 md:py-10 md:items-center bg-[#eff0ff]'>
        <div className='md:flex md:space-x-28 md:px-0 md:py-20'>
          <div className='flex-col space-y-6 flex text-[#3d2e7c]'>
            <div className='pt-10'>PRODUCT</div>
            <div className='font-light space-y-4 text-sm'>
              <div>Home</div>
              <div>Product</div>
              <div>what&apos;s New</div>
              <div>Pricing</div>
              <div>Premium</div>
            </div>

          </div>

          <div className='flex-col space-y-6 flex text-[#3d2e7c]'>
            <div className='pt-10'>USE CASES</div>
            <div className='font-light space-y-4 text-sm'>
               <Link href={'/team-alignment'}>
               <div>Team Alignment</div>
               </Link>
              <div>Company</div>
              <div>Leadership</div>
              <div>Customers</div>
              <div>Diversity</div>
            </div>
          </div>

          <div className='flex-col space-y-6 flex text-[#3d2e7c]'>
            <div className='pt-10'>FOR BUSINESS</div>
            <div className='font-light space-y-4 text-sm'>
              <div>Project Management</div>
              <div>Goal Management</div>
              <div>Increase Productivity</div>
              <div>Work Management</div>
              <div>Project Planing</div>
            </div>
          </div>

          <div className='flex-col space-y-6 flex text-[#3d2e7c]'>
            <div className='pt-10'>DOWNLOADS</div>
            <div className='font-light space-y-4 text-sm'>
              <div>Help</div>
              <div>Form</div>
              <div>Support</div>
              <div>Work Management</div>
              <div>Project Planing</div>
            </div>
          </div>

          <div className='flex-col space-y-6 flex text-[#3d2e7c]'>
            <div className='pt-10'>RESOURCES</div>
            <div className='font-light space-y-4 text-sm'>
              <div>Help</div>
              <div>Form</div>
              <div>Support</div>
              <div>Work Management</div>
              <div>Project Planing</div>
            </div>
          </div>

          <div className='flex-col space-y-6 flex text-[#3d2e7c]'>
            <div className='pt-10'>COMPANY</div>
            <div className='font-light space-y-4 text-sm'>
              <div>Help</div>
              <div>Form</div>
              <div>Support</div>
              <div>Work Management</div>
              <div>Project Planing</div>
            </div>
          </div>

        </div>

      </section>
    </div>
  )
}

export default ButtomSection