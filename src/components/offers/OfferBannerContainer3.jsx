import React from 'react'
import OfferBanner5 from './OfferBanner5'
import OfferBanner6 from './OfferBanner6'

function OfferBannerContainer3() {
  return (
    <>
        <div className='max-w-[1200px] mx-4 my-16'>
            <div className='flex flex-wrap -m-2.5'>
                {/* offer1 */}
                <OfferBanner5 offerTitle={'Final Reduction'} offerFor={'Sale up to 20% Off'} priceRange={'Only From'} price={'$270.00'}/>

                {/* offer2 */}
                <OfferBanner6 offerTitle={'Weekend Sale'} offerFor={'Fine Smart Speaker'} priceRange={'Starting at'} price={'$185.00'}/>
            </div>
        </div>
    </>
  )
}

export default OfferBannerContainer3