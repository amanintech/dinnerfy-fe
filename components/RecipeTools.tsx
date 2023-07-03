"use client";
import React, { useContext } from "react";
import { RecipeContext } from "../context";
import { TbToolsKitchen2 } from "react-icons/tb";

const RecipeTools = () => {
  const { recipeDetails } = useContext(RecipeContext);


  return (
    <div className="flex w-full rounded-lg p-4 font-bold justify-start bg-[#f2fdf9] flex-col text-xl my-6">
       <div className="flex w-full text-md lg:text-xl xl:text-2xl items-center h-[5vh]">
              <TbToolsKitchen2
                className="flex mr-2 items-center text-gray-500"
                size={40}
              />
              Tools:
            </div>
            <div className="flex my-6">
              <div className="flex flex-col p-2 text-sm lg:text-md">
                {recipeDetails?.Cooking_Meta.tools.map((tool, index) => (
                  <div
                    className="flex my-3 font-semi-bold text-gray-600"
                    key={index}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
    </div>
  );
};

export default RecipeTools;
