import React from 'react'
import Address from './Address'
import Email from './Email'
import Phone from './Phone'
import SocialMediaWrapper from './SocialMediaWrapper'
import SocialMedia from './SocialMedia'

function ContactUs() {
  return (
    <>
        <div className='w-full p-3 mm:w-1/2 xd:w-[25%]'>
            <div className='mb-5 font-semibold text-arbitary-3 leading-lineHeight-primary'>
                Contact Us
            </div>
            <Address address="70 Washington Square South, New York, NY 10012, United States"/>
            <Email email="Email: uilib.help@gmail.com"/>                                                       
            <Phone phoneNo="+1 1123 456 780"/>
            <SocialMediaWrapper/>
        </div>
    </>
  )
}

export default ContactUs