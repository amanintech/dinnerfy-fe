"use client";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  RecipeID: number;
  Servings: number;
};

const Form = () => {

  const fetchData = async (data: Inputs) => {

    const dataResponse = JSON.stringify({
      "RecipeID": 60,
      "Servings": 3
    });
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("POST", "https://dinnerfy-ds-production.up.railway.app/recipe");
    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("User-Agent", "Thunder Client (https://www.thunderclient.com)");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("", "*");
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.send(dataResponse);
    
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => fetchData(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center"
    >
      <input
        placeholder="RecipeID"
        defaultValue="RecipeId"
        {...register("RecipeID", { required: true })}
      />
      {errors.RecipeID && <span>{errors.RecipeID.type}</span>}
      <input
        placeholder="Servings"
        {...register("Servings", { required: true })}
      />
      {errors.Servings && <span>This field is required</span>}
      <button type="submit" className="mt-4">
        Submit
      </button>
    </form>
  );
};

export default Form;
