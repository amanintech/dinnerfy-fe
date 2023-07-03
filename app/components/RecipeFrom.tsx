"use client";

import { useState } from "react";
import RecipeDetailPage from "./RecipeDeatils";

const RecipePage = () => {
  const [recipeId, setRecipeId] = useState("");
  const [servings, setServings] = useState("");
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const handleRecipeIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipeId(e.target.value);
  };

  const handleServingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServings(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          RecipeID: recipeId,
          Servings: servings,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recipe");
      }

      const data = await response.json();

      setRecipe(data);
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while fetching the recipe.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="min-h-screen  flex items-center justify-center py-8 ">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl text-center text-gray-800 mb-6">Dinnerfy</h1>
          <div></div>
          <form
            className=" px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="recipeId"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Recipe ID
              </label>
              <input
                type="number"
                id="recipeId"
                className="w-full  text-gray-700 border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Enter recipe ID"
                value={recipeId}
                onChange={handleRecipeIdChange}
                
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="servings"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Servings
              </label>
              <input
                type="number"
                id="servings"
                className="w-full  text-gray-700 border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Enter number of servings"
                value={servings}
                onChange={handleServingsChange}
               
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? "Loading..." : "Get Recipe"}
            </button>
          </form>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        </div>
      </div>

      <RecipeDetailPage recipe={recipe} servingSize={servings} />
    </>
  );
};

export default RecipePage;
