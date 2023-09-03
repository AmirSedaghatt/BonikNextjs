import React from 'react'
import GetApp from '../OurApp/GetApp'
import BonikCo from './BonikCo'

function BonikInfo() {
  return (
    <>
        {/* Logo, Google-Play & App-Store */}
        <div className='w-full p-3 mm:w-1/2 xd:w-[33.3333%]'>
            <BonikCo description="
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Auctor libero id et, in gravida. 
              Sit diam duis mauris nulla cursus. 
              Erat et lectus vel ut sollicitudin elit at amet."
            />
            <GetApp/>
        </div>
    </>
  )
}

export default BonikInfo