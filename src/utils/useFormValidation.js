import { useState, useCallback } from "react";

const useFormValidation = (formFields) => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isDirty, setIsDirty] = useState({}); // $ Track which fields have been touched

  // $ Main validation function - can be called anytime
  const validateForm = useCallback(
    (formData) => {
      const newErrors = {};

      formFields.forEach(({ name, type, error }) => {
        // $ Get the value without calling any methods on it yet
        const value = formData[name];

        // $ Skip validation for untouched fields during live validation
        if (!isDirty[name] && !formData._validateAll) {
          return;
        }

        // $ Check if value exists at all
        if (value === undefined || value === null) {
          newErrors[name] = error;
          return;
        }

        // $ Handle PIN input validation - special case for arrays
        if (type === "pin") {
          // % Check if it's an array
          if (!Array.isArray(value)) {
            newErrors[name] = error;
            return;
          }

          // % Check if it has 6 digits and none are empty
          if (value.length !== 6 || value.some((digit) => digit === "")) {
            newErrors[name] = error;
            return;
          }

          // % Make sure all values are numeric
          if (value.some((digit) => !/^\d$/.test(digit))) {
            newErrors[name] = "PIN must contain only numbers";
            return;
          }

          // % PIN is valid
          return;
        }

        // $ For string-based fields
        if (typeof value === "string") {
          const trimmedValue = value.trim();

          // $ Check if the trimmed value is empty
          if (trimmedValue === "") {
            newErrors[name] = error;
            return;
          }

          // $ Email validation using regex
          if (
            type === "email" &&
            !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(trimmedValue)
          ) {
            newErrors[name] = "Invalid email format";
          }

          // $ Password Validation
          if (type === "password") {
            const passwordRegex =
              /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]).{8,}$/;

            if (!passwordRegex.test(trimmedValue)) {
              newErrors[name] =
                "Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character";
            }
          }
        }
      });

      // $ Check if passwords match
      if (
        formData["password"] &&
        formData["confirmPassword"] &&
        formData["password"] !== formData["confirmPassword"]
      ) {
        newErrors["confirmPassword"] = "Passwords do not match";
      }

      setErrors(newErrors);
      const formIsValid = Object.keys(newErrors).length === 0;
      setIsValid(formIsValid);
      return formIsValid;
    },
    [formFields, isDirty]
  );

  // $ Return password validation requirements for a specific field (used to changed the badge colors)
  const getPasswordRequirements = useCallback((value) => {
    if (!value)
      return {
        minLength: false,
        hasNumber: false,
        hasSpecial: false,
      };

    return {
      minLength: value.length >= 8,
      hasNumber: /\d/.test(value),
      hasSpecial: /[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]/.test(value),
    };
  }, []);

  // $ Function to mark a field as dirty (touched)
  const markFieldAsDirty = useCallback((fieldName) => {
    setIsDirty((prev) => ({ ...prev, [fieldName]: true }));
  }, []);

  // $ Function to validate on submit - validates all fields regardless of dirty state
  const validate = useCallback(
    (formData) => {
      // $ Add a special flag to validate all fields regardless of dirty state
      return validateForm({ ...formData, _validateAll: true });
    },
    [validateForm]
  );

  // $ Function to validate a single field as it changes
  const validateField = useCallback(
    (formData, fieldName) => {
      // $ First mark the field as dirty
      markFieldAsDirty(fieldName);

      // $ Then validate the whole form which will now include this field
      validateForm(formData);
    },
    [markFieldAsDirty, validateForm]
  );

  return {
    validate, // % Use for final form submission
    validateField, // % Use for validating as user types
    errors, // % error object to check if there are any errors (No erros empty object)
    isValid, // % Overall form validity status
    isDirty, // % Which fields have been interacted with
    getPasswordRequirements, // % Function to check if a specific password requirement is met
  };
};

export default useFormValidation;
