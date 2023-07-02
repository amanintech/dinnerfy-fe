import axios from "axios"

export async function getReciepe() {
  try {
    const response = await axios.post("/recipe", { RecipeID: 60, Servings: 3 })
    console.log({ response })
  } catch (error) {
    console.log({ error })
  }
}