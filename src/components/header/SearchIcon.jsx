import Image from 'next/image'
import React from 'react'

function SearchIcon() {
  return (
    <>
        <div className='absolute left-4 z-[1] text-gray1'>
            <div className='flex w-[18px] h-[18px]'>
              <Image src={'/assets/images/icons/search.svg'} width={20} height={20} alt={'search'}/>
            </div>
        </div>
    </>
  )
}

export default SearchIcon