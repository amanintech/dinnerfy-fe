import React from "react";

type NutritionPropType = {
  Diet_Tags: string[];
  nutritionFact: string[];
};

export function Nutrition({ Diet_Tags, nutritionFact }: NutritionPropType) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-700 mt-1">
        Nutrition Facts
      </h4>
      <ul className="list-inside list-disc flex flex-col gap-2 text-gray-800 my-2 mx-3">
        {nutritionFact.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
      <div className="mt-4 mx-3">
        <ul className="flex flex-row flex-wrap gap-3 mt-4">
          {Diet_Tags.map((tag) => (
            <li
              key={tag}
              className="bg-gray-200 shadow-md rounded-md px-3 py-2 text-xs"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
