import React from 'react'
import ShopNowBtn2 from '../Buttons/ShopNowBtn2'

function OfferBanner3({img, offerTitle, offerFor, discount}) {
  return (
    <>
        <div className='w-full p-2.5 lt:w-[33.3333%]'>
            <div className='relative overflow-hidden w-full'>
                {img}
                <div className='absolute top-0 left-8 z-[1] h-full flex flex-col justify-center'>
                    <p className='text-arbitary-1 text-white tracking-[1.2px] my-0'>{offerTitle}</p>
                    <h4 className='font-semibold text-scales-xlarge text-white leading-lineHeight-primary my-4'>
                        {offerFor}
                        <br />
                        <span className='font-normal text-scales-default'>{discount}</span>
                    </h4>
                    <ShopNowBtn2/>
                </div>
            </div>
        </div>
    </>
  )
}

export default OfferBanner3