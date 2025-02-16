import type { OperatorFunction } from "rxjs";
import { catchError } from "rxjs";

import { ExplorerLink } from "lib/components/ExplorerLink";
import { CustomIcon } from "lib/components/icon";
import { AmpEvent, AmpTrack } from "lib/services/amplitude";
import type {
  ActionVariant,
  ReceiptInfo,
  TxReceipt,
  TxResultRendering,
} from "lib/types";
import { TxStreamPhase } from "lib/types";

const getReceiptInfo = (
  error: Error
): Pick<ReceiptInfo, "header" | "errorMsg"> =>
  error.message === "Request rejected"
    ? {
        header: "Rejected by user",
      }
    : {
        header: "Transaction Failed",
        errorMsg: error.message,
      };

const getTxHashReceipts = (txHash?: string): TxReceipt[] =>
  txHash
    ? [
        {
          title: "Tx Hash",
          value: txHash,
          html: <ExplorerLink type="tx_hash" value={txHash} openNewTab />,
        },
      ]
    : [];

const getActionVariant = (isRejected: boolean): ActionVariant =>
  isRejected ? "rejected" : "failed";

export const catchTxError = (
  onTxFailed?: () => void
): OperatorFunction<TxResultRendering, TxResultRendering> => {
  return catchError((error: Error) => {
    const txHash = error.message.match("(?:tx )(.*?)(?= at)")?.at(1);
    AmpTrack(
      error.message === "Request rejected"
        ? AmpEvent.TX_REJECTED
        : AmpEvent.TX_FAILED
    );
    onTxFailed?.();
    return Promise.resolve<TxResultRendering>({
      value: null,
      phase: TxStreamPhase.FAILED,
      receiptInfo: {
        ...getReceiptInfo(error),
        headerIcon: (
          <CustomIcon
            name="alert-circle-solid"
            color="error.light"
            boxSize={5}
          />
        ),
      },
      receipts: getTxHashReceipts(txHash),
      actionVariant: getActionVariant(!txHash),
    });
  });
};
