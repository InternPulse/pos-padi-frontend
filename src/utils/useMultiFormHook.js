import { useGlobalContext } from "@/context/useGlobalContext";
import React from "react";
import useFormValidation from "./useFormValidation";
import AdminSignUpForm from "@/components/form/signupforms/AdminSignUpForm";
import { PinInputForm } from "@/components/form/signupforms/PinInputForm";
import AdminSignUpBizInfoForm from "@/components/form/signupforms/AdminSignUpBizInfoForm";

export const useMultiFormHook = () => {
  const { currentStepIndex, setCurrentStepIndex } = useGlobalContext();
  const { errors } = useFormValidation();

  const steps = [AdminSignUpForm, PinInputForm, AdminSignUpBizInfoForm];

  const totalSteps = steps.length;

  const Next = () => {
    if (Object.keys(errors).length > 0) return;
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  const Back = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  return {
    step: steps[currentStepIndex]
      ? React.createElement(steps[currentStepIndex])
      : null,
    steps,
    Next,
    Back,
    totalSteps,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

export default useMultiFormHook;
