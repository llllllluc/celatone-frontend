import { Heading, Button, Box, Flex } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import {
  CELATONE_QUERY_KEYS,
  useBaseApiRoute,
  useInternalNavigate,
  useWasmConfig,
  useMobile,
} from "lib/app-provider";
import { ContractSelectSection } from "lib/components/ContractSelectSection";
import { CustomIcon } from "lib/components/icon";
import { LoadingOverlay } from "lib/components/LoadingOverlay";
import PageContainer from "lib/components/PageContainer";
import { AmpTrackToQuery } from "lib/services/amplitude";
import { queryData } from "lib/services/contract";
import type { ContractAddr, RpcQueryError } from "lib/types";
import {
  jsonPrettify,
  getFirstQueryParam,
  decode,
  jsonValidate,
} from "lib/utils";

import { QueryArea } from "./components/QueryArea";

const Query = () => {
  useWasmConfig({ shouldRedirect: true });
  const router = useRouter();
  const navigate = useInternalNavigate();
  const lcdEndpoint = useBaseApiRoute("rest");

  const [contractAddress, setContractAddress] = useState("" as ContractAddr);
  const [initialMsg, setInitialMsg] = useState("");
  const [cmds, setCmds] = useState<[string, string][]>([]);
  const isMobile = useMobile();
  const goToExecute = () => {
    navigate({
      pathname: "/execute",
      query: { ...(contractAddress && { contract: contractAddress }) },
    });
  };

  const onContractSelect = useCallback(
    (contract: ContractAddr) => {
      navigate({
        pathname: "/query",
        query: { ...(contract && { contract }) },
        options: { shallow: true },
      });
    },
    [navigate]
  );

  // TODO: Abstract query and make query key
  const { isFetching } = useQuery(
    [
      CELATONE_QUERY_KEYS.CONTRACT_QUERY_CMDS,
      lcdEndpoint,
      contractAddress,
      '{"": {}}',
    ],
    async () => queryData(lcdEndpoint, contractAddress, '{"": {}}'),
    {
      enabled: !!contractAddress,
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
    if (router.isReady) {
      const contractAddressParam = getFirstQueryParam(
        router.query.contract
      ) as ContractAddr;

      const msgParam = getFirstQueryParam(router.query.msg);
      let decodeMsg = decode(msgParam);
      if (decodeMsg && jsonValidate(decodeMsg) !== null) {
        onContractSelect(contractAddressParam);
        decodeMsg = "";
      }
      const jsonMsg = jsonPrettify(decodeMsg);

      setContractAddress(contractAddressParam);
      setInitialMsg(jsonMsg);
      if (!contractAddressParam) setCmds([]);

      AmpTrackToQuery(!!contractAddressParam, !!msgParam);
    }
  }, [router, onContractSelect]);

  return (
    <PageContainer>
      {isFetching && <LoadingOverlay />}
      <Flex mt={1} mb={8} justify="space-between">
        <Heading as="h5" variant="h5">
          Query Contract
        </Heading>
        {!isMobile && (
          <Box>
            <Button
              variant="ghost-secondary"
              size="sm"
              p="unset"
              pl={2}
              onClick={goToExecute}
            >
              Go To Execute
              <CustomIcon name="chevron-right" boxSize={3} />
            </Button>
          </Box>
        )}
      </Flex>

      <ContractSelectSection
        mode="all-lists"
        contractAddress={contractAddress}
        onContractSelect={onContractSelect}
      />

      <QueryArea
        contractAddress={contractAddress}
        initialMsg={initialMsg}
        cmds={cmds}
      />
    </PageContainer>
  );
};

export default Query;
