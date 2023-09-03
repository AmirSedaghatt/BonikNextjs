import React from 'react'
import Link from 'next/link'
import EyeBtn from '../Buttons/EyeBtn'
import LikeBtn from '../Buttons/LikeBtn'
import AddCartBtn from '../Buttons/AddCartBtn'


function ProductCard({ img, itemName, price, reviewNo }) {
  return (
    <>
        <div className='block relative w-[12.5%] float-left m-0'>
            <div className='group w-[calc(100%_-_1.5rem)] h-full m-auto'>
                <div className='h-full bg-white rounded-[3px] border-white3 border-[1px] delay-0 duration-[0.3s] ease-in group-hover:border-black'>
                    <div className='relative overflow-hidden w-full max-h-[300px] cursor-pointer'>
                        <Link href='/product/silver-high-neck-sweater'>
                            <span className='block relative overflow-hidden bg-none opacity-100 border-0 m-0 p-0'>
                                <span className='block overflow-hidden bg-none opacity-100 border-0 m-0 pt-[100%]'></span>
                                {img}
                            </span>
                        </Link>
                        {/* View */}
                        <EyeBtn img={<img src="/assets/images/icons/eye.svg" alt="eye" className='h-full w-full'/>}/>
                        {/* Like */}
                        <LikeBtn img={<img src="/assets/images/icons/heart.svg" alt="heart" className='h-full w-full'/>}/>
                    </div>
                    {/* Product info */}
                    <div className='p-2 text-center'>
                        <p className='my-0'>{itemName}</p>
                        <h4 className='font-bold text-arbitary-2 my-0 py-2'>{price}</h4>
                        <div className='flex justify-center items-center mb-4'>
                            <div className='flex my-0 mx-[-1px]'>
                                <img src="/assets/images/icons/star-filled.svg" alt="star" className='h-4 w-4 my-0 mx-[1px]'/>
                                <img src="/assets/images/icons/star-filled.svg" alt="star" className='h-4 w-4 my-0 mx-[1px]'/>
                                <img src="/assets/images/icons/star-filled.svg" alt="star" className='h-4 w-4 my-0 mx-[1px]'/>
                                <img src="/assets/images/icons/star-filled.svg" alt="star" className='h-4 w-4 my-0 mx-[1px]'/>
                                <img src="/assets/images/icons/star.svg" alt="star" className='h-4 w-4 my-0 mx-[1px]'/>
                            </div>
                            <span className='font-semibold text-scales-caption ml-[0.3rem] text-accent-light'>{reviewNo}</span>
                        </div>
                        <AddCartBtn operationName={'Add To Cart'}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard