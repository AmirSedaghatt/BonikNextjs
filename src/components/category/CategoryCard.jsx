import Image from 'next/image'
import React from 'react'

function CategoryCard({ src, width, height, sizes, alt, title }) {
  return (
    <>
        <div className='w-1/2 p-1.5 mm:w-[33.3333%] lt:w-1/4 xd:w-[16.6667%]'>
            <div className='group relative rounded-[4px] cursor-pointer overflow-hidden'>
                <span className='block relative overflow-hidden m-0 p-0 border-0 opacity-100 bg-none'>
                    <span className='relative m-0 pt-[100%] border-0 opacity-100'></span>
                    <Image src={src} width={width} height={height} sizes={sizes} alt={alt} className='block inset-0  p-0 m-auto min-w-full max-w-full min-h-full max-h-full object-cover delay-0 duration-[0.3s] ease-in group-hover:transform group-hover:scale-110'/>
                </span>
                <div className='absolute left-2.5 right-2.5 bottom-2.5 p-2 text-center rounded-[2px] bg-white-shadow delay-0 duration-[0.3s] ease-in group-hover:text-white group-hover:bg-black'>
                    <h4 className='font-semibold text-arbitary-2'>{title}</h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoryCard