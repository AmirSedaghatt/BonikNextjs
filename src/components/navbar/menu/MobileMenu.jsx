import React from 'react'
import MobileMenuItem from './MobileMenuItem'

function MobileMenu() {
  return (
    <>
        <div className="hidden xt:fixed xt:bottom-0 xt:right-0 xt:left-0 xt:w-[100vw] xt:h-16 xt:flex xt:justify-around xt:bg-white xt:shadow-shadows-navbar xt:z-[999]">
            {/* Home */}
            <MobileMenuItem src={'/assets/images/icons/home.svg'} width={24} height={24} alt={'Home'} item={'Home'}/>

            {/* Category */}
            <MobileMenuItem src={'/assets/images/icons/category.svg'} width={24} height={24} alt={'category'} item={'category'}/>

            {/* Cart */}
            <MobileMenuItem src={'/assets/images/icons/bag.svg'} width={24} height={24} alt={'bag'} item={'Cart'} cartItemNo={'3'}/>
            
            {/* Account */}
            <MobileMenuItem src={'/assets/images/icons/user-2.svg'} width={24} height={24} alt={'user-2'} item={'Account'}/>
        </div>
    </>
  )
}

export default MobileMenu