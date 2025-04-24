import { useState } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "./GlobalContext";

export const GlobalProvider = ({ children }) => {
  const [authFormErrors, setAuthFormErrors] = useState({});
  const [formData, setFormData] = useState({});

  return (
    <GlobalContext.Provider
      value={{ authFormErrors, setAuthFormErrors, formData, setFormData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
