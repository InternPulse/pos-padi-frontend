// $ Custom Component to render form fields by passing in the propes for each field
import { useState, useEffect } from "react";
import { Field, Input, InputGroup, Flex, Badge } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { PasswordInput } from "../ui/password-input";

const FormInputField = ({
  label,
  name,
  placeholder,
  error,
  disabled,
  type,
  icon: Icon,
  onChange,
  value,
  checkPasswordRequirements = null,
}) => {
  // $ Track individual password requirements
  const [passwordRequirements, setPasswordRequirements] = useState({
    minLength: false,
    hasNumber: false,
    hasSpecial: false,
  });

  // $ Check password requirements when the value changes
  // Check password requirements when the value changes
  useEffect(() => {
    // Only run for password fields and when the function is provided
    if (
      type === "password" &&
      typeof checkPasswordRequirements === "function"
    ) {
      const requirements = checkPasswordRequirements(value);
      // console.log("Password Requirements: ", requirements);
      // $ Ensure this function only runs when the state actually changed to avoid infinite loop using the useEffect hook.
      setPasswordRequirements((prev) => {
        if (
          prev.minLength !== requirements.minLength ||
          prev.hasNumber !== requirements.hasNumber ||
          prev.hasSpecial !== requirements.hasSpecial ||
          prev.hasUppercase !== requirements.hasUppercase
        ) {
          return requirements;
        }
        return prev; // No change, don't update
      });
    }
    // console.log("Input Value: ", value); //debug:
    // console.log("CheckPasswordRequirements: ", checkPasswordRequirements); //debug:
  }, [value, type, checkPasswordRequirements]);

  return (
    <Field.Root invalid={!!error}>
      <Field.Label
        color={{ base: "#1A1A1A", _dark: "gray.50/60" }}
        htmlFor={name}
        textTransform={"capitalize"}
        fontSize={{ lg: "1rem" }}
      >
        {label}
      </Field.Label>
      <InputGroup startElement={Icon && <Icon style={{ color: "#C4C4C4" }} />}>
        {name === "password" ? (
          <PasswordInput
            placeholder="Enter Password"
            onChange={onChange}
            name={name}
            value={value ?? ""}
          />
        ) : name === "confirmPassword" ? (
          <PasswordInput
            placeholder="Confirm Password"
            onChange={onChange}
            name={name}
            value={value ?? ""}
          />
        ) : (
          <Input
            fontSize={{ base: "0.75rem" }}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            type={type || "text"}
            disabled={disabled}
            _placeholder={{ color: "#C4C4C4" }}
            value={value ?? ""}
            p={1}
            textTransform={name === "email" ? "normal" : "capitalize"}
          />
        )}
      </InputGroup>
      {name === "password" && (
        <Flex
          gap={{ base: "0.5rem", md: "0.625rem" }}
          color="#626C7A"
          mt="0.625rem"
          fontSize={{ base: "0.5rem" }}
        >
          <Badge
            p="5px 10px 5px 10px"
            fontSize="inherit"
            rounded="8px"
            border={
              passwordRequirements.minLength
                ? "1px solid rgba(2, 177, 79, 1)"
                : "inherit"
            }
            color={
              passwordRequirements.minLength ? "rgba(2, 177, 79, 1)" : "inherit"
            }
            bgColor={
              passwordRequirements.minLength
                ? "white"
                : "rgba(196, 196, 196, 0.2)"
            }
          >
            Min 8 characters
          </Badge>
          <Badge
            p="5px 10px 5px 10px"
            fontSize="inherit"
            rounded="8px"
            border={
              passwordRequirements.hasNumber
                ? "1px solid rgba(2, 177, 79, 1)"
                : "inherit"
            }
            color={
              passwordRequirements.hasNumber ? "rgba(2, 177, 79, 1)" : "inherit"
            }
            bgColor={
              passwordRequirements.hasNumber
                ? "white"
                : "rgba(196, 196, 196, 0.2)"
            }
          >
            1 Number
          </Badge>
          <Badge
            p="5px 10px 5px 10px"
            fontSize="inherit"
            rounded="8px"
            border={
              passwordRequirements.hasSpecial
                ? "1px solid rgba(2, 177, 79, 1)"
                : "inherit"
            }
            color={
              passwordRequirements.hasSpecial
                ? "rgba(2, 177, 79, 1)"
                : "inherit"
            }
            bgColor={
              passwordRequirements.hasSpecial
                ? "white"
                : "rgba(196, 196, 196, 0.2)"
            }
          >
            Special Character
          </Badge>
        </Flex>
      )}
      {error && (
        <Field.ErrorText color={"red.500"} py="0">
          {error}
        </Field.ErrorText>
      )}
    </Field.Root>
  );
};

FormInputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.elementType,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func,
  checkPasswordRequirements: PropTypes.func,
};

export default FormInputField;
