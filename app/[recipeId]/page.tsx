"use client";

import { recipeData } from "@/utils";
import { LuChefHat, LuStar } from "react-icons/lu";
import { GiHotMeal } from "react-icons/gi";
import { shortenRatingNumber } from "@/utils/numbersFunctions";
import Image from "next/image";
import { RecipeModal } from "../components/Recipe/Modal";
import { useState } from "react";

export type RecipeType = {
  params: {
    recipeId: string;
  };
};

export default function Recipe({ params }: RecipeType) {
  const [showRecipe, setShowRecipe] = useState(false);
  const { Name, Recipe_Meta, Interest_Tags, Cooking_Meta } = recipeData;
  const { cookTime, prepTime } = Cooking_Meta;
  const {
    description,
    rating: { starRating, noOfReviews },
  } = Recipe_Meta;

  function toggleRecipeModal(show: boolean) {
    setShowRecipe(show);
  }

  return (
    <main className="flex justify-center">
      {showRecipe && (
        <RecipeModal
          recipeData={recipeData}
          toggleRecipeModal={toggleRecipeModal}
        />
      )}
      <section className="bg-green-100 shadow-md p-4 rounded-lg my-6 mx-4 w-full max-w-4xl">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="font-bold text-2xl text-stone-800">{Name}</h3>
            <div className="flex items-center gap-3 text-sm text-gray-800">
              <span>Serve for 1</span>
              <button className="underline hover:text-green-500">
                Update Serving
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={() => toggleRecipeModal(true)}
              className="text-white font-bold bg-green-500 border-2 border-green-500 py-2 w-32 rounded-lg text-sm mr-4"
            >
              Show Recipe
            </button>
            <button className="text-green-500 font-bold border-2 border-green-500 py-2 w-32 rounded-lg text-sm">
              Next
            </button>
          </div>
        </div>
        <div className="w-full flex gap-4">
          <div className="w-3/5 mt-4">
            {/* Cooking Meta */}
            <div className="flex items-center gap-8 text-gray-500">
              <div className="flex flex-col items-center gap-1 divide-x">
                <LuChefHat className="text-xl" />
                <span className="text-xs">{cookTime} mins</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <GiHotMeal className="text-xl" />
                <span className="text-xs">{prepTime} mins</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <LuStar className="text-xl" />
                <span className="text-xs">
                  {starRating}({shortenRatingNumber(noOfReviews)})
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-stone-700 mt-3">{description}</p>

            {/* Tags */}
            {Interest_Tags.tags.length > 0 && (
              <ul className="flex flex-row flex-wrap justify-center sm:justify-start gap-3 mt-4">
                {Interest_Tags.tags.map((tag) => (
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
          <div className="w-2/5 mt-4 overflow-hidden">
            <Image
              src={"/assets/images/foodplate.webp"}
              alt="plate"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
