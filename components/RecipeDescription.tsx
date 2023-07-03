"use client";
import React, { useContext } from "react";
import { RecipeContext } from "../context";

const RecipeDescription = () => {
  const { recipeDetails } = useContext(RecipeContext);

  return (
    <div className="flex w-full items-center justify-center">
       <div className="flex h-[16vh] text-center items-center w-full">
              <div className="flex w-full py-3 p-5 justify-center font-semibold lg:text-md xl:text-lg">
                {recipeDetails?.Recipe_Meta.description}
              </div>
            </div>
    </div>
  );
};

export default RecipeDescription;
