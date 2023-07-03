"use client";
import React, { useContext } from "react";
import { RecipeContext } from "../context";
import { IoNutritionOutline } from "react-icons/io5";

const RecipeNutritution = () => {
  const { recipeDetails } = useContext(RecipeContext);

  return (
    <div className="flex w-full rounded-lg p-4 font-bold justify-start bg-[#f2fdf9] flex-col text-xl my-6">
      <div className="flex w-full text-md lg:text-xl xl:text-2xl items-center h-[5vh]">
        <IoNutritionOutline
          className="flex mr-2 items-center text-red-500"
          size={40}
        />
        Nutrition Details:
      </div>
      <div className="flex my-6">
        <div className="flex flex-col p-2 text-sm lg:text-md">
          {recipeDetails?.Recipe_Meta.nutritionFact.map((fact, index) => (
            <div className="flex my-3 font-semi-bold text-gray-600" key={index}>
              {fact}
            </div>
          ))}
          <div className="flex my-3 font-semi-bold text-gray-600">
            Calories: {recipeDetails?.Recipe_Meta.calories}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeNutritution;
