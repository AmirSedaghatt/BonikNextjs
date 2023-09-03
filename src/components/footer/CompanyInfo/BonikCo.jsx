import Link from 'next/link'
import React from 'react'

function BonikCo({ description }) {
  return (
    <>
        <Link href="/"><img alt="logo" src="/assets/images/logo.svg" display="block" className='mb-5'/></Link>
        <p className='mb-5 text-accent-light'>
            {description}
        </p>
    </>
  )
}

export default BonikCo