import React from 'react'
import { FaPinterest, FaTwitter } from 'react-icons/fa'
import { FaInstagram, FaLinkedin, FaSkype } from 'react-icons/fa6'
import { IoLogoFacebook } from 'react-icons/io'

const Footer = () => {
  return (
    <div className='h-[668px] p-6 md:pt-14 md:h-[380px] bg-Dark text-white md:grid md:grid-cols-5  '>
      
      <div className='text-white md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4 mb-14 md:mb-7 text-sm md:px-20 '>

        <ul className='flex flex-col justify-between h-[206px] mb-6 order-2'>
            <li className='text-[16px]'>Categories</li>
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
            <li>Crockery</li>
        </ul>

        <ul className='flex flex-col justify-between h-[175px] order-1'>
            <li className='text-[16px]'>Menu</li>
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>   
        </ul>

        <ul className='flex flex-col justify-between h-[175px] order-3'>
            <li className='text-[16px]'>Our company</li>
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
        </ul>

      </div>

      
      <div className='md:col-span-2 md:-ml-28'>
  <p className=''>Join our mailing list</p>

      <div className='md:w-[627px]  h-14 flex '>      
<input type='text' placeholder='your@email.com' className='bg-[#FFFFFF26] h-full w-[244px] md:w-[509px] text-center'/>

<button className='bg-white h-full w-[118px] text-Dark'>Sign up</button>

</div>
<br />
    </div>

<div className='w-full lg:w-[1330px] md:ml-8 bg-[#4E4D93] h-[2px]'></div>
    
    <div className='md:flex justify-between md:mx-4 items-center md:col-span-5'>
    <p className='text-sm text-center m-5 '>Copyright 2022 Avion LTD</p>
    
    <div className='hidden md:block'>
    <div className='h-[24px] w-[264px] flex justify-between text-2xl '>
        <FaLinkedin/>
        <IoLogoFacebook/>
        <FaInstagram/>
        <FaSkype/>
        <FaTwitter/>
        <FaPinterest/>

    </div>
    </div>

    </div>
</div>
  )
}

export default Footer
