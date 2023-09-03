import React from 'react'
import OfferBanner2 from './OfferBanner2'
import OfferBanner3 from './OfferBanner3'
import OfferBanner4 from './OfferBanner4'

function OfferBannerContainer2() {
  return (
    <>
        <div className='max-w-[1200px] mx-4 pt-16'>
            <div className='flex flex-wrap -m-2.5'>
                {/* offer1 */}
                <OfferBanner2 img={<img alt="category" src="/assets/images/banners/banner-18.jpg" display="block" className='w-full h-full'/>} offerTitle={'NEW ARRIVALS'} offerFor={'SKI CLOTHES SALE'} discount={'Up to 35% Off'}/>

                {/* offer2 */}
                <OfferBanner3 img={<img alt="category" src="/assets/images/banners/banner-19.jpg" display="block" className='w-full h-full'/>} offerTitle={'BEST SELLERS'} offerFor={'TRENDING WOMEN’S'} discount={'SUNGLASSES'}/>

                {/* offer3 */}
                <OfferBanner4 img={<img alt="category" src="/assets/images/banners/banner-20.jpg" display="block" className='w-full h-full'/>} offerTitle={'NEW ARRIVALS'} offerFor={'NEW LATEST BAG'} discount={'COLLECTION'}/>
            </div>
        </div>
    </>
  )
}

export default OfferBannerContainer2