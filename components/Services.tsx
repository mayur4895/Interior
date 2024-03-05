import React from 'react'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import gsap from 'gsap';
gsap.registerPlugin(MotionPathPlugin); // Register the MotionPath plugin

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import MotionPathExample from './motionpathExmaple';
import PathAnimation from './motionpathExmaple';
 
 const Services = () => {
  return (
    <div className=' text-center items-center      mt-20 p-5 h-[80vh] w-full'>
 
          
       <div className='text-white mb-4'>
            <h2 className='text-2xl'>Services</h2>
        </div>
 
        <div  className='flex flex-wrap w-full  gap-5 justify-center'>
        <Card className="w-[350px] bg-zinc-900 border-none  relative">
           
      <CardHeader className='text-white'>
        <CardTitle className='text-2xl  font-semibold'>Renuation</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
       
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>

    <Card className="w-[350px] bg-zinc-900 border-none ">
      <CardHeader className='text-white'>
        <CardTitle className='text-2xl  font-semibold'>Comersial</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
       
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>

    <Card className="w-[350px] bg-zinc-900 border-none ">
      <CardHeader className='text-white'>
        <CardTitle className='text-2xl  font-semibold'>Residential</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
       
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>

        </div>
 
 
    </div>
  )
}

export default Services