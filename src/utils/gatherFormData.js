// Function to gather the form data

export const gatherFormData = (formElements) => {
  const formData = {};

  formElements.forEach((element) => {
    const { name, value } = element;
    if (name) {
      formData[name] = value;
    }
  });

  return formData;
};
