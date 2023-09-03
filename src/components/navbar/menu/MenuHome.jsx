import React from 'react'
import SubMenu from '../SubMenu'


function MenuHome() {


  return (
    <>
        <div className='group relative flex flex-col items-center'>
            <span className='mr-8 text-scales-body cursor-pointer hover:text-surface-main'>{'Home'}</span>
            <div className='hidden absolute left-0 top-[101%] z-[5] group-hover:block'>
                <div className='min-w-[230px] mt-5 py-2 bg-white rounded-[8px]'>
                    <SubMenu url={'/'} SubMenuTitle={'market 1'}/>
                    <SubMenu url={'/'} SubMenuTitle={'market 2'}/>
                    <SubMenu url={'/'} SubMenuTitle={'Fashion 1'}/>
                    <SubMenu url={'/'} SubMenuTitle={'Fashion 2'}/>
                    <SubMenu url={'/'} SubMenuTitle={'Fashion 3'}/>
                    <SubMenu url={'/'} SubMenuTitle={'Grocery-1'}/>
                    <SubMenu url={'/'} SubMenuTitle={'Grocery-2'}/>
                    <SubMenu url={'/'} SubMenuTitle={'Grocery-3'}/>
                    <SubMenu url={'/'} SubMenuTitle={'Gift Shop'}/>
                    <SubMenu url={'/'} SubMenuTitle={'Gadget Shop'}/>
                    <SubMenu url={'/'} SubMenuTitle={'Furniture Shop'}/>
                    <SubMenu url={'/'} SubMenuTitle={'Health and Beauty'}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default MenuHome