import { Dispatch, SetStateAction } from "react";

export type RecipeContextType = {
    recipeId: number;
    setRecipeId: Dispatch<SetStateAction<number>>;
    servings: number;
    setServings: Dispatch<SetStateAction<number>>;
    recipeData: RecipeType;
    setRecipeData: Dispatch<SetStateAction<RecipeType>>;
    errorMessage: string;
    fetchRecipe: (recipeId: number, servings: number) => Promise<void>;
    loading: boolean
}

export type RecipeMetaType = {
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
    }
}

export type QuantityType = { "1": string; } | { "2": string; } | { "3": string; } | { "4": string; } | { "5": string; } | { "6": string; };


export type IngredientsType = {
    ingredientName: string;
    ingredientID: string;
    quantity: QuantityType[];
    unit: string,
    optional: boolean,
}

export type CookingMetaType = {
    ingredientsID: string[];
    ingredients: IngredientsType[];
    tools: string[];
    cookTime: number;
    prepTime: number;
    difficulty: string;
    steps: number;
}

export type ServeType = {
    recipeSource: string;
    lastUpdated: string;
    instructions: InstructionsType[]

}

export type InstructionsType = {
    stepNumber: number,
    stageTitle: string,
    stepType: string,
    instruction: string,
    time: number,
    tool: string,
}


type RecipeType = {
    RecipeID: number;
    Name: string;
    Recipe_Meta: RecipeMetaType;
    Interest_Tags: {
        tags: string[];
        confidence: number[];
    },
    Diet_Tags: string[];
    Cooking_Meta: CookingMetaType;
    Serve_1?: ServeType;
    Serve_2?: ServeType;
    Serve_3?: ServeType;
    Serve_4?: ServeType;
    Serve_5?: ServeType;
    Serve_6?: ServeType;

} 

export default RecipeType