// $ Custom Component to render form fields by passing in the propes for each field

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
}) => {
  return (
    <Field.Root invalid={!!error}>
      <Field.Label
        color={{ base: "gray.700", _dark: "gray.50/60" }}
        htmlFor={name}
        textTransform={"capitalize"}
      >
        {label}
      </Field.Label>
      <InputGroup startElement={Icon && <Icon />}>
        {name === "password" ? (
          <PasswordInput
            placeholder="Enter Password"
            onChange={onChange}
            name={name}
            value={value}
          />
        ) : name === "confirmPassword" ? (
          <PasswordInput
            placeholder="Confirm Password"
            onChange={onChange}
            name={name}
            value={value}
          />
        ) : (
          <Input
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            type={type || "text"}
            disabled={disabled}
            _placeholder={{ color: "inherit" }}
            value={value}
            p={1}
            textTransform={name === "email" ? "normal" : "capitalize"}
          />
        )}
      </InputGroup>
      {name === "password" && (
        <Flex gap={1}>
          <Badge p={1}>Min 8 characters</Badge>
          <Badge p={1}>1 Number</Badge>
          <Badge p={1}>Special Character</Badge>
        </Flex>
      )}
      {error && <Field.ErrorText color={"red.500"}>{error}</Field.ErrorText>}
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
};

export default FormInputField;
