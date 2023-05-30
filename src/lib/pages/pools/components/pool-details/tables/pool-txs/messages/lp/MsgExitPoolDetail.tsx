import { Box, Flex, Text } from "@chakra-ui/react";

import { ExplorerLink } from "lib/components/ExplorerLink";
import type { AssetInfosOpt } from "lib/services/assetService";
import type { MsgExitPoolDetails } from "lib/utils/tx/types";

import { PoolLPCard, LiquidityDivider, PoolAssetsGrid } from "./components";

interface MsgExitPoolDetailProps {
  txHash: string;
  blockHeight: number;
  msgIndex: number;
  msg: MsgExitPoolDetails;
  assetInfos: AssetInfosOpt;
  isOpened: boolean;
  ampCopierSection?: string;
}

export const MsgExitPoolDetail = ({
  txHash,
  blockHeight,
  msgIndex,
  msg,
  assetInfos,
  isOpened,
  ampCopierSection,
}: MsgExitPoolDetailProps) => (
  <Flex w="full" alignItems="start" gap={12}>
    <Flex direction="column" gap={1}>
      <Text variant="body2" textColor="pebble.500" fontWeight={500}>
        Block height
      </Text>
      <ExplorerLink
        value={blockHeight.toString()}
        type="block_height"
        showCopyOnHover
        ampCopierSection={ampCopierSection}
      />
    </Flex>
    <Box w="full">
      <PoolLPCard
        msgIndex={msgIndex}
        poolId={msg.pool_id}
        msgShareAmount={msg.share_in_amount}
        assetInfos={assetInfos}
        isJoin={false}
        isOpened={isOpened}
        ampCopierSection={ampCopierSection}
      />
      <LiquidityDivider />
      <PoolAssetsGrid
        txHash={txHash}
        msgIndex={msgIndex}
        isJoin={false}
        assetInfos={assetInfos}
        isOpened={isOpened}
        ampCopierSection={ampCopierSection}
      />
    </Box>
  </Flex>
);
