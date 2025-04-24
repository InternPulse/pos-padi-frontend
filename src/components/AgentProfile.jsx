
import { Copy } from "lucide-react";
import { useState } from "react";
// import ProfileImage from "../assets/agents/Frame 1618868968.png";
import { Card, Container, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Switch, Link, Clipboard } from "@chakra-ui/react"

const AgentProfile = ({firstName, profileImage, lastName, email, phone, dateCreated, agentId, terminalId, isActive}) => {
  
  const agentDetails = {
    firstName, lastName, email, phone, dateCreated, agentId, terminalId,
  }

  const tableRow = ["First Name", "Last Name", "Email", "Phone No", "Date Created", "Agent's ID", "Terminal", "Activate Agent"] 

 
  return (
    <Container bgColor="white" p="2" width="360px">
          <Image src={profileImage} my="7px"/>
          <Grid templateColumns="auto 1fr" p="6px">
            <GridItem >
              <Text>
              First Name
              </Text>
            </GridItem>
            <GridItem textAlign="right">
              <Text>{firstName}</Text>
            </GridItem>
          </Grid>
          <Grid templateColumns="auto 1fr" p="6px">
            <GridItem >
              <Text>
              Last Name
              </Text>
            </GridItem>
            <GridItem textAlign="right">
              <Text>{lastName}</Text>
            </GridItem>
          </Grid>
          <Grid templateColumns="auto 1fr" p="6px">
            <GridItem >
              <Text>
              Email
              </Text>
            </GridItem>
            <GridItem textAlign="right">
              <Text>{email}</Text>
            </GridItem>
          </Grid>
          <Grid templateColumns="auto 1fr" p="6px">
            <GridItem >
              <Text>
              Phone No
              </Text>
            </GridItem>
            <GridItem textAlign="right">
              <Text>{phone}</Text>
            </GridItem>
          </Grid>
          <Grid templateColumns="auto 1fr" p="6px">
            <GridItem >
              <Text>
              Date Created
              </Text>
            </GridItem>
            <GridItem textAlign="right">
              <Text>{dateCreated}</Text>
            </GridItem>
          </Grid>
          <Grid templateColumns="auto 1fr" p="6px">
            <GridItem >
              <Text>
              Agent's ID
              </Text>
            </GridItem>
            <GridItem textAlign="right">
              <Text>{agentId}</Text>
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
              <Clipboard.Root value={terminalId}>
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
 
      {/* <Grid templateColumns="auto 1fr" p="5px">
        <GridItem >
          <Text>
            First Name
          </Text>
        </GridItem>
        <GridItem textAlign="right">
          <Text>Quinn</Text>
        </GridItem>
      </Grid>
      <Grid templateColumns="auto 1fr" p="5px">
        <GridItem>
        <Text>
          Last Name
        </Text>
        </GridItem>
        <GridItem textAlign="right">
        <Text>
          Darlington
        </Text>
          </GridItem>
      </Grid>
      <Grid templateColumns="auto 1fr" p="5px">
        <GridItem>
        <Text>
          Email
        </Text>
        </GridItem>
        <GridItem textAlign="right">
        <Text>
          meetdarlingono@gmail.com
        </Text>
        </GridItem>
      </Grid>
      <Grid templateColumns="auto 1fr" p="5px">
        <GridItem>
        <Text p="5px">
          Phone No
        </Text>
        </GridItem>
        <GridItem textAlign="right">Quinn</GridItem>
      </Grid>
      <Grid templateColumns="auto 1fr" p="5px">
        <GridItem>First Name</GridItem>
        <GridItem textAlign="right">Quinn</GridItem>
      </Grid>
      <Grid templateColumns="auto 1fr" p="5px">
        <GridItem>First Name</GridItem>
        <GridItem textAlign="right">Quinn</GridItem>
      </Grid>
      <Grid templateColumns="auto 1fr" p="5px">
        <GridItem>First Name</GridItem>
        <GridItem textAlign="right">Quinn</GridItem>
      </Grid>
      <Grid templateColumns="auto 1fr" p="5px">
        <GridItem>
          First Name
          <Text>
          meetdarlingono@gmail.com
        </Text>  
        </GridItem>
        <GridItem textAlign="right">Quinn</GridItem>
      </Grid>
         */}
      
    </Container>
  );
};


export default AgentProfile;
