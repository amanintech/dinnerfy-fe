import RecipeType from "./recipe.type";

export const recipeData: RecipeType = {
  RecipeID: 60,
  Name: "Chicken Parmesan",
  Recipe_Meta: {
    informationSource: "Allrecipes.com",
    description:
      "A classic Italian-American dish made with breaded chicken cutlets, tomato sauce, and melted mozzarella cheese. Served with pasta or a side salad, it's a hearty and satisfying meal.",
    Aliases: ["Chicken Parm", "Parmesan Chicken"],
    carbonFootprint: 2.5,
    calories: 550,
    popularRegion: ["United States", "Italy"],
    nutritionFact: [
      "Protein - 45g",
      "Fat - 25g",
      "Carbohydrates - 35g",
      "Sodium - 1200mg",
    ],
    rating: {
      starRating: 4.5,
      noOfReviews: 1000,
    },
  },
  Interest_Tags: {
    tags: [
      "🍝 Italian",
      "🍅 Tomato Sauce",
      "🧀 Cheesy",
      "🌶️ Spicy",
      "🍴 Comfort Food",
    ],
    confidence: [0.9, 0.7, 0.6, 0.6, 0.5],
  },
  Diet_Tags: [
    "🥛 Dairy Free",
    "🥬 Low FODMAP",
    "💪🏻 Low Carb",
    "🥙 Organic",
    "🥗 Vegetarian",
    "🌾 Whole grain",
    "🕌 Halal",
    "✡️ Kosher",
  ],
  Cooking_Meta: {
    ingredientsID: [
      "Chicken_Breast",
      "Salt",
      "Pepper",
      "Breadcrumbs",
      "Egg",
      "Flour",
      "Olive_Oil",
      "Mozzarella_Cheese",
      "Parmesan_Cheese",
      "Tomato_Sauce",
    ],
    ingredients: [
      {
        ingredientName: "Chicken Breast",
        ingredientID: "Chicken_Breast",
        quantity: [
          {
            "1": "2",
          },
          {
            "2": "4",
          },
          {
            "3": "6",
          },
          {
            "4": "8",
          },
          {
            "5": "10",
          },
          {
            "6": "12",
          },
        ],
        unit: "pieces",
        optional: false,
      },
      {
        ingredientName: "Salt",
        ingredientID: "Salt",
        quantity: [
          {
            "1": "1/4",
          },
          {
            "2": "1/2",
          },
          {
            "3": "3/4",
          },
          {
            "4": "1",
          },
          {
            "5": "1 1/4",
          },
          {
            "6": "1 1/2",
          },
        ],
        unit: "teaspoon",
        optional: false,
      },
      {
        ingredientName: "Pepper",
        ingredientID: "Pepper",
        quantity: [
          {
            "1": "1/4",
          },
          {
            "2": "1/2",
          },
          {
            "3": "3/4",
          },
          {
            "4": "1",
          },
          {
            "5": "1 1/4",
          },
          {
            "6": "1 1/2",
          },
        ],
        unit: "teaspoon",
        optional: false,
      },
      {
        ingredientName: "Breadcrumbs",
        ingredientID: "Breadcrumbs",
        quantity: [
          {
            "1": "1/2",
          },
          {
            "2": "1",
          },
          {
            "3": "1 1/2",
          },
          {
            "4": "2",
          },
          {
            "5": "2 1/2",
          },
          {
            "6": "3",
          },
        ],
        unit: "cup",
        optional: false,
      },
      {
        ingredientName: "Egg",
        ingredientID: "Egg",
        quantity: [
          {
            "1": "1",
          },
          {
            "2": "2",
          },
          {
            "3": "3",
          },
          {
            "4": "4",
          },
          {
            "5": "5",
          },
          {
            "6": "6",
          },
        ],
        unit: "pieces",
        optional: false,
      },
      {
        ingredientName: "Flour",
        ingredientID: "Flour",
        quantity: [
          {
            "1": "1/2",
          },
          {
            "2": "1",
          },
          {
            "3": "1 1/2",
          },
          {
            "4": "2",
          },
          {
            "5": "2 1/2",
          },
          {
            "6": "3",
          },
        ],
        unit: "cup",
        optional: false,
      },
      {
        ingredientName: "Olive Oil",
        ingredientID: "Olive_Oil",
        quantity: [
          {
            "1": "1/4",
          },
          {
            "2": "1/2",
          },
          {
            "3": "3/4",
          },
          {
            "4": "1",
          },
          {
            "5": "1 1/4",
          },
          {
            "6": "1 1/2",
          },
        ],
        unit: "cup",
        optional: false,
      },
      {
        ingredientName: "Mozzarella Cheese",
        ingredientID: "Mozzarella_Cheese",
        quantity: [
          {
            "1": "1/2",
          },
          {
            "2": "1",
          },
          {
            "3": "1 1/2",
          },
          {
            "4": "2",
          },
          {
            "5": "2 1/2",
          },
          {
            "6": "3",
          },
        ],
        unit: "cup",
        optional: false,
      },
      {
        ingredientName: "Parmesan Cheese",
        ingredientID: "Parmesan_Cheese",
        quantity: [
          {
            "1": "1/4",
          },
          {
            "2": "1/2",
          },
          {
            "3": "3/4",
          },
          {
            "4": "1",
          },
          {
            "5": "1 1/4",
          },
          {
            "6": "1 1/2",
          },
        ],
        unit: "cup",
        optional: false,
      },
      {
        ingredientName: "Tomato Sauce",
        ingredientID: "Tomato_Sauce",
        quantity: [
          {
            "1": "1/2",
          },
          {
            "2": "1",
          },
          {
            "3": "1 1/2",
          },
          {
            "4": "2",
          },
          {
            "5": "2 1/2",
          },
          {
            "6": "3",
          },
        ],
        unit: "cup",
        optional: false,
      },
    ],
    tools: ["Mixing_Bowl", "Frying_Pan", "Baking_Dish"],
    cookTime: 30,
    prepTime: 20,
    difficulty: "Medium",
    steps: 6,
  },
  Serve_3: {
    recipeSource: "Allrecipes.com",
    lastUpdated: "2021-09-01",
    instructions: [
      {
        stepNumber: 1,
        stageTitle: "Preparation",
        stepType: "prep",
        instruction: "Preheat oven to 375 degrees F (190 degrees C).",
        time: 5,
        tool: "oven",
      },
      {
        stepNumber: 2,
        stageTitle: "Preparation",
        stepType: "prep",
        instruction:
          "Place chicken breasts between two sheets of waxed paper and pound to 1/4 inch thickness.",
        time: 10,
        tool: "meat mallet",
      },
      {
        stepNumber: 3,
        stageTitle: "Preparation",
        stepType: "prep",
        instruction:
          "In a shallow dish, mix together bread crumbs, 1/2 cup Parmesan cheese, and dried basil.",
        time: 5,
        tool: "shallow dish",
      },
      {
        stepNumber: 4,
        stageTitle: "Preparation",
        stepType: "prep",
        instruction:
          "In another shallow dish, beat together egg, water, salt, and black pepper.",
        time: 5,
        tool: "shallow dish",
      },
      {
        stepNumber: 5,
        stageTitle: "Cooking",
        stepType: "cook",
        instruction:
          "Dip chicken in egg mixture, then in crumb mixture to coat.",
        time: 10,
        tool: "shallow dish",
      },
      {
        stepNumber: 6,
        stageTitle: "Cooking",
        stepType: "cook",
        instruction:
          "In a large skillet, heat oil over medium-high heat. Add chicken and cook for 2 to 3 minutes on each side, or until golden brown.",
        time: 10,
        tool: "large skillet",
      },
      {
        stepNumber: 7,
        stageTitle: "Cooking",
        stepType: "cook",
        instruction:
          "Transfer chicken to a baking dish. Spoon marinara sauce over chicken and sprinkle with remaining Parmesan cheese.",
        time: 5,
        tool: "baking dish",
      },
      {
        stepNumber: 8,
        stageTitle: "Cooking",
        stepType: "cook",
        instruction:
          "Bake in preheated oven for 25 minutes, or until chicken is cooked through and cheese is melted and bubbly.",
        time: 25,
        tool: "oven",
      },
      {
        stepNumber: 9,
        stageTitle: "Serving",
        stepType: "serve",
        instruction: "Serve hot with pasta or a side salad.",
        time: 0,
        tool: "",
      },
    ],
  },
};