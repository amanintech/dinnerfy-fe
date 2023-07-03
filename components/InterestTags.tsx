"use client";
import React, { useContext } from "react";
import { RecipeContext } from "../context";

const InterestTags = () => {
  const { recipeDetails } = useContext(RecipeContext);

  return (
    <div className="flex w-full">
      <div className="flex flex-wrap h-[13vh] md:h-[10vh] my-16 w-full items-center justify-around">
        {recipeDetails?.Interest_Tags.tags.map((tag: string, index: number) => (
          <p
            className="flex drop-shadow-lg text-sm h-[5vh] items-center justify-center font-semibold lg:text-md xl:text-lg border-2 p-2 rounded-xl text-black"
            key={index}
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InterestTags;
