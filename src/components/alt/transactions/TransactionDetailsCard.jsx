import React from 'react'
import { Button, Center, Container, Flex, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa6";
import logo from "../../../assets/logo-lg.png"
import check from "../../../assets/transac-check.png"
import copy from "../../../assets/copy-icon.png"




const data = {
    reference: "HDKJNKR12",
    amount: 30000.0,
    customer: "John Smith",
    type: "Withdrawal",
    agent: "Quin Darlington",
    dateTime: "Feb 14, 2025 10:48:00 AM",
    status: "successful",
  }

const TransactionDetailsCard = () => {
  return (
    <VStack>
        <VStack gap="3">

            <Image src={check} />
            <Text fontSize="24px" fontWeight="600">₦{data.amount}</Text>
            <Text fontSize="16px" fontWeight="400" color="gray.600">Transaction Reference</Text>
            <Text color="gray.600" fontSize="16px" fontWeight="400">
                <HStack>

                {data.reference}
                <Button variant="plain">
                    <FaRegCopy color='#0BA5EC'/>
                </Button>
                </HStack>
            </Text>
        </VStack>
        
        <Container px="24px" py="16px">
        <Flex gap="7">
            

                <Stack>
                    <Container px="8px" py="2px">
                        <Text color="gray.600" fontSize="12px">Transaction Date</Text>
                        <Text fontWeight="500" color="#021230">{data.dateTime}</Text>
                    </Container>
                    <Container px="8px" py="2px">
                        <Text color="gray.600" fontSize="12px">Customer's Name</Text>
                        <Text fontWeight="500" color="#021230">{data.customer}</Text>
                    </Container>
                </Stack>
                <Stack>
                    <Container px="8px" py="2px">
                        <Text color="gray.600" fontSize="12px">Transaction Type</Text>
                        <Text fontWeight="500" color="#021230">{data.type}</Text>
                    </Container>
                    <Container px="8px" py="2px">
                        <Text color="gray.600" fontSize="12px">Agent</Text>
                        <Text fontWeight="500" color="#021230">{data.agent}</Text>
                    </Container>
                </Stack>
        </Flex>
        </Container>
        
            <HStack p="10px">

                <Text fontSize="12px" color="gray.600">Status</Text>
                <Text py="4px" px="10px" bgColor="#0B9D091A" borderRadius="100px" fontSize="10px" fontWeight="400" color="green">Successful</Text>
            </HStack>
        
        <Button width="100%" p="20px" bgColor="#02B14F" rounded="lg">
            <Text fontSize="14px">
                Download Receipt
            </Text>
        </Button>
        <Button width="100%" p="20px" variant="outline" rounded="lg">
            <Text fontSize="14px" color="#626C7A">
                Raise Dispute
            </Text>
        </Button>
        
            
        
        
        
    </VStack>
  )
}

export default TransactionDetailsCard
