import React from 'react'
import Image from 'next/image'

const OurProduct = () => {
  return (
    <div className='h-[573px]  md:h-[744px] w-screen'>
      
      <div className='w-screen h-[573px] md:h-[744px] p-4 md:px-20 py-12' >

<div className=' w-full h-full grid grid-cols-2 grid-rows-6 lg:grid-cols-4 lg:grid-rows-8 gap-4  overflow-hidden '>
    
    <div className='col-span-2 lg:col-span-4 row-span-1'>
         <h1 className='text-xl md:text-[32px] '>Our popular products</h1>
     </div>


{/* Card section */}
     <div className=' h-[288px] w-[163px] lg:w-[630px] lg:h-[462px] lg:row-span-8 lg:col-span-2 hidden md:block '>
<div className='flex flex-col justify-between'>
         <Image src={'/large.svg'} alt='' height={201} width={630} className='md:h-[375px]  md:w-[630px]'/>
         <div className='w-[145] md:w-[154px] h-[63px] flex flex-col justify-between'>

             <h4>Rustic Vase Set</h4>
             <h4>£155</h4>
         </div>
     </div>
     </div>
   

     <div className='h-[288px] w-[163px] lg:w-[305px] lg:h-[462px] row-span-3 flex flex-col justify-between'>
         <Image src={'/photo (4).svg'} alt='' height={201} width={163} className='md:h-[375px]  md:w-[305px]'/>
         <div className='w-[145] md:w-[154px] h-[63px] flex flex-col justify-between'>

             <h4>Rustic Vase Set</h4>
             <h4>£155</h4>
         </div>
     </div>

     <div className=' h-[288px] md:w-[154px] w-[163px] lg:w-[305px]  lg:h-[462px] flex flex-col justify-between'>
         <Image src={'/photo (3).svg'} alt='' height={201} width={163} className='md:h-[375px]  md:w-[305px]'/>
         <div className='w-[145] h-[63px] flex flex-col justify-between'>

             <h4>Rustic Vase Set</h4>
             <h4>£155</h4>
         </div>
     </div>

     <button className='bg-[#F9F9F9] h-[56px] col-span-full  w-full md:w-[170px] md:mt-24 mx-auto mt-20 rounded-md  '>
     View collection
     </button>

     </div>
   
 </div>

    </div>
  )
}

export default OurProduct
