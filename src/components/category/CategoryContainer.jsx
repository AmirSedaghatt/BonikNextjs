import React from 'react'
import CategoryCard from './CategoryCard'

function CategoryContainer() {
  return (
    <>
        <div className='max-w-[1200px] mx-4 pt-16'>
            <div className='flex flex-wrap -m-1.5'>
                {/* Category 1 */}
                <CategoryCard src={'/assets/images/categories/cat-1.webp'} width={192} height={192} sizes={'100vw'} alt={'category'} title={'Toys'}/>

                {/* Category 2 */}
                <CategoryCard src={'/assets/images/categories/cat-2.webp'} width={192} height={192} sizes={'100vw'} alt={'category'} title={'Sports'}/>

                {/* Category 3 */}
                <CategoryCard src={'/assets/images/categories/cat-3.webp'} width={192} height={192} sizes={'100vw'} alt={'category'} title={'Gaming'}/>

                {/* Category 4 */}
                <CategoryCard src={'/assets/images/categories/cat-4.webp'} width={192} height={192} sizes={'100vw'} alt={'category'} title={'Furniture'}/>

                {/* Category 5 */}
                <CategoryCard src={'/assets/images/categories/cat-5.webp'} width={192} height={192} sizes={'100vw'} alt={'category'} title={'Fashion'}/>

                {/* Category 6 */}
                <CategoryCard src={'/assets/images/categories/cat-6.webp'} width={192} height={192} sizes={'100vw'} alt={'category'} title={'Cameras'}/>
            </div>
        </div>
    </>
  )
}

export default CategoryContainer