import { useQuery } from "@tanstack/react-query";

import { useBaseApiRoute, useCelatoneApp } from "lib/app-provider";
import { useCodeStore, useContractStore } from "lib/providers/store";
import { useAssetInfos } from "lib/services/assetService";
import {
  queryContract,
  queryContractBalances,
  queryContractCw2Info,
} from "lib/services/contract";
import {
  useContractDetailByContractAddress,
  useInstantiateDetailByContractQuery,
  useMigrationHistoriesByContractAddressPagination,
} from "lib/services/contractService";
import {
  usePublicProjectByContractAddress,
  usePublicProjectBySlug,
} from "lib/services/publicProjectService";
import type {
  BalanceWithAssetInfo,
  ContractAddr,
  ContractMigrationHistory,
  Option,
} from "lib/types";

import type { ContractData } from "./types";

export const useContractData = (
  contractAddress: ContractAddr
): ContractData => {
  const { currentChainId } = useCelatoneApp();
  const { getCodeLocalInfo } = useCodeStore();
  const { getContractLocalInfo } = useContractStore();
  const balancesApiRoute = useBaseApiRoute("balances");
  const lcdEndpoint = useBaseApiRoute("rest");

  const { data: contractDetail, isLoading: isContractDetailLoading } =
    useContractDetailByContractAddress(contractAddress);

  const { assetInfos, isLoading: isAssetInfosLoading } = useAssetInfos();
  const { data: contractBalances, isLoading: isContractBalancesLoading } =
    useQuery(
      ["query", "contractBalances", balancesApiRoute, contractAddress],
      async () => queryContractBalances(balancesApiRoute, contractAddress),
      { enabled: Boolean(contractAddress), retry: false }
    );

  const balances = contractBalances
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

  const { data: publicInfo } =
    usePublicProjectByContractAddress(contractAddress);
  const { data: publicInfoBySlug } = usePublicProjectBySlug(publicInfo?.slug);

  const { data: contractCw2Info, isLoading: isContractCw2InfoLoading } =
    useQuery(
      ["query", "contract_cw2_info", lcdEndpoint, contractAddress],
      async () => queryContractCw2Info(lcdEndpoint, contractAddress),
      { enabled: Boolean(contractAddress), retry: false }
    );

  const codeLocalInfo = contractDetail
    ? getCodeLocalInfo(Number(contractDetail.codeId))
    : undefined;
  const contractLocalInfo = getContractLocalInfo(contractAddress);

  const { data: instantiateDetail, isLoading: isInstantiateDetailLoading } =
    useInstantiateDetailByContractQuery(contractAddress);

  const { data: rawContractResponse, isLoading: isRawContractResponseLoading } =
    useQuery(
      ["query", "contract", lcdEndpoint, contractAddress],
      async () => queryContract(lcdEndpoint, contractAddress),
      { enabled: Boolean(contractAddress), retry: false }
    );

  return {
    chainId: currentChainId,
    codeLocalInfo,
    contractLocalInfo,
    contractDetail,
    isContractDetailLoading,
    publicProject: {
      publicInfo,
      publicDetail: publicInfoBySlug?.details,
    },
    balances,
    isBalancesLoading: isAssetInfosLoading || isContractBalancesLoading,
    contractCw2Info,
    isContractCw2InfoLoading,
    initMsg: instantiateDetail?.initMsg,
    initTxHash: instantiateDetail?.initTxHash,
    initProposalId: instantiateDetail?.initProposalId,
    initProposalTitle: instantiateDetail?.initProposalTitle,
    createdHeight: instantiateDetail?.createdHeight,
    createdTime: instantiateDetail?.createdTime,
    isInstantiateDetailLoading,
    rawContractResponse,
    isRawContractResponseLoading,
  };
};

export const useMigrationHistories = (
  contractAddress: ContractAddr,
  offset: number,
  pageSize: number
): Option<ContractMigrationHistory[]> => {
  const { data: migrationData } =
    useMigrationHistoriesByContractAddressPagination(
      contractAddress,
      offset,
      pageSize
    );
  const { getCodeLocalInfo } = useCodeStore();

  if (!migrationData) return undefined;

  return migrationData.map<ContractMigrationHistory>((data) => {
    const localInfo = getCodeLocalInfo(data.codeId);
    return {
      ...data,
      codeName: localInfo?.name,
    };
  });
};
