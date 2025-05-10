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
import { createDispute } from "@/backend-functions/dispute-api";
import { useNavigate } from "react-router-dom";

export default function DisputesForm({ data, store }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    ...data,
    status: "pending",
  });
  const [disputeFormStatus, setDisputeFormStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();

    if(!formData.id || !formData.bank || !formData.reason || !formData.accountNumber){ 
      alert('Please completely fill out dispute form')
      return 
    }

    const disputeData = {transaction_id: formData.id, bank_name: formData.bank, account_number: formData.accountNumber, reason: formData.reason}
    
    setDisputeFormStatus('Submitting...')

    try{

      const newDispute = await createDispute(disputeData)

      if(newDispute){
        setDisputeFormStatus('')
        navigate('/disputes')
      }
    }catch(error){
      console.log(error.message)
      setDisputeFormStatus(`Failed: ${error.message}`)
    }

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
          {disputeFormStatus && <Text textAlign={'center'} color={'green'} fontWeight={'medium'} textStyle={'sm'}>{disputeFormStatus}</Text>}
        </Flex>
      </Flex>
    </form>
  );
}
