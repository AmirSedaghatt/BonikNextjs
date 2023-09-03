'use client'

import HeaderBanner from '@/src/components/header/HeaderBanner'
import Logo from './Logo'
import SearchFieldContainer from './SearchFieldContainer'
import ProfileBtn from '../Buttons/ProfileBtn'
import Cart from './Cart'

function Header() {

  return (
    <>
      <HeaderBanner/>
      {/* Header Container */}
      <div className='sticky top-0 right-0 left-0 z-[999]'>
        {/* Header */}
        <header className='h-16 relative bg-white md:h-20'>
          <div className='h-full max-w-[1200px] flex justify-between items-center mx-4'>
            {/* Bonik logo */}
            <Logo/>
            {/* Search field container */}
            <SearchFieldContainer/>

            {/* Profile & Bag container */}
            <div className='hidden md:flex md:items-center'>
              {/* Profile button */}
              <ProfileBtn/>

              {/* Cart Button and Modal */}
              <Cart/>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header