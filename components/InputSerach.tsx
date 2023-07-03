"use client"
import React, { useContext } from "react";
import Loader from "./Loader";
import { SiCodechef } from "react-icons/si";
import { PiBowlFoodBold } from "react-icons/pi";
import { AiOutlineStar } from "react-icons/ai";
import { BiSolidDish } from "react-icons/bi";

import { RecipeContext } from "../context";
import InterestTags from "./InterestTags";
import RecipeDescription from "./RecipeDescription";
import RecipeNutritution from "./RecipeNutritution";
import RecipeTools from "./RecipeTools";
import FamousIn from "./FamousIn";

const InputSearch = () => {
  const {
    recipeDetails,
    isLoading,
    handleSubmit,
   recipeId,
   setRecipeId, servings, setServings
  } = useContext(RecipeContext);

  return (
    <div className="flex flex-col my-16 justify-between w-full">
      <div className="flex w-full flex-wrap mb-10">
        <div className="flex mx-4 md:mx-6 lg:mx-0 flex-1 items-center text-sm justify-end font-semibold lg:text-md xl:text-lg w-full">
          <p className="flex mx-2 lg:mx-5">Enter Recipe Id</p>
          <input
            type="text"
            className="flex rounded-md cursor-pointer justify-center items-center p-2 hover:border-2 hover:border-green-500 border-2 w-16 h-12"
            value={recipeId}
            onChange={(e) => setRecipeId(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-1 items-center text-sm justify-end font-semibold lg:text-md xl:text-lg w-full">
          <p className="flex mx-0 pr-1 lg:pr-0 lg:mx-5">
            Enter Number of Servings
          </p>
          <input
            type="text"
            className="flex rounded-md cursor-pointer justify-center items-center p-2 hover:border-2 hover:border-green-500 border-2 w-16 h-12"
            value={servings}
            onChange={(e) => setServings(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-1 justify-center">
          <button
            className="flex border-2 border-green-500 hover:text-white hover:bg-green-500 text-black font-semibold w-[48%] h-[5vh] justify-center rounded-lg items-center"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      {isLoading && (
        <div className="flex justify-center my-4">
          <div className="loader" />
          <Loader />
        </div>
      )}
      {recipeDetails && !isLoading && (
        <div className="flex flex-col w-full my-8 ">
          <div className="flex w-full flex-col">
            <div className="flex text-xl my-14 2xl:h-[8vh] lg:my-12 lg:text-2xl items-center justify-center xl:my-10 font-bold xl:text-3xl 2xl:text-4xl">
              {recipeDetails.Name}
              <BiSolidDish className="flex drop-shadow-lg text-[50px] lg:text-[60px] text-yellow-500 mx-4" />
            </div>
            <div className="flex items-center justify-around">
              <div className="flex font-bold flex-col text-xl flex-1 border-r-2">
                <AiOutlineStar className="flex text-[50px] lg:text-[70px] my-3 drop-shadow-lg w-full justify-center text-yellow-500" />
                <div className="flex w-full justify-center">
                {recipeDetails.Recipe_Meta.rating && (
                      <>
                        {recipeDetails.Recipe_Meta.rating.starRating}
                        <p>
                          {" "}
                          &#40;{recipeDetails.Recipe_Meta.rating.noOfReviews}+ reviews&#41;
                        </p>
                      </>
                    )}
                </div>
              </div>
              <div className="flex  font-bold flex-col text-xl flex-1 border-r-2">
                <SiCodechef
                  className="flex md:text-[50px] lg:text-[70px] my-3 drop-shadow-lg w-full justify-center text-yellow-500"
                  size={70}
                />
                <div className="flex w-full justify-center">
                  {recipeDetails.Cooking_Meta.cookTime} minutes
                </div>
              </div>
              <div className="flex font-bold flex-col text-xl flex-1">
                <PiBowlFoodBold
                  className="flex md:text-[50px] lg:text-[70px] my-3 drop-shadow-lg w-full justify-center text-yellow-500"
                  size={70}
                />
                <div className="flex w-full justify-center">
                  {recipeDetails.Cooking_Meta.prepTime} minutes
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <InterestTags />
          </div>
          <div className="flex drop-shadow-lg rounded-lg bg-[#f2fdf9]">
            <RecipeDescription />
          </div>

          {/* <div className="flex w-full rounded-lg p-4 font-bold justify-start drop-shadow-lg bg-[#f2fdf9] flex-col text-xl my-6">
            <RecipeNutritution />
          </div>
          <div className="flex w-full rounded-lg p-4 font-bold justify-start drop-shadow-lg bg-[#f2fdf9] flex-col text-xl my-6">
            <RecipeTools />
          </div>

          <div className="flex p-4 w-full border-b drop-shadow-xl">
            <FamousIn />
          </div> */}
        </div>
      )}
    </div>
  );
};

export default InputSearch;
