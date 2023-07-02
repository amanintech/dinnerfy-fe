import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="flex xl:w-full items-center h-[7vh] my-5">
      <div className="flex font-bold text-3xl items-center justify-start w-[16%]">
        <Image
          className="flex rounded-lg"
          src="/assets/logo.png"
          alt="Banner"
          width={170}
          height={90}
        />
      </div>
      <div className="md:flex hidden justify-start xl:text-sm 2xl:text-lg items-center font-semibold flex-1">
        <li className="flex hover:text-green-500 mx-7 cursor-pointer">Home</li>
        <li className="flex hover:text-green-500 mr-7 cursor-pointer">
          Contact
        </li>
        <li className="flex hover:text-green-500 cursor-pointer ">About</li>
      </div>
      <div className="md:flex hidden justify-center items-center md:w-[30%] xl:w-[18%] 2xl:w-[26%]">
        <input
          className="flex h-[4vh] border border-green-500 w-[98%] rounded-md p-2"
          placeholder="Search"
          type="search"
        ></input>
      </div>
    </div>
  );
};

export default Nav;
