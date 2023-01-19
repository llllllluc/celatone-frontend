/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

const documents = {
  "\n  query getBlockTimestampByHeightQuery($height: Int!) {\n    blocks_by_pk(height: $height) {\n      timestamp\n    }\n  }\n":
    types.GetBlockTimestampByHeightQueryDocument,
  "\n  query getCodeListQuery {\n    codes(limit: 500, offset: 0, order_by: { id: desc }) {\n      id\n      contracts_aggregate {\n        aggregate {\n          count\n        }\n      }\n      account {\n        uploader: address\n      }\n      access_config_permission\n      access_config_addresses\n    }\n  }\n":
    types.GetCodeListQueryDocument,
  "\n  query getCodeListByUserQuery($walletAddr: String!) {\n    codes(\n      where: { account: { address: { _eq: $walletAddr } } }\n      limit: 500\n      offset: 0\n      order_by: { id: desc }\n    ) {\n      id\n      contracts_aggregate {\n        aggregate {\n          count\n        }\n      }\n      account {\n        uploader: address\n      }\n      access_config_permission\n      access_config_addresses\n    }\n  }\n":
    types.GetCodeListByUserQueryDocument,
  "\n  query getCodeListByIDsQuery($ids: [Int!]!) {\n    codes(where: { id: { _in: $ids } }) {\n      id\n      contracts_aggregate {\n        aggregate {\n          count\n        }\n      }\n      account {\n        uploader: address\n      }\n      access_config_permission\n      access_config_addresses\n    }\n  }\n":
    types.GetCodeListByIDsQueryDocument,
  "\n  query getInstantiatedCountByUserQueryDocument($walletAddr: String!) {\n    contracts_aggregate(\n      where: { transaction: { account: { address: { _eq: $walletAddr } } } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n":
    types.GetInstantiatedCountByUserQueryDocumentDocument,
  "\n  query getInstantiatedListByUserQueryDocument($walletAddr: String!) {\n    contracts(\n      where: { transaction: { account: { address: { _eq: $walletAddr } } } }\n      limit: 500\n      offset: 0\n      order_by: { transaction: { block: { timestamp: desc } } }\n    ) {\n      label\n      address\n    }\n  }\n":
    types.GetInstantiatedListByUserQueryDocumentDocument,
  '\n  query getInstantiateDetailByContractQueryDocument($contractAddress: String!) {\n    contracts_by_pk(address: $contractAddress) {\n      init_msg\n      transaction {\n        hash\n      }\n      contract_proposals(\n        where: {\n          proposal: {\n            type: { _in: ["InstantiateContract", "InstantiateContract2"] }\n          }\n        }\n        limit: 1\n      ) {\n        proposal {\n          id\n          title\n        }\n      }\n    }\n  }\n':
    types.GetInstantiateDetailByContractQueryDocumentDocument,
  "\n  query getAdminByContractAddressesQueryDocument(\n    $contractAddresses: [String!]\n  ) {\n    contracts(where: { address: { _in: $contractAddresses } }) {\n      address\n      account {\n        address\n      }\n    }\n  }\n":
    types.GetAdminByContractAddressesQueryDocumentDocument,
  "\n  query getExecuteTxsByContractAddress(\n    $contractAddress: String!\n    $offset: Int!\n    $pageSize: Int!\n  ) {\n    contract_transactions(\n      where: {\n        contract: { address: { _eq: $contractAddress } }\n        transaction: { is_execute: { _eq: true } }\n      }\n      order_by: { transaction: { block: { timestamp: desc } } }\n      limit: $pageSize\n      offset: $offset\n    ) {\n      transaction {\n        hash\n        messages\n        success\n        account {\n          address\n        }\n        block {\n          height\n          timestamp\n        }\n      }\n    }\n  }\n":
    types.GetExecuteTxsByContractAddressDocument,
  "\n  query getExecuteTxsCountByContractAddress($contractAddress: String!) {\n    contract_transactions_aggregate(\n      where: {\n        contract: { address: { _eq: $contractAddress } }\n        transaction: { is_execute: { _eq: true } }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n":
    types.GetExecuteTxsCountByContractAddressDocument,
  "\n  query getMigrationHistoriesByContractAddress(\n    $contractAddress: String!\n    $offset: Int!\n    $pageSize: Int!\n  ) {\n    contract_histories(\n      where: { contract: { address: { _eq: $contractAddress } } }\n      order_by: { block: { timestamp: desc } }\n      limit: $pageSize\n      offset: $offset\n    ) {\n      code_id\n      account {\n        address\n      }\n      block {\n        height\n        timestamp\n      }\n      remark\n    }\n  }\n":
    types.GetMigrationHistoriesByContractAddressDocument,
  "\n  query getMigrationHistoriesCountByContractAddress($contractAddress: String!) {\n    contract_histories_aggregate(\n      where: { contract: { address: { _eq: $contractAddress } } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n":
    types.GetMigrationHistoriesCountByContractAddressDocument,
  "\n  query getRelatedProposalsByContractAddress(\n    $contractAddress: String!\n    $offset: Int!\n    $pageSize: Int!\n  ) {\n    contract_proposals(\n      where: { contract: { address: { _eq: $contractAddress } } }\n      order_by: { proposal_id: desc }\n      offset: $offset\n      limit: $pageSize\n    ) {\n      proposal {\n        title\n        status\n        voting_end_time\n        deposit_end_time\n        type\n        account {\n          address\n        }\n      }\n      proposal_id\n      resolved_height\n    }\n  }\n":
    types.GetRelatedProposalsByContractAddressDocument,
  "\n  query getRelatedProposalsCountByContractAddress($contractAddress: String!) {\n    contract_proposals_aggregate(\n      where: { contract: { address: { _eq: $contractAddress } } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n":
    types.GetRelatedProposalsCountByContractAddressDocument,
  "\n  query getContractListByAdmin($address: String!) {\n    contracts(\n      where: { account: { address: { _eq: $address } } }\n      order_by: { id: desc }\n    ) {\n      address\n      label\n      accountByInitBy {\n        address\n      }\n    }\n  }\n":
    types.GetContractListByAdminDocument,
  "\n  query getContractListByCodeId($codeId: Int!, $offset: Int!, $pageSize: Int!) {\n    contracts(\n      where: { code_id: { _eq: $codeId } }\n      order_by: { transaction: { block: { timestamp: desc } } }\n      offset: $offset\n      limit: $pageSize\n    ) {\n      address\n      label\n      account {\n        address\n      }\n      transaction {\n        block {\n          timestamp\n        }\n        account {\n          address\n        }\n      }\n      contract_histories(order_by: { block: { timestamp: desc } }, limit: 1) {\n        block {\n          timestamp\n        }\n        account {\n          address\n        }\n      }\n    }\n  }\n":
    types.GetContractListByCodeIdDocument,
  "\n  query getContractListCountByCodeId($codeId: Int!) {\n    contracts_aggregate(where: { code_id: { _eq: $codeId } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n":
    types.GetContractListCountByCodeIdDocument,
  "\n  query getCodeInfoByCodeId($codeId: Int!) {\n    codes_by_pk(id: $codeId) {\n      id\n      account {\n        address\n      }\n      transaction {\n        hash\n        block {\n          height\n          timestamp\n        }\n      }\n      code_proposals {\n        proposal_id\n        block {\n          height\n          timestamp\n        }\n      }\n      access_config_permission\n      access_config_addresses\n    }\n  }\n":
    types.GetCodeInfoByCodeIdDocument,
  "\n  query getTxsByContractAddress(\n    $contractAddress: String!\n    $offset: Int!\n    $pageSize: Int!\n  ) {\n    contract_transactions(\n      where: { contract: { address: { _eq: $contractAddress } } }\n      order_by: { transaction: { block: { timestamp: desc } } }\n      offset: $offset\n      limit: $pageSize\n    ) {\n      transaction {\n        hash\n        success\n        messages\n        account {\n          address\n        }\n        block {\n          height\n          timestamp\n        }\n        is_execute\n        is_ibc\n        is_instantiate\n        is_send\n        is_store_code\n        is_migrate\n        is_update_admin\n        is_clear_admin\n      }\n    }\n  }\n":
    types.GetTxsByContractAddressDocument,
  "\n  query getTxsCountByContractAddress($contractAddress: String!) {\n    contract_transactions_aggregate(\n      where: { contract: { address: { _eq: $contractAddress } } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n":
    types.GetTxsCountByContractAddressDocument,
};

export function graphql(
  source: "\n  query getBlockTimestampByHeightQuery($height: Int!) {\n    blocks_by_pk(height: $height) {\n      timestamp\n    }\n  }\n"
): typeof documents["\n  query getBlockTimestampByHeightQuery($height: Int!) {\n    blocks_by_pk(height: $height) {\n      timestamp\n    }\n  }\n"];
export function graphql(
  source: "\n  query getCodeListQuery {\n    codes(limit: 500, offset: 0, order_by: { id: desc }) {\n      id\n      contracts_aggregate {\n        aggregate {\n          count\n        }\n      }\n      account {\n        uploader: address\n      }\n      access_config_permission\n      access_config_addresses\n    }\n  }\n"
): typeof documents["\n  query getCodeListQuery {\n    codes(limit: 500, offset: 0, order_by: { id: desc }) {\n      id\n      contracts_aggregate {\n        aggregate {\n          count\n        }\n      }\n      account {\n        uploader: address\n      }\n      access_config_permission\n      access_config_addresses\n    }\n  }\n"];
export function graphql(
  source: "\n  query getCodeListByUserQuery($walletAddr: String!) {\n    codes(\n      where: { account: { address: { _eq: $walletAddr } } }\n      limit: 500\n      offset: 0\n      order_by: { id: desc }\n    ) {\n      id\n      contracts_aggregate {\n        aggregate {\n          count\n        }\n      }\n      account {\n        uploader: address\n      }\n      access_config_permission\n      access_config_addresses\n    }\n  }\n"
): typeof documents["\n  query getCodeListByUserQuery($walletAddr: String!) {\n    codes(\n      where: { account: { address: { _eq: $walletAddr } } }\n      limit: 500\n      offset: 0\n      order_by: { id: desc }\n    ) {\n      id\n      contracts_aggregate {\n        aggregate {\n          count\n        }\n      }\n      account {\n        uploader: address\n      }\n      access_config_permission\n      access_config_addresses\n    }\n  }\n"];
export function graphql(
  source: "\n  query getCodeListByIDsQuery($ids: [Int!]!) {\n    codes(where: { id: { _in: $ids } }) {\n      id\n      contracts_aggregate {\n        aggregate {\n          count\n        }\n      }\n      account {\n        uploader: address\n      }\n      access_config_permission\n      access_config_addresses\n    }\n  }\n"
): typeof documents["\n  query getCodeListByIDsQuery($ids: [Int!]!) {\n    codes(where: { id: { _in: $ids } }) {\n      id\n      contracts_aggregate {\n        aggregate {\n          count\n        }\n      }\n      account {\n        uploader: address\n      }\n      access_config_permission\n      access_config_addresses\n    }\n  }\n"];
export function graphql(
  source: "\n  query getInstantiatedCountByUserQueryDocument($walletAddr: String!) {\n    contracts_aggregate(\n      where: { transaction: { account: { address: { _eq: $walletAddr } } } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"
): typeof documents["\n  query getInstantiatedCountByUserQueryDocument($walletAddr: String!) {\n    contracts_aggregate(\n      where: { transaction: { account: { address: { _eq: $walletAddr } } } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
export function graphql(
  source: "\n  query getInstantiatedListByUserQueryDocument($walletAddr: String!) {\n    contracts(\n      where: { transaction: { account: { address: { _eq: $walletAddr } } } }\n      limit: 500\n      offset: 0\n      order_by: { transaction: { block: { timestamp: desc } } }\n    ) {\n      label\n      address\n    }\n  }\n"
): typeof documents["\n  query getInstantiatedListByUserQueryDocument($walletAddr: String!) {\n    contracts(\n      where: { transaction: { account: { address: { _eq: $walletAddr } } } }\n      limit: 500\n      offset: 0\n      order_by: { transaction: { block: { timestamp: desc } } }\n    ) {\n      label\n      address\n    }\n  }\n"];
export function graphql(
  source: '\n  query getInstantiateDetailByContractQueryDocument($contractAddress: String!) {\n    contracts_by_pk(address: $contractAddress) {\n      init_msg\n      transaction {\n        hash\n      }\n      contract_proposals(\n        where: {\n          proposal: {\n            type: { _in: ["InstantiateContract", "InstantiateContract2"] }\n          }\n        }\n        limit: 1\n      ) {\n        proposal {\n          id\n          title\n        }\n      }\n    }\n  }\n'
): typeof documents['\n  query getInstantiateDetailByContractQueryDocument($contractAddress: String!) {\n    contracts_by_pk(address: $contractAddress) {\n      init_msg\n      transaction {\n        hash\n      }\n      contract_proposals(\n        where: {\n          proposal: {\n            type: { _in: ["InstantiateContract", "InstantiateContract2"] }\n          }\n        }\n        limit: 1\n      ) {\n        proposal {\n          id\n          title\n        }\n      }\n    }\n  }\n'];
export function graphql(
  source: "\n  query getAdminByContractAddressesQueryDocument(\n    $contractAddresses: [String!]\n  ) {\n    contracts(where: { address: { _in: $contractAddresses } }) {\n      address\n      account {\n        address\n      }\n    }\n  }\n"
): typeof documents["\n  query getAdminByContractAddressesQueryDocument(\n    $contractAddresses: [String!]\n  ) {\n    contracts(where: { address: { _in: $contractAddresses } }) {\n      address\n      account {\n        address\n      }\n    }\n  }\n"];
export function graphql(
  source: "\n  query getExecuteTxsByContractAddress(\n    $contractAddress: String!\n    $offset: Int!\n    $pageSize: Int!\n  ) {\n    contract_transactions(\n      where: {\n        contract: { address: { _eq: $contractAddress } }\n        transaction: { is_execute: { _eq: true } }\n      }\n      order_by: { transaction: { block: { timestamp: desc } } }\n      limit: $pageSize\n      offset: $offset\n    ) {\n      transaction {\n        hash\n        messages\n        success\n        account {\n          address\n        }\n        block {\n          height\n          timestamp\n        }\n      }\n    }\n  }\n"
): typeof documents["\n  query getExecuteTxsByContractAddress(\n    $contractAddress: String!\n    $offset: Int!\n    $pageSize: Int!\n  ) {\n    contract_transactions(\n      where: {\n        contract: { address: { _eq: $contractAddress } }\n        transaction: { is_execute: { _eq: true } }\n      }\n      order_by: { transaction: { block: { timestamp: desc } } }\n      limit: $pageSize\n      offset: $offset\n    ) {\n      transaction {\n        hash\n        messages\n        success\n        account {\n          address\n        }\n        block {\n          height\n          timestamp\n        }\n      }\n    }\n  }\n"];
export function graphql(
  source: "\n  query getExecuteTxsCountByContractAddress($contractAddress: String!) {\n    contract_transactions_aggregate(\n      where: {\n        contract: { address: { _eq: $contractAddress } }\n        transaction: { is_execute: { _eq: true } }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"
): typeof documents["\n  query getExecuteTxsCountByContractAddress($contractAddress: String!) {\n    contract_transactions_aggregate(\n      where: {\n        contract: { address: { _eq: $contractAddress } }\n        transaction: { is_execute: { _eq: true } }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
export function graphql(
  source: "\n  query getMigrationHistoriesByContractAddress(\n    $contractAddress: String!\n    $offset: Int!\n    $pageSize: Int!\n  ) {\n    contract_histories(\n      where: { contract: { address: { _eq: $contractAddress } } }\n      order_by: { block: { timestamp: desc } }\n      limit: $pageSize\n      offset: $offset\n    ) {\n      code_id\n      account {\n        address\n      }\n      block {\n        height\n        timestamp\n      }\n      remark\n    }\n  }\n"
): typeof documents["\n  query getMigrationHistoriesByContractAddress(\n    $contractAddress: String!\n    $offset: Int!\n    $pageSize: Int!\n  ) {\n    contract_histories(\n      where: { contract: { address: { _eq: $contractAddress } } }\n      order_by: { block: { timestamp: desc } }\n      limit: $pageSize\n      offset: $offset\n    ) {\n      code_id\n      account {\n        address\n      }\n      block {\n        height\n        timestamp\n      }\n      remark\n    }\n  }\n"];
export function graphql(
  source: "\n  query getMigrationHistoriesCountByContractAddress($contractAddress: String!) {\n    contract_histories_aggregate(\n      where: { contract: { address: { _eq: $contractAddress } } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"
): typeof documents["\n  query getMigrationHistoriesCountByContractAddress($contractAddress: String!) {\n    contract_histories_aggregate(\n      where: { contract: { address: { _eq: $contractAddress } } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
export function graphql(
  source: "\n  query getRelatedProposalsByContractAddress(\n    $contractAddress: String!\n    $offset: Int!\n    $pageSize: Int!\n  ) {\n    contract_proposals(\n      where: { contract: { address: { _eq: $contractAddress } } }\n      order_by: { proposal_id: desc }\n      offset: $offset\n      limit: $pageSize\n    ) {\n      proposal {\n        title\n        status\n        voting_end_time\n        deposit_end_time\n        type\n        account {\n          address\n        }\n      }\n      proposal_id\n      resolved_height\n    }\n  }\n"
): typeof documents["\n  query getRelatedProposalsByContractAddress(\n    $contractAddress: String!\n    $offset: Int!\n    $pageSize: Int!\n  ) {\n    contract_proposals(\n      where: { contract: { address: { _eq: $contractAddress } } }\n      order_by: { proposal_id: desc }\n      offset: $offset\n      limit: $pageSize\n    ) {\n      proposal {\n        title\n        status\n        voting_end_time\n        deposit_end_time\n        type\n        account {\n          address\n        }\n      }\n      proposal_id\n      resolved_height\n    }\n  }\n"];
export function graphql(
  source: "\n  query getRelatedProposalsCountByContractAddress($contractAddress: String!) {\n    contract_proposals_aggregate(\n      where: { contract: { address: { _eq: $contractAddress } } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"
): typeof documents["\n  query getRelatedProposalsCountByContractAddress($contractAddress: String!) {\n    contract_proposals_aggregate(\n      where: { contract: { address: { _eq: $contractAddress } } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
export function graphql(
  source: "\n  query getContractListByAdmin($address: String!) {\n    contracts(\n      where: { account: { address: { _eq: $address } } }\n      order_by: { id: desc }\n    ) {\n      address\n      label\n      accountByInitBy {\n        address\n      }\n    }\n  }\n"
): typeof documents["\n  query getContractListByAdmin($address: String!) {\n    contracts(\n      where: { account: { address: { _eq: $address } } }\n      order_by: { id: desc }\n    ) {\n      address\n      label\n      accountByInitBy {\n        address\n      }\n    }\n  }\n"];
export function graphql(
  source: "\n  query getContractListByCodeId($codeId: Int!, $offset: Int!, $pageSize: Int!) {\n    contracts(\n      where: { code_id: { _eq: $codeId } }\n      order_by: { transaction: { block: { timestamp: desc } } }\n      offset: $offset\n      limit: $pageSize\n    ) {\n      address\n      label\n      account {\n        address\n      }\n      transaction {\n        block {\n          timestamp\n        }\n        account {\n          address\n        }\n      }\n      contract_histories(order_by: { block: { timestamp: desc } }, limit: 1) {\n        block {\n          timestamp\n        }\n        account {\n          address\n        }\n      }\n    }\n  }\n"
): typeof documents["\n  query getContractListByCodeId($codeId: Int!, $offset: Int!, $pageSize: Int!) {\n    contracts(\n      where: { code_id: { _eq: $codeId } }\n      order_by: { transaction: { block: { timestamp: desc } } }\n      offset: $offset\n      limit: $pageSize\n    ) {\n      address\n      label\n      account {\n        address\n      }\n      transaction {\n        block {\n          timestamp\n        }\n        account {\n          address\n        }\n      }\n      contract_histories(order_by: { block: { timestamp: desc } }, limit: 1) {\n        block {\n          timestamp\n        }\n        account {\n          address\n        }\n      }\n    }\n  }\n"];
export function graphql(
  source: "\n  query getContractListCountByCodeId($codeId: Int!) {\n    contracts_aggregate(where: { code_id: { _eq: $codeId } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"
): typeof documents["\n  query getContractListCountByCodeId($codeId: Int!) {\n    contracts_aggregate(where: { code_id: { _eq: $codeId } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
export function graphql(
  source: "\n  query getCodeInfoByCodeId($codeId: Int!) {\n    codes_by_pk(id: $codeId) {\n      id\n      account {\n        address\n      }\n      transaction {\n        hash\n        block {\n          height\n          timestamp\n        }\n      }\n      code_proposals {\n        proposal_id\n        block {\n          height\n          timestamp\n        }\n      }\n      access_config_permission\n      access_config_addresses\n    }\n  }\n"
): typeof documents["\n  query getCodeInfoByCodeId($codeId: Int!) {\n    codes_by_pk(id: $codeId) {\n      id\n      account {\n        address\n      }\n      transaction {\n        hash\n        block {\n          height\n          timestamp\n        }\n      }\n      code_proposals {\n        proposal_id\n        block {\n          height\n          timestamp\n        }\n      }\n      access_config_permission\n      access_config_addresses\n    }\n  }\n"];
export function graphql(
  source: "\n  query getTxsByContractAddress(\n    $contractAddress: String!\n    $offset: Int!\n    $pageSize: Int!\n  ) {\n    contract_transactions(\n      where: { contract: { address: { _eq: $contractAddress } } }\n      order_by: { transaction: { block: { timestamp: desc } } }\n      offset: $offset\n      limit: $pageSize\n    ) {\n      transaction {\n        hash\n        success\n        messages\n        account {\n          address\n        }\n        block {\n          height\n          timestamp\n        }\n        is_execute\n        is_ibc\n        is_instantiate\n        is_send\n        is_store_code\n        is_migrate\n        is_update_admin\n        is_clear_admin\n      }\n    }\n  }\n"
): typeof documents["\n  query getTxsByContractAddress(\n    $contractAddress: String!\n    $offset: Int!\n    $pageSize: Int!\n  ) {\n    contract_transactions(\n      where: { contract: { address: { _eq: $contractAddress } } }\n      order_by: { transaction: { block: { timestamp: desc } } }\n      offset: $offset\n      limit: $pageSize\n    ) {\n      transaction {\n        hash\n        success\n        messages\n        account {\n          address\n        }\n        block {\n          height\n          timestamp\n        }\n        is_execute\n        is_ibc\n        is_instantiate\n        is_send\n        is_store_code\n        is_migrate\n        is_update_admin\n        is_clear_admin\n      }\n    }\n  }\n"];
export function graphql(
  source: "\n  query getTxsCountByContractAddress($contractAddress: String!) {\n    contract_transactions_aggregate(\n      where: { contract: { address: { _eq: $contractAddress } } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"
): typeof documents["\n  query getTxsCountByContractAddress($contractAddress: String!) {\n    contract_transactions_aggregate(\n      where: { contract: { address: { _eq: $contractAddress } } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
