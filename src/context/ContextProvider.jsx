import { useState } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "./GlobalContext";

export const GlobalProvider = ({ children }) => {
  // $ Signup Form State
  const [authFormErrors, setAuthFormErrors] = useState({});
  const [formData, setFormData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progressStatus, setProgressStatus] = useState(0);

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
