import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { PiCookingPotBold } from "react-icons/pi";
import { BiDish } from "react-icons/bi";

interface RecipeDetailPageProps {
  recipe: any;
  servingSize: string;
}

const RecipeDetailPage = (props: RecipeDetailPageProps) => {
  const { recipe, servingSize } = props;

  const [activeTab, setActiveTab] = useState("ingredients");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const size = `Serve_${servingSize}` || 0;

  return (
    <>
      <div>
        {recipe && (
          <div className="min-h-screen  flex items-center justify-center py-8  sm:p-10">
            <div className="container mx-auto py-8 rounded-2xl">
              <div className="max-w-3xl mx-auto bg-[#e2f6d6] shadow-md rounded-2xl p-6">
                <h2 className="text-3xl text-gray-800 font-bold mb-4 text-center">
                  {recipe.Name}
                </h2>

               

                <div className=" flex items-center justify-center mb-1 text-gray-500">
                  <div className="m-5 flex flex-col items-center text-2xl  ">
                    <PiCookingPotBold />
                    <p>{recipe.Cooking_Meta.cookTime}m</p>
                  </div>
                  <div className="m-5 flex flex-col items-center text-2xl">
                    <BiDish />
                    <p>{recipe.Cooking_Meta.prepTime}m</p>
                  </div>

                  <div className="m-5 flex flex-col items-center text-2xl">
                    <AiOutlineStar />
                    <p>
                      {recipe.Recipe_Meta.rating.starRating}(
                      {recipe.Recipe_Meta.rating.noOfReviews})
                    </p>
                  </div>
                </div>

                <div className=" flex items-center justify-center mb-1 ">
                  {recipe.Interest_Tags.tags.map((tag: any, index: number) => (
                    <div
                      key={index}
                      className="bg-[#F6EFF0] m-5 flex justify-center items-center text-sm p-3 rounded-md shadow-sm"
                    >
                      <p>{tag}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-900 mb-6 text-xl">
                  {recipe.Recipe_Meta.description}
                </p>

                <div className="mb-6 flex justify-center  rounded-xl p-2">
                  <button
                    className={`text-lg py-2 px-4 ${
                      activeTab === "ingredients"
                        ? "text-black bg-slate-100  font-semibold  p-3 rounded-md shadow-sm"
                        : "text-black"
                    }`}
                    onClick={() => handleTabChange("ingredients")}
                  >
                    Ingredients
                  </button>
                  <button
                    className={`text-lg py-2 px-4 ${
                      activeTab === "nutrition"
                        ? "text-black bg-slate-100  font-semibold  p-3 rounded-md shadow-sm"
                        : "text-black"
                    }`}
                    onClick={() => handleTabChange("nutrition")}
                  >
                    Nutrition Facts
                  </button>
                  <button
                    className={`text-lg py-2 px-4 ${
                      activeTab === "tools"
                        ? "text-black bg-slate-100  font-semibold  p-3 rounded-md shadow-sm"
                        : "text-black"
                    }`}
                    onClick={() => handleTabChange("tools")}
                  >
                    Tools
                  </button>
                  <button
                    className={`text-lg py-2 px-4 ${
                      activeTab === "instructions"
                        ? "text-black bg-slate-100  font-semibold  p-3 rounded-md shadow-sm "
                        : "text-black"
                    }`}
                    onClick={() => handleTabChange("instructions")}
                  >
                    Instructions
                  </button>
                </div>

                {activeTab === "ingredients" && (
                  <ul className="list-inside list-decimal  max-w-md">
                    {recipe.Cooking_Meta.ingredients.map((ingredient: any) => (
                      <li
                        key={ingredient.ingredientID}
                        className="text-black"
                      >
                        <span>{ingredient.ingredientName}</span>
                        {ingredient.optional && (
                          <span className="text-black">
                            (optional)
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "nutrition" && (
                  <ul className="list-decimal list-inside  max-w-md">
                    {recipe.Recipe_Meta.nutritionFact.map((fact: any) => (
                      <li key={fact} className="text-black">
                        {fact}
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "tools" && (
                  <ul className="list-decimal list-inside  max-w-md">
                    {recipe.Cooking_Meta.tools.map((tools: any) => (
                      <li key={tools} className="text-black">
                        {tools}
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "instructions" && (
                  <div className=" max-w-md">
                    <div className="mt-4">
                      <h2 className="text-lg font-bold">Instructions:</h2>
                      <ol className="list-decimal ml-6">
                        {recipe[size].instructions.map((instruction: any) => (
                          <li key={instruction.stepNumber} className="mb-4">
                            <h3 className="text-lg font-bold mb-2">
                              {instruction.stageTitle}
                            </h3>
                            <p>{instruction.instruction}</p>
                            <div className="flex mt-2">
                              <span className="mr-2">
                                Time: {instruction.time} mins
                              </span>
                              <span>Tools: {instruction.tool}</span>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RecipeDetailPage;
