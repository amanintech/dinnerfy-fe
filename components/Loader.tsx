import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed -mt-12 top-0 left-0 w-full h-full flex justify-center items-end">
      <Image
        width={100}
        height={100}
        alt="Loading..."
        src="/assets/loader.svg"
      />
    </div>
  );
};

export default Loader;
