'use client'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { PiDotsNineBold } from "react-icons/pi";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Image from 'next/image';

const Header = () => {
  return (
    <>
 
 <div className=' flex justify-between z-50'>
 <Menubar className=' text-white h-[60px] w-full rounded-b-3xl bg-black-500 bg-zinc-800  border border-yellow-600/20  px-10 hidden md:flex'>
  
     <div className=' w-full   flex  justify-between  z-50  cursor-pointer'>
     <div className=' tracking-widest text-[#af8560] font-semibold'>
      ATHARE <span className='text-xs text-[#695442]'>Interiors</span>.
     </div>
   <div className='flex flex-row gap-5 '>
   <MenubarMenu>
        <MenubarTrigger className=' relative cursor-pointer   group'>Home
        <div className=' absolute h-[1px] w-[0%] bg-red-500  transition-all -bottom-4 group-hover:bg-yellow-500 group-hover:w-[50%]'></div>
        </MenubarTrigger>
       
      </MenubarMenu>
      <MenubarMenu>
      <MenubarTrigger className=' relative cursor-pointer   group'>Services
        <div className=' absolute h-[1px] w-[0%] bg-red-500  transition-all -bottom-4 group-hover:bg-yellow-500 group-hover:w-[50%]'></div>
        </MenubarTrigger>
       
      </MenubarMenu>
      <MenubarMenu>
      <MenubarTrigger className=' relative cursor-pointer   group'>About Us
        <div className=' absolute h-[1px] w-[0%] bg-red-500  transition-all -bottom-4 group-hover:bg-yellow-500 group-hover:w-[50%]'></div>
        </MenubarTrigger>
      
      </MenubarMenu>
      <MenubarMenu>
      <MenubarTrigger className=' relative cursor-pointer   group'>Contact us
        <div className=' absolute h-[1px] w-[0%] bg-red-400  transition-all -bottom-4 group-hover:bg-yellow-500 group-hover:w-[50%]'></div>
        </MenubarTrigger>
      </MenubarMenu> 
   </div>
     </div>
    </Menubar>
  
 
    <div className='h-[60px] justify-between md:hidden z-50 flex items-center w-full  '>
    <div className=' tracking-widest text-[#af8560] font-semibold cursor-pointer'>
      ATHARE <span className='text-xs text-[#695442]'>Interiors</span>.
     </div>
    <Sheet>
  <SheetTrigger className='md:hidden  text-white '> <PiDotsNineBold size={22}/></SheetTrigger>
  <SheetContent className=' bg-zinc-800  text-white border-none' >
    <SheetHeader className='text-white'>
      <SheetTitle className='text-white'>ATHARE INTERIORS</SheetTitle>
      <SheetDescription>
        BUILD YOUR SPACE
      </SheetDescription>
  </SheetHeader>
  <Menubar className=' z-50 border-none bg-transparent  md:hidden gap-8 flex-col flex'>
      <MenubarMenu >
        <MenubarTrigger className='  cursor-pointer'>File</MenubarTrigger>
       
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className='  cursor-pointer bg-none'>Edit</MenubarTrigger>
       
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className='  cursor-pointer bg-none'>View</MenubarTrigger>
      
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className='  cursor-pointer bg-none'>Profiles</MenubarTrigger> 
      </MenubarMenu> 
    </Menubar>
  </SheetContent>
</Sheet>
  

 
  
  </div>
 
 </div>
 
 

 

    </>
  
  )
}

export default Header