import { Icon } from "@chakra-ui/react";
import { IoIosWarning } from "react-icons/io";
import type { OperatorFunction } from "rxjs";
import { catchError } from "rxjs";

import { ExplorerLink } from "lib/components/ExplorerLink";
import type { TxResultRendering } from "lib/types";
import { TxStreamPhase } from "lib/types";

const getReceiptInfo = (error: Error) =>
  error.message === "Request rejected"
    ? {
        header: "Rejected by user",
      }
    : {
        header: "Transaction Failed",
        description: error.message,
      };

const getTxHashReceipt = (txHash?: string) =>
  txHash
    ? [
        {
          title: "Tx Hash",
          value: txHash,
          html: <ExplorerLink type="tx_hash" value={txHash ?? ""} />,
        },
      ]
    : [];

const getActionVariant = (txHash?: string) =>
  !txHash ? "rejected" : undefined;

export const catchTxError = (
  onTxFailed?: () => void
): OperatorFunction<TxResultRendering, TxResultRendering> => {
  return catchError((error: Error) => {
    const txHash = error.message.match("(?:tx )(.*?)(?= at)")?.at(1);

    onTxFailed?.();
    return Promise.resolve<TxResultRendering>({
      value: null,
      phase: TxStreamPhase.FAILED,
      receiptInfo: {
        ...getReceiptInfo(error),
        headerIcon: (
          <Icon as={IoIosWarning} fontSize="24px" color="error.light" />
        ),
      },
      receipts: getTxHashReceipt(txHash),
      actionVariant: getActionVariant(),
    });
  });
};
