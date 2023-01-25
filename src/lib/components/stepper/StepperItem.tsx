import { Flex, Icon, Text } from "@chakra-ui/react";
import { MdCheck } from "react-icons/md";

import type { Mode, Step } from "./types";

export const stepperText: Record<Mode, Record<number, string>> = {
  deploy: { 1: "Upload or Select Code ID", 2: "Instantiate Code" },
  migrate: { 1: "Migrate Options", 2: "Migrate Details" },
};

const StepLabel = ({
  step,
  disabled,
  currentStep,
}: {
  step: Step;
  disabled?: boolean;
  currentStep: Step;
}) => {
  return (
    <Flex
      justify="center"
      align="center"
      backgroundColor={disabled ? "text.disabled" : "primary.main"}
      width="24px"
      height="24px"
      borderRadius="50%"
    >
      {currentStep > step ? (
        <Icon as={MdCheck} fontSize="20px" color="background.main" />
      ) : (
        <Text variant="body3" color="background.main">
          {step}
        </Text>
      )}
    </Flex>
  );
};

export const StepperItem = ({
  mode,
  step,
  currentStep,
}: {
  mode: Mode;
  step: Step;
  currentStep: Step;
}) => {
  const disabled = currentStep < step;
  return (
    <Flex
      align="center"
      gap={2}
      sx={{
        ":not(:last-of-type)": { flex: 1 },
        "&:not(:last-of-type)::after": {
          content: '""',
          flex: 1,
          height: "1px",
          backgroundColor: "gray.400",
          marginInlineEnd: "8px",
        },
      }}
    >
      <StepLabel step={step} disabled={disabled} currentStep={currentStep} />
      <Text
        variant="body2"
        fontWeight={disabled ? 400 : 700}
        color={disabled ? "text.disabled" : "text.main"}
      >
        {stepperText[mode][step]}
      </Text>
    </Flex>
  );
};
