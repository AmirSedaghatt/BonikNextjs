import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <>
        <div className='hidden md:flex md:items-center md:mr-4'>
            <Link href="/">
              <Image src={'/assets/images/logo.svg'} width={98} height={44} alt={'logo'}/>
            </Link>
        </div>
    </>
  )
}

export default Logo