import React from 'react'
import SearchIcon from './SearchIcon'
import SearchInput from './SearchInput'
import SearchFieldCategories from './SearchFieldCategories'

function SearchFieldContainer() {
  return (
    <>
        <div className='flex justify-center flex-1'>
            {/* Search field flex item*/}
            <div className='relative max-w-[670px] flex-1 mx-auto'>
                {/* Search field flex container*/}
                <div className='relative flex items-center'>
                    {/* search icon */}
                    <SearchIcon/>
                    {/* search input */}
                    <SearchInput/>

                    {/* categories */}
                    <SearchFieldCategories/>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchFieldContainer