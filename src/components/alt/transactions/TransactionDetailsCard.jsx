import React from 'react'
import { Button, Center, Container, Flex, HStack, Image, Stack, Text, VStack, Clipboard, Link } from "@chakra-ui/react"
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
            <Text fontSize="16px" fontWeight="400" color={{base: "gray.600", _dark: "gray.400"
                        }}>Transaction Reference</Text>
            <Clipboard.Root value={data.reference}>
            <Clipboard.Trigger asChild>
                <Link as="span" color="green.fg" textStyle="sm">
                <Clipboard.Indicator />
                <Clipboard.ValueText />
                </Link>
            </Clipboard.Trigger>
            </Clipboard.Root>
        </VStack>
        
        <Container px="24px" py="16px">
        <Flex gap="7">
            

                <Stack>
                    <Container px="8px" py="2px">
                        <Text color={{base: "gray.600", _dark: "gray.400"
                        }} fontSize="12px">Transaction Date</Text>
                        <Text fontWeight="500" color={{base: "#021230", _dark: "white"
                        }}>{data.dateTime}</Text>
                    </Container>
                    <Container px="8px" py="2px">
                        <Text color={{base: "gray.600", _dark: "gray.400"
                        }} fontSize="12px">Customer's Name</Text>
                        <Text fontWeight="500" color={{base: "#021230", _dark: "white"
                        }}>{data.customer}</Text>
                    </Container>
                </Stack>
                <Stack>
                    <Container px="8px" py="2px">
                        <Text color={{base: "gray.600", _dark: "gray.400"
                        }}fontSize="12px">Transaction Type</Text>
                        <Text fontWeight="500" color={{base: "#021230", _dark: "white"
                        }}>{data.type}</Text>
                    </Container>
                    <Container px="8px" py="2px">
                        <Text color={{base: "gray.600", _dark: "gray.400"
                        }} fontSize="12px">Agent</Text>
                        <Text fontWeight="500" color={{base: "#021230", _dark: "white"
                        }}>{data.agent}</Text>
                    </Container>
                </Stack>
        </Flex>
        </Container>
        
            <HStack p="10px">

                <Text fontSize="12px" color={{base: "gray.600", _dark: "gray.400"
                        }}>Status</Text>
                <Text py="4px" px="10px" bgColor="#0B9D091A" borderRadius="100px" fontSize="10px" fontWeight="400" color="green">Successful</Text>
            </HStack>
        
        <Button width="100%" p="20px" bgColor="#02B14F" rounded="lg">
            <Text fontSize="14px" color="white">
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
