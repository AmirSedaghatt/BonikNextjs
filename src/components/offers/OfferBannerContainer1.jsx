import React from 'react'
import OfferBanner1 from './OfferBanner1'

function OfferBannerContainer1() {
  return (
    <>
        <div className='w-full p-2.5 xd:w-[25%]'>
            <div className='h-full w-full flex flex-col items-center gap-5'>
                {/* Item 1 */}
                <OfferBanner1 offer={'NEW ARRIVALS'} category1={'SUMMER'} category2={'SALE 20% OFF'} img={<img alt="category" src="/assets/images/banners/banner-17.jpg" display="block" className='w-full h-full'/>}/>
                {/* Item 2 */}
                <OfferBanner1 offer={'GAMING 4K'} category1={'DESKTOPS &'} category2={'LAPTOPS'} img={<img alt="category" src="/assets/images/banners/banner-16.jpg" display="block" className='w-full h-full'/>}/>
            </div>
        </div>
    </>
  )
}

export default OfferBannerContainer1