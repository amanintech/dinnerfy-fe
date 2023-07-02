"use client";

import { getReciepe } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getReciepe();
  });

  return (
    <main className="flex justify-center">
      <section className="bg-green-100 shadow-md p-4 rounded-lg flex items-center justify-center flex-col gap-3 my-6 mx-4 w-full max-w-4xl">
        <div className="relative w-36 h-9 sm:w-64 sm:h-14">
          <Image src={"/assets/images/logo.png"} alt="dinnerfy" fill />
        </div>
        <h3 className="text-green-800 text-xl sm:text-3xl font-bold text-center">
          Having trouble making a dinner decision?
        </h3>
        <h2 className="text-green-500 text-lg sm:text-2xl font-bold">
          Let us help you.
        </h2>
        <Link
          href={"/20"}
          className="text-white bg-green-500 font-bold py-2 px-4 rounded-lg sm:text-lg"
        >
          Lets Start
        </Link>
      </section>
    </main>
  );
}
