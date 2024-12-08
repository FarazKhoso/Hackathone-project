



import React from 'react';

const Header = () => {
  return (
    <div className="text-white w-full md:w-[1512px] mx-auto py-5 px-4 md:px-8">
     
      <div className="grid grid-rows-3 grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
      
        <div className="col-span-1 row-span-1 ">
          <h1 className="text-4xl md:text-5xl font-medium text-center md:text-left">
            Build ecom sites, super fast
          </h1>
        </div>
     
        <div className="col-span-1 row-span-2 md:col-span-2 ">
          <p className="text-base md:text-lg text-center md:text-left">
            This template was built to help you rapidly, and modularly, build out high-quality e-commerce concepts using pre-built content blocks, components, and styles. Customize and play around with the template to match your specific requirements, and most of all, have fun with it!
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Header;




