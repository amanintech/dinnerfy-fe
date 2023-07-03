"use client";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./ui/Input";
import { FC } from "react";
import Image from "next/image";
import { Forms } from "@/types";

type Inputs = {
  RecipeID: number;
  Servings: number;
};


const Form: FC<Forms> = ({ setLoading, setResponse,setServings }) => {
  const fetchData = async (data: Inputs) => {
    let reqOptions = {
      url: "/api/recipes",
      method: "POST",
      data: data,
    };
    const response = await axios.request(reqOptions);
    setResponse(await response.data);
    setLoading(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    setResponse(null);
    setServings(data.Servings)
    fetchData(data);
  };

  return (
    <div className="flex justify-between flex-wrap-reverse sm:px-10" id="form">
      <div className="w-fit m-auto ">
        <h2 className="text-primary-light font-bold sm:text-3xl max-w-2xl max-[300px]:text-xs text-xl">
          Enter the RecipeID and Servings to get the Recipe
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 items-center mt-8"
        >
          <Input
            placeholder="RecipeID"
            register={register("RecipeID", { required: true })}
          />
          {errors.RecipeID && (
            <span className="text-primary inliine">Required field</span>
          )}
          <Input
            aria-placeholder="Servings"
            placeholder="Servings"
            register={register("Servings", { required: true })}
          />
          {errors.Servings && (
            <span className="text-primary inliine">Required field</span>
          )}
          <button
            type="submit"
            className="mt-4 text-xl bg-primary-light text-white sm:p-10 sm:py-5 px-6 py-3 sm:rounded-2xl rounded-xl hover:scale-105 transition-all max-[300px]:text-sm "
            disabled={!!errors.RecipeID || !!errors.Servings}
          >
            Get Recipes
          </button>
        </form>
      </div>
      <Image
        alt="a guy filling his form"
        src="/form.svg"
        width={300}
        height={150}
        className="m-auto max-w-[50%]"
      />
    </div>
  );
};

export default Form;
