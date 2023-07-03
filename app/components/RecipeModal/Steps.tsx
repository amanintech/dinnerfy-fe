import { ServeType } from "@/context/context.type";
import React, { useState } from "react";
import { FiClock } from "react-icons/fi";

type StepPropType = {
  Serve: ServeType | undefined;
};

export function Steps({ Serve }: StepPropType) {
  const [step, setStep] = useState(0);
  const { instructions } = Serve || {};
  const { instruction, stageTitle, stepNumber, time, tool } =
    instructions![step];

  function changeStep(type: string) {
    if (type === "next") {
      setStep((s) => s + 1);
    }

    if (type === "back") {
      setStep((s) => s - 1);
    }
  }
  return (
    <div>
      <div className="flex items-end gap-4">
        <h4 className="text-xl font-semibold text-gray-700">
          Step {stepNumber} / {instructions?.length}
        </h4>
        <div className="flex items-center gap-1 bg-gray-200 shadow-md py-1 px-2 rounded-md mt-2 w-fit">
          <FiClock className="text-xl" />
          <span className="text-xs">{time} mins</span>
        </div>
      </div>
      <div className="overflow-y-auto h-auto sm:max-h-72 max-h-96 mt-2">
        <p>{instruction}</p>
        <div className="mt-0.5 text-gray-900">Tools: Oven</div>
        <p className="text-sm text-gray-700 mt-0.5">
          #{stageTitle.toLowerCase()}
        </p>
      </div>

      <div className="flex items-center justify-between gap-3 mt-4">
        <button
          onClick={() => changeStep("back")}
          className={`text-sm py-1 px-3 rounded-md border-2 border-green-500 text-green-500 font-semibold hover:shadow-md ${
            step === 0 ? "invisible" : ""
          }`}
        >
          Back
        </button>
        <button
          onClick={() => changeStep("next")}
          className={`text-sm py-1 px-3 rounded-md border-2 border-green-500 text-green-500 font-semibold hover:shadow-md ${
            step + 1 === instructions?.length ? "invisible" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
