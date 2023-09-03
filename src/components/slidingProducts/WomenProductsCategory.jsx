import React from 'react'
import ProductCard from '../product/ProductCard'
import CategoryListItem from './CategoryListItem'
import Link from 'next/link'
import CategoryTitle from './CategoryTitle'

function WomenProductsCategory() {
  return (
    <>
        <div className='max-w-[1200px] mx-4 my-16'>
            <div className="flex flex-wrap -m-1.5">
                <div className='w-full p-1.5 lt:w-1/4'>
                    <div className='h-full px-8 py-4 rounded-[3px] bg-white shadow-shadows-card'>
                        <CategoryTitle categoryTitle={"Men's Fashion"}/>
                        <ul className='mb-6 p-0'>
                            <CategoryListItem listItem={'Wireless Speaker'}/>
                            <CategoryListItem listItem={'Tablet'}/>
                            <CategoryListItem listItem={'Smartphone'}/>
                            <CategoryListItem listItem={'Laptop'}/>
                            <CategoryListItem listItem={'iMac'}/>
                            <CategoryListItem listItem={'Game Controller'}/>
                            <CategoryListItem listItem={'Drone'}/>
                            <CategoryListItem listItem={'Apple'}/>
                        </ul>
                        <Link href='#' className='relative transition-all'>Browse All</Link>
                    </div>
                </div>
                <div className='w-full p-1.5 lt:w-3/4'>
                    <div className='overflow-hidden'>
                        <div className='relative min-w-0'>
                            <div className='relative mx-[calc(-0.75rem)] overflow-hidden touch-pan-y touch-pinch-zoom'>
                                <div className='w-[266.667%] flex items-stretch translate-x-0 translate-y-0'>
                                    <ProductCard img={<img alt="category" sizes="100vw" src="/assets/images/products/Fashion/Clothes/19.BlackWhiteSweater.png" decoding="async" data-nimg="responsive" className='block absolute inset-0 box-border p-0 m-auto w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover delay-0 duration-[0.3s] ease-in hover:transform hover:scale-110'/>} itemName={'Black White Sweater'} price={'$180'} reviewNo={'(14)'}/>
                                    <ProductCard img={<img alt="category" sizes="100vw" src="/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png" decoding="async" data-nimg="responsive" className='block absolute inset-0 box-border p-0 m-auto w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover delay-0 duration-[0.3s] ease-in hover:transform hover:scale-110'/>} itemName={'Gray Overcoat Women'} price={'$110'} reviewNo={'(14)'}/>
                                    <ProductCard img={<img alt="category" sizes="100vw" src="/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png" decoding="async" data-nimg="responsive" className='block absolute inset-0 box-border p-0 m-auto w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover delay-0 duration-[0.3s] ease-in hover:transform hover:scale-110'/>} itemName={"Women's Fashion"} price={'$140'} reviewNo={'(14)'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WomenProductsCategory