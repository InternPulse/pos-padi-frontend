import { Button, ButtonGroup, EmptyState, VStack } from "@chakra-ui/react";
import Logo from "../header-nav-components/Logo";
import { NavLink } from "react-router-dom";

function NewAgentLanding() {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <Logo />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>Nothing to display</EmptyState.Title>
          <EmptyState.Description>
            Add a new customer to get started
          </EmptyState.Description>
        </VStack>
        <ButtonGroup>
          <NavLink to="/customers">
            <Button colorPalette={'green'}>Create a Customer</Button>
          </NavLink>
        </ButtonGroup>
      </EmptyState.Content>
    </EmptyState.Root>
  );
}

export default NewAgentLanding