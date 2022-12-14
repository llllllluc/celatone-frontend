import { Icon, Text } from "@chakra-ui/react";
import type { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import type { EncodeObject } from "@cosmjs/proto-signing";
import type { StdFee } from "@cosmjs/stargate";
import { pipe } from "@rx-stream/pipe";
import { MdCloudUpload } from "react-icons/md";
import type { Observable } from "rxjs";

import { ExplorerLink } from "lib/components/ExplorerLink";
import type { TxResultRendering } from "lib/types";
import { TxStreamPhase } from "lib/types";
import { formatUFee } from "lib/utils";

import { catchTxError, postTx, sendingTx } from "./common";

interface ResendTxParams {
  address: string;
  client: SigningCosmWasmClient;
  onTxSucceed?: (txHash: string) => void;
  fee: StdFee;
  messages: EncodeObject[];
}

export const resendTx = ({
  address,
  client,
  onTxSucceed,
  fee,
  messages,
}: ResendTxParams): Observable<TxResultRendering> => {
  return pipe(
    sendingTx(fee),
    postTx({
      postFn: () => client.signAndBroadcast(address, messages, fee),
    }),
    ({ value: txInfo }) => {
      onTxSucceed?.(txInfo.transactionHash);
      return {
        value: null,
        phase: TxStreamPhase.SUCCEED,
        receipts: [
          {
            title: "Tx Hash",
            value: txInfo.transactionHash,
            html: (
              <ExplorerLink type="tx_hash" value={txInfo.transactionHash} />
            ),
          },
          {
            title: "Tx Fee",
            value: `${formatUFee(
              txInfo.events.find((e) => e.type === "tx")?.attributes[0].value ??
                "0u"
            )}`,
          },
        ],
        receiptInfo: {
          header: "Transaction Completed",
          description: (
            <Text fontWeight="700">
              Your transaction was successfully resent.
            </Text>
          ),
          headerIcon: (
            <Icon as={MdCloudUpload} fontSize="24px" color="text.dark" />
          ),
        },
        actionVariant: "resend",
      } as TxResultRendering;
    }
  )().pipe(catchTxError());
};
