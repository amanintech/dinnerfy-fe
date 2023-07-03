import Image from "next/image";
import React from "react";
import Wrapper from "./ui/Wrapper";

type Props = {};

const Hero = (props: Props) => {
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
        <h1 className="text-primary font-extrabold sm:text-7xl text-5xl break-words max-w-[80%] max-[300px]:text-3xl  ">
          Look Up Recipes
        </h1>
        <h2 className="text-primary-light font-bold sm:text-3xl text-xl max-w-[80%] max-[300px]:text-sm break-words">
          https://dinnerfy-ds-production.up.railway.app/recipe
        </h2>
        <a href="#body">
          <button className="mt-4 text-xl bg-primary-light text-white sm:p-10 sm:py-5 px-6 py-3 sm:rounded-2xl rounded-xl hover:scale-105 transition-all ">
            Try Out
          </button>
        </a>
      </>
    </Wrapper>
  );
};

export default Hero;
