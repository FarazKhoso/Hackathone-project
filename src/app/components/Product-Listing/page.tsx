import React from 'react'
import ProductHeader from './Header'
import Image from 'next/image'

const Products = () => {
  return (
    <div>
      <ProductHeader/>


{/* 1st Row */}
      <div>
        <div className='h-[652px] md:h-[550px] w-screen'>
          
              <div className='w-screen h-[652px] p-4  md:p-20 py-0' >
          
             <div className=' w-full h-full grid grid-cols-2  lg:grid-cols-4 lg:grid-rows-8 gap-4  overflow-hidden '>
          
          
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
                  </div>
                
              </div>
        
              </div>
        </div>




{/* 2nd row */}
        
      <div>
        <div className='h-[652px] md:h-[510px] md:py-6 w-screen hidden md:block'>
          
              <div className='w-screen h-[652px] p-4  md:px-20 py-0' >
          
             <div className=' w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden '>
          
          
          {/* Card section */}
                  <div className=' h-[288px] w-[163px] lg:w-[305px] lg:h-[462px] flex flex-col justify-between'>
                      <Image src={'/photo (5).svg'} alt='' height={201} width={163} className='md:h-[375px]  md:w-[305px]'/>
                      <div className='w-[145] md:w-[154px] h-[63px] flex flex-col justify-between'>
          
                          <h4>Rustic Vase Set</h4>
                          <h4>£155</h4>
                      </div>
                  </div>
          
                  <div className=' h-[288px] w-[163px] lg:w-[305px] lg:h-[462px] flex flex-col justify-between'>
                      <Image src={'/photo (6).svg'} alt='' height={201} width={163} className='md:h-[375px]  md:w-[305px]'/>
                      <div className='w-[145] md:w-[154px] h-[63px] flex flex-col justify-between'>
          
                          <h4>Rustic Vase Set</h4>
                          <h4>£155</h4>
                      </div>
                  </div>
          
                  <div className='h-[288px] w-[163px] lg:w-[305px] lg:h-[462px] flex flex-col justify-between'>
                      <Image src={'/photo (7).svg'} alt='' height={201} width={163} className='md:h-[375px]  md:w-[305px]'/>
                      <div className='w-[145] md:w-[154px] h-[63px] flex flex-col justify-between'>
          
                          <h4>Rustic Vase Set</h4>
                          <h4>£155</h4>
                      </div>
                  </div>
          
                  <div className=' h-[288px] md:w-[154px] w-[163px] lg:w-[305px]  lg:h-[462px] flex flex-col justify-between'>
                      <Image src={'/photo (8).svg'} alt='' height={201} width={163} className='md:h-[375px]  md:w-[305px]'/>
                      <div className='w-[145] h-[63px] flex flex-col justify-between'>
          
                          <h4>Rustic Vase Set</h4>
                          <h4>£155</h4>
                      </div>
                  </div>
                  </div>
                
              </div>
        
              </div>
        </div>



{/* 3rd Row */}
         <div className='w-screen h-[744px] md:h-[634px] p-2  md:px-20 py-4' >
        
           <div className=' w-full h-full grid grid-cols-2  lg:grid-cols-4 lg:grid-rows-5 gap-4  overflow-hidden '>
               
             
        
        {/* Card section */}
                <div className=' h-[288px] w-[163px] lg:w-[305px] lg:h-[462px] lg:row-span-4 flex flex-col justify-between'>
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
        
                <button className='bg-[#F9F9F9] h-[56px] col-span-full mt-4 w-full md:w-[170px] mx-auto '>
                View collection
                </button>
        
                </div>
              
            </div>


                </div>
      

  )
}

export default Products
