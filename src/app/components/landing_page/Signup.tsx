import Image from 'next/image'
import React from 'react'

const Signup = () => {
  return (
    <div>

        <div className=' md:bg-[#F9F9F9]  h-[292px]  md:h-[481px] w-screen flex justify-center items-center'>

<div className='bg-white lg:w-[1273px] lg:h-[362px] flex flex-col justify-around items-center h-full' >

<div className='w-[329px] h-[86px] md:w-[571px] md:h-[114px] flex flex-col justify-between'>
<h4 className='text-xl md:font-medium md:text-[36px]'>Join the club and get the benefits</h4>
<p className='text-sm md:text-[16px] md:w-[470px] text-center'>Sign up for our newsletter and receive exclusive offers on new ranges,pop up stores and more</p>

</div>

<div className='lg:w-[472px] h-14'>

<input type='text' placeholder='your@email.com' className='bg-[#F9F9F9] h-full w-[244px] md:w-[354px] text-center'/>

<button className='bg-Dark h-full w-[118px] text-white'>Sign up</button>

</div>

</div>

 </div>



{/* other section */}

<div className='md:h-[603px] h-[806px] w-screen md:flex'>

<div className='w-[342px] h-[470px] mx-auto flex flex-col  justify-evenly md:h-full md:w-[720px]'>


<div className='w-[250px] h-[84px] md:w-[536px] md:text-2xl md:font-medium '>
<h4 className=''>
From a studio in London to a global brand with
</h4>
<h4>over 400 outlets</h4>
</div>

<div className='h-[168px] md:w-[536px] text-sm md:text-[16px] flex flex-col justify-between md:justify-around mx-auto md:-mt-16 md:mb-20 '>
<p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
<p> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
</div>

<button className='bg-[#F9F9F9] h-[56px] w-full md:w-[170px]  mx-auto md:mx-20 rounded-md  '>
Get in touch
     </button>



</div>

<div className=''>
<Image src={'/Image (1).svg'} alt='' height={500} width={390} className='h-[358px] md:h-full md:w-full'/>
</div>


</div>


      
    </div>
  )
}

export default Signup
