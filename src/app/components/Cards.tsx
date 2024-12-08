import Image from 'next/image'
import React from 'react'
import { ImCross } from 'react-icons/im'
import { LiaShippingFastSolid } from 'react-icons/lia'

const Cards = ({ImageUrl}:any) => {
  return (
    <div>
      
      <div className='h-[243px] w-[190px]'>

        <header>
            <div className='h-[25px] w-[190px] bg-[#2A254B] flex justify-around items-center'>

                <div className='w-[155px] h-[18px] text-white flex justify-between items-center gap-1'>
                    <LiaShippingFastSolid className='h-[15px] w-[15px]'/>
                    <p className='text-[7px]'>Free delivery on all orders over £50 with code easter checkout</p>
                </div>
                <ImCross className='text-[10px]'/>
            </div>

            <div className='h-[35px] w-[190px] bg-white text-black flex justify-around gap-6 items-center'>
                <div >
                    <h1 className='text-[11px]'>Avion</h1>
                </div>

                <div>
                   <Image src={'/image.svg'} alt='' height={7} width={60}/>  
                </div>
            </div>
        </header>

        <Image src={ImageUrl} alt='' height={186} width={193}/>

      </div>


    </div>
  )
}

export default Cards
