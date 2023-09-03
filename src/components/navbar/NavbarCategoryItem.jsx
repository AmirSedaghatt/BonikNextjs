import Image from 'next/image'
import React from 'react'

function NavbarCategoryItem({src, width, height, alt, item}) {
  return (
    <>
        <div>
            <div className='h-10 min-w-[278px] flex items-center py-0 px-4 whitespace-pre duration-[250ms] ease-in-out delay-0 cursor-pointer hover:bg-surface-light hover:text-surface-main'>
                <div>
                    <div className='flex w-5 h-5'>
                        <Image src={src} width={width} height={height} alt={alt}/>
                    </div>
                </div>
                <span className='flex-grow pl-3'>{item}</span>
            </div>
        </div>
    </>
  )
}

export default NavbarCategoryItem