// AgentProfile.jsx
import { Copy } from "lucide-react";
import { useState } from "react";
import ProfileImage from "../assets/agents/agent-quin.png";

const AgentProfile = ({
  firstName,
  lastName,
  email,
  phone,
  dateCreated,
  agentId,
  terminalId,
  isActive,
}) => {
  const [active, setActive] = useState(isActive);
  const [showModal, setShowModal] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(terminalId);
  };

  const handleToggle = () => {
    if (active) {
      setShowModal(true); // trying to deactivate
    } else {
      setActive(true); // just activate directly
    }
  };

  const confirmDeactivation = () => {
    setActive(false);
    setShowModal(false);
  };

  const cancelDeactivation = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="w-[380px] max-w-full min-h-[475px] bg-white border border-gray-200 rounded-[10px] p-[40px] flex flex-col gap-8 shadow-sm relative">
        {/* Profile Section */}
        <div className="flex items-start">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-[80px] h-[80px] rounded-full border border-gray-300 object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-6 text-[14px] text-gray-700 leading-[1.8] w-[340px] ml-6">
          <InfoRow
            label="First Name"
            value={firstName}
          />
          <InfoRow
            label="Last Name"
            value={lastName}
          />
          <InfoRow
            label="Email"
            value={email}
          />
          <InfoRow
            label="Phone No"
            value={phone}
          />
          <InfoRow
            label="Date Created"
            value={dateCreated}
          />
          <InfoRow
            label="Agent’s ID"
            value={agentId}
          />

          {/* Terminal */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Terminal</span>
            <span className="flex items-center text-[#02B14F] font-medium">
              {terminalId}
              <Copy
                className="w-4 h-4 ml-2 cursor-pointer"
                onClick={copyToClipboard}
              />
            </span>
          </div>

          {/* Toggle */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Activate Agent</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={active}
                onChange={handleToggle}
              />
              <div
                className={`w-10 h-5 rounded-full p-1 duration-300 ${
                  active ? "bg-[#02B14F]" : "bg-gray-300"
                }`}>
                <div
                  className={`bg-white w-4 h-4 rounded-full transform duration-300 ${
                    active ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-[350px] rounded-xl p-6 shadow-md text-center space-y-4">
            <div className="text-[40px]">🤔</div>
            <h2 className="text-xl font-semibold text-gray-800">
              Are You Sure?
            </h2>
            <p className="text-gray-600 text-sm">
              This agent will not be able to login, until reactivation.
            </p>
            <div className="flex flex-col gap-2 pt-4">
              <button
                onClick={confirmDeactivation}
                className="bg-[#02B14F] text-white py-2 rounded-md font-medium">
                Yes, Proceed
              </button>
              <button
                onClick={cancelDeactivation}
                className="bg-gray-200 text-gray-700 py-2 rounded-md font-medium">
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-600">{label}</span>
    <span className="text-gray-800 font-medium">{value}</span>
  </div>
);

export default AgentProfile;
