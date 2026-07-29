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
      <div className='mx-auto w-[90%] md:w-[80%] '>
        <h1 className='text-2xl font-bold border-s-4 p-1.5 mb-7 border-[#0AAD0A]'>Featured <span className='text-[#0AAD0A]'>Products</span></h1>
        <div className='p-1.5 mb-14'>
                <div className='flex  flex-wrap justify-between '>
                    {products.map((product) => (
                        <Link className=' md:w-1/4 w-1/2 lg:w-1/6 border p-1.5 my-2 md:m-2  ' key={product._id} href={`/productdetails/${product._id}`}>
                                <div  className=' '>
                        <div className='flex flex-col justify-between items-between'>
                            <div className='w-full relative h-60 object-cover '>
                           <Image fill  className='object-cover rounded-md'  src={product.imageCover} alt={product.title} />
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
                                <Button className='bg-[#0AAD0A] text-2xl p-1 text-white rounded-full cursor-pointer'><IoAdd />

</Button>
                            </div>
                            </div>
                            
                        </div>
                                    </div>
                        </Link>
                    
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