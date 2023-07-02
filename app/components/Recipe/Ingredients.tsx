import { getQuantityByServing } from "@/utils/numbersFunctions";
import { CookingMetaType, IngredientsType } from "@/utils/recipe.type";
import React from "react";

type IngredientsPropType = {
  serving: number;
  Cooking_Meta: CookingMetaType;
};
export function Ingredients({ serving, Cooking_Meta }: IngredientsPropType) {
  const { ingredients } = Cooking_Meta;
  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-700 mt-1">
        Ingredients for {serving} serving
      </h4>
      <ul className="list-inside list-disc flex flex-col gap-2 text-gray-800 my-2 mx-3">
        {ingredients.map(
          ({
            ingredientID,
            ingredientName,
            quantity,
            unit,
          }: IngredientsType) => (
            <li key={ingredientID}>
              {ingredientName} - {getQuantityByServing(quantity, serving)}{" "}
              {unit}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
