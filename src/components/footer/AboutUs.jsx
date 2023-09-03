import Link from 'next/link'
import React from 'react'

function AboutUs() {
  return (
    <>
        <div className='w-full p-3 mm:w-1/2 xd:w-[16.6667%]'>
            <div className='mb-5 font-semibold text-arbitary-3 leading-lineHeight-primary'>
                About Us
            </div>
            <div>
                <Link href="/" className='block relative py-[0.3rem] rounded-[4px] cursor-pointer text-accent-light hover:text-white3'>Careers</Link>
                <Link href="/" className='block relative py-[0.3rem] rounded-[4px] cursor-pointer text-accent-light hover:text-white3'>Our Stores</Link>
                <Link href="/" className='block relative py-[0.3rem] rounded-[4px] cursor-pointer text-accent-light hover:text-white3'>Our Cares</Link>
                <Link href="/" className='block relative py-[0.3rem] rounded-[4px] cursor-pointer text-accent-light hover:text-white3'>Terms & Conditions</Link>
                <Link href="/" className='block relative py-[0.3rem] rounded-[4px] cursor-pointer text-accent-light hover:text-white3'>Privacy Policy</Link>
            </div>
        </div>
    </>
  )
}

export default AboutUs