import React from 'react'
import MainorNav from './../_components/MainorNav/MainorNav';
import { FaTags } from "react-icons/fa6";
import MainBrands from '../_components/MainBrands/MainBrands';

export default function page() {
  const name = "Brands" ;
  const mainText = "Top Brands" ;
  const mainCaption = "Shop from your favorite brands" ;
  const icon = <FaTags />
   const linear_from = "#7F22FE";
    const linear_to = "#C27AFF";

  return (
    <div>
      <MainorNav locate={name} MainText={mainText} MainCaption={mainCaption} icon={icon} linear_from={linear_from} linear_to ={linear_to} />
      <MainBrands/>
    </div>
  )
}
