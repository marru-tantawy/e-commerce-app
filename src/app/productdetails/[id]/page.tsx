import Image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from '@base-ui/react';
import { FcElectricity } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { MdReplay } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";


interface Props {
  params: Promise<{
    id: string;
  }>;
}
export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
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

export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface Review {
  _id: string;
  review: string;
  rating: number;
  product: string;
  user: User;
  createdAt: string;
  updatedAt: string;
  __v: number;
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
  priceAfterDiscount?: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  reviews: Review[];
}

export default async  function ProductDetails({ params } : Props) {
    const { id } = await params;

    async function getSinglePost() : Promise<Product>  {
      const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
      const data = await response.json();
      console.log(data)
      return data.data
      }
      
    const product =await  getSinglePost()
  return (
    <>
      <div className='md:flex gap-2  w-[80%] mx-auto my-15'>
        <div className='lg:w-1/4 md:w-1/3 w-full my-3 p-4 flex flex-col gap-2 border-2 rounded-md mx-auto mb-10'>
        <div className='bg-slate-400 p-2 w-full relative h-90 object-cover'>
          <Image fill src={product.imageCover} alt={product.title}/>
        </div>
        <hr />
        <div className=''>
          <div className='p-2 flex gap-2'>
          {product.images.map((img , index) => (
                     <div key={index} className=''>
                       <Image width={300} height={300}    src={img} alt={product.title}/>
                     </div>
            ))}
          </div>
        </div>
        </div>
        <div className='md:w-2/3 lg:3/4  p-4 flex my-3 flex-col gap-2 border-2 rounded-md mb-10'>
        <div className='flex gap-2'>
          <span className='text-[#15803D] bg-[#c0e8cc] px-3 rounded-full'>{product.category.name}</span>
          <span className='text-[#364153] bg-[#dee4ef] px-3 rounded-full' >{product.brand.name}</span>
        </div>
        <div>
          <h2 className='md:text-3xl text-lg font-bold font-serif'>{product.title}</h2>
        </div>
        <div className='flex gap-2 items-center'>
        <div>
             <span className='flex gap-2'><FaStar className='text-[#adcb1a]' /> <FaStar  className='text-[#c5c528]' /> </span>
          </div>   
            <div>
              <span className='px-1'>{product.ratingsAverage}</span>
            <span>({product.ratingsQuantity} reviews)</span>
            </div>
        </div>
        <div className='text-2xl'>{product.priceAfterDiscount ? (
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
          )}</div>
          <div>
            { product.quantity !== 0  && <span className='text-[#15803D] bg-[#c0e8cc] px-3 py-1 rounded-full'>In Stock</span> }
            { product.quantity === 0  && <span className='text-danger bg-[#c0e8cc] px-3 py-1 rounded-full'>Out of Stock</span>}
            </div>
            <hr />
            <div className='text-slate-400'><p>{product.description}</p></div>
            <div>
              <span> Quantity</span>
              <div className='flex gap-2'>
                <div>//quantity_number</div>
                <div className='text-slate-400'>{product.quantity} available</div>
              </div>
            </div>
            <div className='flex justify-between p-2 rounded-md border-2'>
              <p>Total Price:</p>
              <p className='text-[#15803D]'>{product.price} EGP</p>
            </div>
            <div className='md:flex gap-3 text-white justify-between items-center '>
              <div className='bg-[#15803D] md:w-1/2 my-2 flex justify-center items-center gap-3 h-10 rounded-md font-bold cursor-pointer' >
              <FaShoppingCart />
                <Button  > Add to Cart</Button>
              </div>
              <div className='bg-[#101828] md:w-1/2  rounded-md font-bold flex justify-center items-center gap-3 h-10 cursor-pointer'>
                <FcElectricity/>
                <Button  > Buy Now</Button>
              </div>
            </div>
            <div className='md:flex gap-3 text-black justify-between items-center '>
              <div className='border-2 md:w-11/12 my-2 flex justify-center items-center gap-3 h-10 rounded-md font-bold cursor-pointer' >
              <CiHeart />
                <Button  > Add to WishList</Button>
              </div>
              <div className=' md:w-1/12 rounded-md font-bold flex justify-center items-center gap-3 h-10 cursor-pointer border-2'>
                <FaShareAlt />
              </div>
            </div>
            <hr />
            <div className='md:flex  my-3 text-center md:justify-between items-center'>
              <div className='flex gap-2 items-center border-2 md:border-0 rounded-md'>
                <div className=' rounded-full bg-[#DCFCE7] text-[#16A34A] p-2 text-xl '>
                  <FaTruckFast />
                </div>
                <div>
                  <p>Free Delivery</p>
                  <p>order over $50</p>
                </div>
              </div>
              <div className='flex gap-2 items-center border-2 md:border-0 rounded-md my-2'>
              <div className=' rounded-full bg-[#DCFCE7] text-[#16A34A] p-2 text-xl '>
                  <MdReplay />
                </div>
                <div>
                  <p>Secure Payment</p>
                  <p>100% Protected</p>
                </div>
              </div>
              <div className='flex gap-2 items-center border-2 md:border-0 rounded-md'>
                  <div className=' rounded-full bg-[#DCFCE7] text-[#16A34A] p-2 text-xl '>
                  <RiSecurePaymentLine />
                </div>
                <div>
                  <p>Free Delivery</p>
                  <p>order over $50</p>
                </div>
              </div>
              
            </div>
        </div>
      </div>
    </>
  )
}
//font family/Font 1

/*
{
  sold: 1875,
  images: [
    'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg',
    'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg',
    'https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg',
    'https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg'
  ],
  subcategory: [
    {
      _id: '6407f1bcb575d3b90bf95797',
      name: "Women's Clothing",
      slug: "women's-clothing",
      category: '6439d58a0049ad0b52b9003f'
    }
  ],
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
  updatedAt: '2026-07-27T09:29:16.106Z',
  __v: 0,
  reviews: [
    {
      _id: '69d6116aafcdbd15b69febcf',
      review: 'fr',
      rating: 3,
      product: '6428ebc6dc1175abc65ca0b9',
      user: [Object],
      createdAt: '2026-04-08T08:27:22.783Z',
      updatedAt: '2026-04-08T08:27:22.783Z',
      __v: 0
    },
    {
      _id: '69d7c2a8b8a2062cafea80a2',
      review: 'test',
      rating: 5,
      product: '6428ebc6dc1175abc65ca0b9',
      user: [Object],
      createdAt: '2026-04-09T15:15:52.794Z',
      updatedAt: '2026-04-09T15:15:52.794Z',
      __v: 0
    }


*/