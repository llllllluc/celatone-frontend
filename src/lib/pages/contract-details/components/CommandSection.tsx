import { ButtonGroup, Flex, Spinner, Text } from "@chakra-ui/react";

import { useInternalNavigate } from "lib/app-provider";
import { ContractCmdButton } from "lib/components/ContractCmdButton";
import { useExecuteCmds, useQueryCmds } from "lib/hooks";
import type { ContractAddr } from "lib/types";
import { encode, jsonPrettify } from "lib/utils";

interface CommandSectionProps {
  contractAddress: ContractAddr;
}

export const CommandSection = ({ contractAddress }: CommandSectionProps) => {
  const navigate = useInternalNavigate();

  const { isFetching: isQueryCmdsFetching, queryCmds } =
    useQueryCmds(contractAddress);

  const { isFetching: isExecuteCmdsFetching, execCmds } =
    useExecuteCmds(contractAddress);

  const renderCmds = (
    isFetching: boolean,
    cmds: [string, string][],
    type: string
  ) => {
    if (isFetching) {
      return <Spinner size="md" mx={1} />;
    }
    if (cmds.length) {
      return (
        <ButtonGroup
          width="90%"
          flexWrap="wrap"
          rowGap={2}
          sx={{
            "> button": {
              marginInlineStart: "0 !important",
              marginInlineEnd: "1",
            },
          }}
        >
          {cmds.sort().map(([cmd, msg]) => (
            <ContractCmdButton
              key={`${type}-cmd-${cmd}`}
              cmd={cmd}
              onClickCmd={() => {
                navigate({
                  pathname: `/${type}`,
                  query: {
                    contract: contractAddress,
                    msg: encode(jsonPrettify(msg)),
                  },
                });
              }}
            />
          ))}
        </ButtonGroup>
      );
    }
    return (
      <Text variant="body2" color="text.dark">
        No messages available
      </Text>
    );
  };

  return (
    <Flex
      gap={{ base: 4, md: 6 }}
      direction={{ base: "column", md: "row" }}
      mt={{ base: 4, md: 0 }}
    >
      <Flex
        direction="column"
        bg="gray.900"
        p={4}
        borderRadius="8px"
        flex={0.5}
      >
        <Text color="text.dark" variant="body2" fontWeight={500} mb={2}>
          Query Shortcuts
        </Text>
        {renderCmds(isQueryCmdsFetching, queryCmds, "query")}
      </Flex>
      <Flex
        direction="column"
        bg="gray.900"
        p={4}
        borderRadius="8px"
        flex={0.5}
      >
        <Text color="text.dark" variant="body2" fontWeight={500} mb={2}>
          Execute Shortcuts
        </Text>
        {renderCmds(isExecuteCmdsFetching, execCmds, "execute")}
      </Flex>
    </Flex>
  );
};
