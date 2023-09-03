import React from 'react'

function CategoryListItem({listItem}) {
  return (
    <>
        <li className='pt-2.5 font-medium text-arbitary-1 list-none cursor-pointer duration-[0.3s] ease delay-0 hover:text-surface-main'>{listItem}</li>
    </>
  )
}

export default CategoryListItem