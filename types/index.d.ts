export interface Response {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  response: responseData;
  setResponse: React.Dispatch<React.SetStateAction<responseData>>;
  servings: number;
}

export interface Forms {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setResponse: React.Dispatch<React.SetStateAction<responseData>>;
  setServings: React.Dispatch<React.SetStateAction<number>>;
}

export type responseData = {
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
    ingredients: ingredients[];
    tools: string[];
    cookTime: number;
    prepTime: number;
    difficulty: string;
    steps: number;
  };
  "Serve_1"?: {
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
  "Serve_2"?: {
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
  "Serve_3"?: {
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
  "Serve_4"?: {
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
  "Serve_5"?: {
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
  "Serve_6"?: {
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
} | null;


export type serveType = {
  recipeSource: string;
  lastUpdated: string;
  instructions: serveInstructions[]
};

export type serveInstructions= {
  stepNumber: number;
  stageTitle: string;
  stepType: string;
  instruction: string;
  time: number;
  tool: string;
};

export type ingredients={
  ingredientName: string;
  ingredientID: string;
  quantity: [
    {
      "1": string;
    },
    {
      "2": string;
    },
    {
      "3": string;
    },
    {
      "4": string;
    },
    {
      "5": string;
    },
    {
      "6": string;
    }
  ];
  unit: string;
  optional: boolean;
}