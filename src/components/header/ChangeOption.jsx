import Image from 'next/image'
import React from 'react'

function ChangeOption({ option }) {
  return (
    <>
        <div className='relative'>
            <div className='flex flex-row items-center h-10 mr-5 cursor-pointer'>
                <Image src={'/assets/images/flags/usa.png'} width={24} height={14} alt={'EN'} className='h-3.5 rounded-[4px]'/>
                <span className='mr-1 ml-2 font-semibold text-scales-caption'>{option}</span>
                <div className='cursor-pointer'>
                    <div className='w-4 h-4 flex'>
                        <Image src={'/assets/images/icons/chevron-down.svg'} width={24} height={14} alt={'chevron-down'}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ChangeOption