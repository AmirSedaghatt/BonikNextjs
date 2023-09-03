import React from 'react'
import ShopNowBtn from '../Buttons/ShopNowBtn'

function OfferBanner1({ offer, category1, category2, img}) {
  return (
    <>
        <div className='relative overflow-hidden w-full flex-1'>
            {img}
            <div className='absolute top-0 left-8 z-[1] h-full flex flex-col justify-center'>
                <p className='text-arbitary-1 tracking-[1.2px]'>{offer}</p>
                <h4 className='font-semibold text-scales-xlarge leading-lineHeight-title mb-2'>
                    {category1}
                    <br />
                    {category2}
                </h4>
                <ShopNowBtn/>
            </div>
        </div>
    </>
  )
}

export default OfferBanner1