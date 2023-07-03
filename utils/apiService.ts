import axios, { AxiosError } from "axios";
import RecipeType from "@/context/context.type";

  export type ServerError = {
    message: string;
  };

  export async function getReciepe(
    RecipeID: number,
    Servings: number
  ): Promise<RecipeType | ServerError> {
    try {
      const response = await axios.post("/recipe", {
        RecipeID,
        Servings,
      });
      console.log({data: response.data});
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }
      return { message: "something snapped!" };
    }
  }