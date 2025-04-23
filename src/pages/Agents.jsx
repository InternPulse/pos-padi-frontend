import AgentProfile from "@/components/AgentProfile";
import ConfirmationModal from "@/components/ConfirmationModal";

const Agents = () => {
  return (
    <div className="p-6">
      <AgentProfile
        profileImage="./../assets/agents/Quin.png"
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
    </div>
  );
};

export default Agents;
