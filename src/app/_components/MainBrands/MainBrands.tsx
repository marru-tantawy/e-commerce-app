import React from 'react'
import  Link  from 'next/link';
export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
export default async function MainBrands() {
      async function getMainBrands() : Promise<Brand[]>{
        const brands = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`);
        const dataa = await brands.json() ;
        return dataa.data
      }

      const allBrands = await getMainBrands();
  return (
    <>
      <div className='mx-auto w-[90%] md:w-full my-5 '>
         <div className=' mb-14'>
              
              <div className='flex flex-wrap  md:gap-2 justify-center items-center font-serif'>
                {allBrands.map((brand) => (
                <Link  key={brand.name} href={`subcategory/${brand._id}`}>
                  <div className='px-4 w-1/2 md:w-1/4 lg:w-1/6 my-2 md:my-0 transition duration-300 hover:scale-105 '>
                  <div className='border bg-[#F9FAFB] rounded-3xl p-4 w-[148.66000366210938px] h-[202.67px] 2xl:w-[237.33999633789062px] relative  flex flex-col justify-center items-center '>
                    <img className=' border rounded-2xl'  src={brand.image} alt={brand.name}/>
                    <p className='text-center font-bold p-1'>{brand.name}</p>
                  </div>
              </div>
                </Link>
              
             ))}
             </div>
             
             
                </div>       
              </div>       
    </>
  )
}


/*
createdAt
: 
"2023-03-08T14:47:04.912Z"
image
: 
"https://ecommerce.routemisr.com/Route-Academy-brands/1678286824747.png"
name
: 
"Canon"
slug
: 
"canon"
updatedAt
: 
"2023-03-08T14:47:04.912Z"
_id
: 
"64089fe824b25627a25315d1"
*/