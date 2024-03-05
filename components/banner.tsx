'use client'
import React from 'react'
import { Button } from './ui/button'
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { FaXTwitter } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
 
const Banner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  )
  return (
  <div className=' w-full justify-center items-center relative  flex  h-[80vh] w-max-xl p-10 mt-5  '>
    <div>
      <Image src={"/bg.jpg"} alt='bg' fill className=' opacity-60 object-cover fixed rounded-lg top-0 right-0' />
    </div>
 <div className='  flex  flex-col  md:flex-row justify-between max-h-full gap-10 z-10 items-center w-full'>
  <div className='flex gap-3 flex-col text-white'>
  <h2 className='text-6xl   max-w-lg '>Best <span className='text-[#80522a]'>Interiors</span> of  Your Home.</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Culpa qui suscipit reprehenderit.</p>
<Button  className='w-[250px]  bg-[#695442] hover:bg-yellow-950  text-white  h-12'>CONTACT US</Button>
<div className='flex gap-3 mt-4 items-center justify-start'>
<a href="whatsapp://send?phone=9881907046&text= Hii"><FaWhatsapp className=' cursor-pointer'/>
</a>
<a href=""><FaInstagram className=' cursor-pointer'/>
</a>
<a href=""><FaXTwitter className=' cursor-pointer'/>
</a>
 
</div>
    </div> 
 
{/*    
   <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-lg"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={
      {  loop: true,}
      }
      
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
        
            <div className="max-[500px]">
              <AspectRatio ratio={8/5}>   
            <Image src="/bg2.jpeg"  fill  alt="Image" className="  rounded-md  " />
            </AspectRatio>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
     
    </Carousel>
      */}
 
</div>

    
 </div>
 
  )
} 

export default Banner