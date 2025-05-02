import {
  Field,
  Button,
  Input,
  Text,
  Flex,
  NativeSelect,
} from "@chakra-ui/react";
import { formatCurrency } from "@/components/alt/transactions/AltTransactions";
import banks from "../../../components/alt/transactions/Effects/banks.json";
import { useState } from "react";

export default function DisputesForm({ data, store }) {
  const [formData, setFormData] = useState({
    ...data,
    status: "pending",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
    // Handle POST/PUT request to disputes API

    

    store.setOpen(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction={"column"} width={"100%"}>
        <Text textAlign={"center"} fontWeight={"semibold"} textStyle={"xl"}>
          Dispute
        </Text>
        <Text textAlign={"center"} color={"gray.500"}>
          Input dispute details
        </Text>
        <Flex gap={4} direction={"column"} mt={6}>
          <Field.Root>
            <Field.Label>Transaction Type </Field.Label>
            <Input textTransform={"capitalize"} value={data.type} disabled />
          </Field.Root>
          <Field.Root>
            <Field.Label>Amount</Field.Label>
            <Input value={formatCurrency(data.amount)} disabled />
          </Field.Root>
          <Field.Root>
            <Field.Label>Reason</Field.Label>
            <NativeSelect.Root>
              <NativeSelect.Field
                onChange={(e) => {
                  setFormData({ ...formData, reason: e.target.value });
                }}
              >
                <option value="">Select Reason</option>
                <option value="declined">
                  Declined, But Customer Got Debited
                </option>
                <option value="fraud">Fraudulent Transaction</option>
                <option value="duplicate">Duplicate Transaction</option>
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Field.Root>
          <Field.Root>
            <Field.Label>Bank</Field.Label>
            <NativeSelect.Root>
              <NativeSelect.Field
                onChange={(e) => {
                  setFormData({ ...formData, bank: e.target.value });
                }}
              >
                <option value="">Select Bank</option>
                {Object.keys(banks).map((bank) => (
                  <option value={bank}>{bank}</option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Field.Root>
          <Field.Root>
            <Field.Label>Account Number</Field.Label>
            <Input
              onChange={(e) => {
                setFormData({ ...formData, accountNumber: e.target.value });
              }}
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>Account Name</Field.Label>
            <Input
              textTransform={"capitalize"}
              value={data.customer}
              disabled
            />
          </Field.Root>

          <Button type="submit" mt={4} colorPalette={"green"}>
            Raise Dispute
          </Button>
        </Flex>
      </Flex>
    </form>
  );
}
