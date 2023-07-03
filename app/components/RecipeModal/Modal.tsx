"use client";

import React, { useState } from "react";
import { Nutrition } from "./Nutrition";
import { Ingredients } from "./Ingredients";
import { Steps } from "./Steps";
import { useRecipe } from "@/context/RecipeProvider";

type ModaProplType = {
  toggleRecipeModal: (show: boolean) => void;
};

export function RecipeModal({ toggleRecipeModal }: ModaProplType) {
  const [tab, setTab] = useState("steps");
  const { servings, recipeData } = useRecipe();
  const serve = `Serve_${servings}` as
    | "Serve_1"
    | "Serve_2"
    | "Serve_3"
    | "Serve_4"
    | "Serve_5"
    | "Serve_6";

  function onTabClick(name: string) {
    setTab(name);
  }

  return (
    <div className="fixed w-full h-screen flex items-center">
      <div
        className="fixed top-0 left-0 w-full h-screen z-10 bg-slate-500 bg-opacity-50"
        onClick={() => toggleRecipeModal(false)}
      ></div>
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-30 bg-white p-4 rounded-md">
        <h3 className="font-bold text-2xl text-stone-800">
          {recipeData?.Name}
        </h3>
        <div className="flex items-center gap-4 mt-3">
          <button
            className={`text-sm py-1 font-semibold px-3 rounded-3xl border-2 border-green-500 hover:shadow-md ${
              tab === "steps" ? "bg-green-500 text-white" : "text-green-500"
            }`}
            onClick={() => onTabClick("steps")}
          >
            Steps
          </button>
          <button
            className={`text-sm py-1 font-semibold px-3 rounded-3xl border-2 border-green-500 hover:shadow-md ${
              tab === "ingredients"
                ? "bg-green-500 text-white"
                : "text-green-500"
            }`}
            onClick={() => onTabClick("ingredients")}
          >
            Ingredients
          </button>
          <button
            className={`text-sm py-1 font-semibold whitespace-nowrap px-3 rounded-3xl border-2 border-green-500 hover:shadow-md ${
              tab === "nutrition" ? "bg-green-500 text-white" : "text-green-500"
            }`}
            onClick={() => onTabClick("nutrition")}
          >
            Nutrition Facts
          </button>
        </div>
        <div className="my-2">
          {tab === "steps" && <Steps Serve={recipeData[serve]} />}
          {tab === "ingredients" && (
            <Ingredients Cooking_Meta={recipeData?.Cooking_Meta} serving={2} />
          )}
          {tab === "nutrition" && (
            <Nutrition
              Diet_Tags={recipeData?.Diet_Tags}
              nutritionFact={recipeData?.Recipe_Meta.nutritionFact}
            />
          )}
        </div>
      </div>
    </div>
  );
}
