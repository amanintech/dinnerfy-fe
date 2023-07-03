"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Landing from "./components/landing/Landing";
import Menu from "./components/menu/Menu";

export default function Home() {
  const [page, setPage] = useState("landing");
  const zoomIn = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <AnimatePresence initial={true} onExitComplete={() => null}>
        <motion.div
          layout
          onClick={(e) => e.stopPropagation()}
          variants={zoomIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-green-150 rounded-3xl w-full max-w-3xl mx-4 overflow-hidden"
        >
          <AnimatePresence initial={false}>
            {page === "landing" ? (
              <Landing key="landing" setPage={setPage} />
            ) : null}
            {page === "menu" ? <Menu key="menu" /> : null}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
