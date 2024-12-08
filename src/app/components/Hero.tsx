import Image from 'next/image'
import React from 'react'

import { Button } from "@/components/ui/button"
import Cards from './Cards'




const Hero = () => {
  return (
    <div className=' text-white   md:h-[1000px] h-svh w-full md:w-[1512px] mx-auto md:my-14 mt-14 grid md:grid-cols-2 grid-cols-1 gap-7'>
     
    {/* first Card */}
     <div className=' bg-[#4E4D93] flex justify-center items-end h-[514px]'>
        <div className=' w-[690px]'>

            {/* top section */}
     <div className='h-2/5 w-full py-12 space-y-4 '>

<div>
<h1 className='text-[24px] font-medium' >Use the styles</h1>
</div>

<div className='h-[120px] w-[700px] flex flex-col justify-between'>
<p className=''>
Styles in Figma mean you don’t have to repetitively enter values for typography, colors and elevations minimising the risk of inconsistencies and streamlining the design process.
</p>

<p>   
Within this template you can find color and type styles, and their definitions on the style
guide page. To use them simply select them from the Figma style panel as shown below. 
</p>


</div>

</div>

<div className='h-2/5 w-full flex items-end justify-between gap-4 overflow-hidden '>
<Image src={'/Card-1-pic-1.svg'} alt='Card pic ' height={220} width={314}/>
<Image src={'/Card-1-pic-2.svg'} alt='Card pic' height={220} width={314}/>
<Image src={'/Card-1-pic-3.png'} alt='Card pic' height={220} width={190} className='h-52'/>
</div>

</div>
     </div>


    {/* Second Card */}
     <div className=' bg-[#4E4D93] flex justify-center items-end h-[514px]'>
        <div className=' w-[690px]'>

            {/* top section */}
     <div className='h-2/5 w-full py-10 space-y-4 '>

<div>
<h1 className='text-[24px] font-medium' >Use the components</h1>
</div>

<div className='h-[120px] w-[700px] flex flex-col justify-between'>
<p className=''>
There’s a bunch of pre-configured components for you to use in this free template. Simply go to 
the Style Guide page and under the components header you can see everything included.
</p>

<p>   
Buttons, steppers, filter options and more for you to integrate into your screens and modify to
your tastes and requirements. 
</p>


</div>

</div>

<div className='h-2/5 w-full flex items-end justify-between gap-4 mb-8 '>

<div className=' flex gap-6 items-cente mx-auto'>

     <div className='h-[243px] w-[161px]'>
<Image src={'/photo.svg'} alt='Second Card pic ' height={197} width={161} className='rounded-md'/>
<div className='w-[81px] h-[33px] '>
     <p className='text-[10px] py-2'>The Dandy chair</p >
     <p className='text-[10px]'>£250</p>
</div>
</div>

     <div className='h-[243px] w-[161px]'>
<Image src={'/photo (1).svg'} alt='Second Card pic' height={197} width={161} className='rounded-md'/>
<div className='w-[81px] h-[33px] '>
     <p className='text-[10px] py-2'>The Dandy chair</p >
     <p className='text-[10px]'>£250</p>
</div>
</div>

</div>

<div className=''>

<div className=' flex  items-cente mx-auto w-[320px] h-[243px]'>
<ul className='flex flex-col gap-4 pl-3'>
     <li><Button variant="default" className='bg-white text-black'>Button</Button>
     </li>

     <li><Button variant="default" className='bg-[#2A254B]' >Button</Button>
     </li>

     <li><Button variant="default" className='bg-white text-black'>Button</Button>
     </li>
     <li><Button variant="default" className='bg-[#F9F9F926]'>Button</Button>
     </li>
</ul>


<ul className='px-14 flex flex-col gap-4'>
     <li className='w-[91px] h-[24px] flex justify-between '> <input type="checkbox" name="ch" id="1" className='h-5 w-5' /> <p className='-mr-3'>Furniture</p></li>
     <li className='w-[91px] h-[24px] flex justify-between '> <input type="checkbox" name="ch" id="1" className='h-5 w-5' /> <p className='-mr-3'>Furniture</p></li>
     <li className='w-[91px] h-[24px] flex justify-between '> <input type="checkbox" name="ch" id="1" className='h-5 w-5' /> <p className='-mr-3'>Furniture</p></li>
     <li className='w-[91px] h-[24px] flex justify-between '> <input type="checkbox" name="ch" id="1" className='h-5 w-5' /> <p className='-mr-3'>Furniture</p></li>
     <li className='w-[91px] h-[24px] flex justify-between '> <input type="checkbox" name="ch" id="1" className='h-5 w-5' /> <p className='-mr-3'>Furniture</p></li>
     <li className='w-[91px] h-[24px] flex justify-between '> <input type="checkbox" name="ch" id="1" className='h-5 w-5' /> <p className='-mr-3'>Furniture</p></li>
</ul>
     
</div>

</div>

</div>

</div>
     </div>



    {/* Third Card */}
     <div className=' bg-[#4E4D93] flex justify-center items-end h-[445px]'>
        <div className=' w-[690px]'>

            {/* top section */}
     <div className='h-2/5 w-full  space-y-1 '>

<div className=''>
<h4 className='text-[24px] font-bold' >Check the layouts</h4>
</div>

<div className='h-[120px] w-[700px] flex flex-col justify-between'>

<p>   
As well as components and styles we’ve built a bunch of layouts in both mobile and desktop sizes. Play around with replacing and modifying the nested content blocks and to switch device, simply use
the content block property ‘device’ to toggle between mobile and desktop.
</p>


</div>

</div>

<div className='h-2/5 w-full flex items-end justify-between gap-6 '>
<div className='w-full flex justify-between'>
<Cards ImageUrl='image (1).svg'/>
<Cards ImageUrl='image (2).svg'/>
<Cards ImageUrl='image (3).svg'/>
</div>


</div>

</div>
     </div>



    {/* fourth Card */}
     <div className=' bg-[#4E4D93] flex justify-center items-end h-[445px]'>
        <div className=' w-[690px]'>

            {/* top section */}
     <div className='h-2/5 w-full space-y-1 mt-3 '>

<div>
<h4 className='text-[24px] font-bold' >Use the content blocks</h4> 
</div>

<div className='h-[120px] w-[700px] flex flex-col justify-between'>
<p className=''>
We’ve built out a multitude of content blocks for you to use in your landing pages. From hero sections, forms, CTAs to pricing sections. Everything you need to get started building polished, modern landing pages.
</p>

</div>

</div>

<div className='h-2/5 w-full flex items-end justify-between gap-6  '>
<div className='h-[264px] w-[730px] flex'>

<Image src={'/image (4).svg'} alt='' height={264} width={375} className=''/>

<div className='bg-white text-black h-full w-full flex flex-col  items-center' >
     <div className='my-10'>
     <h1 className=''>Join the club and get the benefits</h1>
     <p className='text-[8px] w-[238px]'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
 
     <div>
          <div className='self-end'>

<Image src={'/Text input.svg'} alt='' height={28} width={239}/>
          </div>

</div>

</div>
</div>
</div>
</div>

</div>
     </div>



    </div>
  )
}

export default Hero



  
 

