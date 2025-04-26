
import EntityDetails from "@/components/agent-details/EntityDetails";
import { rawAgents } from "@/components/transactions/agentsMockData";
import { useParams } from "react-router-dom";


function AgentDetails() {
  const agentID = useParams().id
  const agent = rawAgents.find(agent => agent.agentId == agentID);

  return (

    <EntityDetails entity={agent} entityType={'agent'} />
    
  );
}

export default AgentDetails;
