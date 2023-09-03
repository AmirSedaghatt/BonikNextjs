import React from 'react'

function Shirt() {
  return (
    <>
        <div className='max-w-[1200px] mx-4 my-8'>

            {/* Product Show */}
            <div className='overflow-hidden'>
                <div className='flex flex-wrap justify-center -m-8'>
                    {/* Left-side */}
                    <div className='w-full p-8 lt:w-1/2'>
                        <div>
                            <div className='flex justify-center mb-[50px]'>
                                <img width="300" height="300" src="/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png" display="block" className='object-contain'/>
                            </div>
                            <div className='flex overflow-auto'>
                                {/* item1 */}
                                <button className='w-[70px] h-[70px] min-w-[70px] flex justify-center items-center ml-auto mr-2.5 cursor-pointer bg-white border-gray2 border-[1px] rounded-[10px] focus:outline-none focus:border-surface-main focus:border-[1px]'>
                                    <div className='block relative overflow-hidden w-10 h-10 min-w-[40px] font-semibold text-center text-scales-xlarge rounded-[10px]'>
                                        <img src="/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png" display="block" className=' w-full h-full leading-[0]'/>
                                    </div>
                                </button>

                                {/* item2 */}
                                <button className='w-[70px] h-[70px] min-w-[70px] flex justify-center items-center mr-auto cursor-pointer bg-white border-gray2 border-[1px] rounded-[10px] focus:outline-none focus:border-surface-main focus:border-[1px]'>
                                    <div className='block relative overflow-hidden w-10 h-10 min-w-[40px] font-semibold text-center text-scales-xlarge rounded-[10px]'>
                                        <img src="/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png" display="block" className='w-full h-full leading-[0]'/>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right-side */}
                    <div className='w-full p-8 lt:w-1/2'>
                        {/* Product name */}
                        <h1 className='font-semibold text-scales-3xlarge mt-0 mb-4'>Silver High Neck Sweater</h1>

                        {/* Brand */}
                        <div className='flex items-center mb-4'>
                            <span className='text-scales-body text-gray1'>Brand:</span>
                            <h6 className='font-semibold text-scales-body my-0 ml-2'>Ziaomi</h6>
                        </div>

                        {/* Rate */}
                        <div className='flex items-center mb-4'>
                            <span className='text-scales-body text-gray1'>Rated:</span>
                            <div className='mx-2'>
                                <div className='flex my-0 mx-[-1px]'>
                                    <img src="/assets/images/icons/star-filled.svg" alt="eye" className='h-4 w-4 my-0 mx-[1px]'/>
                                    <img src="/assets/images/icons/star-filled.svg" alt="eye" className='h-4 w-4 my-0 mx-[1px]'/>
                                    <img src="/assets/images/icons/star-filled.svg" alt="eye" className='h-4 w-4 my-0 mx-[1px]'/>
                                    <img src="/assets/images/icons/star-filled.svg" alt="eye" className='h-4 w-4 my-0 mx-[1px]'/>
                                    <img src="/assets/images/icons/star.svg" alt="eye" className='h-4 w-4 my-0 mx-[1px]'/>
                                </div>
                            </div>
                            <h6 className='font-semibold text-scales-body my-0'>(50)</h6>
                        </div>

                        {/* Price */}
                        <div className='mb-6'>
                            <h2 className='font-semibold text-arbitary-3 text-surface-main mt-0 mb-1 leading-lineHeight-primary'>$210.00</h2>
                            <span className='text-scales-body'>Stock Available</span>
                        </div>

                        {/* Add to cart button */}
                        <button className='h-10 flex justify-center items-center mb-9 px-6 py-[11px] outline-none font-semibold text-scales-body text-white leading-lineHeight-primary bg-surface-main rounded-[5px] transition-all cursor-pointer'>
                            Add to Cart
                        </button>

                        {/* Sold by */}
                        <div className='flex items-center mb-4'>
                            <span className='text-scales-body text-gray1'>Sold By:</span>
                            <a href="#"><h6 className='font-semibold text-scales-body leading-lineHeight-primary my-0 ml-2'>Mobile Store</h6></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Description & Reviews */}
            <div className='flex mt-20 mb-[26px] border-b-[1px] border-gray2'>
                <button className='my-0 mr-[25px] py-1 px-2.5 font-semibold text-scales-default text-gray1 cursor-pointer focus:outline-none focus:border-surface-main focus:border-b-[2px] focus:text-surface-main'>Description</button>
                <button className='my-0 mr-[25px] py-1 px-2.5 font-semibold text-scales-default text-gray1 cursor-pointer focus:outline-none focus:border-surface-main focus:border-b-[2px] focus:text-surface-main'>Review (3)</button>
            </div>

            {/* Specification */}
            <div className='mb-[50px]'>
                <div>
                    <h3 className='mt-0 mb-4 font-semibold text-scales-xlarge'>Specification:</h3>
                    <div>
                        Brand: Beats 
                        <br/>
                        Model: S450
                        <br/>
                        Wireless Bluetooth Headset
                        <br/>
                        FM Frequency Response: 87.5 – 108 MHz
                        <br/>
                        Feature: FM Radio, Card Supported (Micro SD / TF)
                        <br/>
                        Made in China
                    </div>
                </div>
            </div>

            {/* Frequently Bought */}
            <div className='mb-[3.75rem]'>
                <h3 className='mt-0 mb-6 font-semibold text-scales-xlarge'>Frequently Bought Together</h3>

                {/* Products */}
                <div className='flex flex-wrap -m-2'>
                    {/* product1 */}
                    <div className='w-full max-w-[220px] min-w-[160px] p-4 m-2 flex-1 rounded-[8px] bg-white shadow-shadows-card'>
                        <a href="#">
                            <div className='after:absolute after:inset-0 after:z-10 after:content-[" "] after:delay-0 after:ease-in-out after:duration-[250ms] hover:after:bg-black hover:after:opacity-[0.3] relative overflow-hidden mb-3 rounded-[8px]'>
                                <span className='relative block overflow-hidden m-0 p-0 border-0 opacity-100 bg-none'>
                                    <span className='block m-0 pt-[100%] border-0 opacity-100 bg-none'></span>
                                    <img src="/assets/images/products/Groceries/2.PremiumGroceryCollection.png" className='absolute block top-0 bottom-0 left-0 right-0 w-0 h-0 min-w-full max-w-full min-h-full max-h-full m-auto object-contain object-center'></img>
                                </span>
                            </div>
                            
                            <span className='block mb-1 text-scales-body overflow-hidden whitespace-nowrap text-ellipsis'>Premium Grocery Collection</span>

                            <div className='flex items-center'>
                                <h6 className='font-semibold text-scales-body my-0 mr-1 text-surface-main'>$222.50</h6>
                                <span className='text-scales-body text-gray1'>
                                    <del>$250.00</del>
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* + sign */}
                    <div className='flex justify-center items-center'>
                        <h2 className='my-0 mx-2 text-arbitary-3 text-gray1'>+</h2>
                    </div>

                    {/* product2 */}
                    <div className='w-full max-w-[220px] min-w-[160px] p-4 m-2 flex-1 rounded-[8px] bg-white shadow-shadows-card'>
                        <a href="#">
                            <div className='after:absolute after:inset-0 after:z-10 after:content-[" "] after:delay-0 after:ease-in-out after:duration-[250ms] hover:after:bg-black hover:after:opacity-[0.3] relative overflow-hidden mb-3 rounded-[8px]'>
                                <span className='relative block overflow-hidden m-0 p-0 border-0 opacity-100 bg-none'>
                                    <span className='block m-0 pt-[100%] border-0 opacity-100 bg-none'></span>
                                    <img src="/assets/images/products/Groceries/3.PremiumGroceryPack.png" className='absolute block top-0 bottom-0 left-0 right-0 w-0 h-0 min-w-full max-w-full min-h-full max-h-full m-auto object-contain object-center'></img>
                                </span>
                            </div>
                            
                            <span className='block mb-1 text-scales-body overflow-hidden whitespace-nowrap text-ellipsis'>Premium Grocery Pack</span>

                            <div className='flex items-center'>
                                <h6 className='font-semibold text-scales-body my-0 mr-1 text-surface-main'>$215.00</h6>
                                <span className='text-scales-body text-gray1'>
                                    <del>$250.00</del>
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* + sign */}
                    <div className='flex justify-center items-center'>
                        <h2 className='my-0 mx-2 text-arbitary-3 text-gray1'>+</h2>
                    </div>

                    {/* product3 */}
                    <div className='w-full max-w-[220px] min-w-[160px] p-4 m-2 flex-1 rounded-[8px] bg-white shadow-shadows-card'>
                        <a href="#">
                            <div className='after:absolute after:inset-0 after:z-10 after:content-[" "] after:delay-0 after:ease-in-out after:duration-[250ms] hover:after:bg-black hover:after:opacity-[0.3] relative overflow-hidden mb-3 rounded-[8px]'>
                                <span className='relative block overflow-hidden m-0 p-0 border-0 opacity-100 bg-none'>
                                    <span className='block m-0 pt-[100%] border-0 opacity-100 bg-none'></span>
                                    <img src="/assets/images/products/Groceries/4.FreashRealCholeMasala.png" className='absolute block top-0 bottom-0 left-0 right-0 w-0 h-0 min-w-full max-w-full min-h-full max-h-full m-auto object-contain object-center'></img>
                                </span>
                            </div>
                            
                            <span className='block mb-1 text-scales-body overflow-hidden whitespace-nowrap text-ellipsis'>Fresh&Real CHole Masala</span>

                            <div className='flex items-center'>
                                <h6 className='font-semibold text-scales-body my-0 mr-1 text-surface-main'>$217.50</h6>
                                <span className='text-scales-body text-gray1'>
                                    <del>$250.00</del>
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* + sign */}
                    <div className='flex justify-center items-center'>
                        <h2 className='my-0 mx-2 text-arbitary-3 text-gray1'>+</h2>
                    </div>

                    {/* product4 */}
                    <div className='w-full max-w-[220px] min-w-[160px] p-4 m-2 flex-1 rounded-[8px] bg-white shadow-shadows-card'>
                        <a href="#">
                            <div className='after:absolute after:inset-0 after:z-10 after:content-[" "] after:delay-0 after:ease-in-out after:duration-[250ms] hover:after:bg-black hover:after:opacity-[0.3] relative overflow-hidden mb-3 rounded-[8px]'>
                                <span className='relative block overflow-hidden m-0 p-0 border-0 opacity-100 bg-none'>
                                    <span className='block m-0 pt-[100%] border-0 opacity-100 bg-none'></span>
                                    <img src="/assets/images/products/Groceries/5.GumPack.png" className='absolute block top-0 bottom-0 left-0 right-0 w-0 h-0 min-w-full max-w-full min-h-full max-h-full m-auto object-contain object-center'></img>
                                </span>
                            </div>
                            
                            <span className='block mb-1 text-scales-body overflow-hidden whitespace-nowrap text-ellipsis'>Gum Pack</span>

                            <div className='flex items-center'>
                                <h6 className='font-semibold text-scales-body my-0 mr-1 text-surface-main'>$217.50</h6>
                                <span className='text-scales-body text-gray1'>
                                    <del>$250.00</del>
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* = sign */}
                    <div className='flex justify-center items-center'>
                        <h2 className='my-0 mx-6 text-arbitary-3 text-gray1'>=</h2>
                    </div>

                    {/* Total Sum */}
                    <div className='min-w-[300px] min-h-[200px] flex flex-col justify-center items-center m-2 border-gray2 border-[1px] rounded-[8px]'>
                        <h3 className='font-semibold text-scales-xlarge text-surface-main my-0'>$2500</h3>
                        <span className='text-scales-body text-gray1 mb-4'>Save $500</span>
                        <div className='flex'>
                            <button className='h-10 flex justify-center items-center mr-4 px-6 py-2.5 outline-none font-semibold text-scales-body text-white leading-lineHeight-primary bg-surface-main rounded-[5px] transition-all cursor-pointer'>Add to Cart</button>
                            <button className='h-10 flex justify-center items-center px-4 py-2.5 outline-none font-semibold text-scales-body text-surface-main leading-lineHeight-primary bg-transparent border-surface-main border-[1px] rounded-[5px] transition-all cursor-pointer hover:text-white hover:bg-surface-main'>Add to List</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Also Available At */}
            <div className='mb-[3.75rem]'>
                <h3 className='mt-0 mb-6 font-semibold text-scales-xlarge'>Also Available At</h3>
                <div className='flex flex-wrap -m-4'>

                    {/* item1 */}
                    <div className='w-full p-4 mm:w-1/2 lt:w-[33.3333%] xd:w-[16.6667%]'>
                        <a href="#">
                            <div className='w-full flex flex-col items-center justify-center p-6 bg-white shadow-shadows-card rounded-[8px]'>
                                <div className='block relative w-[48px] h-[48px] min-w-[48px] font-semibold text-center text-scales-2xlarge rounded-[48px] overflow-hidden'>
                                    <img src="/assets/images/faces/propic.png" alt="avatar" className='block absolute top-1/2 left-1/2 w-full h-full leading-[0] -translate-x-1/2 -translate-y-1/2'/>
                                </div>
                                <h4 className='overflow-hidden whitespace-nowrap text-ellipsis font-semibold text-arbitary-2 text-accent-alpha-dark text-center mb-0 mt-3'>Scarlett Beauty</h4>
                            </div>
                        </a>
                    </div>

                    {/* item2 */}
                    <div className='w-full p-4 mm:w-1/2 lt:w-[33.3333%] xd:w-[16.6667%]'>
                        <a href="#">
                            <div className='w-full flex flex-col items-center justify-center p-6 bg-white shadow-shadows-card rounded-[8px]'>
                                <div className='block relative w-[48px] h-[48px] min-w-[48px] font-semibold text-center text-scales-2xlarge rounded-[48px] overflow-hidden'>
                                    <img src="/assets/images/faces/propic(1).png" alt="avatar" className='block absolute top-1/2 left-1/2 w-full h-full leading-[0] -translate-x-1/2 -translate-y-1/2'/>
                                </div>
                                <h4 className='overflow-hidden whitespace-nowrap text-ellipsis font-semibold text-arbitary-2 text-accent-alpha-dark text-center mb-0 mt-3'>Scroll Through</h4>
                            </div>
                        </a>
                    </div>

                    {/* item3 */}
                    <div className='w-full p-4 mm:w-1/2 lt:w-[33.3333%] xd:w-[16.6667%]'>
                        <a href="#">
                            <div className='w-full flex flex-col items-center justify-center p-6 bg-white shadow-shadows-card rounded-[8px]'>
                                <div className='block relative w-[48px] h-[48px] min-w-[48px] font-semibold text-center text-scales-2xlarge rounded-[48px] overflow-hidden'>
                                    <img src="/assets/images/faces/propic(2).png" alt="avatar" className='block absolute top-1/2 left-1/2 w-full h-full leading-[0] -translate-x-1/2 -translate-y-1/2'/>
                                </div>
                                <h4 className='overflow-hidden whitespace-nowrap text-ellipsis font-semibold text-arbitary-2 text-accent-alpha-dark text-center mb-0 mt-3'>Coveted Clicks</h4>
                            </div>
                        </a>
                    </div>

                    {/* item4 */}
                    <div className='w-full p-4 mm:w-1/2 lt:w-[33.3333%] xd:w-[16.6667%]'>
                        <a href="#">
                            <div className='w-full flex flex-col items-center justify-center p-6 bg-white shadow-shadows-card rounded-[8px]'>
                                <div className='block relative w-[48px] h-[48px] min-w-[48px] font-semibold text-center text-scales-2xlarge rounded-[48px] overflow-hidden'>
                                    <img src="/assets/images/faces/propic(3).png" alt="avatar" className='block absolute top-1/2 left-1/2 w-full h-full leading-[0] -translate-x-1/2 -translate-y-1/2'/>
                                </div>
                                <h4 className='w-full whitespace-nowrap overflow-hidden text-ellipsis font-semibold text-arbitary-2 text-accent-alpha-dark text-center mb-0 mt-3'>Constant Shoppers</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shirt