import Link from 'next/link'
import React from 'react'

function FAQ({ faq }) {
  return (
    <>
        <Link href="/" className='hidden md:block md:relative md:pr-[30px] md:transition-all md:hover:text-surface-main'>{faq}</Link>
    </>
  )
}

export default FAQ