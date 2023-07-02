"use client";

import React, { useState, useRef } from "react";
import Loader from "./Loader";
import { SiCodechef } from "react-icons/si";
import { PiBowlFoodBold } from "react-icons/pi";
import { AiOutlineStar } from "react-icons/ai";
import { BiSolidDish } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { IoNutritionOutline } from "react-icons/io5";
import {TbToolsKitchen2} from "react-icons/tb";

import axios from "axios";

const InputSearch = () => {
  const [recipeDetails, setRecipeDetails] = useState<{
    RecipeID: number;
    Name: string;
    Recipe_Meta: {
      informationSource: string;
      description: string;
      Aliases: string[];
      carbonFootprint: number;
      calories: number;
      popularRegion: string[];
      nutritionFact: string[];
      rating: {
        starRating: number;
        noOfReviews: number;
      };
    };
    Interest_Tags: {
      tags: string[];
      confidence: number[];
    };
    Diet_Tags: string[];
    Cooking_Meta: {
      ingredientsID: string[];
      ingredients: {
        ingredientName: string;
        ingredientID: string;
        quantity: string;
        unit: string;
        optional: boolean;
      }[];
      tools: string[];
      cookTime: number;
      prepTime: number;
      difficulty: string;
      steps: number;
    };
    Serve_2: {
      recipeSource: string;
      lastUpdated: string;
      instructions: {
        stepNumber: number;
        stageTitle: string;
        stepType: string;
        instruction: string;
        time: number;
        tool: string;
      }[];
    };
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const recipeIdRef = useRef<HTMLInputElement>(null);
  const servingsRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipeID = parseInt(recipeIdRef.current!.value);
    const servings = parseInt(servingsRef.current!.value);

    setIsLoading(true);

    let BASE_URL = "http://localhost:8000";
    axios({
      method: "GET",
      url: "/api/recipe",
      params: { recipe_id: recipeID, servings },
      proxy: {
        host: "localhost",
        port: 8000,
      },
    })
      .then((response) => {
        setRecipeDetails(response.data);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col my-16 justify-between w-full">
      <div className="flex w-full flex-wrap mb-10">
        <div className="flex mx-4 md:mx-6 lg:mx-0 flex-1 items-center text-sm justify-end font-semibold lg:text-md xl:text-lg w-full">
          <p className="flex mx-2 lg:mx-5">Enter Recipe Id</p>
          <input
            type="text"
            className="flex rounded-md cursor-pointer justify-center items-center p-2 hover:border-2 hover:border-green-500 border-2 w-16 h-12"
            ref={recipeIdRef}
          />
        </div>
        <div className="flex flex-1 items-center text-sm justify-end font-semibold lg:text-md xl:text-lg w-full">
          <p className="flex mx-0 pr-1 lg:pr-0 lg:mx-5">Enter Number of Servings</p>
          <input
            type="number"
            className="flex rounded-md cursor-pointer justify-center items-center p-2 hover:border-2 hover:border-green-500 border-2 w-16 h-12"
            ref={servingsRef}
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
              <BiSolidDish
                className="flex drop-shadow-lg text-[50px] lg:text-[60px] text-yellow-500 mx-4"
               
              />
            </div>
            <div className="flex items-center justify-around">
              <div className="flex font-bold flex-col text-xl flex-1 border-r-2">
                <AiOutlineStar
                  className="flex text-[50px] lg:text-[70px] my-3 drop-shadow-lg w-full justify-center text-yellow-500"
                 
                />
                <div className="flex w-full justify-center">
                  {recipeDetails.Recipe_Meta.rating.starRating}
                  <p>
                    {" "}
                    &#40;{recipeDetails.Recipe_Meta.rating.noOfReviews}+
                    reviews&#41;
                  </p>
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
            <div className="flex flex-wrap h-[13vh] md:h-[10vh] my-16 w-full items-center justify-around">
              {recipeDetails.Interest_Tags.tags.map((tag, index) => (
                <p
                  className="flex drop-shadow-lg text-sm h-[5vh] items-center justify-center font-semibold lg:text-md xl:text-lg border-2 p-2 rounded-xl text-black"
                  key={index}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="flex drop-shadow-lg rounded-lg bg-[#f2fdf9]">
            <div className="flex h-[16vh] text-center items-center w-full">
              <p className="flex w-full py-3 p-5 font-semibold lg:text-md xl:text-lg">
                {recipeDetails.Recipe_Meta.description}
              </p>
            </div>
          </div>
          
          <div className="flex w-full rounded-lg p-4 font-bold justify-start drop-shadow-lg bg-[#f2fdf9] flex-col text-xl my-6">
            <p className="flex w-full text-md lg:text-xl xl:text-2xl items-center h-[5vh]">
            <IoNutritionOutline className="flex mr-2 items-center text-red-500" size={40} />
              Nutrition Details:
              
            </p>
            <p className="flex my-6">
              <p className="flex flex-col p-2 text-sm lg:text-md">
                {recipeDetails.Recipe_Meta.nutritionFact.map((fact, index) => (
                  <p className="flex my-3 font-semi-bold text-gray-600" key={index}>{fact}</p>
                ))}
                <p className="flex my-3 font-semi-bold text-gray-600">Calories: {recipeDetails.Recipe_Meta.calories}</p>
              </p>
            </p>
          </div>
          <div className="flex w-full rounded-lg p-4 font-bold justify-start drop-shadow-lg bg-[#f2fdf9] flex-col text-xl my-6">
            <p className="flex w-full text-md lg:text-xl xl:text-2xl items-center h-[5vh]">
            <TbToolsKitchen2 className="flex mr-2 items-center text-gray-500" size={40} />
            Tools:
              
            </p>
            <p className="flex my-6">
            <p className="flex flex-col p-2 text-sm lg:text-md">
              {recipeDetails.Cooking_Meta.tools.map((tool, index) => (
                <p className="flex my-3 font-semi-bold text-gray-600" key={index}>{tool}</p>
              ))}
            </p>
            </p>
          </div>

          <div className="flex p-4 w-full border-b drop-shadow-xl">
            <div className="flex w-full font-medium lg:font-semibold xl:font-bold flex-col text-xl my-20">
              <p className="flex w-full text-md xl:text-2xl items-center h-[5vh] justify-between">
                Famous in
                <GiWorld className="flex text-green-500" size={40} />
              </p>
              <p className="flex my-5">
                {recipeDetails.Recipe_Meta.popularRegion.join(", ")}
              </p>
            </div>
          </div>

          
          {/* <div className="flex flex-1 flex-col"> */}
            {/* <li>Aliases: {recipeDetails.Recipe_Meta.Aliases.join(", ")}</li> */}
            {/* <li>Carbon Footprint: {recipeDetails.Recipe_Meta.carbonFootprint}</li> */}

            {/* <li>Interest Tags:</li> */}

            {/* <li>Diet Tags:</li>
            <ul>
              {recipeDetails.Diet_Tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul> */}
           
            

            {/* <li>Difficulty: {recipeDetails.Cooking_Meta.difficulty}</li> */}
            {/* <li>Steps: {recipeDetails.Cooking_Meta.steps}</li> */}
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default InputSearch;
