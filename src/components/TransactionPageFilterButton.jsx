import React from 'react'
import { Box, NativeSelect, Flex, Input, InputGroup } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi';

export const TransactionPageFilterButton = ({
  statusOptions,
  agentOptions,
  searchValue,
  statusValue,
  agentValue,
  onSearchChange,
  onStatusChange,
  onAgentChange
}) => {
  return (
    <Box>
      <Flex spaceX={2}>
        <InputGroup startElement={<FiSearch/>}>
          <Input 
            width={"max-content"}
            placeholder='Search by Reference'
            borderRadius={'lg'}
            value={searchValue}
            onChange={onSearchChange}
          />
        </InputGroup>

        {/* Status option */}
        <NativeSelect.Root size="lg" width="100%">
          <NativeSelect.Field 
            borderRadius='lg' 
            border='1px solid gray.500' 
            color={"gray.400"}
            value={statusValue}
            onChange={onStatusChange}
          >
            <option value="">Status</option>
            {statusOptions.map((status, index) => (
              <option key={index} value={status}>{status}</option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>

        {/* Agent option - hidden on mobile, visible on tablet and desktop */}
        <NativeSelect.Root 
          size="lg" 
          width={{ base: "0", md: "100%" }}
          display={{ base: "none", md: "block" }}
        >
          <NativeSelect.Field 
            borderRadius='lg' 
            border='1px solid gray.500' 
            color={"gray.400"}
            value={agentValue}
            onChange={onAgentChange}
          >
            <option value="">Agent</option>
            {agentOptions.map((agent, index) => (
              <option key={index} value={agent}>{agent}</option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Flex>
    </Box>
  );
}

export default TransactionPageFilterButton;