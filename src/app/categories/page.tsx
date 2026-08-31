import React from 'react'
import MainCategories from '../_components/MainCategories/MainCategories'
import MainorNav from './../_components/MainorNav/MainorNav';
import { FaLayerGroup } from "react-icons/fa6";

export default function page() {
    const name = "Categories" ;
    const mainText = "All Categories" ;
    const mainCaption = "Browse our wide range of product categories" ;
    const icon = <FaLayerGroup />
    const linear_from = "#16A34A";
    const linear_to = "#4ADE80";
  return (
    <div>
      <MainorNav locate={name} MainText={mainText} MainCaption={mainCaption} icon={icon} linear_from={linear_from} linear_to ={linear_to} />
          <MainCategories/>
      
    </div>
  )
}
