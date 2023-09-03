import Link from 'next/link'
import React from 'react'

function SubMenu({url, SubMenuTitle}) {
  return (
    <>
        <Link href={url} className='relative transition-all'>
            <div className='flex items-center py-2 px-4 break-words text-accent-alpha-dark hover:text-surface-main hover:bg-white3'>
                <span className='mr-0 text-scales-body cursor-pointer'>{SubMenuTitle}</span>
            </div>
        </Link>
    </>
  )
}

export default SubMenu