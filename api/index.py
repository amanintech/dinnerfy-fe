import requests
from fastapi import FastAPI

app = FastAPI()

@app.get("/api/recipe")
def get_recipe(recipe_id: int, servings: int):
    url = "https://dinnerfy-ds-production.up.railway.app/recipe"
    payload = {"RecipeID": recipe_id, "Servings": servings}
    response = requests.post(url, json=payload)
    recipe_details = response.json()
    return recipe_details

