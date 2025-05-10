import { NativeSelect, Field } from "@chakra-ui/react";

function TransactionStatus({ value, onChange }) {
  const status = [
    { label: "Successful", value: "successful" },
    { label: "Failed", value: "failed" },
  ];

  return (

      <Field.Root>
        <Field.Label>Transaction Status</Field.Label>
        <NativeSelect.Root>
          <NativeSelect.Field
            id="status"
            name="status"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="" disabled>
              Choose transaction status
            </option>
            {status.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Field.Root>
  );
}

export default TransactionStatus