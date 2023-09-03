import React from 'react'
import BigOffer from './BigOffer'

function BigOfferContainer() {
  return (
    <>
        <div className='max-w-[1200px] mx-4 my-0 pt-16'>
            <BigOffer offerTitle={'GIFT'} discount={'%50 OFF'} slogan={'PERFECT STYLES'} desc={'Only until the end of this week. Terms and conditions apply'}/>
        </div>
    </>
  )
}

export default BigOfferContainer