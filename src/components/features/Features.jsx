import React from 'react'
import Feature from './Feature'

function Features() {
  return (
    <>
        {/* Section-2 container */}
        <div className='max-w-[1200px] mx-4 pt-8'>
            {/* grid container */}
            <div className='grid grid-cols-4 py-8 px-0 bg-white mt:px-8 mt:gap-[30px] mt:grid-cols-1 ld:gap-[30px] ld:grid-cols-2'>
                {/* item 1 */}
                <Feature src={'/assets/images/icons/truck.svg'} width={64} height={64} alt={'truck'} title={'Fast Delivery'} subtitle={'Start from $10'}/>

                {/* item 2 */}
                <Feature src={'/assets/images/icons/piggy-bank.svg'} width={64} height={64} alt={'piggy-bank'} title={'Money Guarantee'} subtitle={'7 Days Back'}/>

                {/* item 3 */}
                <Feature src={'/assets/images/icons/alarm-clock.svg'} width={64} height={64} alt={'alarm-clock'} title={'365 Days'} subtitle={'For free return'}/>

                {/* item 4 */}
                <Feature src={'/assets/images/icons/payment.svg'} width={64} height={64} alt={'payment'} title={'Payment'} subtitle={'Secure system'}/>
            </div>
        </div>
    </>
  )
}

export default Features