"use client";

import { useEffect, useState } from "react";
import { RecipeDetail, RecipeModal } from "@/app/components";
import { useRecipe } from "@/context/RecipeProvider";
import { BiLoaderAlt } from "react-icons/bi";

export type DetailPagePropType = {
  params: {
    recipeDetails: [recipeId: string, servings: string];
  };
};

export default function RecipeDetailPage({ params }: DetailPagePropType) {
  const [recipeId, servings] = params.recipeDetails;
  const [showRecipe, setShowRecipe] = useState(false);
  const { loading, fetchRecipe, setRecipeId, setServings } = useRecipe();

  useEffect(() => {
    const paramRecipeId = parseInt(recipeId);
    const paramServings = parseInt(servings);

    fetchRecipe(paramRecipeId, paramServings);
    setRecipeId(paramRecipeId);
    setServings(paramServings);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleRecipeModal(show: boolean) {
    setShowRecipe(show);
  }

  return (
    <main className="flex justify-center">
      {showRecipe && <RecipeModal toggleRecipeModal={toggleRecipeModal} />}

      {loading ? (
        <div className="bg-green-100 shadow-md p-4 rounded-lg my-6 mx-4 w-full max-w-4xl h-80 flex items-center justify-center">
          <BiLoaderAlt className="text-3xl fill-green-500 animate-spin" />
        </div>
      ) : (
        <RecipeDetail toggleRecipeModal={toggleRecipeModal} />
      )}
    </main>
  );
}
