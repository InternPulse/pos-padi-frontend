// $ Custom Component to render form fields by passing in the props for each field
import { useState } from "react";
import { Field, Input, InputGroup, Flex, Badge } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { PasswordInput } from "@/components/ui/password-input";

const FormInputField = ({
  label,
  name,
  placeholder,
  error,
  disabled,
  type,
  icon: Icon,
  registerField,
  checkPasswordRequirements = null,
}) => {
  // $ Track individual password requirements
  const [passwordRequirements, setPasswordRequirements] = useState({
    minLength: false,
    hasNumber: false,
    hasSpecial: false,
  });

  // $ Get the register props only if registerField is a function
  const registerProps =
    typeof registerField === "function"
      ? registerField(name, {
          onChange: (e) => {
            // $ For password field, update requirements on change
            if (
              type === "password" &&
              typeof checkPasswordRequirements === "function"
            ) {
              const newRequirements = checkPasswordRequirements(e.target.value);
              setPasswordRequirements(newRequirements);
            }
          },
        })
      : {};

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
        {type === "password" ? (
          <PasswordInput
            fontSize={{ base: "0.75rem" }}
            id={name}
            placeholder={placeholder}
            _placeholder={{ color: "#C4C4C4" }}
            {...registerProps}
          />
        ) : (
          <Input
            fontSize={{ base: "0.75rem" }}
            id={name}
            placeholder={placeholder}
            type={type ?? "text"}
            disabled={disabled}
            _placeholder={{ color: "#C4C4C4" }}
            p={1}
            textTransform={name === "email" ? "normal" : "capitalize"}
            {...registerProps}
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
            p="2px 5px 2px 5px"
            fontSize="inherit"
            rounded="15px"
            outline={
              passwordRequirements.minLength
                ? "1px solid rgba(2, 177, 79, 1)"
                : "gray.300"
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
            p="2px 5px 2px 5px"
            fontSize="inherit"
            rounded="15px"
            outline={
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
            p="2px 5px 2px 5px"
            fontSize="inherit"
            rounded="15px"
            outline={
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
        <Field.ErrorText
          visibility={error ? "visible" : "hidden"}
          color={"red.500"}
          py="0"
        >
          {error.message}
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
  error: PropTypes.object,
  checkPasswordRequirements: PropTypes.func,
  registerField: PropTypes.func,
};

export default FormInputField;
