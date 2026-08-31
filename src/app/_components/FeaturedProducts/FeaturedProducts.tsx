import { Button } from '@base-ui/react';
import Image from 'next/image';
import { IoAdd } from "react-icons/io5";

import React from 'react'
import Link from 'next/link';
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

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Product {
  sold: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
priceAfterDiscount : number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}
export default async  function FeaturedProducts() {
    async function getAllproducts(): Promise<Product[]> {
        const Allproducts =  await fetch('https://ecommerce.routemisr.com/api/v1/products')
        const dataaa = await Allproducts.json()
        return dataaa.data
    }

    const products =await getAllproducts()
  return (
    <>
      <div className='mx-auto w-[90%] md:w-full my-5 '>
        <h1 className='text-2xl font-bold border-s-4 p-1.5 mx-2 mb-7 border-[#0AAD0A]'>Featured <span className='text-[#0AAD0A]'>Products</span></h1>
        <div className='p-1.5 mb-14'>
                <div className='flex  flex-wrap md:gap-1.5 justify-center  '>
                    {products.map((product) => (
                      <div  key={product._id} className='px-4 bg-[white] w-full md:w-1/4 xl:w-1/6 my-2 md:my-2 shadow hover:shadow-2xl transition-all border rounded-3xl '>
                        <Link className='  '  href={`/productdetails/${product._id}`}>
                              
                               
                        <div className=' p-4   relative  flex flex-col justify-around h-70  '>
                          
                            <div className='w-full  flex flex-col justify-center items-center  '>
                           <img className='object-cover rounded-md size-25 text-center'  src={product.imageCover} alt={product.title} />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>
                                <h3 className='text-slate-600 text-sm'>{product.category.name}</h3>
                            <h1 className='font-bold line-clamp-1'>{product.title}</h1>
                            <div className="flex items-center gap-2">
                            {product.priceAfterDiscount ? (
                              <>
                                <span className="font-bold text-[#0AAD0A]">
                                  {product.priceAfterDiscount} EGP
                                </span>
                                <span className="text-sm text-gray-500 line-through">
                                  {product.price} EGP
                                </span>
                              </>
                            ) : (
                              <span className="font-bold">
                                {product.price} EGP
                              </span>
                            )}
                            </div>                           
                             </div>
                            <div>
                              </div> 
                                <Button className='bg-[#0AAD0A] text-2xl p-1 text-white rounded-full cursor-pointer'><IoAdd />

</Button>
                            </div>
                            </div>
                            
                                    
                         </Link>
                        </div>
                    
            )
                
            )}
        </div>
        </div>
        
      </div>
    </>
  )
}
/*
{
    sold: 1831,
    images: [
      'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg',
      'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg',
      'https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg',
      'https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg'
    ],
    subcategory: [ [Object] ],
    ratingsQuantity: 32,
    _id: '6428ebc6dc1175abc65ca0b9',
    title: 'Woman Shawl',
    slug: 'woman-shawl',
    description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
    quantity: 220,
    price: 149,
    imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg',
    category: {
      _id: '6439d58a0049ad0b52b9003f',
      name: "Women's Fashion",
      slug: "women's-fashion",
      image: 'https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg'
    },
    brand: {
      _id: '64089bbe24b25627a253158b',
      name: 'DeFacto',
      slug: 'defacto',
      image: 'https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png'
    },
    ratingsAverage: 3.9,
    createdAt: '2023-04-02T02:43:18.400Z',
    updatedAt: '2026-07-24T20:15:03.074Z',
    id: '6428ebc6dc1175abc65ca0b9'
  },

*/