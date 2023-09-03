import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MobileMenuLogo() {
  return (
    <>
        <div className='block md:hidden'>
            <Link href="/">
              <Image src={'/assets/images/logo.svg'} width={98} height={36} alt={'logo'}/>
            </Link>
        </div>
    </>
  )
}

export default MobileMenuLogo