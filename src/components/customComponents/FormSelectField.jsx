"use client";
import PropTypes from "prop-types";
import { Field, Portal, Select, createListCollection } from "@chakra-ui/react";
import { Controller } from "react-hook-form";

const FormSelectField = ({
  error,
  placeholder,
  name,
  control,
  data,
  label,
}) => {
  return (
    <Field.Root invalid={!!error} width="100%">
      <Field.Label
        htmlFor={name}
        color={{ base: "#1A1A1A", _dark: "gray.50/60" }}
        textTransform={"capitalize"}
        fontSize={{ lg: "1rem" }}
      >
        {label}
      </Field.Label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select.Root
            name={field.name}
            value={field.value ? [field.value] : []}
            multiple={false}
            onValueChange={({ value }) => {
              field.onChange(value[0]);
              //   console.log(value[0]); //debug:
            }}
            onInteractOutside={() => field.onBlur()}
            collection={createListCollection({
              items: data,
            })}
          >
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText
                  placeholder={placeholder}
                  _placeholder={{ color: "#C4C4C4" }}
                  fontSize={{ base: "0.75rem" }}
                />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content color="gray.800" fontSize={{ base: "0.75rem" }}>
                  {data.map((item) => (
                    <Select.Item
                      item={item}
                      key={item.value}
                      fontSize={{ base: "0.75rem" }}
                    >
                      {item.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        )}
      />
      {error && (
        <Field.ErrorText color={"red.500"} py="0">
          {error.message}
        </Field.ErrorText>
      )}
    </Field.Root>
  );
};

FormSelectField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.object,
  registerField: PropTypes.func,
  control: PropTypes.object,
  data: PropTypes.array,
};

export default FormSelectField;
