import React from 'react'
import DiscoverBtn from '../Buttons/DiscoverBtn'

function BigOffer({ offerTitle, discount, slogan, desc }) {
  return (
    <>
        <div className='flex flex-col flex-wrap justify-center items-center gap-4 p-8 overflow-hidden rounded-[3px] bg-long-banner bg-cover bg-no-repeat bg-left-center xd:gap-20 xd:justify-end xd:flex-row'>
            <div className='text-center'>
                <h3 className='my-0 text-[36px] font-semibold leading-lineHeight-primary'>
                    {offerTitle}
                    <span className='mx-2 text-surface-main'>
                        {discount} 
                    </span>
                    {slogan}
                </h3>
                <p className='w-full my-0 text-scales-default xd:w-[90%]'>
                    {desc}
                </p>
            </div>
            <DiscoverBtn/>
        </div>
    </>
  )
}

export default BigOffer