import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Parallax from '@/components/Parallax'
import Portfolio1 from '@/components/Portfolio1'
import Portfolio2 from '@/components/Portfolio2'
import Portfolio3 from '@/components/Portfolio3'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div className=' overflow-x-clip' >
      <Hero />
      <Parallax />
      <Services />
      <Parallax/>
      <Portfolio1/>
      <Portfolio2/>
      <Portfolio3/>
      <Contact />
    </div>
  )
}

export default page