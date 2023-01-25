import { useWallet } from "@cosmos-kit/react";
import { useQuery } from "@tanstack/react-query";

import { INSTANTIATED_LIST_NAME } from "lib/data";
import { useCodeStore, useContractStore, useEndpoint } from "lib/hooks";
import { useAssetInfos } from "lib/services/assetService";
import type { InstantiateInfo, PublicInfo } from "lib/services/contract";
import {
  queryPublicInfo,
  queryContractBalances,
  queryInstantiateInfo,
} from "lib/services/contract";
import {
  useExecuteTxsCountByContractAddress,
  useInstantiatedCountByUserQuery,
  useInstantiateDetailByContractQuery,
  useInstantiatedListByUserQuery,
  useMigrationHistoriesCountByContractAddress,
  useTxsCountByContractAddress,
  useRelatedProposalsCountByContractAddress,
} from "lib/services/contractService";
import type { CodeLocalInfo } from "lib/stores/code";
import type { ContractLocalInfo, ContractListInfo } from "lib/stores/contract";
import type {
  BalanceWithAssetInfo,
  ContractAddr,
  HumanAddr,
  Option,
} from "lib/types";
import { formatSlugName } from "lib/utils";

export interface ContractData {
  chainId: string;
  codeInfo: Option<CodeLocalInfo>;
  contractLocalInfo: Option<ContractLocalInfo>;
  instantiateInfo: Option<InstantiateInfo>;
  publicInfo: Option<PublicInfo>;
  balances: Option<BalanceWithAssetInfo[]>;
  initMsg: string;
  initTxHash: Option<string>;
  initProposalId: Option<number>;
  initProposalTitle: Option<string>;
}

export const useInstantiatedByMe = (enable: boolean): ContractListInfo => {
  const { address } = useWallet();
  const { data: contracts = [] } = useInstantiatedListByUserQuery(
    enable ? (address as HumanAddr) : undefined
  );

  const { getContractLocalInfo } = useContractStore();

  return {
    contracts: contracts.map((contract) => ({
      ...contract,
      ...getContractLocalInfo(contract.contractAddress),
    })),
    name: INSTANTIATED_LIST_NAME,
    slug: formatSlugName(INSTANTIATED_LIST_NAME),
    lastUpdated: new Date(),
    isInfoEditable: false,
    isContractRemovable: false,
  };
};

export const useInstantiatedMockInfoByMe = (): ContractListInfo => {
  const { address } = useWallet();
  const { data: count = 0 } = useInstantiatedCountByUserQuery(
    address as HumanAddr
  );

  return {
    contracts: Array.from({ length: count }, () => ({
      contractAddress: "" as ContractAddr,
      instantiator: "",
      label: "",
      created: new Date(0),
    })),
    name: INSTANTIATED_LIST_NAME,
    slug: formatSlugName(INSTANTIATED_LIST_NAME),
    lastUpdated: new Date(),
    isInfoEditable: false,
    isContractRemovable: false,
  };
};

export const useContractData = (
  contractAddress: ContractAddr
): ContractData | undefined => {
  const { currentChainRecord } = useWallet();
  const { getCodeLocalInfo } = useCodeStore();
  const { getContractLocalInfo } = useContractStore();
  const endpoint = useEndpoint();
  const assetInfos = useAssetInfos();

  const { data: instantiateInfo } = useQuery(
    ["query", "instantiateInfo", endpoint, contractAddress],
    async () => queryInstantiateInfo(endpoint, contractAddress),
    { enabled: !!currentChainRecord }
  );
  const { data: contractBalances } = useQuery(
    ["query", "contractBalances", contractAddress],
    async () =>
      queryContractBalances(
        currentChainRecord?.name,
        currentChainRecord?.chain.chain_id,
        contractAddress
      ),
    { enabled: !!currentChainRecord }
  );

  const contractBalancesWithAssetInfos = contractBalances
    ?.map(
      (balance): BalanceWithAssetInfo => ({
        balance,
        assetInfo: assetInfos?.[balance.id],
      })
    )
    .sort((a, b) => {
      if (a.balance.symbol && b.balance.symbol) {
        return a.balance.symbol.localeCompare(b.balance.symbol);
      }
      return -1;
    });

  const { data: publicInfo } = useQuery(
    ["query", "publicInfo", contractAddress],
    async () =>
      queryPublicInfo(
        currentChainRecord?.name,
        currentChainRecord?.chain.chain_id,
        contractAddress
      ),
    { enabled: !!currentChainRecord }
  );

  const codeInfo = instantiateInfo
    ? getCodeLocalInfo(Number(instantiateInfo.codeId))
    : undefined;
  const contractLocalInfo = getContractLocalInfo(contractAddress);

  const {
    data: instantiateDetail = {
      initMsg: "{}",
    },
  } = useInstantiateDetailByContractQuery(contractAddress);

  if (!currentChainRecord) return undefined;

  return {
    chainId: currentChainRecord.chain.chain_id,
    codeInfo,
    contractLocalInfo,
    instantiateInfo,
    publicInfo,
    balances: contractBalancesWithAssetInfos,
    initMsg: instantiateDetail.initMsg,
    initTxHash: instantiateDetail.initTxHash,
    initProposalId: instantiateDetail.initProposalId,
    initProposalTitle: instantiateDetail.initProposalTitle,
  };
};

export const useContractDetailsTableCounts = (
  contractAddress: ContractAddr
) => {
  const { data: executeCount = 0, refetch: refetchExecute } =
    useExecuteTxsCountByContractAddress(contractAddress);
  const { data: migrationCount = 0, refetch: refetchMigration } =
    useMigrationHistoriesCountByContractAddress(contractAddress);
  const { data: transactionsCount = 0, refetch: refetchTransactions } =
    useTxsCountByContractAddress(contractAddress);

  const { data: relatedProposalsCount = 0, refetch: refetchRelatedProposals } =
    useRelatedProposalsCountByContractAddress(contractAddress);
  return {
    tableCounts: {
      executeCount,
      migrationCount,
      transactionsCount,
      relatedProposalsCount,
    },
    refetchExecute,
    refetchMigration,
    refetchTransactions,
    refetchRelatedProposals,
  };
};
