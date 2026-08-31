// import React from 'react'
import React from 'react'
import Link from 'next/link';
import { getAllcategories } from '@/app/route.services';
import Image from 'next/image';
export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: Category;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}



export default async  function MainCategories() {
   

    const categories =await getAllcategories()
    
  return (
    <>
     <div className='mx-auto w-[90%] md:w-full my-5 '>
              <h1 className='text-2xl font-bold border-s-4 p-1.5 mx-2 mb-7 border-[#0AAD0A]'>Shop by <span className='text-[#0AAD0A]'>Category</span></h1>

         <div className=' mb-14'>              
              <div className='flex flex-wrap  md:gap-2 justify-center items-center'>
                {categories.map((category) => (
                  <div  key={category.name} className='px-4 w-full md:w-1/4 lg:w-1/6 my-2 md:my-0  '>
                <Link  href={`subcategory/${category._id}`}>
                  <div className='border rounded-3xl p-4  flex flex-col  items-center shadow hover:shadow-2xl transition-all '>
                    <img  className='  rounded-full size-20'  src={category.image} alt={category.name}/>
                    <h2 className='text-center font-bold p-1'>{category.name}</h2>
                  </div>
                </Link>
              </div>
              
             ))}
             </div>
             
             
                </div>       
              </div>       
    </>
    )

  }



  // 0

// createdAt
// : 
// "2023-04-14T22:39:24.365Z"
// image
// : 
// "https://ecommerce.routemisr.com/Route-Academy-categories/1681511964020.jpeg"
// name
// : 
// "Music"
// slug
// : 
// "music"
// updatedAt
// : 
// "2023-04-14T22:39:24.365Z"
// _id
// : 
// "6439d61c0049ad0b52b90051"