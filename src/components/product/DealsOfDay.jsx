import React from 'react'
import SectionTitle from '../SectionTitle'
import ProductCard from './ProductCard'

function DealsOfDay() {
  return (
    <>
        <div className='max-w-[1200px] mx-4 pt-16'>
            <SectionTitle title={'Deals Of The Day'} moreItems={'More Products'}/>

            {/* Products */}
            <div className='overflow-hidden'>
                <div className='min-w-0 relative'>
                    <div className='relative overflow-hidden mx-[calc(-0.75rem)] touch-pan-y touch-pinch-zoom'>
                        <div className='w-[800%] flex items-stretch p-0 m-0 xd:w-[200%]'>
                            {/* product1 */}
                            <ProductCard img={<img alt="category" sizes="100vw" src="/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png" decoding="async" data-nimg="responsive" className='block absolute inset-0 box-border p-0 m-auto w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover delay-0 duration-[0.3s] ease-in hover:transform hover:scale-110'/>} itemName={'Silver High Neck Sweater'} price={'$210'} reviewNo={'(11)'}/>
                            <ProductCard img={<img alt="category" sizes="100vw" src="/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png" decoding="async" data-nimg="responsive" className='block absolute inset-0 box-border p-0 m-auto w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover delay-0 duration-[0.3s] ease-in hover:transform hover:scale-110'/>} itemName={'Yellow Casual Sweater'} price={'$110'} reviewNo={'(11)'}/>
                            <ProductCard img={<img alt="category" sizes="100vw" src="/assets/images/products/Fashion/Clothes/4.DenimBlueJeans.png" decoding="async" data-nimg="responsive" className='block absolute inset-0 box-border p-0 m-auto w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover delay-0 duration-[0.3s] ease-in hover:transform hover:scale-110'/>} itemName={'Denim Blue Jeans'} price={'$140'} reviewNo={'(11)'}/>
                            <ProductCard img={<img alt="category" sizes="100vw" src="/assets/images/products/Fashion/Clothes/19.BlackWhiteSweater.png" decoding="async" data-nimg="responsive" className='block absolute inset-0 box-border p-0 m-auto w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover delay-0 duration-[0.3s] ease-in hover:transform hover:scale-110'/>} itemName={'Black White Sweater'} price={'$180'} reviewNo={'(11)'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default  DealsOfDay