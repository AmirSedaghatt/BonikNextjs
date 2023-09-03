import React from 'react'
import ShopNowBtn from '../Buttons/ShopNowBtn'

function OfferBanner2({img, offerTitle, offerFor, discount}) {
  return (
    <>
        <div className='w-full p-2.5 lt:w-[33.3333%]'>
            <div className='relative overflow-hidden w-full'>
                {img}
                <div className='absolute top-0 left-8 z-[1] h-full flex flex-col justify-center'>
                    <p className='text-arbitary-1 tracking-[1.2px] my-0'>{offerTitle}</p>
                    <h4 className='font-semibold text-scales-xlarge leading-lineHeight-primary my-4'>
                        {offerFor}
                        <br />
                        <span className='font-normal text-scales-default text-surface-main'>{discount}</span>
                    </h4>
                    <ShopNowBtn/>
                </div>
            </div>
        </div>
    </>
  )
}

export default OfferBanner2