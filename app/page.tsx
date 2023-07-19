// pages/index.js
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-green-150 rounded-3xl h-auto w-full max-w-3xl flex flex-col gap-6 p-8 lg:gap-10 items-center">
        <div className="h-20 w-72 relative">
          <Image
            src="/logo.png"
            fill={true}
            alt="logo"
            className="w-full relative h-[unset] object-contain"
          />
        </div>
        <p className="text-4xl lg:text-6xl text-[#175951]  font-bold">
          What&apos;s for dinner?
        </p>
        <p className="text-[#03C166] text-xl lg:text-3xl font-semibold">
          Know it on Dinnerfy
        </p>
        <Link href="/recipe">
          <button className="px-8 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transform hover:scale-105 transition-all">
            Let's go!
          </button>
        </Link>
      </div>
    </div>
  );
}
