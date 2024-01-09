'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'


// const variants = {
//   visible: {opacity:1, x: 500, transition:{duration:2}},
//   hidden:{opacity:0}
// }

const Portfolio1 = () => {
 
  const [open , setOpen]=useState("hidden")


  useEffect(()=>{
    setTimeout(() => {
      setOpen("visible")    
    }, 3000);
  })

  return (
    <motion.div className=' h-screen snap-center scroll-smooth flex justify-center items-center bg-white  dark:bg-black dark:text-white '>
        
          <motion.div className=' w-24 h-24 bg-white '
           initial={{ y: -100, x: "-50%", opacity: 0 }}
           animate={{ y: 0, x: "-50%", opacity: 1 }}
      
          >

          </motion.div>

    </motion.div>
  )
}

export default Portfolio1