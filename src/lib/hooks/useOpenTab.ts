import { useCallback } from "react";

import { useBaseApiRoute, useCelatoneApp } from "lib/app-provider";
import type { Option } from "lib/types";
import { openNewTab } from "lib/utils";

export const useOpenTxTab = (type: "lcd" | "tx-page") => {
  const { currentChainId } = useCelatoneApp();
  const txsApiRoute = useBaseApiRoute("txs");
  const baseUrl = type === "lcd" ? txsApiRoute : `/${currentChainId}/txs`;

  return useCallback(
    (txHash: Option<string>) => {
      openNewTab(`${baseUrl}/${txHash}`);
    },
    [baseUrl]
  );
};

export const useOpenAssetTab = () => {
  const balancesApiRoute = useBaseApiRoute("balances");

  return useCallback(
    (walletAddr: string) => {
      openNewTab(`${balancesApiRoute}/${walletAddr}`);
    },
    [balancesApiRoute]
  );
};
