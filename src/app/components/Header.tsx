import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'
import { IoIosContact } from 'react-icons/io'
import Link from 'next/link';


const Header = () => {
  return (
    <div>
      
      <div className=' h-[68px] md:h-[68px] w-screen '>
        <div className=' h-full w-[87%] md:w-[94%] mx-auto flex justify-between items-center '>
            <h1 className='text-2xl md:order-2 '>Avion</h1>

            <div id='icons' className='flex gap-3 md:order-1 '>
                <AiOutlineSearch className='text-lg'/>
                <AiOutlineMenu className='sm:hidden text-lg'/>
            </div>


            <div className='hidden md:block md:order-3 '>
              <div className='flex gap-4'>
            
            <div className='text-[#726E8D] h-[22px] w-[215px]'>
              <ul className='flex justify-between'>
               <Link href={'./'}> <li>Home</li> </Link>
               <Link href={'./components/about'}> <li>About</li></Link>
               <Link href={'./components/Product-Listing'}> <li>All Products</li> </Link>    
              </ul>
            </div>

                <div className='flex gap-4 text-xl '>
               <Link href='/components/Shopping-Cart'> 
               <BiCart /> </Link>
                <IoIosContact/>
                </div>
                </div>
            </div>

        </div>
        <hr  className='w-[90%] mx-auto'/>
      </div>

      <div className=' h-[68px] md:h-[68px] w-screen hidden md:block  '>
<ul className='h-full flex  justify-center items-center gap-5  text-[#726E8D]'>
<li><p>Plant pots</p></li>
<li><p>Ceramics</p></li>
<li><p>Tables</p></li>
<li><p>Chairs</p></li>
<li><p>Crockery</p></li>
<li><p>Tableware</p></li>
<li><p>Cutlery</p></li>

</ul>

</div>
    </div>
  )
}

export default Header
