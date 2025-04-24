import AgentProfile from "@/components/AgentProfile";
import ConfirmationModal from "@/components/ConfirmationModal";
import { Container } from "@chakra-ui/react";
import Quin from "@/assets/agents/agent-quin.png"

const Agents = () => {
  return (
    // <Container>
    //   <AgentProfile />
    // </Container>
    <Container>
      {/* <AgentProfile /> */}
      <AgentProfile
        profileImage={Quin}
        firstName="Quin"
        lastName="Darlington"
        email="meetdarlingono@gmail.com"
        phone="09155334727"
        dateCreated="April 18, 2025"
        agentId="PADI48305"
        terminalId="VDKJNKR12"
        isActive={true}
      />
      <ConfirmationModal />
    </Container>
  );
};

export default Agents;
