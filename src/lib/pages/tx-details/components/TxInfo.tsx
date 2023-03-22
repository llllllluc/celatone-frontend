import type { FlexProps } from "@chakra-ui/react";
import { Text, chakra, Flex } from "@chakra-ui/react";

import { ExplorerLink } from "lib/components/ExplorerLink";
import { LabelText } from "lib/components/LabelText";
import type { TxData } from "lib/services/txService";
import { formatInteger } from "lib/utils";

interface TxInfoProps extends FlexProps {
  txData: TxData;
}

const Container = chakra(Flex, {
  baseStyle: {
    flexDir: "column",
    gap: 6,
    w: "250px",
    minW: "180px",
  },
});

export const TxInfo = ({ txData, ...flexProps }: TxInfoProps) => (
  <Container {...flexProps}>
    <LabelText label="Network">{txData.chainId}</LabelText>
    <LabelText label="Block Height">
      <ExplorerLink value={txData.height} type="block_height" showCopyOnHover />
    </LabelText>
    <LabelText label="Transaction Fee">
      {txData.formattedFee ?? (
        <Text variant="body2" color="text.dark">
          No Fee
        </Text>
      )}
    </LabelText>
    <LabelText label="Gas Used/Wanted">
      {`${formatInteger(txData.gas_used)}/${formatInteger(txData.gas_wanted)}`}
    </LabelText>
    <LabelText label="Memo">
      {txData.tx.body.memo || (
        <Text variant="body2" color="text.dark">
          No Memo
        </Text>
      )}
    </LabelText>
  </Container>
);
