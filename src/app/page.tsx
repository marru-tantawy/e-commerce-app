// import Link from "next/link";
import Slidder from './_components/Slidder/Slidder';
import FeaturedProducts from './_components/FeaturedProducts/FeaturedProducts';
import MainCategories from './_components/MainCategories/MainCategories';
import img1 from '../app/assets/images/742d73753398b44cd5220aa1982e1522.jpg'
import img2 from '../app/assets/images/ba25984ba3012a46089baa2e26efdb43.jpg'
import img3 from '../app/assets/images/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png'

export default function Home() {
  return (
    <>
    <div className='grad'>
    <Slidder className='my-7' listOfImages={[ img1.src , img2.src , img3.src]}  />

    </div>
    <MainCategories/>
    <FeaturedProducts/>
    </>
  );
}
