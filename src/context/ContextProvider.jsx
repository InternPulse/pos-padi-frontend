import { useState } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "./GlobalContext";

export const GlobalProvider = ({ children }) => {
  // $ Signup Form State
  const [authFormErrors, setAuthFormErrors] = useState({});
  const [formData, setFormData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progressStatus, setProgressStatus] = useState(0);
  // form validity tracking for each step
  const [formStepsValidity, setFormStepsValidity] = useState({});
  // Track whether each form step has been submitted successfully
  const [formStepsSubmitted, setFormStepsSubmitted] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        authFormErrors,
        setAuthFormErrors,
        formData,
        setFormData,
        currentStepIndex,
        setCurrentStepIndex,
        progressStatus,
        setProgressStatus,
        formStepsValidity,
        setFormStepsValidity,
        formStepsSubmitted,
        setFormStepsSubmitted,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
