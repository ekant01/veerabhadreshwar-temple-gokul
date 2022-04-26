import React from "react";
import Carousel from './Carousel';
import About from './About';
import Cards from './Cards';
export default function Home() {
  return (
   <>
     <Carousel/>
     <div className='box1 '>
       <h5>Welcome To Shree Veerbhadhreshwar Temple Gokul</h5>
     </div>
    <About/>
    <Cards />
  </>
  );
}