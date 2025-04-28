export const getPasswordRequirements = (value) => {
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
    hasUppercase: /[A-Z]/.test(value),
  };
};
