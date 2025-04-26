import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGlobalContext } from "@/context/useGlobalContext";

// $ Button Controlling the form previous page
export const LeftControlButton = ({ Back }) => {
  return (
    <button type="button" onClick={Back}>
      <ChevronLeft />
    </button>
  );
};

LeftControlButton.propTypes = {
  Back: PropTypes.func,
  currentStepIndex: PropTypes.number,
  steps: PropTypes.array,
};

// $ Button Controlling the form next page

export const RightControlButton = ({ Next, steps }) => {
  const { currentStepIndex } = useGlobalContext();
  const isLastStep = currentStepIndex === steps.length - 1;

  return (
    <button
      type="button"
      onClick={Next}
      className={`${currentStepIndex === isLastStep && { display: "none" }}`}
    >
      <ChevronRight />
    </button>
  );
};

RightControlButton.propTypes = {
  Next: PropTypes.func,
  currentStepIndex: PropTypes.number,
  steps: PropTypes.array,
};
