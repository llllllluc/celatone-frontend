import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import type { Option } from "lib/types";

import { SelectInput } from "./forms";

enum RelationType {
  ALL = "ALL",
  SIGNING = "SIGNING",
  RELATED = "RELATED",
}

const relationOptions = [
  {
    label: "All",
    value: RelationType.ALL,
    disabled: false,
  },
  {
    label: "Signing Address",
    value: RelationType.SIGNING,
    disabled: false,
  },
  {
    label: "Related Address",
    value: RelationType.RELATED,
    disabled: false,
  },
];

interface TxRelationSelectionProps extends BoxProps {
  value: Option<boolean>;
  setValue: (value: Option<boolean>) => void;
  size?: string | object;
}

export const TxRelationSelection = ({
  value,
  setValue,
  size = "lg",
  ...props
}: TxRelationSelectionProps) => {
  let initialValue;
  switch (value) {
    case undefined:
      initialValue = RelationType.ALL;
      break;
    case false:
      initialValue = RelationType.SIGNING;
      break;
    default:
      initialValue = RelationType.RELATED;
  }

  return (
    <Box {...props}>
      <SelectInput
        formLabel="Filter by Relation"
        size={size}
        options={relationOptions}
        onChange={(newValue: RelationType) =>
          setValue(
            newValue === RelationType.ALL
              ? undefined
              : newValue === RelationType.SIGNING
          )
        }
        initialSelected={initialValue}
      />
    </Box>
  );
};
