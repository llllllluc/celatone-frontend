import { useWallet } from "@cosmos-kit/react";
import big from "big.js";
import { GraphQLClient } from "graphql-request";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { useEffect, useContext, useMemo, createContext } from "react";

import { getIndexerGraphClient } from "../query-client";
import type { AppConstants } from "../types";
import {
  getExplorerTxUrl,
  getExplorerUserAddressUrl,
} from "lib/app-fns/explorer";
import { LoadingOverlay } from "lib/components/LoadingOverlay";
import { DEFAULT_ADDRESS, getChainNameByNetwork } from "lib/data";
import {
  useCodeStore,
  useContractStore,
  usePublicProjectStore,
} from "lib/hooks";
import type { ChainGasPrice, Token, U } from "lib/types";
import { formatUserKey } from "lib/utils";

interface AppProviderProps<AppContractAddress, Constants extends AppConstants> {
  children: ReactNode;

  fallbackGasPrice: Record<string, ChainGasPrice>;

  appContractAddressMap: (currentChainName: string) => AppContractAddress;

  constants: Constants;
}

interface AppContextInterface<
  ContractAddress,
  Constants extends AppConstants = AppConstants
> {
  chainGasPrice: ChainGasPrice;
  appContractAddress: ContractAddress;
  constants: Constants;
  explorerLink: {
    txUrl: string;
    userUrl: string;
  };
  indexerGraphClient: GraphQLClient;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppContext = createContext<AppContextInterface<any, any>>({
  chainGasPrice: { denom: "", gasPrice: "0" as U<Token> },
  appContractAddress: {},
  constants: { gasAdjustment: 0 },
  explorerLink: {
    txUrl: "",
    userUrl: "",
  },
  indexerGraphClient: new GraphQLClient(""),
});

export const AppProvider = <ContractAddress, Constants extends AppConstants>({
  children,
  fallbackGasPrice,
  appContractAddressMap,
  constants,
}: AppProviderProps<ContractAddress, Constants>) => {
  const router = useRouter();
  const { currentChainName, currentChainRecord, setCurrentChain } = useWallet();
  const { setCodeUserKey, isCodeUserKeyExist } = useCodeStore();
  const { setContractUserKey, isContractUserKeyExist } = useContractStore();
  const { setProjectUserKey, isProjectUserKeyExist } = usePublicProjectStore();

  const chainGasPrice = useMemo(() => {
    if (
      !currentChainRecord ||
      !currentChainRecord.chain.fees ||
      !currentChainRecord.chain.fees.fee_tokens[0].average_gas_price
    )
      return fallbackGasPrice[currentChainName];
    return {
      denom: currentChainRecord.chain.fees?.fee_tokens[0].denom as string,
      gasPrice: big(
        currentChainRecord.chain.fees?.fee_tokens[0].average_gas_price ?? "0"
      ).toFixed() as U<Token>,
    };
  }, [currentChainName, currentChainRecord, fallbackGasPrice]);

  const chainBoundStates = useMemo(() => {
    return {
      explorerLink: {
        txUrl: getExplorerTxUrl(currentChainName),
        userUrl: getExplorerUserAddressUrl(currentChainName),
      },
      indexerGraphClient: getIndexerGraphClient(currentChainName),
    };
  }, [currentChainName]);

  const states = useMemo<AppContextInterface<ContractAddress, Constants>>(
    () => ({
      chainGasPrice,
      appContractAddress: appContractAddressMap(currentChainName),
      constants,
      ...chainBoundStates,
    }),
    [
      chainGasPrice,
      appContractAddressMap,
      currentChainName,
      constants,
      chainBoundStates,
    ]
  );

  useEffect(() => {
    if (currentChainName) {
      const userKey = formatUserKey(currentChainName, DEFAULT_ADDRESS);
      setCodeUserKey(userKey);
      setContractUserKey(userKey);
      setProjectUserKey(userKey);
    }
  }, [currentChainName, setCodeUserKey, setContractUserKey, setProjectUserKey]);

  useEffect(() => {
    /**
     * @remarks Condition checking varies by chain
     * @todos Change default to mainnet later (currently is testnet)
     * @todos Support localnet case later
     */
    if (router.query.network === "mainnet") {
      setCurrentChain(getChainNameByNetwork("mainnet"));
    } else {
      setCurrentChain(getChainNameByNetwork("testnet"));
    }
  }, [router.query.network, setCurrentChain]);

  const AppContent = observer(() => {
    if (
      isCodeUserKeyExist() &&
      isContractUserKeyExist() &&
      isProjectUserKeyExist()
    )
      return (
        <AppContext.Provider value={states}>{children}</AppContext.Provider>
      );
    return <LoadingOverlay />;
  });

  return <AppContent />;
};

export const useApp = <
  ContractAddress,
  Constants extends AppConstants
>(): AppContextInterface<ContractAddress, Constants> => {
  return useContext(AppContext);
};
