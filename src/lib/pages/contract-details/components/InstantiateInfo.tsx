import { Box, chakra, Divider, Flex, Text } from "@chakra-ui/react";

import { Copier } from "lib/components/Copier";
import { ExplorerLink } from "lib/components/ExplorerLink";
import { LabelText } from "lib/components/LabelText";
import { useGetAddressType } from "lib/hooks";
import type { ContractData } from "lib/model/contract";
import { formatUTC, dateFromNow } from "lib/utils";
import { getAddressTypeText } from "lib/utils/address";

interface InstantiateInfoProps {
  contractData: ContractData;
}

const Container = chakra(Flex, {
  baseStyle: {
    flexDir: "column",
    gap: 6,
    w: "250px",
  },
});

const PortIdRender = ({ portId }: { portId: string }) => {
  const charArray = portId.match(/.{1,28}/g);

  return (
    <Box
      fontSize="14px"
      _hover={{
        "& .ibc-port-copy": {
          display: "flex",
        },
      }}
      transition="all .25s ease-in-out"
    >
      {charArray?.map((line, idx) =>
        idx === charArray.length - 1 ? (
          <Flex align="center" key={line}>
            {line}
            <Copier value={portId} className="ibc-port-copy" display="none" />
          </Flex>
        ) : (
          line
        )
      )}
    </Box>
  );
};

const InitRender = ({
  initTxHash,
  initProposalTitle,
  initProposalId,
  createdHeight,
}: {
  initTxHash: ContractData["initTxHash"];
  initProposalTitle: ContractData["initProposalTitle"];
  initProposalId: ContractData["initProposalId"];
  createdHeight: number;
}) => {
  if (initTxHash) {
    return (
      <LabelText label="Instantiate Transaction">
        <ExplorerLink
          type="tx_hash"
          value={initTxHash.toUpperCase()}
          canCopyWithHover
        />
      </LabelText>
    );
  }

  if (initProposalTitle && initProposalId) {
    return (
      <LabelText
        label="Instantiate Proposal ID"
        helperText1={initProposalTitle}
      >
        <ExplorerLink
          type="proposal_id"
          value={initProposalId.toString()}
          canCopyWithHover
        />
      </LabelText>
    );
  }

  return createdHeight === 0 ? (
    <LabelText label="Created by">
      <Text variant="body2">Genesis</Text>
    </LabelText>
  ) : (
    <LabelText label="Instantiate Transaction">
      <Text variant="body2">Data Not Available</Text>
    </LabelText>
  );
};

export const InstantiateInfo = ({
  contractData: {
    contractCw2Info,
    instantiateInfo,
    chainId,
    codeInfo,
    initTxHash,
    initProposalId,
    initProposalTitle,
  },
}: InstantiateInfoProps) => {
  const getAddressType = useGetAddressType();

  if (!instantiateInfo) {
    return (
      <Container>
        <Text variant="body2" color="text.dark">
          Error fetching data
        </Text>
      </Container>
    );
  }

  const instantiatorType = getAddressType(instantiateInfo.instantiator);
  const adminTypeOpt = instantiateInfo.admin
    ? getAddressType(instantiateInfo.admin)
    : undefined;
  return (
    <Container>
      <LabelText label="Network">{chainId}</LabelText>

      <LabelText label="From Code" helperText1={codeInfo?.name}>
        <ExplorerLink
          type="code_id"
          value={instantiateInfo.codeId}
          canCopyWithHover
        />
      </LabelText>

      <LabelText label="CW2 Info">
        {contractCw2Info ? (
          <Text variant="body2">
            {contractCw2Info.contract} ({contractCw2Info.version})
          </Text>
        ) : (
          <Text variant="body2" color="text.dark">
            No Info
          </Text>
        )}
      </LabelText>

      <LabelText
        label="Admin Address"
        helperText1={
          adminTypeOpt ? getAddressTypeText(adminTypeOpt) : undefined
        }
      >
        {instantiateInfo.admin ? (
          <ExplorerLink
            type={adminTypeOpt}
            value={instantiateInfo.admin}
            canCopyWithHover
          />
        ) : (
          <Text variant="body2" color="text.dark">
            No Admin
          </Text>
        )}
      </LabelText>

      <Divider border="1px solid" borderColor="pebble.700" />

      {instantiateInfo &&
        (instantiateInfo.createdHeight !== -1 ? (
          <LabelText
            label="Instantiated Block Height"
            helperText1={
              instantiateInfo.createdTime
                ? formatUTC(instantiateInfo.createdTime)
                : undefined
            }
            helperText2={
              instantiateInfo.createdTime
                ? dateFromNow(instantiateInfo.createdTime)
                : undefined
            }
          >
            <ExplorerLink
              type="block_height"
              value={instantiateInfo.createdHeight.toString()}
              canCopyWithHover
            />
          </LabelText>
        ) : (
          <LabelText label="Instantiated Block Height">N/A</LabelText>
        ))}

      <LabelText
        label="Instantiated by"
        helperText1={getAddressTypeText(instantiatorType)}
      >
        <ExplorerLink
          type={instantiatorType}
          value={instantiateInfo.instantiator}
          canCopyWithHover
        />
      </LabelText>

      <InitRender
        initTxHash={initTxHash}
        initProposalId={initProposalId}
        initProposalTitle={initProposalTitle}
        createdHeight={instantiateInfo.createdHeight}
      />

      {instantiateInfo.ibcPortId && (
        <LabelText label="IBC Port ID">
          <PortIdRender portId={instantiateInfo.ibcPortId} />
        </LabelText>
      )}
    </Container>
  );
};
