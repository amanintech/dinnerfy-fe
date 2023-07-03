"use client";

import { getReciepe } from "@/utils";
import React, { ReactNode, createContext, useContext, useState } from "react";
import RecipeType, { RecipeContextType } from "./context.type";

const RecipeContext = createContext({} as RecipeContextType);

export function RecipeProvider({ children }: { children: ReactNode }) {
  const [recipeId, setRecipeId] = useState(1);
  const [servings, setServings] = useState(2);
  const [recipeData, setRecipeData] = useState<RecipeType>({} as RecipeType);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchRecipe(recipeId: number, servings: number) {
    setLoading(true);
    try {
      const data = await getReciepe(recipeId, servings);
      if ("RecipeID" in data) {
        setRecipeData(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage("error");
      setLoading(false);
    }
  }

  return (
    <RecipeContext.Provider
      value={{
        recipeId,
        setRecipeId,
        servings,
        setServings,
        recipeData,
        setRecipeData,
        errorMessage,
        fetchRecipe,
        loading,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export const useRecipe = () => useContext(RecipeContext);
