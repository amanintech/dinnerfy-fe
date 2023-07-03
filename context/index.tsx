"use client";

import React, { createContext, useState } from "react";

interface Recipe {
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
}

interface IContext {
  recipeDetails: Recipe | null;
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  recipeId: number;
  setRecipeId: (recipeId: number) => void;
  servings: number;
  setServings: (servings: number) => void;
}

export const RecipeContext = createContext<IContext>({} as IContext);

const RecipeProvider = ({ children }: { children: React.ReactNode }) => {
  const [recipeDetails, setRecipeDetails] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recipeId, setRecipeId] = useState<number>(0);
  const [servings, setServings] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipeID = Number(recipeId);

    setIsLoading(true);

    fetch(`/api/recipe?recipe_id=${recipeID}&servings=${Number(servings)}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipeDetails(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  return (
    <RecipeContext.Provider
      value={{
        recipeDetails,
        isLoading,
        handleSubmit,
        recipeId,
        setRecipeId,
        servings,
        setServings,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
