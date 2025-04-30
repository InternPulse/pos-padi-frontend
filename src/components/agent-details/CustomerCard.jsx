import {
  Flex,
  Grid,
  GridItem,
  Text,
  // Switch,
  // Link,
  Avatar,
  // Clipboard,
} from "@chakra-ui/react";

import React from 'react'

function CustomerCard({ customer }) {
  return (
    <Flex
      direction={"column"}
      align={"start"}
      bgColor={{ base: "white", _dark: "gray.800" }}
      p="4"
      minWidth={{ base: "100%", md: "360px" }}
      gap={3}
      rounded={'xl'}
      boxShadow={'0 0 2px lightgrey'}
    >
      <Avatar.Root shape="full" size="2xl" my={3}>
        <Avatar.Fallback name={`${customer.firstName} ${customer.lastName}`}/>
        <Avatar.Image src={customer.imageURL} />
      </Avatar.Root>
      <Grid templateColumns="auto 1fr" width={"100%"} p="6px">
        <GridItem>
          <Text
            fontWeight="medium"
            color={{ base: "gray.400", _dark: "gray.300" }}
          >
            First Name
          </Text>
        </GridItem>
        <GridItem textAlign="right">
          <Text>{customer.firstName}</Text>
        </GridItem>
      </Grid>
      <Grid templateColumns="auto 1fr" width={"100%"} p="6px">
        <GridItem>
          <Text
            fontWeight="medium"
            color={{ base: "gray.400", _dark: "gray.300" }}
          >
            Last Name
          </Text>
        </GridItem>
        <GridItem textAlign="right">
          <Text>{customer.lastName}</Text>
        </GridItem>
      </Grid>
      <Grid templateColumns="auto 1fr" width={"100%"} p="6px">
        <GridItem>
          <Text
            fontWeight="medium"
            color={{ base: "gray.400", _dark: "gray.300" }}
          >
            Email
          </Text>
        </GridItem>
        <GridItem textAlign="right" maxW={"300px"} overflow={"hidden"}>
          <Text>{customer.email}</Text>
        </GridItem>
      </Grid>
      <Grid templateColumns="auto 1fr" width={"100%"} p="6px">
        <GridItem>
          <Text
            fontWeight="medium"
            color={{ base: "gray.400", _dark: "gray.300" }}
          >
            Phone No
          </Text>
        </GridItem>
        <GridItem textAlign="right">
          <Text>{customer.phone}</Text>
        </GridItem>
      </Grid>
      <Grid templateColumns="auto 1fr" width={"100%"} p="6px">
        <GridItem>
          <Text
            fontWeight="medium"
            color={{ base: "gray.400", _dark: "gray.300" }}
          >
            Date Created
          </Text>
        </GridItem>
        <GridItem textAlign="right">
          <Text>{customer.dateCreated}</Text>
        </GridItem>
      </Grid>
      <Grid templateColumns="auto 1fr" width={"100%"} p="6px">
        <GridItem>
          <Text
            fontWeight="medium"
            color={{ base: "gray.400", _dark: "gray.300" }}
          >
            Customer's ID
          </Text>
        </GridItem>
        <GridItem textAlign="right">
          <Text>{customer.customerId}</Text>
        </GridItem>
      </Grid>
      {/* <Grid templateColumns="auto 1fr" width={"100%"} p="6px">
        <GridItem>
          <Text
            fontWeight="medium"
            color={{ base: "gray.400", _dark: "gray.300" }}
          >
            Terminal
          </Text>
        </GridItem>
        <GridItem textAlign="right">
          <Text>
            <Clipboard.Root value={customer.terminalId}>
              <Clipboard.Trigger asChild>
                <Link as="span" color="green.fg" textStyle="sm">
                  <Clipboard.Indicator />
                  <Clipboard.ValueText />
                </Link>
              </Clipboard.Trigger>
            </Clipboard.Root>
          </Text>
        </GridItem>
      </Grid> */}
      <Grid templateColumns="auto 1fr" width={"100%"} p="6px">
        <GridItem>
          <Text
            fontWeight="medium"
            color={{ base: "gray.400", _dark: "gray.300" }}
          >
            Status
          </Text>
        </GridItem>
        <GridItem textAlign="right">
          {/* <Switch.Root colorPalette="green" checked={customer.isActive} >
            <Switch.HiddenInput />
            <Switch.Control boxShadow={'0 0 2px lightgrey'} />
          </Switch.Root> */}
          <Text color={customer.isActive ? 'green.600' : 'gray.600'} fontWeight={'medium'}>

          { customer.isActive ? 'Active' : 'Inactive' }
          </Text>
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default CustomerCard