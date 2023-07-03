"use client";
import React from "react";

export const Main = (props: { recipeDetails: any; servings: any }) => {
  const { recipeDetails, servings } = props;
  return (
    <div>
      {recipeDetails && (
        <div className="bg-slate-200 border-white rounded-2xl p-4 m-3">
          <h1 className="text-3xl font-bold">{recipeDetails.Name}</h1>
          <p className="my-2 text-xl">
            {recipeDetails.Recipe_Meta.description}
          </p>
          {/*  */}
          <div className="bg-green-400 border-white rounded-2xl p-4 m-3">
            <h2 className="mt-3 text-2xl font-semibold">Recipe Meta</h2>
            <p className="mb-2">
              Information Source: {recipeDetails.Recipe_Meta.informationSource}
            </p>
            <p className="mb-2">
              Aliases: {recipeDetails.Recipe_Meta.Aliases.join(", ")}
            </p>
            <p className="mb-2">
              Carbon Footprint: {recipeDetails.Recipe_Meta.carbonFootprint}
            </p>
            <p className="mb-2">
              Calories: {recipeDetails.Recipe_Meta.calories} {" 🔥"}
            </p>
            <p className="mb-2">
              Popular Region:{" "}
              {recipeDetails.Recipe_Meta.popularRegion.join(", ")}
            </p>
            <p className="mb-2">
              Nutrition Fact:{" "}
              {recipeDetails.Recipe_Meta.nutritionFact.join(", ")}
            </p>
            <p className="mb-2">
              Rating: {recipeDetails.Recipe_Meta.rating.starRating}
              {" ⭐"}
            </p>
            <p className="mb-2">
              No of Reviews: {recipeDetails.Recipe_Meta.rating.noOfReviews}
              {" 👍"}
            </p>
          </div>
          {/*  */}
          <div className="bg-green-400 border-white rounded-2xl p-4 m-3">
            <h2 className="font-semibold mt-3 text-2xl">Interest Tags</h2>
            <p className="mb-2">
              Tags: {recipeDetails.Interest_Tags.tags.join(", ")}
            </p>
            <h2 className="font-semibold mt-3 text-2xl">Diet Tags</h2>
            <p className="mb-2">{recipeDetails.Diet_Tags.join(", ")}</p>
          </div>
          <div className="bg-green-400 border-white rounded-2xl p-4 m-3">
            <h2 className="font-semibold mt-3 text-2xl">Cooking Meta</h2>
            <h3 className="mt-2 text-xl font-medium">Ingredients</h3>
            <p className="flex flex-col">
              {recipeDetails.Cooking_Meta.ingredients.map(
                (
                  ingredient: {
                    ingredientName: string;
                    ingredientID: string;
                  },
                  index: number
                ) => (
                  <span key={index}>
                    <li className="ml-5">{ingredient.ingredientName}, </li>
                  </span>
                )
              )}
            </p>
            <p className="mb-2">
              Tools: {recipeDetails.Cooking_Meta.tools.join(", ")}
            </p>
            <p className="mb-2">
              Cook Time: {recipeDetails.Cooking_Meta.cookTime}
            </p>
            <p className="mb-2">
              Prep Time: {recipeDetails.Cooking_Meta.prepTime}
            </p>
            <p className="mb-2">
              Difficulty: {recipeDetails.Cooking_Meta.difficulty}
            </p>
            <p className="mb-2">Steps: {recipeDetails.Cooking_Meta.steps}</p>
          </div>
          <div className="bg-green-400 border-white rounded-2xl p-4 m-3">
            <h2 className="mt-3 text-2xl font-semibold">Serve {servings}</h2>
            {servings && (
              <p>
                Recipe Source: {recipeDetails[`Serve_${servings}`].recipeSource}
              </p>
            )}
            {servings && (
              <p>
                Recipe Last Updated:{" "}
                {recipeDetails[`Serve_${servings}`].lastUpdated}
              </p>
            )}
          </div>
          <div className="bg-green-400 border-white rounded-2xl p-4 m-3">
            <h3 className="mt-2 text-2xl font-bold">Instructions</h3>
            {servings &&
              recipeDetails[`Serve_${servings}`].instructions.map(
                (
                  instruction: {
                    stepNumber: number;
                    stageTitle: string;
                    stepType: string;
                    instruction: string;
                    time: number;
                    tool: string;
                  },
                  index: number
                ) => (
                  <div className="my-3 " key={index}>
                    <h4 className="text-xl font-semibold">
                      {instruction.stepNumber}.{" "}
                      <span className="text-2xl font-bold">
                        {instruction.stageTitle}
                      </span>
                    </h4>
                    <p className="mb-2">
                      Step Type:{" "}
                      <span className="font-medium">
                        {instruction.stepType}
                      </span>
                    </p>
                    <p className="mb-2">
                      Instruction:{" "}
                      <span className="font-medium">
                        {instruction.instruction}
                      </span>
                    </p>
                    <p className="mb-2">
                      Time:{" "}
                      <span className="font-medium">
                        {instruction.time} minutes
                      </span>
                    </p>
                    <p className="mb-2">
                      Tool:{" "}
                      <span className="font-medium">{instruction.tool}</span>
                    </p>
                  </div>
                )
              )}
          </div>
        </div>
      )}
    </div>
  );
};
