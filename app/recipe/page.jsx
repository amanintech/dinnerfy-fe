"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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

  if (recipe?.Error) {
    return (
      <div className="bg-green-150 min-h-screen w-full flex flex-col gap-2 justify-center items-center">
        <p className="text-5xl font-semibold text-green-850">Oops!!</p>
        <p>Something went wrong, Try again</p>
        <Link
          href="/"
          className="bg-green-200 text-green-850 py-1 px-4 rounded-full font-semibold w-fit hover:bg-green-300 transition-all"
        >
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-green-150 min-h-screen w-full flex flex-col gap-3 p-4 pb-10">
      <div className="flex justify-center">
        <div className="h-20 w-72 relative">
          <Image
            src="/logo.png"
            fill={true}
            alt="logo"
            className="w-full relative h-[unset] object-contain"
          />
        </div>
      </div>
      <Link
        href="/"
        className="bg-green-200 text-green-850 py-1 px-4 rounded-full font-semibold w-fit hover:bg-green-300 transition-all"
      >
        ← Back to home
      </Link>
      <p className="text-6xl font-bold text-green-850">{recipe?.Name}</p>
      <p>{recipe.Recipe_Meta.description}</p>
      <div className="bg-green-200 rounded-xl p-5 flex flex-col gap-2 font-semibold">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>

            <p>
              <span className="text-green-700 font-semibold">Rating:</span>{" "}
              {recipe.Recipe_Meta.rating.starRating}/5 (
              {recipe.Recipe_Meta.rating.noOfReviews} reviews)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                clipRule="evenodd"
              />
            </svg>

            <p>
              <span className="text-green-700 font-semibold">Calories:</span>{" "}
              {recipe.Recipe_Meta.calories}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a6.715 6.715 0 00-3.722 1.118.75.75 0 11-.828-1.25 8.25 8.25 0 0112.8 6.883c0 3.014-.574 5.897-1.62 8.543a.75.75 0 01-1.395-.551A21.69 21.69 0 0018.75 10.5 6.75 6.75 0 0012 3.75zM6.157 5.739a.75.75 0 01.21 1.04A6.715 6.715 0 005.25 10.5c0 1.613-.463 3.12-1.265 4.393a.75.75 0 01-1.27-.8A6.715 6.715 0 003.75 10.5c0-1.68.503-3.246 1.367-4.55a.75.75 0 011.04-.211zM12 7.5a3 3 0 00-3 3c0 3.1-1.176 5.927-3.105 8.056a.75.75 0 11-1.112-1.008A10.459 10.459 0 007.5 10.5a4.5 4.5 0 119 0c0 .547-.022 1.09-.067 1.626a.75.75 0 01-1.495-.123c.041-.495.062-.996.062-1.503a3 3 0 00-3-3zm0 2.25a.75.75 0 01.75.75A15.69 15.69 0 018.97 20.738a.75.75 0 01-1.14-.975A14.19 14.19 0 0011.25 10.5a.75.75 0 01.75-.75zm3.239 5.183a.75.75 0 01.515.927 19.415 19.415 0 01-2.585 5.544.75.75 0 11-1.243-.84 17.912 17.912 0 002.386-5.116.75.75 0 01.927-.515z"
                clipRule="evenodd"
              />
            </svg>

            <p>
              <span className="text-green-700 font-semibold">
                Carbon Footprint:
              </span>{" "}
              {recipe.Recipe_Meta.carbonFootprint}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z"
                clipRule="evenodd"
              />
            </svg>

            <p>
              <span className="text-green-700 font-semibold">Difficulty:</span>{" "}
              {recipe.Cooking_Meta.difficulty}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clipRule="evenodd"
              />
            </svg>

            <p>
              <span className="text-green-700 font-semibold">
                Time to prepare:
              </span>{" "}
              {recipe.Cooking_Meta.prepTime} mins
            </p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clipRule="evenodd"
              />
            </svg>

            <p>
              <span className="text-green-700 font-semibold">
                Time to cook:
              </span>{" "}
              {recipe.Cooking_Meta.cookTime} mins
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M11.097 1.515a.75.75 0 01.589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 111.47.294L16.665 7.5h3.585a.75.75 0 010 1.5h-3.885l-1.2 6h3.585a.75.75 0 010 1.5h-3.885l-1.08 5.397a.75.75 0 11-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 01-1.47-.294l1.02-5.103H3.75a.75.75 0 110-1.5h3.885l1.2-6H5.25a.75.75 0 010-1.5h3.885l1.08-5.397a.75.75 0 01.882-.588zM10.365 9l-1.2 6h4.47l1.2-6h-4.47z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-green-700 font-semibold">Diet Tags:</p>
          {recipe.Diet_Tags.map((tag) => (
            <div
              key={tag}
              className="bg-green-400 text-black py-1 px-4 rounded-full font-medium w-fit text-xs"
            >
              <p>{tag}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M11.097 1.515a.75.75 0 01.589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 111.47.294L16.665 7.5h3.585a.75.75 0 010 1.5h-3.885l-1.2 6h3.585a.75.75 0 010 1.5h-3.885l-1.08 5.397a.75.75 0 11-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 01-1.47-.294l1.02-5.103H3.75a.75.75 0 110-1.5h3.885l1.2-6H5.25a.75.75 0 010-1.5h3.885l1.08-5.397a.75.75 0 01.882-.588zM10.365 9l-1.2 6h4.47l1.2-6h-4.47z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-green-700 font-semibold">Nutritions:</p>
          {recipe.Recipe_Meta.nutritionFact.map((tag) => (
            <div
              key={tag}
              className="bg-green-400 text-black py-1 px-4 rounded-full font-medium w-fit text-xs"
            >
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="font-bold text-2xl text-green-850">Ingridients</p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 bg-green-200">
          <thead className="text-xs text-gray-700 uppercase ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {recipe.Cooking_Meta.ingredients.map((ingredient) => (
              <tr
                key={ingredient.ingredientName}
                className="bg-white border-b hover:bg-gray-50 "
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {ingredient.ingredientName}
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
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
      <p className="font-bold text-2xl text-green-850">Recipe</p>
      <div className="pl-5">
        <ol className="relative border-l border-gray-200 ">
          {recipe[
            Object.keys(recipe)[Object.keys(recipe).length - 1]
          ].instructions.map((instruction) => (
            <li key={instruction.stepNumber} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white">
                <p>{instruction.stepNumber}</p>
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-xl">
                  {instruction.stageTitle}
                </h3>
                <div className="flex items-center gap-3">
                  <div className="bg-green-400 text-black py-1 px-4 rounded-full font-medium w-fit text-xs">
                    <p>{instruction.stepType}</p>
                  </div>
                  <div className="bg-green-400 text-black py-1 px-4 rounded-full font-medium w-fit text-xs flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>{instruction.time} min</p>
                  </div>
                </div>
                <p className="">{instruction.instruction}</p>
                <p className="font-semibold">
                  <span className="font-bold">Tool Needed</span>:{" "}
                  {instruction.tool}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="w-full mt-5 text-xl font-semibold text-green-850 text-center">
          Mission Complete ;)
        </p>
      </div>
    </div>
  );
}
