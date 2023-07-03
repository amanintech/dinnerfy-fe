"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LuChefHat, LuStar } from "react-icons/lu";
import { GiHotMeal } from "react-icons/gi";
import { useRecipe } from "@/context/RecipeProvider";
import { ServingSizeModal } from "./ServingSizeModal";
import { useRouter } from "next/navigation";
import {
  getRandomRecipeID,
  shortenRatingNumber,
} from "@/utils/numbersFunctions";

export type RecipeDetailPropType = {
  toggleRecipeModal: (show: boolean) => void;
};

export function RecipeDetail({ toggleRecipeModal }: RecipeDetailPropType) {
  const [showServingModal, setShowServingModal] = useState(false);
  const { servings, setRecipeId, recipeData } = useRecipe();
  const router = useRouter();

  function showNextDish() {
    const recipeId = getRandomRecipeID();
    setRecipeId(recipeId);
    router.push(`/${recipeId}/${servings}`);
  }

  function toggleServingModal(show: boolean) {
    setShowServingModal(show);
  }

  return (
    <section className="bg-green-100 shadow-md p-4 rounded-lg my-6 mx-4 w-full max-w-4xl">
      {showServingModal && (
        <ServingSizeModal toggleServingModal={toggleServingModal} />
      )}
      <div className="flex items-start sm:items-center justify-between gap-2">
        <div className="w-3/4">
          <h3 className="font-bold text-2xl text-stone-800">
            {recipeData?.Name}
          </h3>
          <div className="flex flex-col items-baseline sm:flex-row gap-0.5 sm:gap-3 text-sm text-gray-800">
            <span>Showing serving size for {servings}</span>
            <button
              className="underline hover:text-green-500"
              onClick={() => toggleServingModal(true)}
            >
              Update Serving Size
            </button>
          </div>
        </div>
        <div className="w-3/12 sm:w-60 flex flex-col gap-2 sm:flex-row ">
          <button
            onClick={() => toggleRecipeModal(true)}
            className="text-white font-bold bg-green-500 border-2 border-green-500 py-2 w-32 rounded-lg text-sm"
          >
            Show Recipe
          </button>
          <button
            className="text-green-500 font-bold border-2 border-green-500 py-2 w-32 rounded-lg text-sm"
            onClick={showNextDish}
          >
            Next
          </button>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="w-full sm:w-3/5 mt-4">
          {/* Cooking Meta */}
          <div className="flex items-center gap-8 text-gray-500">
            <div className="flex flex-col items-center gap-1 divide-x">
              <LuChefHat className="text-xl" />
              <span className="text-xs">
                {recipeData?.Cooking_Meta.cookTime} mins
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <GiHotMeal className="text-xl" />
              <span className="text-xs">
                {recipeData?.Cooking_Meta.prepTime} mins
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <LuStar className="text-xl" />
              <span className="text-xs">
                {recipeData?.Recipe_Meta.rating.starRating}(
                {shortenRatingNumber(
                  recipeData?.Recipe_Meta.rating.noOfReviews!
                )}
                )
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-stone-700 mt-3">
            {recipeData?.Recipe_Meta.description}
          </p>

          {/* Tags */}
          {recipeData?.Interest_Tags.tags.length > 0 && (
            <ul className="flex flex-row flex-wrap gap-3 mt-4">
              {recipeData?.Interest_Tags.tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-gray-50 shadow rounded-md px-4 py-2 text-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Image */}
        <div className="hidden sm:flex sm:justify-end w-2/5 mt-1 overflow-hidden">
          <Image
            src={"/assets/images/foodplate.webp"}
            alt="plate"
            width={260}
            height={260}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
