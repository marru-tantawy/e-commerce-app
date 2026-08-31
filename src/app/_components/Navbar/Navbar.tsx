import React from 'react'
import {
  divMenu,
  // divMenuContent,
  div,
  // divMenuLink,
  divMenuList,
  // divMenuTrigger,
} from "@/components/ui/div-menu"
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Button } from '@base-ui/react';
import { FaBars } from "react-icons/fa";


export default function Navbar() {
  return (
    <div className='flex max-w-full!  gap-1 items-center md:justify-center justify-between p-4 md:p-2 bg-slate-100'>
      <div>
      <div className='flex gap-2 items-center md:text-3xl '>
        <FaShoppingCart className='text-[#0AAD0A]' />
        <h1 className=' font-bold'>FreshCart</h1>
      </div>
      </div>
      <div>
      <div className=' md:flex items-center gap-1 p-2 hidden relative'>
      <Input  className='w-[250px] lg:w-[400px] xl:w-[550px] rounded-full' />
      <Button className=' text-white bg-[#0AAD0A] rounded-full  p-2 absolute end-2'>
        <FaSearch  />
      </Button>
      </div>
      </div>
      <div>
      <div className=' xl:flex gap-2 p-2 border-e-3 hidden'>
        <Link className='hover:text-[#0AAD0A] transition-colors' href={'/'}>Home</Link>
        <Link className='hover:text-[#0AAD0A] transition-colors' href={'/shop'}>Shop</Link>
        <div className=''>
            <Link className='hover:text-[#0AAD0A] transition-colors' href={'/categories'}>Categories</Link>
          {/* </divMenuTrigger> */}
            {/* <divMenuContent>
            <divMenuLink>Link</divMenuLink>
            </divMenuContent> */}
        </div>
        <Link className='hover:text-[#0AAD0A] transition-colors' href={'/brands'}>Brands</Link>
      </div>
      </div>
      <div>
              <div className='md:flex items-center  gap-3 p-2 hidden'>
                <IoHeadset className='text-xl' />
                <div className='flex flex-col'>
                <span className='text-slate-500'>Support</span>
                <span>24/7 Help</span>
                </div>
              </div>
      </div>
      <div className='flex items-center gap-3'>
          <FaRegHeart />
          <FaShoppingCart />
          <Link href={'/login'}> <FaUser className='hidden md:block' /></Link>
          <Button className=' text-white bg-[#0AAD0A] rounded-full md:hidden  p-1'>
              <FaBars  />
          </Button>
      </div>
    </div>
  )
}
