import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { RecipeID, Servings } = req.body;

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

    res.status(response.status).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
