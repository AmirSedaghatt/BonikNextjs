import React from 'react'
import Input from './Input'

function SearchInput() {
  return (
    <>
        <div className='relative w-full'>
            <div className='relative'>
              <Input placeholdertext={"Search and hit enter..."}/>
            </div>
        </div>
    </>
  )
}

export default SearchInput