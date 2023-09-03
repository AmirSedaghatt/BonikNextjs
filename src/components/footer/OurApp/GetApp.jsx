import React from 'react'
import Application from './Application'

function GetApp() {
  return (
    <>
        <div className='flex flex-wrap -m-2'>
            <Application src={'/assets/images/icons/play-store.svg'} width={24} height={24} alt={'play-store'} title={"Get it on"} downloadFrom={"Google Play"}/>
            <Application src={'/assets/images/icons/app-store.svg'} width={24} height={24} alt={'app-store'} title={"Download on the"} downloadFrom={"App Store"}/>
        </div>
    </>
  )
}

export default GetApp