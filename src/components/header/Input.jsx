import React from 'react'

function Input({placeholdertext}) {
  return (
    <>
        <input placeholder={placeholdertext} className='h-10 w-full pl-10 pr-14 py-2 font-light text-scales-body border-gray2 border-[1px] rounded-[300px] outline-none hover:border-accent-light focus:border-red-500 md:h-11 md:pl-12 md:pr-[11.5rem]'/>
    </>
  )
}

export default Input