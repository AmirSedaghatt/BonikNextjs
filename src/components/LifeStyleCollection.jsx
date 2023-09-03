import React from 'react'
import OfferBannerContainer1 from './offers/OfferBannerContainer1'

function LifeStyleCollection() {
  return (
    <>
        {/* Section-1 container */}
        <div className='max-w-[1200px] mx-4 pt-6'>
            {/* Section-1 flex container */}
            <div className='flex flex-wrap -m-2.5'>
                {/* Section-1 flex item left-side */}
                <div className="w-full p-2.5 xd:w-[75%]">
                    <div className='overflow-hidden rounded-[3px]'>
                        <div className='relative min-w-0'>
                            <div className='relative mx-[calc(0px)] overflow-hidden touch-pan-y touch-pinch-zoom'>
                                <div>
                                    {/* slider pics */}
                                    <div className='w-[200%] flex items-stretch translate-x-0 translate-y-0'>
                                        <div className='block relative w-1/2 m-0 float-left'>
                                            <div className='w-[calc(100%_-_0px)] h-full m-auto'>
                                                <div className='min-h-[500px] flex items-center bg-cover bg-white bg-no-repeat bg-banner-15 mt:p-6 mt:justify-center mt:text-center'>
                                                    <div className='lt:pl-20'>
                                                        <h4 className='font-normal text-scales-3xlarge leading-lineHeight-primary mt-1 mb-0'>Lifestyle collection</h4>
                                                        <h1 className='font-semibold text-scales-4xlarge leading-lineHeight-primary my-0'>Men</h1>
                                                        <h4 className='font-semibold text-scales-3xlarge  leading-lineHeight-primary mt-3 mb-0'>
                                                            SALE UP TO 
                                                            <span className='text-scales-default text-surface-main ml-1'>
                                                                30%
                                                                OFF
                                                            </span>
                                                        </h4>
                                                        <p className='mb-8 mt-0 text-scales-large'>Get Free Shipping on orders over $99.00</p>
                                                        <button className='h-10 flex justify-center items-center px-6 py-[11px] outline-none font-semibold text-scales-body text-white leading-lineHeight-primary bg-surface-main rounded-[5px] transition-all cursor-pointer mt:m-auto'>
                                                            Shop Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section-1 flex item right-side */}
                <OfferBannerContainer1/>
            </div>
        </div>
    </>
  )
}

export default LifeStyleCollection