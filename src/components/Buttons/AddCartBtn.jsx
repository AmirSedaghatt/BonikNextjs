import React from 'react'

function AddCartBtn({ operationName }) {
  return (
    <>
        <button className='flex w-full h-[40px] justify-center items-center py-2.5 px-4 outline-none text-gray-dark border-gray-dark border-solid border-[1px] rounded-[5px] cursor-pointer font-semibold  leading-lineHeight-primary transition-all bg-transparent hover:border-gray-dark hover:bg-gray-dark hover:text-white'>{operationName}</button>
    </>
  )
}

export default AddCartBtn