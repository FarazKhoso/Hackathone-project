import Image from 'next/image'
import React from 'react'
import OurProduct from './ourProduct'
import Link from 'next/link'

const Ceramics = () => {
  return (
<div>
    <div className='w-screen h-[811px] p-4  md:p-20 py-12' >

   <div className=' w-full h-full grid grid-cols-2  lg:grid-cols-4 lg:grid-rows-8 gap-4  overflow-hidden '>
       
       <div className='col-span-2 lg:col-span-4 lg:row-span-1'>
            <h1 className='text-xl md:text-[32px] '>New ceramics</h1>
        </div>


{/* Card section */}
        <div className=' h-[288px] w-[163px] lg:w-[305px] lg:h-[462px] lg:row-span-6 flex flex-col justify-between'>
            <Image src={'/photo.svg'} alt='' height={201} width={163} className='md:h-[375px]  md:w-[305px]'/>
            <div className='w-[145] md:w-[154px] h-[63px] flex flex-col justify-between'>

                <h4>Rustic Vase Set</h4>
                <h4>£155</h4>
            </div>
        </div>

        <div className=' h-[288px] w-[163px] lg:w-[305px] lg:h-[462px] flex flex-col justify-between'>
            <Image src={'/photo (2).svg'} alt='' height={201} width={163} className='md:h-[375px]  md:w-[305px]'/>
            <div className='w-[145] md:w-[154px] h-[63px] flex flex-col justify-between'>

                <h4>Rustic Vase Set</h4>
                <h4>£155</h4>
            </div>
        </div>

        <div className='h-[288px] w-[163px] lg:w-[305px] lg:h-[462px] flex flex-col justify-between'>
            <Image src={'/photo (1).svg'} alt='' height={201} width={163} className='md:h-[375px]  md:w-[305px]'/>
            <div className='w-[145] md:w-[154px] h-[63px] flex flex-col justify-between'>

                <h4>Rustic Vase Set</h4>
                <h4>£155</h4>
            </div>
        </div>

        <div className=' h-[288px] md:w-[154px] w-[163px] lg:w-[305px]  lg:h-[462px] flex flex-col justify-between'>
            <Image src={'/photo (4).svg'} alt='' height={201} width={163} className='md:h-[375px]  md:w-[305px]'/>
            <div className='w-[145] h-[63px] flex flex-col justify-between'>

                <h4>Rustic Vase Set</h4>
                <h4>£155</h4>
            </div>
        </div>

        <Link href={'./components/Product-Listing'} className='bg-[#F9F9F9] h-[56px] col-span-full mt-4 w-full md:w-[170px] mx-auto my-auto flex justify-center items-center'> 
        <button > View collection</button>
        </Link>

        </div>
      
    </div>
<OurProduct/>
    </div>
  )
}

export default Ceramics
