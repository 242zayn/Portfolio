/* eslint-disable react/no-unescaped-entities */
'use client'

import  { sarvesh1, sarvesh2 } from '@/images/images'
import { Download } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

import { useTypewriter ,Cursor ,  } from 'react-simple-typewriter';

import {motion} from 'framer-motion'


const Hero = () => {

  const [text] = useTypewriter({
    words: [ 'MERN Developer', 'Full Stack Developer',   'Frontend Developer', 'Backend Developer',  'Web Developer', ],
    loop: 0, 
  })
  return (
    <motion.div className='    bg-white  dark:bg-black dark:text-slate-400 snap-center scroll-smooth  2xl:px-12 '
     > 
    <div className=' container mx-auto w-full herodropshadow ' >
      
       <div className=' w-full flex flex-col md:flex-row   relative pt-[30px]  ' >

        <div className=' w-full md:w-[60%] flex flex-col items-center  md:items-start justify-center relative    ' >
        {/* Typewriter start here */}
        <div className=' w-full  flex justify-center md:justify-start     ' >
          <h1 className='   font-bold font-roboto tracking-wide  text-[35px] sm:text-[40px] md:text-[40px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px]    '  >I'm  <span className=' text-sky-400 ' >{text}<Cursor cursorStyle='|' cursorColor='red' cursorBlinking={true} /> </span> </h1>
        </div>
        <p className=' text-[20px]  leading-[30px] tracking-wider md:pr-10 text-center md:text-start  '> You can reach out to me if you need any help in making a website or web application for you business</p>
      
       <div className=' flex gap-4 items-center justify-center mt-[50px] w-[60%]  ' >

          <button className=' border-2 border-black dark:border-white text-lg w-[40%] py-3  ' >About me</button>
          <button className=' text-lg  bg-sky-400 w-[40%] py-3  text-white ' >   Resume <Download/>  </button>
       </div>

        {/* Typewrite end here */}
        </div>

        <motion.div className=' w-[70%] mx-auto mt-[50px] md:mt-0 md:w-[40%]    '
          initial={{  x: "80%", opacity: 0 }}
          animate={{ y: 0, x: "0%", opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          
          <Image src={sarvesh2} alt=''  className='   dark:grayscale w-full  ' />
          </motion.div>  
       
       </div>
       

    </div>
    
    
    </motion.div>
  )
}

export default Hero