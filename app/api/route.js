//calling the API
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { RecipeID, Servings } = await request.json();

  try {
    const response = await axios.post(
      "https://dinnerfy-ds-production.up.railway.app/recipe",
      {
        RecipeID,
        Servings,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;

    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
