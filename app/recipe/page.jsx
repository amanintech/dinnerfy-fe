// pages/recipe.js
//recipe form
"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faUsers } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Recipe = () => {
  const [recipeID, setRecipeID] = useState("");
  const [servings, setServings] = useState("");
  const [submitAttempted, setSubmitAttempted] = useState(false);

  //empty form submission check
  const isFormValid = recipeID.trim() !== "" && servings.trim() !== "";

  //framer motion
  const container = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-white">
      <div className="min-h-screen bg-[url('/bg.svg')] bg-no-repeat bg-center bg-fixed bg-cover flex items-center justify-center">
        <motion.div
          className="bg-green-150 rounded-3xl h-auto w-full max-w-3xl flex flex-col gap-6 p-8 lg:gap-10 items-center shadow-lg"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <p className="text-4xl lg:text-6xl text-green-900 font-bold">
            Enter Recipe Details
          </p>
          <div className="w-full">
            <div className="flex items-center mb-4 border rounded-lg overflow-hidden">
              <div className="px-4 py-2 bg-green-300">
                <FontAwesomeIcon
                  icon={faUtensils}
                  className="text-green-900 text-lg"
                />
              </div>
              <input
                className="w-full py-2 px-3 text-gray-950"
                id="recipeID"
                type="text"
                value={recipeID}
                onChange={(e) => setRecipeID(e.target.value)}
                required
                placeholder="Recipe ID"
              />
            </div>
            <div className="flex items-center mb-4 border rounded-lg overflow-hidden">
              <div className="px-3 py-2 bg-green-300">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-green-900 text-lg"
                />
              </div>
              <input
                className="w-full py-2 px-3 text-gray-950"
                id="servings"
                type="number"
                min="1"
                max="8"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                required
                placeholder="Servings"
              />
            </div>
            {submitAttempted && !isFormValid && (
              <p>Please fill out all fields.</p>
            )}
            <div className="flex justify-center">
              <Link
                href={{
                  pathname: "/recipeResult",
                  query: { dish: recipeID, serving: servings },
                }}
              >
                <button
                  className={`px-8 py-2 rounded-lg shadow-md transform transition-all ${
                    isFormValid
                      ? "bg-green-500 text-white hover:bg-green-600 hover:scale-105"
                      : "bg-green-300 text-gray-500 cursor-not-allowed"
                  }`}
                  onClick={() => setSubmitAttempted(true)}
                  disabled={!isFormValid}
                >
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Recipe;
