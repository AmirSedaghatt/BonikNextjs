import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Application({  src, width, height, alt, title, downloadFrom }) {
  return (
    <>
        <Link href="/">
            <div className='flex items-center m-2 px-4 py-[10px] bg-accent-dark text-white rounded-[5px] cursor-pointer'>
                <div>
                    <div className='flex w-6 h-6'>
                        <Image src={src} width={width} height={height} alt={alt}/>
                    </div>
                </div>
                <div className='ml-2'>
                    <div className='font-semibold text-scales-xtiny leading-lineHeight-primary'>
                        {title}
                    </div>
                    <div className='font-black text-scales-body'>
                        {downloadFrom}
                    </div>
                </div>
            </div>
        </Link>
    </>
  )
}

export default Application