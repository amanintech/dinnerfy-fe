"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBurn,
  faLeaf,
  faTasks,
  faClock,
  faStopwatch,
  faHome,
  faUtensils,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const searchParams = useSearchParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            RecipeID: searchParams.get("dish"),
            Servings: searchParams.get("serving"),
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setRecipe(data);
        } else {
          console.error("Request failed with status:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  //loading spinner
  if (recipe === null)
    return (
      <div className="bg-green-150 min-h-screen w-full flex justify-center items-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-green-850"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );

  //Error if occured
  if (recipe?.Error) {
    return (
      <div className="bg-green-150 min-h-screen w-full flex flex-col gap-2 justify-center items-center">
        <p className="text-5xl font-semibold text-green-850">Oops!!</p>
        <p className="text-green-450">Something went wrong, Try again</p>
        <Link href="/">
          <span className="inline-flex items-center justify-center gap-2 py-2 px-4 bg-green-200 text-green-850 rounded-full font-semibold hover:bg-green-300 transition-transform transform hover:scale-105 cursor-pointer">
            <FontAwesomeIcon icon={faHome} />
            Back to home
          </span>
        </Link>
      </div>
    );
  }

  //no error, returning the data
  return (
    <div className="flex items-center bg-white justify-center">
      <div className="bg-green-150 min-h-screen sm:w-full md:w-7/12 flex flex-col gap-3 p-4 pb-10">
        <div className="flex justify-center">
          <div className="h-20 w-72 relative md:h-20 md:w-72">
            <Image
              src="/logo.png"
              fill={true}
              alt="logo"
              className="w-full relative h-[unset] object-contain"
            />
          </div>
        </div>
        <p className="sm:text-2xl md:text-4xl lg:text-6xl font-bold text-green-850 py-2">
          {recipe?.Name}
        </p>
        <p className="text-green-450">{recipe.Recipe_Meta.description}</p>
        <div className="bg-green-200 rounded-xl p-5 flex flex-col gap-4 font-semibold">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faStar} className="text-green-800 mr-2" />
              <p className="text-green-700">
                {recipe.Recipe_Meta.rating.starRating}/5 (
                {recipe.Recipe_Meta.rating.noOfReviews} reviews)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faBurn} className="text-green-800 mr-2" />
              <p className="text-green-700">
                {recipe.Recipe_Meta.calories} Calories
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLeaf} className="text-green-800 mr-2" />
              <p className="text-green-700">
                Carbon Footprint: {recipe.Recipe_Meta.carbonFootprint}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTasks} className="text-green-800 mr-2" />
              <p className="text-green-700">
                Difficulty: {recipe.Cooking_Meta.difficulty}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faClock} className="text-green-800 mr-2" />
              <p className="text-green-700">
                Preparation Time: {recipe.Cooking_Meta.prepTime} mins
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faStopwatch}
                className="text-green-800 mr-2"
              />
              <p className="text-green-700">
                Cooking Time: {recipe.Cooking_Meta.cookTime} mins
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-green-700 font-semibold">Diet Tags:</p>
            {recipe.Diet_Tags.map((tag) => (
              <div
                key={tag}
                className="bg-green-400 text-black py-1 px-4 rounded-full font-medium text-xs"
              >
                <p>{tag}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-green-700 font-semibold">Nutritions:</p>
            {recipe.Recipe_Meta.nutritionFact.map((tag) => (
              <div
                key={tag}
                className="bg-green-400 text-black py-1 px-4 rounded-full font-medium text-xs"
              >
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <hr></hr>

        <p className="text-3xl font-bold text-green-700 mb-4">Ingredients</p>

        <div className="bg-green-200 shadow-lg rounded-lg p-5 overflow-auto max-h-96">
          <table className="w-full text-sm bg-white rounded-lg">
            <thead className="text-gray-700 uppercase bg-green-300">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              {recipe.Cooking_Meta.ingredients.map((ingredient, index) => (
                <tr
                  key={ingredient.ingredientName}
                  className="border-b border-green-100 hover:bg-green-50"
                >
                  <td className="px-6 py-4 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="w-4 h-4 text-green-500"
                    />
                    <p className="font-medium text-gray-900">
                      {ingredient.ingredientName}
                    </p>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {
                      ingredient.quantity[+searchParams.get("serving") - 1][
                        +searchParams.get("serving")
                      ]
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr></hr>

        <p className="text-3xl font-bold text-green-700 mb-6">Recipe</p>

        <div className="pl-5">
          <ol className="list-decimal pl-6 border-l-2 border-green-200 text-gray-700">
            {recipe[
              Object.keys(recipe)[Object.keys(recipe).length - 1]
            ].instructions.map((instruction) => (
              <li
                key={instruction.stepNumber}
                className="mb-10 ml-2 shadow-lg bg-white rounded-lg p-6"
              >
                <div className="flex flex-col gap-6">
                  <h3 className="font-semibold text-2xl text-green-700">
                    {instruction.stageTitle}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 text-white py-1 px-4 rounded-full font-medium text-xs">
                      {instruction.stepType}
                    </div>
                    <div className="flex items-center bg-green-500 text-white py-1 px-4 rounded-full font-medium text-xs gap-2">
                      <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
                      {instruction.time} min
                    </div>
                  </div>
                  <p className="text-gray-800">{instruction.instruction}</p>
                  <p className="font-semibold text-gray-700 flex items-center gap-2">
                    <FontAwesomeIcon icon={faUtensils} className="w-4 h-4" />
                    <span>Tool Needed: {instruction.tool}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <Link href="/">
          <span className="inline-flex items-center justify-center gap-2 py-2 px-4 bg-green-200 text-green-850 rounded-full font-semibold hover:bg-green-300 transition-transform transform hover:scale-105 cursor-pointer">
            <FontAwesomeIcon icon={faHome} />
            Back to home
          </span>
        </Link>
      </div>
    </div>
  );
}
