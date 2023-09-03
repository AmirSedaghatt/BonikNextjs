import Link from 'next/link'
import React from 'react'

function SectionTitle({ title, moreItems}) {
  return (
    <>
        {/* Title */}
        <div className='flex justify-between items-center mb-6'>
            <h2 className='text-scales-xlarge font-semibold my-0'>{title}</h2>
            <Link href="#" className='relative transition-all no-underline hover:text-surface-main'>{moreItems}</Link>
        </div>
    </>
  )
}

export default SectionTitle