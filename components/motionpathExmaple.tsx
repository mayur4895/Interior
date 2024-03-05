'use client'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const PathAnimation = () => {
  useEffect(() => {
     let first = gsap.to('#first', {
      motionPath: {
        path: '#myPath1', // Replace with your actual path ID or path data
      },
      opacity: 1,
      transformOrigin: '50% 80%', // Adjust as needed
      duration: 3,
      ease: 'back', // Add an easing function
      floodOpacity: 0.5,
      repeat: -1, // Infinite loop
    });
   
    let middle = gsap.to('#middle', {
        motionPath: {
          path: '#myPath2', // Replace with your actual path ID or path data
        },
        opacity: 1,
        transformOrigin: '50% 40%', // Adjust as needed
        duration: 3,
        ease: 'back', // Add an easing function
        floodOpacity: 0.5,
        repeat: -1, // Infinite loop
      });

      let end = gsap.to('#end', {
        motionPath: {
          path: '#myPath3',

          autoRotate: true // Replace with your actual path ID or path data
        },
        opacity: 0,
        transformOrigin: '50% 50%',

        duration: 3,
        ease: 'back', // Add an easing function
         
        repeat: -1, // Infinite loop
      });
    return () => {
        first.kill();
        middle.kill();
      end.kill(); // Clean up animation when component unmounts
    };

    
  }, []);

  return (
    <>
    <div className='  text-center translate-x-[17rem] relative aspect-[128/55] w-[30rem]'>
    
 

<svg  xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 128 55"
className="absolute   inset-0 size-full stroke-transparent"  
 >
<path
  id="myPath3"
  d="M64 0v25M8 0v8c0 8.837 7.163 16 16 16h24c8.837 0 16 7.163 16 16v15M120 0v8c0 8.837-7.163 16-16 16H80c-5.922 0-11.093 3.218-13.86 8"
  fill="transparent"
  stroke=" #4444"
/>

       <circle id="end" cx="0" cy="0" r="1" fill="cyan" opacity={1} />
   </svg>

   
    </div>
    </>
  );
};

export default PathAnimation;