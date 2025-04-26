import { Container, Grid, GridItem, Image, Text, Switch, Link, Clipboard } from "@chakra-ui/react";
import Quin from "@/assets/agents/agent-quin.png"

function AgentDetails() {

  const agent = {
        profileImage: Quin,
        firstName: "Quin",
        lastName: "Darlington",
        email: "meetdarlingono@gmail.com",
        phone: "09155334727",
        dateCreated: "April 18, 2025",
        agentId: "PADI48305",
        terminalId: "VDKJNKR12",
        isActive: true,
  }
 
  
  return (
    <Container bgColor="white" p="2" width="360px">
          <Image src={agent.profileImage} my="7px"/>
          <Grid templateColumns="auto 1fr" p="6px">
            <GridItem >
              <Text>
              First Name
              </Text>
            </GridItem>
            <GridItem textAlign="right">
              <Text>{agent.firstName}</Text>
            </GridItem>
          </Grid>
          <Grid templateColumns="auto 1fr" p="6px">
            <GridItem >
              <Text>
              Last Name
              </Text>
            </GridItem>
            <GridItem textAlign="right">
              <Text>{agent.lastName}</Text>
            </GridItem>
          </Grid>
          <Grid templateColumns="auto 1fr" p="6px">
            <GridItem >
              <Text>
              Email
              </Text>
            </GridItem>
            <GridItem textAlign="right">
              <Text>{agent.email}</Text>
            </GridItem>
          </Grid>
          <Grid templateColumns="auto 1fr" p="6px">
            <GridItem >
              <Text>
              Phone No
              </Text>
            </GridItem>
            <GridItem textAlign="right">
              <Text>{agent.phone}</Text>
            </GridItem>
          </Grid>
          <Grid templateColumns="auto 1fr" p="6px">
            <GridItem >
              <Text>
              Date Created
              </Text>
            </GridItem>
            <GridItem textAlign="right">
              <Text>{agent.dateCreated}</Text>
            </GridItem>
          </Grid>
          <Grid templateColumns="auto 1fr" p="6px">
            <GridItem >
              <Text>
              Agent's ID
              </Text>
            </GridItem>
            <GridItem textAlign="right">
              <Text>{agent.agentId}</Text>
            </GridItem>
          </Grid>
          <Grid templateColumns="auto 1fr" p="6px">
            <GridItem >
              <Text>
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
          <Grid templateColumns="auto 1fr" p="6px">
            <GridItem >
              <Text>
              Activate Agent
              </Text>
            </GridItem>
            <GridItem textAlign="right">
            <Switch.Root colorPalette="green">
              <Switch.HiddenInput />
              <Switch.Control />

            </Switch.Root>
            </GridItem>
          </Grid>
    </Container>
  )
}

export default AgentDetails;
