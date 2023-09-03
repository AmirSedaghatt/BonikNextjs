import Link from 'next/link'
import React from 'react'

function CustomerCare() {
  return (
    <>
        <div className='w-full p-3 mm:w-1/2 xd:w-[25%]'>
            <div className='mb-5 font-semibold text-arbitary-3 leading-lineHeight-primary'>
                Customer Care
            </div>
            <div>
                <Link href="/" className='block relative py-[0.3rem] rounded-[4px] cursor-pointer text-accent-light hover:text-white3'>Help Center</Link>
                <Link href="/" className='block relative py-[0.3rem] rounded-[4px] cursor-pointer text-accent-light hover:text-white3'>How to Buy</Link>
                <Link href="/" className='block relative py-[0.3rem] rounded-[4px] cursor-pointer text-accent-light hover:text-white3'>Track Your Order</Link>
                <Link href="/" className='block relative py-[0.3rem] rounded-[4px] cursor-pointer text-accent-light hover:text-white3'>Corporate & Bulk Purchasing</Link>
                <Link href="/" className='block relative py-[0.3rem] rounded-[4px] cursor-pointer text-accent-light hover:text-white3'>Returns & Refunds</Link>
            </div>
        </div>
    </>
  )
}

export default CustomerCare