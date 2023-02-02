import { useWallet } from "@cosmos-kit/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import { getChainNameByNetwork } from "lib/data";

export const useNetworkChange = () => {
  const router = useRouter();
  const { currentChainName, setCurrentChain } = useWallet();
  const networkRef = useRef<string>();

  /**
   * @todos Change default to mainnet later (currently is testnet)
   */

  useEffect(() => {
    const networkRoute = (router.query.network as string) || "testnet";

    if (networkRoute !== networkRef.current) {
      networkRef.current = networkRoute;
      try {
        const chainName = getChainNameByNetwork(networkRoute);
        if (currentChainName !== chainName) setCurrentChain(chainName);
      } catch {
        /**
         * @remarks Allows false chain name, will continue to operate as testnet
         */
      }
    }
  }, [router, currentChainName, setCurrentChain]);
};
