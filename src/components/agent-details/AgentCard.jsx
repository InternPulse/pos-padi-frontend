import {
  Flex,
  Grid,
  GridItem,
  Text,
  Switch,
  Link,
  Avatar,
  Clipboard,
} from "@chakra-ui/react";
import AgentDeactivation from "../alt/transactions/Effects/AgentDeactivation";

function AgentCard({ agent }) {
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
        <Avatar.Fallback name={`${agent.firstName} ${agent.lastName}`}/>
        <Avatar.Image src={agent.imageURL} />
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
          <Text>{agent.firstName}</Text>
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
          <Text>{agent.lastName}</Text>
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
          <Text>{agent.email}</Text>
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
          <Text>{agent.phone}</Text>
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
          <Text>{agent.dateCreated}</Text>
        </GridItem>
      </Grid>
      <Grid templateColumns="auto 1fr" width={"100%"} p="6px">
        <GridItem>
          <Text
            fontWeight="medium"
            color={{ base: "gray.400", _dark: "gray.300" }}
          >
            Agent's ID
          </Text>
        </GridItem>
        <GridItem textAlign="right">
          <Text>{agent.agentId}</Text>
        </GridItem>
      </Grid>
      <Grid templateColumns="auto 1fr" width={"100%"} p="6px">
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
            <Clipboard.Root value={agent.terminalId}>
              <Clipboard.Trigger asChild>
                <Link as="span" color="green.fg" textStyle="sm">
                  <Clipboard.Indicator />
                  <Clipboard.ValueText />
                </Link>
              </Clipboard.Trigger>
            </Clipboard.Root>
          </Text>
        </GridItem>
      </Grid>
      <Grid templateColumns="auto 1fr" width={"100%"} p="6px">
        <GridItem>
          <Text
            fontWeight="medium"
            color={{ base: "gray.400", _dark: "gray.300" }}
          >
            Activate Agent
          </Text>
        </GridItem>
        <GridItem textAlign="right">
          <AgentDeactivation isActive={agent.isActive} />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default AgentCard