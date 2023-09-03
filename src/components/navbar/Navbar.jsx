'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import MenuHome from './menu/MenuHome'
import MenuPages from './menu/MenuPages'
import MenuVendorAccount from './menu/MenuVendorAccount'
import MenuUserAccount from './menu/MenuUserAccount'
import NavbarCategoryItem from './NavbarCategoryItem'

function Navbar() {
    const [menuModal, setMenuModal] = useState(false)

    const toggleModal = () => {
        setMenuModal(!menuModal)
    }

    
    return (
        <>
            <div className='hidden md:block md:relative md:h-[60px] md:bg-white md:shadow-shadows-navbar'>
                <div className='max-w-[1200px] h-full flex justify-between items-center mx-4'>
                    {/* categories button */}
                    <div className="relative" >
                        <button onClick={toggleModal} className="h-10 flex justify-center items-center py-[11px] px-6 bg-white3 font-semibold text-scales-body text-accent-active leading-lineHeight-primary rounded-[5px] outline-none transition-all cursor-pointer hover:bg-slate-100 focus:shadow-shadows-category">
                            <div>
                                <div className="flex w-6 h-6">
                                    <Image src={'/assets/images/icons/categories.svg'} width={512} height={512} alt='categories'/>
                                </div>
                            </div>
                            <div className='flex-1 ml-2.5 text-left text-gray1'>Categories</div>
                            <div className='ml-1 duration-[250ms] delay-0 ease-in-out text-gray1'>
                                <div className='flex w-5 h-5'>
                                    <Image src={'/assets/images/icons/chevron-right.svg'} width={24} height={24} alt='chevron-right'/>
                                </div>
                            </div>
                        </button>
                        {menuModal && (
                            <div className='absolute left-0 right-auto top-[calc(100%_+_0.7rem)] py-2 px-0 rounded-[4px] bg-white shadow-shadows-navbar scale-100 duration-[250ms] ease-in-out delay-0 z-[999]'>
                                <NavbarCategoryItem src={'/assets/images/icons/dress.svg'} width={512} height={512} alt={'dress'} item={'Fashion'}/>
                                <NavbarCategoryItem src={'/assets/images/icons/laptop.svg'} width={512} height={512} alt={'dropdown'} item={'Electronics'}/>
                                <NavbarCategoryItem src={'/assets/images/icons/motorbike.svg'} width={512} height={512} alt={'motorbike'} item={'Bikes'}/>
                                <NavbarCategoryItem src={'/assets/images/icons/plant-pot.svg'} width={512} height={512} alt={'plant-pot'} item={'Home & Garden'}/>
                                <NavbarCategoryItem src={'/assets/images/icons/gift-1.svg'} width={512} height={512} alt={'gift-1'} item={'Gifts'}/>
                                <NavbarCategoryItem src={'/assets/images/icons/voice-recorder.svg'} width={512} height={512} alt={'voice-recorder'} item={'Music'}/>
                                <NavbarCategoryItem src={'/assets/images/icons/make-up.svg'} width={512} height={512} alt={'make-up'} item={'Health & Beauty'}/>
                                <NavbarCategoryItem src={'/assets/images/icons/track.svg'} width={512} height={512} alt={'track'} item={'Pets'}/>
                                <NavbarCategoryItem src={'/assets/images/icons/teddy-bear.svg'} width={512} height={512} alt={'teddy-bear'} item={'Baby Toys'}/>
                                <NavbarCategoryItem src={'/assets/images/icons/food.svg'} width={512} height={512} alt={'food'} item={'Groceries'}/>
                                <NavbarCategoryItem src={'/assets/images/icons/car.svg'} width={512} height={512} alt={'car'} item={'Automotive'}/>
                            </div>
                        )}
                    </div>

                    {/* menu */}
                    <div className='flex'>
                        {/* Home */}
                        <MenuHome/>

                        {/* Pages */}
                        <MenuPages/>

                        {/* User Account */}
                        <MenuUserAccount/>
                        
                        {/* Vendor Account */}
                        <MenuVendorAccount/>

                        {/* Track My Orders */}
                        <div className='relative flex flex-col items-center'>
                            <span className='mr-8 text-scales-body cursor-pointer hover:text-surface-main'>Track My Orders</span>
                        </div>

                        {/* Back to Demos */}
                        <div className='relative flex flex-col items-center'>
                            <span className='mr-8 text-scales-body cursor-pointer hover:text-surface-main'>Back to Demos</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar