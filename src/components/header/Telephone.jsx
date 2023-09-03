import Image from 'next/image'
import React from 'react'

function Telephone() {
  return (
    <>
        <div className='hidden md:flex md:items-center'>
            <div className='flex w-3.5 h-3.5'>
              <Image src={'/assets/images/icons/phone-call.svg'} width={14} height={14} alt={'phone-call'}/>
            </div>
            <span className='ml-2.5'>+88012 3456 7894</span>
        </div>
    </>
  )
}

export default Telephone