import React from 'react'
import Logo from './_components/logo'
import NavigationMenuBar from './_components/menu'
import ActionButtons from './_components/action-button'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between  px-5 lg:px-20 sticky top-0 z-50 w-full bg-slate-100 h-24'>
       <div className='px-4'>
        <div className='w-40'>
          <Logo/>
        </div>
       </div>
       <div className='flex items-center'>
        <NavigationMenuBar/>
        <ActionButtons/>

       </div>
    </div>
  )
}

export default Navbar