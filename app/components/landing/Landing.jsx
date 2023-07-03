import Image from "next/image";
import Button from "../button/Button";
import { motion } from "framer-motion";

export default function Landing({ setPage }) {
  const slide = {
    hidden: {
      x: "-500vw",
    },
    visible: {
      x: "0",
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: {
      x: "-500vw",
      height: 0,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 20,
        stiffness: 300,
        height: {
          duration: 0.05,
        },
      },
    },
  };

  return (
    <motion.div variants={slide} initial="hidden" animate="visible" exit="exit">
      <div className="bg-green-150 rounded-3xl h-auto w-full max-w-3xl flex flex-col gap-6 p-8 lg:gap-10 items-center">
        <div className="h-20 w-72 relative">
          <Image
            src="/logo.png"
            fill={true}
            alt="logo"
            className="w-full relative h-[unset] object-contain"
          />
        </div>
        <p className="text-4xl lg:text-6xl text-green-850 font-bold">
          What&apos;s for dinner?
        </p>
        <p className="text-green-350 text-xl lg:text-3xl font-semibold">
          Know it on Dinnerfy
        </p>
        <Button size="big" onClick={() => setPage("menu")}>
          Start Cooking →
        </Button>
      </div>
    </motion.div>
  );
}
