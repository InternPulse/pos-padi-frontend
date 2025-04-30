// $ This is a custom component used by all forms to generate the heading and the subheading. Styling can be controlled here to maintain uniformity accross all forms using the same header.

import useMultiFormHook from "@/utils/useMultiFormHook";
import { Flex, Fieldset, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {
  LeftControlButton,
  RightControlButton,
} from "./signupforms/FormControlButtons";
import { useGlobalContext } from "@/context/useGlobalContext";
// $ Use the location to check on which routes the navigation buttons on the header must be removed
import { useLocation } from "react-router";

function FormHeader({ title, subHeading }) {
  const { Next, Back, step, isLastStep, totalSteps } = useMultiFormHook();
  const { currentStepIndex } = useGlobalContext();
  const location = useLocation().pathname;
  // console.log("location:", location); //debug:

  return (
    <Flex
      mb={6}
      direction="column"
      gap="0.625rem"
      position="relative"
      // border="1px dashed red" //debug:
    >
      {location === "/login" ? null : (
        <Box
          position="absolute"
          top="0"
          left="-8%"
          visibility={currentStepIndex === 0 && "hidden"}
          _hover={{ cursor: "pointer" }}
        >
          <LeftControlButton step={step} Back={Back} />
        </Box>
      )}
      <Flex
        direction="column"
        gap={location === "/login" ? "1rem" : "0.625rem"}
      >
        <Fieldset.Legend
          fontSize={{ base: "1.375rem", lg: "1.75rem" }}
          fontWeight={"600"}
          color="rgba(0, 0, 0, 1)"
        >
          {title}
        </Fieldset.Legend>
        <Fieldset.HelperText
          fontSize={{ base: "0.875rem", lg: "1rem" }}
          color="rgba(98, 108, 122, 1)"
        >
          {subHeading}
        </Fieldset.HelperText>
      </Flex>
      {location === "/login" ? null : (
        <Box
          position="absolute"
          top="0"
          right="0%"
          _hover={{ cursor: "pointer" }}
          visibility={isLastStep && "hidden"}
        >
          <RightControlButton steps={totalSteps} Next={Next} />
        </Box>
      )}
    </Flex>
  );
}
FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
};

export default FormHeader;
