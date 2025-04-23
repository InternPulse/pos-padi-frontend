import React from "react";

const ConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div
      className="fixed bg-white rounded-[10px] shadow-sm"
      style={{
        width: "500px",
        height: "451px",
        top: "636px",
        left: "470px",
        borderRadius: "10px",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.1)",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {/* Modal Content */}
      <div className="text-center flex flex-col items-center gap-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800">Are You Sure?</h2>

        {/* Message */}
        <p className="text-gray-600 text-lg max-w-[360px]">
          This agent will not be able to login, until reactivation.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 w-full max-w-[300px]">
          <button
            onClick={onConfirm}
            className="flex-1 py-3 bg-[#02B14F] text-white rounded-md font-medium">
            Yes, Proceed
          </button>
          <button
            onClick={onCancel}
            className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-md font-medium">
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
