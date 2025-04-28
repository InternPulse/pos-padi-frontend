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
  const { currentStepIndex, formStepsValidity, formStepsSubmitted } =
    useGlobalContext();

  const handleRightClick = () => {
    // $ Check if current step is both valid AND has been submitted
    const isCurrentStepValid = formStepsValidity[currentStepIndex];
    const isCurrentStepSubmitted = formStepsSubmitted[currentStepIndex];
    console.log("formStepsSubmitted:", formStepsSubmitted); //debug:
    console.log("isCurrentStepValid:", formStepsValidity); //debug:
    if (isCurrentStepValid && isCurrentStepSubmitted) {
      Next();
    }
  };

  const isLastStep = currentStepIndex === steps.length - 1;

  return (
    <button
      type="button"
      onClick={handleRightClick}
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
