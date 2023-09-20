import React, { useReducer } from "react";
import style from "./style.module.css";
import ImageOne from "public/reducer/reducer-one.png";
import ImageTwo from "public/reducer/reducer-two.png";
import Image from "next/image";

const stepReducer =
  (length: number) => (stepIndex: number, action: string | number) => {
    if (action === "previous") {
      const prevStepIndex = Math.max(0, stepIndex - 1);
      return prevStepIndex;
    } else if (action === "next") {
      const nextStepIndex = Math.min(length - 1, stepIndex + 1);
      return nextStepIndex;
    } else if (
      typeof action === "number" &&
      action >= 0 &&
      action <= length - 1
    ) {
      return action;
    }
    return stepIndex;
  };

export function Steps({ steps }: { steps: string[] }) {
  const [stepIndex, dispatchStep] = useReducer(stepReducer(steps.length), 0);
  const currentStep = steps[stepIndex];

  const goToPreviousStep = () => {
    dispatchStep("previous");
  };

  const goToNextStep = () => {
    dispatchStep("next");
  };

  return (
    <div className={style.flex__box}>
      <div className={style.steps__box}>
        <div className={style.content__box}>
          <span className={style.steps__title}>Step {stepIndex + 1}</span>
          <div>
            <p className={style.steps__content}>{currentStep}</p>
          </div>
        </div>
        <div className={style.button__group}>
          <button
            className={style.button}
            onClick={goToPreviousStep}
            disabled={stepIndex === 0}
          >
            Previous
          </button>
          <button
            className={style.button}
            onClick={goToNextStep}
            disabled={stepIndex === steps.length - 1}
          >
            Next
          </button>
        </div>
      </div>
      <div className={style.image__box}>
        <Image src={ImageOne} width={400} height={300} alt="code" />
        <Image src={ImageTwo} width={400} height={300} alt="code" />
      </div>
    </div>
  );
}
