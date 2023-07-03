import { useState } from "react";
import Button from "../button/Button";
import RadioButton from "../radioButton/RadioButton";
import { motion } from "framer-motion";

export default function Menu() {
  const [isCustom, setIsCustom] = useState(false);
  const [error, setError] = useState(false);
  const slide = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: "0",
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: {
      height: 0,
      x: "100vw",
    },
  };

  const handleSubmit = (e) => {
    if (isCustom === false && e.target.dish.value === "") {
      setError("Select a dish or input dish id");
      e.preventDefault();
    }

    var reg = /^\d+$/;
    var isNumber = reg.test(isCustom);
    if (isCustom !== false && isNumber === false) {
      setError("Enter a valid dish id");
      e.preventDefault();
    }
    if (e.target.serving.value === "") {
      setError("Select a serving size");
      e.preventDefault();
    }
  };

  return (
    <motion.div variants={slide} initial="hidden" animate="visible" exit="exit">
      <form
        onSubmit={(e) => handleSubmit(e)}
        action="/recipe"
        method="get"
        className="bg-green-150 rounded-3xl w-full max-w-3xl flex flex-col p-8 gap-6 lg:gap-10 items-start"
      >
        <div className="flex flex-col gap-3 w-full">
          <p className="text-2xl lg:text-4xl text-green-850 font-bold">
            Select Dish
          </p>
          <ul className="flex items-center justify-evenly lg:justify-between w-full flex-wrap gap-2">
            <RadioButton
              id="55"
              name="dish"
              value="55"
              disabled={isCustom}
              labelStyle="h-32 w-32 rounded-xl p-2 flex items-end bg-[url('/dishes/Seared.png')] bg-cover text-white hover:text-white/80"
            >
              <p>Seared Scallops</p>
            </RadioButton>
            <RadioButton
              id="56"
              name="dish"
              value="56"
              disabled={isCustom}
              labelStyle="h-32 w-32 rounded-xl p-2 flex items-end bg-[url('/dishes/tofy.png')] bg-cover text-white hover:text-white/80"
            >
              <p>Marinated Tofu</p>
            </RadioButton>
            <RadioButton
              id="59"
              name="dish"
              value="59"
              disabled={isCustom}
              labelStyle="h-32 w-32 rounded-xl p-2 flex items-end bg-[url('/dishes/noodles.png')] bg-cover text-white hover:text-white/80"
            >
              <p>Dragon Noodles</p>
            </RadioButton>
            <RadioButton
              id="58"
              name="dish"
              value="60"
              disabled={isCustom}
              labelStyle="h-32 w-32 rounded-xl p-2 flex items-end bg-[url('/dishes/chicken.png')] bg-cover text-white hover:text-white/80"
            >
              <p>Chicken Parmesan</p>
            </RadioButton>
          </ul>
          <div className="flex items-center">
            <div className="h-1 w-full bg-green-250/10 rounded-sm" />
            <p className="font-bold mx-3 text-green-850">OR</p>
            <div className="h-1 w-full bg-green-250/10 rounded-sm" />
          </div>
          <div>
            <label
              htmlFor="small-input"
              className="block mb-1 text-sm font-medium text-gray-900"
            >
              Enter Recipe Id
            </label>
            <input
              type="text"
              id="small-input"
              name={isCustom !== false ? "dish" : ""}
              onChange={(e) => setIsCustom(e.target.value)}
              className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-white outline-none focus:border-green-250"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <p className="text-2xl lg:text-4xl text-green-850 font-bold">
            Select Servings
          </p>
          <ul className="flex justify-evenly items-center">
            <RadioButton
              id="1"
              name="serving"
              value="1"
              labelStyle="h-8 w-8 text-lg flex justify-center items-center rounded-full"
            >
              <p>1</p>
            </RadioButton>
            <RadioButton
              id="2"
              name="serving"
              value="2"
              labelStyle="h-8 w-8 text-lg flex justify-center items-center rounded-full"
            >
              <p>2</p>
            </RadioButton>
            <RadioButton
              id="3"
              name="serving"
              value="3"
              labelStyle="h-8 w-8 text-lg flex justify-center items-center rounded-full"
            >
              <p>3</p>
            </RadioButton>
            <RadioButton
              id="4"
              name="serving"
              value="4"
              labelStyle="h-8 w-8 text-lg flex justify-center items-center rounded-full"
            >
              <p>4</p>
            </RadioButton>
            <RadioButton
              id="5"
              name="serving"
              value="5"
              labelStyle="h-8 w-8 text-lg flex justify-center items-center rounded-full"
            >
              <p>5</p>
            </RadioButton>
            <RadioButton
              id="6"
              name="serving"
              value="6"
              labelStyle="h-8 w-8 text-lg flex justify-center items-center rounded-full"
            >
              <p>6</p>
            </RadioButton>
          </ul>
        </div>
        {error ? (
          <p className="font-semibold text-red-500 text-center w-full">
            {error}
          </p>
        ) : null}
        <Button className="w-full hover:scale-105 text-lg" type="submit">
          Submit
        </Button>
      </form>
    </motion.div>
  );
}
