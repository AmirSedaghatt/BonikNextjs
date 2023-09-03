import React from 'react'
import MobileMenuLogo from './MobileMenuLogo'
import Telephone from './Telephone'
import Email from './Email'
import FAQ from './FAQ'
import ChangeOption from './ChangeOption'

function HeaderBanner() {
  return (
    <>
        {/* Header banner  */}
        <div className='h-11 text-white bg-accent-main text-scales-caption'>
            {/* Banner Container */}
            <div className='h-full max-w-[1200px] flex justify-between items-center mx-4'>
                {/* Banner Left-side container */}
                <div className='flex'>
                    {/* Logo */}
                    <MobileMenuLogo/>

                    {/* Telephone */}
                    <Telephone/>

                    {/* email */}
                    <Email/>
                </div>

                {/* Banner right-side container */}
                <div className='flex items-center'>
                    {/* FAQ Links */}
                    <FAQ faq={'Theme FAQ"s'}/>
                    <FAQ faq={'Need Help?'}/>

                    {/* Language change container */}
                    <ChangeOption option={'EN'}/>
                    {/* Currency change container */}
                    <ChangeOption option={'USD'}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderBanner