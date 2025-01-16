import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-screen md:h-[704px] md:flex items-center '>
    <div className=' md:max-w-[1280px] my-auto md:h-[584px] md:mx-auto h-[502px] bg-Dark text-white md:grid  grid-cols-7  flex justify-center items-center
    '>
      

      <div className=' flex flex-col justify-around md:w-[660px] md:ml-16 w-[342px] md:max-h-[544px] h-full gap-2 col-span-4    '>
    
       <div className='md:h-[187px] md:max-w-[513px] flex flex-col justify-between'>
         <h2 className='text-[32px] '>The furniture brand for the future, with timeless designs</h2>

      <button className='h-[56px] w-44 bg-[#F9F9F926] -mb-2 hidden md:block '>View collection</button>
         </div>
<div className='h-[223px] md:h-[81px] flex flex-col justify-between '>
        <p className='text-[19px] md:602px'>A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.</p>

        <button className='h-[56px] w-full bg-[#F9F9F926] -mb-2 md:hidden'>View collection</button>
        </div>

      </div>

      <div className=' ml-6 h-[584px] col-span-3 hidden md:block  '>

        <Image src={"/Right Image.svg"} alt='' height={100} width={100} className='h-full  w-full '/>

      </div>

    </div>
    </div>
  )
}

export default Hero
