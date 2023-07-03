"use client";

import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useRecipe } from "@/context/RecipeProvider";

type ServingModalType = {
  toggleServingModal: (show: boolean) => void;
};

export function ServingSizeModal({ toggleServingModal }: ServingModalType) {
  const { recipeId, servings, setServings } = useRecipe();
  const [servingCount, setServingCount] = useState(servings);
  const router = useRouter();

  function onUpdateClick() {
    setServings(servingCount);
    router.push(`/${recipeId}/${servingCount}`);
    toggleServingModal(false);
  }

  function updateCount(type: "increase" | "decrease") {
    if (type === "increase") {
      setServingCount((c) => c + 1);
    }

    if (type === "decrease") {
      setServingCount((c) => c - 1);
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <div
        className="fixed top-0 left-0 w-full h-screen z-10 bg-slate-500 bg-opacity-50"
        onClick={() => toggleServingModal(false)}
      ></div>
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-30 bg-white p-4 rounded-md">
        <h3 className="font-bold text-xl text-stone-800">
          Update Serving Size
        </h3>
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            className={`bg-green-500 p-2 rounded-full ${
              servingCount === 1 ? "opacity-70" : ""
            }`}
            onClick={() => updateCount("decrease")}
            disabled={servingCount === 1}
          >
            <AiOutlineMinus className="stroke-2 fill-white" />
          </button>
          <span className="text-xl text-gray-700 font-bold">
            {servingCount}
          </span>
          <button
            className={`bg-green-500 p-2 rounded-full ${
              servingCount === 6 ? "opacity-70" : ""
            }`}
            onClick={() => updateCount("increase")}
            disabled={servingCount === 6}
          >
            <AiOutlinePlus className="stroke-2 fill-white" />
          </button>
        </div>
        <div className="mt-4 flex justify-end w-full">
          <button
            onClick={onUpdateClick}
            className="py-1.5 px-4 rounded-md bg-green-500 text-white font-semibold hover:shadow-md"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
