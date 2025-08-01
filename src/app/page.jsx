import React from 'react'
import Video from '@/app/components/Video'
import Features from '@/app/components/Features'
import Products from '@/app/components/Products'
import Privacy from '@/app/components/Privacy'
import Why from '@/app/components/Why'
import Essentials from '@/app/components/Essentials'
import Footer from '@/app/components/Footer'

const page = () => {
  return (
    <>
     <Video/>
     <Features/>
     <Products/>
     <Privacy/>
     <Why/>
     <Essentials/>
     <Footer/>
    </>
    
  )
}

export default page