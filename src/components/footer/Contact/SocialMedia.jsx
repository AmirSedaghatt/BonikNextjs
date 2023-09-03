import Image from 'next/image'
import React from 'react'

function SocialMedia({ src, width, height, alt }) {
  return (
    <>
        <div className='m-[5px] p-2.5 rounded-[50%] bg-accent-dark'>
            <div>
                <div className='flex w-3 h-3'>
                  <Image src={src} width={width} height={height} alt={alt}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default SocialMedia