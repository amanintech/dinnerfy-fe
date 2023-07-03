import { NextResponse } from "next/server";

export async function POST(request) {
  const { RecipeID, Servings } = await request.json();

  try {
    const response = await fetch(
      "https://dinnerfy-ds-production.up.railway.app/recipe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          RecipeID,
          Servings,
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
