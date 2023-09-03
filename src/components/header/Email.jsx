import Image from 'next/image'
import React from 'react'

function Email() {
  return (
    <>
        <div className='hidden md:flex md:items-center md:ml-5'>
            <div className='flex w-3.5 h-3.5'>
              <Image src={'/assets/images/icons/mail.svg'} width={18} height={18} alt={'mail'}/>
            </div>
            <span className='ml-2.5'>support@ui-lib.com</span>
        </div>
    </>
  )
}

export default Email