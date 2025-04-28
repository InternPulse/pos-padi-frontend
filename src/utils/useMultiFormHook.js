// $ This hook manages the logic for the multiStep form back and forth navigation

import { useGlobalContext } from "@/context/useGlobalContext";
import React from "react";
import useFormValidation from "./useFormValidation";
import AdminSignUpForm from "@/components/form/signupforms/AdminSignUpForm";
import { PinInputForm } from "@/components/form/signupforms/PinInputForm";
import AdminSignUpBizInfoForm from "@/components/form/signupforms/AdminSignUpBizInfoForm";

export const useMultiFormHook = (formType) => {
  const { currentStepIndex, setCurrentStepIndex } = useGlobalContext();
  const { errors } = useFormValidation();

  // $ multiform steps
  const adminSteps = [AdminSignUpForm, AdminSignUpBizInfoForm, PinInputForm];
  // const forgotPasswordSteps = [ForgotPasswordForm, PinInputForm];

  const formSteps = formType === "forgotPassword" ? "" : adminSteps;

  const totalSteps = formSteps.length;

  const Next = () => {
    if (Object.keys(errors).length > 0) return;
    setCurrentStepIndex((i) => {
      if (i >= totalSteps - 1) return i;
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
    step: formSteps[currentStepIndex]
      ? React.createElement(formSteps[currentStepIndex])
      : null,
    Next,
    Back,
    totalSteps,
    isLastStep: currentStepIndex === totalSteps - 1,
  };
};

export default useMultiFormHook;
