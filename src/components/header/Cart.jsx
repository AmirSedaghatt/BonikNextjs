'use client'

import React, { useState } from 'react'
import BagBtn from '../Buttons/BagBtn'
import Link from 'next/link'
import Image from 'next/image'

function Cart() {
    const [shopCard, setShopCard] = useState(false)

    const toggleModal = () => {
        setShopCard(!shopCard)
    }

  return (
    <>
        <div className='relative ml-5'>
            {/* Bag button */}
            <BagBtn toggleModal={toggleModal}/>
            <div className='flex justify-center items-center h-5 min-w-[20px] bg-surface-main rounded-[50%] absolute top-[-5px] right-[-5px]'>
                <span className='text-scales-tiny text-white font-semibold leading-lineHeight-primary'>3</span>
            </div>
            {shopCard && (
                <div className='inset-0 z-[990] fixed bg-modal-overlay'>
                    <div className='absolute right-0 w-[380px] h-full bg-white overflow-hidden'>
                        <div className="h-[100vh] flex flex-col">
                            <div className='flex-1 overflow-auto'>
                                <div className='h-[74px] flex items-center my-0 mx-5'>
                                    <div>
                                        <div className="w-7 h-7 flex">
                                            <Image src={'/assets/images/icons/bag.svg'} width={24} height={24} alt={'bag'}/>
                                        </div>
                                    </div>
                                    <div className='ml-2 font-semibold text-scales-default'>
                                        3
                                        item
                                    </div>
                                </div>
                                <div className='h-[1px] bg-white-light'></div>
                                <div className="flex items-center p-4">
                                    <div className='flex flex-col items-center'>
                                        <button className='flex justify-center items-center p-[5px] font-semibold text-surface-main text-scales-default leading-lineHeight-primary bg-transparent border-[1px] border-surface-light rounded-[300px] transition-all outline-none cursor-default hover:bg-surface-main hover:text-white'>
                                            <div>
                                                <div className="flex w-5 h-5">
                                                    <Image src={'/assets/images/icons/plus.svg'} width={18} height={18} alt={'plus'}/>
                                                </div>
                                            </div>
                                        </button>
                                        <div className='font-semibold text-[15px] my-[3px]'>1</div>
                                        <button className='flex justify-center items-center p-[5px] font-semibold text-surface-main text-scales-default leading-lineHeight-primary bg-gray2 border-[1px] rounded-[300px] transition-all outline-none cursor-default hover:bg-surface-main hover:text-white'>
                                            <div>
                                                <div className="flex w-5 h-5">
                                                    <Image src={'/assets/images/icons/minus.svg'} width={18} height={18} alt={'minus'}/>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <Link href="/product/silver-high-neck-sweater">
                                        <div className='block relative w-[76px] h-[76px] min-w-[76px] mx-6 font-semibold text-[38px] text-center overflow-hidden'>
                                            <Image src={'/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png'} width={285} height={285} alt={'avatar'} className='w-full h-full block absolute top-1/2 left-1/4 leading-[0] transfrom -translate-x-1/2 -translate-y-1/2'/>
                                        </div>
                                    </Link>
                                    <div className='min-w-0 flex-1'>
                                        <Link href="/product/silver-high-neck-sweater">
                                            <h5 className='m-0 whitespace-nowrap overflow-hidden text-ellipsis leading-lineHeight-primary font-semibold text-scales-body'>Silver High Neck Sweater</h5>
                                        </Link>
                                        <span className='text-scales-tiny text-gray1'>
                                            $210
                                            x
                                            1
                                        </span>
                                        <div className='font-semibold text-scales-body text-surface-main mt-1'>$210.00</div>
                                    </div>
                                    <div className='text-gray1 cursor-pointer ml-5'>
                                        <div className='flex w-4 h-4'>
                                            <Image src={'/assets/images/icons/close.svg'} width={24} height={24} alt={'close'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
  )
}

export default Cart