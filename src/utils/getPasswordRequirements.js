export const getPasswordRequirements = (value) => {
  // console.log("password value:", value); //debug:
  if (!value)
    return {
      minLength: false,
      hasNumber: false,
      hasSpecial: false,
      hasUpperCase: false,
    };

  return {
    minLength: value.length >= 8,
    hasNumber: /\d/.test(value),
    hasSpecial: /[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]/.test(value),
    hasUpperCase: /[A-Z]/.test(value),
  };
};
