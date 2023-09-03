import React from 'react'

function OfferBanner5({ offerTitle, offerFor, priceRange, price }) {
  return (
    <>
        <div className='w-full p-2.5 lt:w-1/2'>
            <div className='p-8 overflow-hidden rounded-[3px] bg-banner-21 bg-no-repeat bg-cover'>
                <h4 className='my-0 font-semibold text-arbitary-2'>{offerTitle}</h4>
                <h4 className='my-0 font-bold text-arbitary-5'>{offerFor}</h4>
                <div className='my-2 w-[60px] h-[2px] bg-gray-dark'></div>
                <p className='my-0 text-scales-default'>
                    {priceRange}
                    <span className='ml-1 font-bold text-arbitary-4 text-surface-main'>{price}</span>
                </p>
            </div>
        </div>
    </>
  )
}

export default OfferBanner5