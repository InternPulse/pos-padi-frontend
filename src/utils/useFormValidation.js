import { useState, useCallback } from "react";

const useFormValidation = (formFields) => {
  const [errors, setErrors] = useState({});

  const validate = useCallback(
    (formData) => {
      const newErrors = {};

      formFields.forEach(({ name, type, error }) => {
        const value = formData[name]?.trim();

        // $ Input field validation, check  if a value exist
        if (!value) {
          newErrors[name] = error;
          return;
        }

        // $ Email validation using regex
        if (
          type === "email" &&
          !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
        ) {
          newErrors[name] = "Invalid email format";
        }

        // $ Password Validation
        if (type === "password") {
          const passwordRegex =
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]).{8,}$/;
          if (!passwordRegex.test(value)) {
            newErrors[name] =
              "Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character";
          }
        }
      });

      // $ Check if the passwords match
      if (
        formData["password"] &&
        formData["confirm password"] &&
        formData["password"] !== formData["confirm password"]
      ) {
        newErrors["confirm password"] = "Passwords do not match";
      }

      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
    },
    [formFields]
  );

  return { validate, errors };
};

export default useFormValidation;
