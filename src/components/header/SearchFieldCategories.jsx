import Image from 'next/image'
import React, { useState } from 'react'

function SearchFieldCategories() {
    const [category, setCategory] = useState(false)

    const toggleCategory = () => {
    setCategory(!category)
    }
  return (
    <>
        <div className='hidden md:block md:absolute md:right-0 md:text-gray1'>
            <div onClick={toggleCategory} className='h-10 min-w-[90px] flex items-center pl-5 pr-4 border-l-gray2 border-l-[1px] cursor-pointer'>
                <span className='mr-3'>All Categories</span>
                <div>
                    <div className='w-[1.25rem] h-[1.25rem] flex'>
                        <Image src={'/assets/images/icons/chevron-down.svg'} width={24} height={24} alt={'dropdown'}/>
                    </div>
                </div>
            </div>
            {category && (
                <div className='absolute left-auto right-0 top-[calc(100%_+_0.5rem)] z-[100] min-w-[200px] rounded-[6px] py-2 bg-white shadow-shadows-all-category'>
                    <div className="flex items-center py-2 px-4 break-words text-accent-alpha-dark cursor-pointer hover:text-surface-main hover:bg-white3">All Categories</div>
                    <div className="flex items-center py-2 px-4 break-words text-accent-alpha-dark cursor-pointer hover:text-surface-main hover:bg-white3">Car</div>
                    <div className="flex items-center py-2 px-4 break-words text-accent-alpha-dark cursor-pointer hover:text-surface-main hover:bg-white3">Clothes</div>
                    <div className="flex items-center py-2 px-4 break-words text-accent-alpha-dark cursor-pointer hover:text-surface-main hover:bg-white3">Electronics</div>
                    <div className="flex items-center py-2 px-4 break-words text-accent-alpha-dark cursor-pointer hover:text-surface-main hover:bg-white3">Laptop</div>
                    <div className="flex items-center py-2 px-4 break-words text-accent-alpha-dark cursor-pointer hover:text-surface-main hover:bg-white3">Desktop</div>
                    <div className="flex items-center py-2 px-4 break-words text-accent-alpha-dark cursor-pointer hover:text-surface-main hover:bg-white3">Camera</div>
                    <div className="flex items-center py-2 px-4 break-words text-accent-alpha-dark cursor-pointer hover:text-surface-main hover:bg-white3">Toys</div>
                </div>
            )}
        </div>
    </>
  )
}

export default SearchFieldCategories