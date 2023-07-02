from fastapi import FastAPI
import json
import requests
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    RecipeID: int
    Servings: int
    

@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}

@app.post("/api/recipes")
def fetch_recipe(item: Item):

    reqUrl = "https://dinnerfy-ds-production.up.railway.app/recipe"

    headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json" 
    }

    payload = json.dumps({
    "RecipeID": item.RecipeID,
    "Servings": item.Servings
    })

    response = requests.request("POST", reqUrl, data=payload,  headers=headersList)
    details = response.json()
    return details