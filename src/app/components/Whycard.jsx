import React from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'
const Whycard = ({src, title, subtitle}) => {
  return (
    <div className='w-100 p-10 bg-white rounded-2xl '>
        <Image
        className='mt-2'
        src={src}
        height={50}
        width={50}
        alt='img'
        />
        <h1 className='mt-2 font-bold text-3xl'>{title}</h1>
        <p className='mt-2 text-xl'>{subtitle}</p>
        <div className='w-full mt-2 flex items-end justify-end pr-5'>
            <button className='rounded-full mt-2 p-2 bg-gray-400 text-white'><Plus/></button>
        </div>
    </div>
  )
}

export default Whycard