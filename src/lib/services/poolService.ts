import type { Coin } from "@cosmjs/stargate";
import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

import { CELATONE_QUERY_KEYS, useCelatoneApp } from "lib/app-provider";
import type { Order_By } from "lib/gql/graphql";
import {
  getPoolByPoolId,
  getPoolList,
  getPoolListByDenoms,
  getPoolListByDenomsCount,
  getPoolListCount,
  getPoolsByPoolIds,
} from "lib/query";
import type { ContractAddr, Pool, PoolDetail, PoolTypeFilter } from "lib/types";
import { isPositiveInt } from "lib/utils";

import { usePoolExpression } from "./expression/poolExpression";

export const usePoolListQuery = ({
  isSupported,
  poolType,
  isSuperfluidOnly,
  search,
  order,
  offset,
  pageSize,
}: {
  isSupported: boolean;
  poolType: PoolTypeFilter;
  isSuperfluidOnly: boolean;
  search: string;
  order: Order_By;
  offset: number;
  pageSize: number;
}): UseQueryResult<Pool<Coin>[]> => {
  const { indexerGraphClient } = useCelatoneApp();
  const expression = usePoolExpression(
    isSupported,
    poolType,
    isSuperfluidOnly,
    search
  );

  const queryFn = useCallback(async () => {
    const request =
      !search || isPositiveInt(search)
        ? indexerGraphClient.request(getPoolList, {
            expression,
            order,
            offset,
            pageSize,
          })
        : indexerGraphClient.request(getPoolListByDenoms, {
            denoms: search,
            expression,
            order,
            offset,
            pageSize,
          });
    return request.then(({ pools }) =>
      pools.map<Pool<Coin>>((pool) => ({
        id: pool.id,
        type: pool.type,
        isSuperfluid: pool.is_superfluid,
        poolLiquidity: pool.liquidity,
        contractAddress: pool.contract_address as ContractAddr,
      }))
    );
  }, [expression, indexerGraphClient, offset, order, pageSize, search]);

  return useQuery(
    [
      CELATONE_QUERY_KEYS.POOL_LIST,
      isSupported,
      poolType,
      isSuperfluidOnly,
      search,
      order,
      offset,
      pageSize,
      indexerGraphClient,
    ],
    queryFn
  );
};

export const usePoolListCountQuery = ({
  isSupported,
  poolType,
  isSuperfluidOnly,
  search,
}: {
  isSupported: boolean;
  poolType: PoolTypeFilter;
  isSuperfluidOnly: boolean;
  search: string;
}): UseQueryResult<number> => {
  const { indexerGraphClient } = useCelatoneApp();
  const expression = usePoolExpression(
    isSupported,
    poolType,
    isSuperfluidOnly,
    search
  );

  const queryFn = useCallback(async () => {
    const request =
      !search || isPositiveInt(search)
        ? indexerGraphClient.request(getPoolListCount, {
            expression,
          })
        : indexerGraphClient.request(getPoolListByDenomsCount, {
            denoms: search,
            expression,
          });

    return request.then(
      ({ pools_aggregate }) => pools_aggregate.aggregate?.count
    );
  }, [expression, indexerGraphClient, search]);

  return useQuery(
    [
      CELATONE_QUERY_KEYS.POOL_LIST_COUNT,
      isSupported,
      poolType,
      isSuperfluidOnly,
      search,
      indexerGraphClient,
    ],
    queryFn
  );
};

export const usePoolByPoolId = (
  poolId: number,
  enabled = true
): UseQueryResult<PoolDetail<string, Coin>> => {
  const { indexerGraphClient } = useCelatoneApp();

  const queryFn = useCallback(async () => {
    if (!poolId) throw new Error("Pool ID is undefined.");
    return indexerGraphClient
      .request(getPoolByPoolId, {
        poolId,
      })
      .then(({ pools_by_pk }) =>
        // TODO: revisit to remove this assertion later
        pools_by_pk
          ? ({
              id: pools_by_pk.id,
              type: pools_by_pk.type,
              isSuperfluid: pools_by_pk.is_superfluid,
              isSupported: pools_by_pk.is_supported,
              poolLiquidity: pools_by_pk.liquidity,
              blockHeight: pools_by_pk.transaction?.block_height,
              creator: pools_by_pk.account?.address,
              poolAddress: pools_by_pk.address,
              swapFee: pools_by_pk.swap_fee,
              exitFee: pools_by_pk.exit_fee,
              futurePoolGovernor: pools_by_pk.future_pool_governor,
              weight: pools_by_pk.weight,
              smoothWeightChangeParams: pools_by_pk.smooth_weight_change_params,
              scalingFactors: pools_by_pk.scaling_factors,
              scalingFactorController: pools_by_pk.scaling_factor_controller,
              spreadFactor: pools_by_pk.spread_factor,
              tickSpacing: pools_by_pk.tick_spacing,
              contractAddress: pools_by_pk.contract_address,
            } as PoolDetail<string, Coin>)
          : undefined
      );
  }, [poolId, indexerGraphClient]);

  return useQuery(
    [CELATONE_QUERY_KEYS.POOL_INFO_BY_ID, poolId, indexerGraphClient],
    queryFn,
    {
      enabled,
    }
  );
};

export const usePoolAssetsbyPoolIds = (
  poolIds: number[],
  enabled = true
): UseQueryResult<Record<number, string[]>> => {
  const { indexerGraphClient } = useCelatoneApp();

  const queryFn = useCallback(async () => {
    return indexerGraphClient
      .request(getPoolsByPoolIds, {
        poolIds,
      })
      .then(({ pools }) =>
        pools.reduce<Record<number, string[]>>(
          (prev, pool) => ({
            ...prev,
            [pool.id]: (pool.liquidity as Coin[]).map(
              (liquidity) => liquidity.denom
            ),
          }),
          {}
        )
      );
  }, [poolIds, indexerGraphClient]);

  return useQuery(
    [CELATONE_QUERY_KEYS.POOL_INFO_BY_IDS, poolIds, indexerGraphClient],
    queryFn,
    {
      enabled,
    }
  );
};
