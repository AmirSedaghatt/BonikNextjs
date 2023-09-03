import Image from 'next/image'
import React from 'react'

function ProfileBtn() {
  return (
    <>
        <button className='ml-4 p-2 outline-none cursor-pointer rounded-[500px] fonnt-semibold text-scales-body text-inherit bg-white4 transition-all hover:bg-gray3'>
            <div className='flex w-7 h-7'>
              <Image src={'/assets/images/icons/user.svg'} width={28} height={28} alt={'icon-user'}/>
            </div>
        </button>
    </>
  )
}

export default ProfileBtn