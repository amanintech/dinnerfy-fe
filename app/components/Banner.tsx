import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='flex rounded-xl lg:flex-row flex-col drop-shadow-md bg-[#f2fdf9] my-7 mb-9 h-full lg:h-[42vh]'>
      <div className='flex flex-col lg:pl-16 flex-1 '>
        <div className='flex font-extrabold sm:text-[20px] md:text-[28px] lg:text-[32px] xl:text-[40px] text-[56px] my-9 flex-1 items-start justify-center'>
          Get Start with Cooking Recipies
        </div>
        <div className='flex flex-1 lg:items-start sm:items-center w-full md:items-center pl-0 mb-6 lg:mb-0 font-medium lg:text-md xl:text-lg 2xl:text-xl flex-col text-gray-500'>
          <p>Want  to learn cook but confused how to start ?</p>
          <p>No need to worry again!</p>
        </div>
        <div className='flex xl:w-[80%] justify-center lg:pl-0 w-full items-center lg:justify-between  flex-1'>
          <button className='flex border-2 h-[5vh] w-[25%] lg:w-[50%] xl:w-[60%] rounded-lg font-semibold text-sm lg:text-md justify-center items-center border-green-500 mr-3 hover:bg-green-600 hover:text-white'>Get Started</button>
          <button className='flex border-2 h-[5vh] w-[25%] lg:w-[50%] xl:w-[60%] rounded-lg font-semibold text-sm lg:text-md justify-center items-center border-green-500 mx-3  hover:bg-green-600 hover:text-white'>Explore Menu</button>
        </div>
      </div>
      <div className='flex flex-1 md:justify-center'>
      <Image
      className='flex my-6 rounded-r-lg'
        src="/assets/Banner.jpg"
        alt="Banner"
        width={600}
        height={400}
      />
      </div>
    </div>
  );
};

export default Banner;
