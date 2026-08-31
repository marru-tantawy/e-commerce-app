import React from 'react'
import MainorNav from '../_components/MainorNav/MainorNav'
import FeaturedProducts from '../_components/FeaturedProducts/FeaturedProducts'
import { FaBoxOpen } from "react-icons/fa";

export default function page() {
      const name = "All Products" ;
      const mainText = "All Products" ;
      const mainCaption = "Explore our complete product collection" ;
      const icon = <FaBoxOpen  />
      const linear_from = "#16A34A";
      const linear_to = "#4ADE80";
  return (
    <>
      <MainorNav locate={name} MainText={mainText} MainCaption={mainCaption} icon={icon} linear_from={linear_from} linear_to ={linear_to} />
      <FeaturedProducts/>
    </>
  )
}
