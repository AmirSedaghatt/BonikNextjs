import Image from 'next/image'
import React from 'react'

function Feature({ src, width, height, alt, title, subtitle }) {
  return (
    <>
        <div className='flex flex-row justify-center items-center gap-4 border-r-gray2 border-r-[1px] mt:border-r-0 mt:justify-start'>
            <div className='w-10 h-10 flex'>
              <Image src={src} width={width} height={height} alt={alt}/>
            </div>
            <div>
                <h4 className='font-semibold text-arbitary-2 leading-lineHeight-secondary'>{title}</h4>
                <span className='text-scales-default'>{subtitle}</span>
            </div>
        </div>
    </>
  )
}

export default Feature