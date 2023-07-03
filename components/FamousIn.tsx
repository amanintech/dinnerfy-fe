"use client";
import React, { useContext } from "react";
import { RecipeContext } from "../context";
import { GiWorld } from "react-icons/gi";

const FamousIn = () => {
  const { recipeDetails } = useContext(RecipeContext);


  return (
    <div className="flex w-full">
     <div className="flex w-full font-medium lg:font-semibold xl:font-bold flex-col text-xl my-20">
              <p className="flex w-full text-md xl:text-2xl items-center h-[5vh] justify-between">
                Famous in
                <GiWorld className="flex text-green-500" size={40} />
              </p>
              <p className="flex my-5">
                {recipeDetails?.Recipe_Meta.popularRegion.join(", ")}
              </p>
            </div>
    </div>
  );
};

export default FamousIn;
