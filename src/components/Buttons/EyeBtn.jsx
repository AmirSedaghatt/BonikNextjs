import Image from 'next/image'
import React from 'react'

function EyeBtn({ src, width, height, alt }) {
  return (
    <>
        <button className='absolute top-2.5 -right-10 bg-transparent text-inherit p-3 rounded-[500px] font-semibold text-scales-body cursor-pointer outline-none transition-[right] duration-[0.3s] ease-in-out group-hover:right-[5px] hover:bg-white-light'>
            <div className='w-[18px] h-[18px] flex'>
              <Image src={src} width={width} height={height} alt={alt}/>
            </div>
        </button>
    </>
  )
}

export default EyeBtn