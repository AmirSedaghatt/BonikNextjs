import React from 'react'
import BonikInfo from './CompanyInfo/BonikInfo'
import AboutUs from './AboutUs'
import CustomerCare from './CustomerCare'
import ContactUs from './Contact/ContactUs'


function Footer() {
  return (
    <footer>
        <div className='bg-accent-main'>
            <div className='max-w-[1200px]: mx-4 p-4 text-white'>
                <div className='py-20 overflow-hidden'>
                    <div className='flex flex-wrap -m-3'>
                        {/* footer left-side */}
                        <BonikInfo/>

                        {/* footer right-side */}
                        <AboutUs/>
                        <CustomerCare/>
                        <ContactUs/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer