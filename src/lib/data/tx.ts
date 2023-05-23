export type TypeUrl =
  // cosmwasm
  | "/cosmwasm.wasm.v1.MsgStoreCode"
  | "/cosmwasm.wasm.v1.MsgInstantiateContract"
  | "/cosmwasm.wasm.v1.MsgInstantiateContract2"
  | "/cosmwasm.wasm.v1.MsgExecuteContract"
  | "/cosmwasm.wasm.v1.MsgMigrateContract"
  | "/cosmwasm.wasm.v1.MsgUpdateAdmin"
  | "/cosmwasm.wasm.v1.MsgClearAdmin"
  // cosmos-sdk
  | "/cosmos.bank.v1beta1.MsgSend"
  | "/cosmos.bank.v1beta1.MsgMultiSend"
  | "/cosmos.authz.v1beta1.MsgGrant"
  | "/cosmos.authz.v1beta1.MsgRevoke"
  | "/cosmos.authz.v1beta1.MsgExec"
  | "/cosmos.crisis.v1beta1.MsgVerifyInvariant"
  | "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress"
  | "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward"
  | "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission"
  | "/cosmos.distribution.v1beta1.MsgFundCommunityPool"
  | "/cosmos.evidence.v1beta1.MsgSubmitEvidence"
  | "/cosmos.feegrant.v1beta1.MsgGrantAllowance"
  | "/cosmos.feegrant.v1beta1.MsgRevokeAllowance"
  | "/cosmos.gov.v1beta1.MsgSubmitProposal"
  | "/cosmos.gov.v1beta1.MsgVote"
  | "/cosmos.gov.v1beta1.MsgVoteWeighted"
  | "/cosmos.gov.v1beta1.MsgDeposit"
  | "/cosmos.slashing.v1beta1.MsgUnjail"
  | "/cosmos.staking.v1beta1.MsgCreateValidator"
  | "/cosmos.staking.v1beta1.MsgEditValidator"
  | "/cosmos.staking.v1beta1.MsgDelegate"
  | "/cosmos.staking.v1beta1.MsgUndelegate"
  | "/cosmos.staking.v1beta1.MsgBeginRedelegate"
  | "/ibc.applications.transfer.v1.MsgTransfer"
  | "/ibc.core.client.v1.MsgCreateClient"
  | "/ibc.core.client.v1.MsgUpdateClient"
  | "/ibc.core.client.v1.MsgUpgradeClient"
  | "/ibc.core.client.v1.MsgSubmitMisbehaviour"
  | "/ibc.core.connection.v1.MsgConnectionOpenInit"
  | "/ibc.core.connection.v1.MsgConnectionOpenTry"
  | "/ibc.core.connection.v1.MsgConnectionOpenAck"
  | "/ibc.core.connection.v1.MsgConnectionOpenConfirm"
  | "/ibc.core.channel.v1.MsgChannelOpenInit"
  | "/ibc.core.channel.v1.MsgChannelOpenTry"
  | "/ibc.core.channel.v1.MsgChannelOpenAck"
  | "/ibc.core.channel.v1.MsgChannelOpenConfirm"
  | "/ibc.core.channel.v1.MsgChannelCloseInit"
  | "/ibc.core.channel.v1.MsgChannelCloseConfirm"
  | "/ibc.core.channel.v1.MsgRecvPacket"
  | "/ibc.core.channel.v1.MsgTimeout"
  | "/ibc.core.channel.v1.MsgTimeoutOnClose"
  | "/ibc.core.channel.v1.MsgAcknowledgement"
  // osmosis
  | "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn"
  | "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut"
  | "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool"
  | "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool"
  | "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors"
  | "/osmosis.gamm.v1beta1.MsgJoinPool"
  | "/osmosis.gamm.v1beta1.MsgExitPool"
  | "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn"
  | "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut"
  | "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn"
  | "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut"
  | "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn"
  | "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut"
  | "/osmosis.incentives.MsgCreateGauge"
  | "/osmosis.incentives.MsgAddToGauge"
  | "/osmosis.lockup.MsgLockTokens"
  | "/osmosis.lockup.MsgBeginUnlockingAll"
  | "/osmosis.lockup.MsgBeginUnlocking"
  | "/osmosis.lockup.MsgForceUnlock"
  | "/osmosis.lockup.MsgExtendLockup"
  | "/osmosis.superfluid.MsgSuperfluidDelegate"
  | "/osmosis.superfluid.MsgSuperfluidUndelegate"
  | "/osmosis.superfluid.MsgSuperfluidUnbondLock"
  | "/osmosis.superfluid.MsgLockAndSuperfluidDelegate"
  | "/osmosis.superfluid.MsgUnPoolWhitelistedPool"
  | "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock"
  | "/osmosis.tokenfactory.v1beta1.MsgCreateDenom"
  | "/osmosis.tokenfactory.v1beta1.MsgMint"
  | "/osmosis.tokenfactory.v1beta1.MsgBurn"
  | "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin"
  | "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata"
  | "/osmosis.protorev.v1beta1.MsgSetHotRoutes"
  | "/osmosis.protorev.v1beta1.MsgSetBaseDenoms"
  | "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount"
  | "/osmosis.protorev.v1beta1.MsgSetPoolWeights"
  | "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx"
  | "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock"
  | "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet"
  | "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet"
  | "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet"
  | "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards"
  | "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens"
  | "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference";
