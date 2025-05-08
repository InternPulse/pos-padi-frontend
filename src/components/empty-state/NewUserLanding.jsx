import { Button, ButtonGroup, EmptyState, VStack } from "@chakra-ui/react";
import Logo from "../header-nav-components/Logo";
import { NavLink } from "react-router-dom";

function NewUserLanding() {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <Logo />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>Start adding Agents</EmptyState.Title>
          <EmptyState.Description>
            Add a new agent to get started
          </EmptyState.Description>
        </VStack>
        <ButtonGroup>
          <NavLink to="/agents">
            <Button colorPalette={'green'}>Create an Agent</Button>
          </NavLink>
        </ButtonGroup>
      </EmptyState.Content>
    </EmptyState.Root>
  );
}

export default NewUserLanding;
