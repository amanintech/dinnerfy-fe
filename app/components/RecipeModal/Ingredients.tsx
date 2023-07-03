import { CookingMetaType, IngredientsType } from "@/context/context.type";
import { getQuantityByServing } from "@/utils/numbersFunctions";
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
        Ingredients for serving size {serving}
      </h4>
      <ul className="list-inside list-disc flex flex-col gap-2 text-gray-800 my-2 mx-3 overflow-y-auto h-auto sm:max-h-72 max-h-96">
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
