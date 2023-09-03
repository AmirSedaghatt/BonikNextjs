import React from 'react'
import Image from 'next/image'

function BagBtn({toggleModal}) {
  return (
    <>
        <button onClick={toggleModal} className='p-3 outline-none cursor-pointer rounded-[500px] font-semibold text-scales-body text-inherit bg-white4 transition-all hover:bg-gray3'>
            <div>
                <div className='flex w-5 h-5'>
                  <Image src={'/assets/images/icons/bag.svg'} width={24} height={24} alt={'bag'}/>
                </div>
            </div>
        </button>
    </>
  )
}

export default BagBtn