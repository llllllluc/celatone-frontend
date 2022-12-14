import { ArrowBackIcon } from "@chakra-ui/icons";
import { Heading, Button, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { ExplorerLink } from "lib/components/ExplorerLink";
import { LoadingOverlay } from "lib/components/LoadingOverlay";
import { SelectContract } from "lib/components/modal/select-contract";
import PageContainer from "lib/components/PageContainer";
import { useContractStore, useEndpoint, useMobile } from "lib/hooks";
import { queryContract, queryData } from "lib/services/contract";
import type { RpcQueryError } from "lib/types";
import {
  jsonPrettify,
  getFirstQueryParam,
  decode,
  jsonValidate,
} from "lib/utils";

import { QueryArea } from "./components/QueryArea";

const Query = () => {
  const router = useRouter();
  const { getContractInfo } = useContractStore();
  const endpoint = useEndpoint();
  const isMobile = useMobile();

  const [addr, setAddr] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [cmds, setCmds] = useState<[string, string][]>([]);
  const [initialMsg, setInitialMsg] = useState("");

  const goToExecute = () => {
    router.push({
      pathname: "/execute",
      query: { ...(addr && { contract: addr }) },
    });
  };

  const onContractSelect = useCallback(
    (contract: string) => {
      router.push(
        {
          pathname: "/query",
          query: { ...(contract && { contract }) },
        },
        undefined,
        { shallow: true }
      );
    },
    [router]
  );

  // TODO: Abstract query and make query key
  const { isFetching } = useQuery(
    ["query", "cmds", endpoint, addr, '{"": {}}'],
    async () => queryData(endpoint, addr, '{"": {}}'),
    {
      enabled: !!addr,
      retry: false,
      cacheTime: 0,
      refetchOnWindowFocus: false,
      onError: (e: AxiosError<RpcQueryError>) => {
        const queryCmds: string[] = [];
        Array.from(e.response?.data.message?.matchAll(/`(.*?)`/g) || [])
          .slice(1)
          .forEach((match) => queryCmds.push(match[1]));
        setCmds(queryCmds.map((cmd) => [cmd, `{"${cmd}": {}}`]));
      },
    }
  );

  useEffect(() => {
    (async () => {
      const contractAddr = getFirstQueryParam(router.query.contract);
      const contractState = getContractInfo(contractAddr);
      let decodeMsg = decode(getFirstQueryParam(router.query.msg));
      if (decodeMsg && jsonValidate(decodeMsg) !== null) {
        onContractSelect(contractAddr);
        decodeMsg = "";
      }
      const jsonMsg = jsonPrettify(decodeMsg);

      if (!contractState) {
        try {
          const onChainDetail = await queryContract(endpoint, contractAddr);
          setName(onChainDetail.result?.label);
        } catch {
          setName("Invalid Contract");
        }
      } else {
        setName(contractState.name ?? contractState.label);
      }

      setAddr(contractAddr);
      setInitialMsg(jsonMsg);
      if (!contractAddr) setCmds([]);
    })();
  }, [router, endpoint, getContractInfo, onContractSelect]);

  const notSelected = addr.length === 0;

  return (
    <PageContainer>
      {isFetching && <LoadingOverlay />}
      <Button
        variant="ghost-primary"
        onClick={() => router.back()}
        leftIcon={<ArrowBackIcon boxSize={4} />}
      >
        BACK
      </Button>
      <Flex my="10px">
        <Heading as="h1" size="lg" textColor="white" mb={4}>
          Query
        </Heading>
        <Spacer />
        <Box>
          <Button variant="ghost-primary" size="sm" onClick={goToExecute}>
            Go To Execute
          </Button>
        </Box>
      </Flex>

      <Flex
        mb="32px"
        borderWidth="thin"
        borderColor="gray.800"
        p="16px"
        borderRadius="4px"
        fontSize="12px"
        justify="space-between"
        align="center"
      >
        <Flex flex={1}>
          <Flex
            color="text.main"
            direction="column"
            flex={notSelected ? 0.15 : 0.6}
          >
            Contract Address
            {notSelected ? (
              <Text mt={1} color="text.disabled" variant="body2">
                Not Selected
              </Text>
            ) : (
              <ExplorerLink
                value={addr}
                type="contract_address"
                isTruncate={isMobile}
                fontSize={14}
                mt={1}
                isHover
              />
            )}
          </Flex>
          <Flex color="text.main" direction="column">
            Contract Name
            <Text
              textColor={notSelected ? "text.disabled" : "text.dark"}
              mt={1}
              variant="body2"
            >
              {notSelected ? "Not Selected" : name}
            </Text>
          </Flex>
        </Flex>
        <SelectContract
          notSelected={notSelected}
          onContractSelect={onContractSelect}
        />
      </Flex>

      <QueryArea contractAddress={addr} initialMsg={initialMsg} cmds={cmds} />
    </PageContainer>
  );
};

export default Query;
