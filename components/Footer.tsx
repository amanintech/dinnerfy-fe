import Image from "next/image";
import React from "react";
import Wrapper from "./ui/Wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <>
        <Image
          src="/logo.png"
          width={256}
          height={57}
          className="max-w-[50%]"
          alt=""
        />
        <h2 className="text-primary-light font-bold sm:text-3xl text-xl max-w-[80%] max-[300px]:text-sm break-words">
          Making The World Better One Shared Dinner at a Time
        </h2>
        <h2 className="text-primary-light font-bold sm:text-lg text-sm max-w-[80%] max-[300px]:text-sm break-words">
          Made with &#10084; by <span className="underline underline-offset-8"><a href="https://github.com/8rxn" target="_blank" rel="noreferer">8rxn</a></span>
        </h2>

      </>
    </Wrapper>
  );
};

export default Footer;
