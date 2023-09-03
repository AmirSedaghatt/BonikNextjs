import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MobileMenuItem({ src, width, height, alt, item, cartItemNo}) {
  return (
    <>
        <Link href="/" className='relative flex flex-1 flex-col justify-center items-center text-arbitary-1 transition-all hover:text-surface-main'>
            <div className='flex justify-center items-center mb-1'>
                <div className='flex w-5 h-5'>
                    <Image src={src} width={width} height={height} alt={alt}/>
                </div>
            </div>
            {item}
            <div className='absolute top-1 left-[calc(50%_+_8px)] inline-flex px-1 font-semibold text-white bg-surface-main bg rounded-[300px] transition-all'>{cartItemNo}</div>
        </Link>
    </>
  )
}

export default MobileMenuItem