import React from 'react'
import SocialMedia from './SocialMedia'
import Link from 'next/link'

function SocialMediaWrapper({href}) {
  return (
    <>
        <div className='flex flex-row -mx-[5px]'>
            <Link href='https://wwww.facebook.com'>
                <SocialMedia src={'/assets/images/icons/facebook.svg'} width={12} height={12} alt={'facebook'}/>
            </Link>
            <Link href='https://wwww.twitter.com'>
                <SocialMedia src={'/assets/images/icons/twitter.svg'} width={12} height={12} alt={'twitter'}/>
            </Link>
            <Link href='https://wwww.youtube.com'>
                <SocialMedia src={'/assets/images/icons/youtube.svg'} width={12} height={12} alt={'youtube'}/>
            </Link>
            <Link href='https://wwww.google.com'>
                <SocialMedia src={'/assets/images/icons/google.svg'} width={12} height={12} alt={'google'}/>
            </Link>
            <Link href='https://wwww.instagram.com'>
                <SocialMedia src={'/assets/images/icons/instagram.svg'} width={12} height={12} alt={'instagram'}/>
            </Link>
        </div>
    </>
  )
}

export default SocialMediaWrapper