import React from 'react'
import SubMenu from '../SubMenu'


function MenuPages() {


  return (
    <>
        <div className='group relative flex flex-col items-center'>
            <span className='mr-8 text-scales-body cursor-pointer hover:text-surface-main'>{'Pages'}</span>
            <div className='hidden absolute left-0 top-[101%] z-[5] group-hover:block'>
                <div className='min-w-[230px] mt-5 py-2 bg-white rounded-[8px]'>
                    <SubMenu url={'/'} SubMenuTitle={'Sale Page'}/>
                    <SubMenu url={'/'} SubMenuTitle={'Vendor'}/>
                    <SubMenu url={'/'} SubMenuTitle={'Shop'}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default MenuPages