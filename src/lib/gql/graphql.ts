/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _varchar: any;
  accounttype: any;
  bytea: any;
  json: any;
  pooltype: any;
  proposalstatus: any;
  timestamp: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]>;
  _gt?: InputMaybe<Scalars["Boolean"]>;
  _gte?: InputMaybe<Scalars["Boolean"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Boolean"]>;
  _lte?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Scalars["Boolean"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "account_transactions" */
export type Account_Transactions = {
  __typename?: "account_transactions";
  /** An object relationship */
  account: Accounts;
  account_id: Scalars["Int"];
  /** An object relationship */
  block: Blocks;
  block_height: Scalars["Int"];
  is_signer: Scalars["Boolean"];
  /** An object relationship */
  transaction: Transactions;
  transaction_id: Scalars["Int"];
};

/** aggregated selection of "account_transactions" */
export type Account_Transactions_Aggregate = {
  __typename?: "account_transactions_aggregate";
  aggregate?: Maybe<Account_Transactions_Aggregate_Fields>;
  nodes: Array<Account_Transactions>;
};

export type Account_Transactions_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Account_Transactions_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Account_Transactions_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Account_Transactions_Aggregate_Bool_Exp_Count>;
};

export type Account_Transactions_Aggregate_Bool_Exp_Bool_And = {
  arguments: Account_Transactions_Select_Column_Account_Transactions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Account_Transactions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Account_Transactions_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Account_Transactions_Select_Column_Account_Transactions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Account_Transactions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Account_Transactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Account_Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Account_Transactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "account_transactions" */
export type Account_Transactions_Aggregate_Fields = {
  __typename?: "account_transactions_aggregate_fields";
  avg?: Maybe<Account_Transactions_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Account_Transactions_Max_Fields>;
  min?: Maybe<Account_Transactions_Min_Fields>;
  stddev?: Maybe<Account_Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Account_Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Account_Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Account_Transactions_Sum_Fields>;
  var_pop?: Maybe<Account_Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Account_Transactions_Var_Samp_Fields>;
  variance?: Maybe<Account_Transactions_Variance_Fields>;
};

/** aggregate fields of "account_transactions" */
export type Account_Transactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "account_transactions" */
export type Account_Transactions_Aggregate_Order_By = {
  avg?: InputMaybe<Account_Transactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Account_Transactions_Max_Order_By>;
  min?: InputMaybe<Account_Transactions_Min_Order_By>;
  stddev?: InputMaybe<Account_Transactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Account_Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Account_Transactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Account_Transactions_Sum_Order_By>;
  var_pop?: InputMaybe<Account_Transactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Account_Transactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Account_Transactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "account_transactions" */
export type Account_Transactions_Arr_Rel_Insert_Input = {
  data: Array<Account_Transactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Account_Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Account_Transactions_Avg_Fields = {
  __typename?: "account_transactions_avg_fields";
  account_id?: Maybe<Scalars["Float"]>;
  block_height?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "account_transactions" */
export type Account_Transactions_Avg_Order_By = {
  account_id?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "account_transactions". All fields are combined with a logical 'AND'. */
export type Account_Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Transactions_Bool_Exp>>;
  _not?: InputMaybe<Account_Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Transactions_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  account_id?: InputMaybe<Int_Comparison_Exp>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  block_height?: InputMaybe<Int_Comparison_Exp>;
  is_signer?: InputMaybe<Boolean_Comparison_Exp>;
  transaction?: InputMaybe<Transactions_Bool_Exp>;
  transaction_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "account_transactions" */
export enum Account_Transactions_Constraint {
  /** unique or primary key constraint on columns "transaction_id", "account_id" */
  AccountTransactionsPkey = "account_transactions_pkey",
}

/** input type for incrementing numeric columns in table "account_transactions" */
export type Account_Transactions_Inc_Input = {
  account_id?: InputMaybe<Scalars["Int"]>;
  block_height?: InputMaybe<Scalars["Int"]>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "account_transactions" */
export type Account_Transactions_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars["Int"]>;
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  block_height?: InputMaybe<Scalars["Int"]>;
  is_signer?: InputMaybe<Scalars["Boolean"]>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Account_Transactions_Max_Fields = {
  __typename?: "account_transactions_max_fields";
  account_id?: Maybe<Scalars["Int"]>;
  block_height?: Maybe<Scalars["Int"]>;
  transaction_id?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "account_transactions" */
export type Account_Transactions_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Account_Transactions_Min_Fields = {
  __typename?: "account_transactions_min_fields";
  account_id?: Maybe<Scalars["Int"]>;
  block_height?: Maybe<Scalars["Int"]>;
  transaction_id?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "account_transactions" */
export type Account_Transactions_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "account_transactions" */
export type Account_Transactions_Mutation_Response = {
  __typename?: "account_transactions_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Account_Transactions>;
};

/** on_conflict condition type for table "account_transactions" */
export type Account_Transactions_On_Conflict = {
  constraint: Account_Transactions_Constraint;
  update_columns?: Array<Account_Transactions_Update_Column>;
  where?: InputMaybe<Account_Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "account_transactions". */
export type Account_Transactions_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  block?: InputMaybe<Blocks_Order_By>;
  block_height?: InputMaybe<Order_By>;
  is_signer?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transactions_Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account_transactions */
export type Account_Transactions_Pk_Columns_Input = {
  account_id: Scalars["Int"];
  transaction_id: Scalars["Int"];
};

/** select columns of table "account_transactions" */
export enum Account_Transactions_Select_Column {
  /** column name */
  AccountId = "account_id",
  /** column name */
  BlockHeight = "block_height",
  /** column name */
  IsSigner = "is_signer",
  /** column name */
  TransactionId = "transaction_id",
}

/** select "account_transactions_aggregate_bool_exp_bool_and_arguments_columns" columns of table "account_transactions" */
export enum Account_Transactions_Select_Column_Account_Transactions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsSigner = "is_signer",
}

/** select "account_transactions_aggregate_bool_exp_bool_or_arguments_columns" columns of table "account_transactions" */
export enum Account_Transactions_Select_Column_Account_Transactions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsSigner = "is_signer",
}

/** input type for updating data in table "account_transactions" */
export type Account_Transactions_Set_Input = {
  account_id?: InputMaybe<Scalars["Int"]>;
  block_height?: InputMaybe<Scalars["Int"]>;
  is_signer?: InputMaybe<Scalars["Boolean"]>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Account_Transactions_Stddev_Fields = {
  __typename?: "account_transactions_stddev_fields";
  account_id?: Maybe<Scalars["Float"]>;
  block_height?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "account_transactions" */
export type Account_Transactions_Stddev_Order_By = {
  account_id?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Account_Transactions_Stddev_Pop_Fields = {
  __typename?: "account_transactions_stddev_pop_fields";
  account_id?: Maybe<Scalars["Float"]>;
  block_height?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "account_transactions" */
export type Account_Transactions_Stddev_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Account_Transactions_Stddev_Samp_Fields = {
  __typename?: "account_transactions_stddev_samp_fields";
  account_id?: Maybe<Scalars["Float"]>;
  block_height?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "account_transactions" */
export type Account_Transactions_Stddev_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "account_transactions" */
export type Account_Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Transactions_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars["Int"]>;
  block_height?: InputMaybe<Scalars["Int"]>;
  is_signer?: InputMaybe<Scalars["Boolean"]>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Account_Transactions_Sum_Fields = {
  __typename?: "account_transactions_sum_fields";
  account_id?: Maybe<Scalars["Int"]>;
  block_height?: Maybe<Scalars["Int"]>;
  transaction_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "account_transactions" */
export type Account_Transactions_Sum_Order_By = {
  account_id?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** update columns of table "account_transactions" */
export enum Account_Transactions_Update_Column {
  /** column name */
  AccountId = "account_id",
  /** column name */
  BlockHeight = "block_height",
  /** column name */
  IsSigner = "is_signer",
  /** column name */
  TransactionId = "transaction_id",
}

export type Account_Transactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Account_Transactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Account_Transactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Account_Transactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Account_Transactions_Var_Pop_Fields = {
  __typename?: "account_transactions_var_pop_fields";
  account_id?: Maybe<Scalars["Float"]>;
  block_height?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "account_transactions" */
export type Account_Transactions_Var_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Account_Transactions_Var_Samp_Fields = {
  __typename?: "account_transactions_var_samp_fields";
  account_id?: Maybe<Scalars["Float"]>;
  block_height?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "account_transactions" */
export type Account_Transactions_Var_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Account_Transactions_Variance_Fields = {
  __typename?: "account_transactions_variance_fields";
  account_id?: Maybe<Scalars["Float"]>;
  block_height?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "account_transactions" */
export type Account_Transactions_Variance_Order_By = {
  account_id?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: "accounts";
  /** An array relationship */
  account_transactions: Array<Account_Transactions>;
  /** An aggregate relationship */
  account_transactions_aggregate: Account_Transactions_Aggregate;
  address: Scalars["String"];
  /** An array relationship */
  codes: Array<Codes>;
  /** An aggregate relationship */
  codes_aggregate: Codes_Aggregate;
  /** An array relationship */
  contract_histories: Array<Contract_Histories>;
  /** An aggregate relationship */
  contract_histories_aggregate: Contract_Histories_Aggregate;
  /** An array relationship */
  contracts: Array<Contracts>;
  /** An array relationship */
  contractsByInitBy: Array<Contracts>;
  /** An aggregate relationship */
  contractsByInitBy_aggregate: Contracts_Aggregate;
  /** An aggregate relationship */
  contracts_aggregate: Contracts_Aggregate;
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  /** An array relationship */
  pools: Array<Pools>;
  /** An aggregate relationship */
  pools_aggregate: Pools_Aggregate;
  /** An array relationship */
  proposals: Array<Proposals>;
  /** An aggregate relationship */
  proposals_aggregate: Proposals_Aggregate;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  type?: Maybe<Scalars["accounttype"]>;
  /** An array relationship */
  validators: Array<Validators>;
  /** An aggregate relationship */
  validators_aggregate: Validators_Aggregate;
};

/** columns and relationships of "accounts" */
export type AccountsAccount_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Account_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Account_Transactions_Order_By>>;
  where?: InputMaybe<Account_Transactions_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsAccount_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Account_Transactions_Order_By>>;
  where?: InputMaybe<Account_Transactions_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsCodesArgs = {
  distinct_on?: InputMaybe<Array<Codes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Codes_Order_By>>;
  where?: InputMaybe<Codes_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsCodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Codes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Codes_Order_By>>;
  where?: InputMaybe<Codes_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsContract_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Contract_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Histories_Order_By>>;
  where?: InputMaybe<Contract_Histories_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsContract_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Histories_Order_By>>;
  where?: InputMaybe<Contract_Histories_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsContractsByInitByArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsContractsByInitBy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsPoolsArgs = {
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsPools_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsProposalsArgs = {
  distinct_on?: InputMaybe<Array<Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Proposals_Order_By>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Proposals_Order_By>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsValidatorsArgs = {
  distinct_on?: InputMaybe<Array<Validators_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Validators_Order_By>>;
  where?: InputMaybe<Validators_Bool_Exp>;
};

/** columns and relationships of "accounts" */
export type AccountsValidators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validators_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Validators_Order_By>>;
  where?: InputMaybe<Validators_Bool_Exp>;
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: "accounts_aggregate";
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: "accounts_aggregate_fields";
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: "accounts_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  account_transactions?: InputMaybe<Account_Transactions_Bool_Exp>;
  account_transactions_aggregate?: InputMaybe<Account_Transactions_Aggregate_Bool_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  codes?: InputMaybe<Codes_Bool_Exp>;
  codes_aggregate?: InputMaybe<Codes_Aggregate_Bool_Exp>;
  contract_histories?: InputMaybe<Contract_Histories_Bool_Exp>;
  contract_histories_aggregate?: InputMaybe<Contract_Histories_Aggregate_Bool_Exp>;
  contracts?: InputMaybe<Contracts_Bool_Exp>;
  contractsByInitBy?: InputMaybe<Contracts_Bool_Exp>;
  contractsByInitBy_aggregate?: InputMaybe<Contracts_Aggregate_Bool_Exp>;
  contracts_aggregate?: InputMaybe<Contracts_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pools?: InputMaybe<Pools_Bool_Exp>;
  pools_aggregate?: InputMaybe<Pools_Aggregate_Bool_Exp>;
  proposals?: InputMaybe<Proposals_Bool_Exp>;
  proposals_aggregate?: InputMaybe<Proposals_Aggregate_Bool_Exp>;
  transactions?: InputMaybe<Transactions_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Bool_Exp>;
  type?: InputMaybe<Accounttype_Comparison_Exp>;
  validators?: InputMaybe<Validators_Bool_Exp>;
  validators_aggregate?: InputMaybe<Validators_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsIdKey = "accounts_id_key",
  /** unique or primary key constraint on columns "address" */
  AccountsPkey = "accounts_pkey",
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  account_transactions?: InputMaybe<Account_Transactions_Arr_Rel_Insert_Input>;
  address?: InputMaybe<Scalars["String"]>;
  codes?: InputMaybe<Codes_Arr_Rel_Insert_Input>;
  contract_histories?: InputMaybe<Contract_Histories_Arr_Rel_Insert_Input>;
  contracts?: InputMaybe<Contracts_Arr_Rel_Insert_Input>;
  contractsByInitBy?: InputMaybe<Contracts_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  pools?: InputMaybe<Pools_Arr_Rel_Insert_Input>;
  proposals?: InputMaybe<Proposals_Arr_Rel_Insert_Input>;
  transactions?: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars["accounttype"]>;
  validators?: InputMaybe<Validators_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: "accounts_max_fields";
  address?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["accounttype"]>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: "accounts_min_fields";
  address?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["accounttype"]>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: "accounts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** input type for inserting object relation for remote table "accounts" */
export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  account_transactions_aggregate?: InputMaybe<Account_Transactions_Aggregate_Order_By>;
  address?: InputMaybe<Order_By>;
  codes_aggregate?: InputMaybe<Codes_Aggregate_Order_By>;
  contract_histories_aggregate?: InputMaybe<Contract_Histories_Aggregate_Order_By>;
  contractsByInitBy_aggregate?: InputMaybe<Contracts_Aggregate_Order_By>;
  contracts_aggregate?: InputMaybe<Contracts_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pools_aggregate?: InputMaybe<Pools_Aggregate_Order_By>;
  proposals_aggregate?: InputMaybe<Proposals_Aggregate_Order_By>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  validators_aggregate?: InputMaybe<Validators_Aggregate_Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  address: Scalars["String"];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  Address = "address",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Type = "type",
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  address?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["accounttype"]>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: "accounts_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: "accounts_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: "accounts_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["accounttype"]>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: "accounts_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  Address = "address",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Type = "type",
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: "accounts_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: "accounts_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: "accounts_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to compare columns of type "accounttype". All fields are combined with logical 'AND'. */
export type Accounttype_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["accounttype"]>;
  _gt?: InputMaybe<Scalars["accounttype"]>;
  _gte?: InputMaybe<Scalars["accounttype"]>;
  _in?: InputMaybe<Array<Scalars["accounttype"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["accounttype"]>;
  _lte?: InputMaybe<Scalars["accounttype"]>;
  _neq?: InputMaybe<Scalars["accounttype"]>;
  _nin?: InputMaybe<Array<Scalars["accounttype"]>>;
};

/** columns and relationships of "begin_block_events" */
export type Begin_Block_Events = {
  __typename?: "begin_block_events";
  /** An object relationship */
  block: Blocks;
  block_height: Scalars["Int"];
  events: Scalars["json"];
};

/** columns and relationships of "begin_block_events" */
export type Begin_Block_EventsEventsArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "begin_block_events" */
export type Begin_Block_Events_Aggregate = {
  __typename?: "begin_block_events_aggregate";
  aggregate?: Maybe<Begin_Block_Events_Aggregate_Fields>;
  nodes: Array<Begin_Block_Events>;
};

export type Begin_Block_Events_Aggregate_Bool_Exp = {
  count?: InputMaybe<Begin_Block_Events_Aggregate_Bool_Exp_Count>;
};

export type Begin_Block_Events_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Begin_Block_Events_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Begin_Block_Events_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "begin_block_events" */
export type Begin_Block_Events_Aggregate_Fields = {
  __typename?: "begin_block_events_aggregate_fields";
  avg?: Maybe<Begin_Block_Events_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Begin_Block_Events_Max_Fields>;
  min?: Maybe<Begin_Block_Events_Min_Fields>;
  stddev?: Maybe<Begin_Block_Events_Stddev_Fields>;
  stddev_pop?: Maybe<Begin_Block_Events_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Begin_Block_Events_Stddev_Samp_Fields>;
  sum?: Maybe<Begin_Block_Events_Sum_Fields>;
  var_pop?: Maybe<Begin_Block_Events_Var_Pop_Fields>;
  var_samp?: Maybe<Begin_Block_Events_Var_Samp_Fields>;
  variance?: Maybe<Begin_Block_Events_Variance_Fields>;
};

/** aggregate fields of "begin_block_events" */
export type Begin_Block_Events_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Begin_Block_Events_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "begin_block_events" */
export type Begin_Block_Events_Aggregate_Order_By = {
  avg?: InputMaybe<Begin_Block_Events_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Begin_Block_Events_Max_Order_By>;
  min?: InputMaybe<Begin_Block_Events_Min_Order_By>;
  stddev?: InputMaybe<Begin_Block_Events_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Begin_Block_Events_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Begin_Block_Events_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Begin_Block_Events_Sum_Order_By>;
  var_pop?: InputMaybe<Begin_Block_Events_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Begin_Block_Events_Var_Samp_Order_By>;
  variance?: InputMaybe<Begin_Block_Events_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "begin_block_events" */
export type Begin_Block_Events_Arr_Rel_Insert_Input = {
  data: Array<Begin_Block_Events_Insert_Input>;
};

/** aggregate avg on columns */
export type Begin_Block_Events_Avg_Fields = {
  __typename?: "begin_block_events_avg_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "begin_block_events" */
export type Begin_Block_Events_Avg_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "begin_block_events". All fields are combined with a logical 'AND'. */
export type Begin_Block_Events_Bool_Exp = {
  _and?: InputMaybe<Array<Begin_Block_Events_Bool_Exp>>;
  _not?: InputMaybe<Begin_Block_Events_Bool_Exp>;
  _or?: InputMaybe<Array<Begin_Block_Events_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  block_height?: InputMaybe<Int_Comparison_Exp>;
  events?: InputMaybe<Json_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "begin_block_events" */
export type Begin_Block_Events_Inc_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "begin_block_events" */
export type Begin_Block_Events_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  block_height?: InputMaybe<Scalars["Int"]>;
  events?: InputMaybe<Scalars["json"]>;
};

/** aggregate max on columns */
export type Begin_Block_Events_Max_Fields = {
  __typename?: "begin_block_events_max_fields";
  block_height?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "begin_block_events" */
export type Begin_Block_Events_Max_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Begin_Block_Events_Min_Fields = {
  __typename?: "begin_block_events_min_fields";
  block_height?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "begin_block_events" */
export type Begin_Block_Events_Min_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "begin_block_events" */
export type Begin_Block_Events_Mutation_Response = {
  __typename?: "begin_block_events_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Begin_Block_Events>;
};

/** Ordering options when selecting data from "begin_block_events". */
export type Begin_Block_Events_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  block_height?: InputMaybe<Order_By>;
  events?: InputMaybe<Order_By>;
};

/** select columns of table "begin_block_events" */
export enum Begin_Block_Events_Select_Column {
  /** column name */
  BlockHeight = "block_height",
  /** column name */
  Events = "events",
}

/** input type for updating data in table "begin_block_events" */
export type Begin_Block_Events_Set_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  events?: InputMaybe<Scalars["json"]>;
};

/** aggregate stddev on columns */
export type Begin_Block_Events_Stddev_Fields = {
  __typename?: "begin_block_events_stddev_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "begin_block_events" */
export type Begin_Block_Events_Stddev_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Begin_Block_Events_Stddev_Pop_Fields = {
  __typename?: "begin_block_events_stddev_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "begin_block_events" */
export type Begin_Block_Events_Stddev_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Begin_Block_Events_Stddev_Samp_Fields = {
  __typename?: "begin_block_events_stddev_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "begin_block_events" */
export type Begin_Block_Events_Stddev_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "begin_block_events" */
export type Begin_Block_Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Begin_Block_Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Begin_Block_Events_Stream_Cursor_Value_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  events?: InputMaybe<Scalars["json"]>;
};

/** aggregate sum on columns */
export type Begin_Block_Events_Sum_Fields = {
  __typename?: "begin_block_events_sum_fields";
  block_height?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "begin_block_events" */
export type Begin_Block_Events_Sum_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

export type Begin_Block_Events_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Begin_Block_Events_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Begin_Block_Events_Set_Input>;
  /** filter the rows which have to be updated */
  where: Begin_Block_Events_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Begin_Block_Events_Var_Pop_Fields = {
  __typename?: "begin_block_events_var_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "begin_block_events" */
export type Begin_Block_Events_Var_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Begin_Block_Events_Var_Samp_Fields = {
  __typename?: "begin_block_events_var_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "begin_block_events" */
export type Begin_Block_Events_Var_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Begin_Block_Events_Variance_Fields = {
  __typename?: "begin_block_events_variance_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "begin_block_events" */
export type Begin_Block_Events_Variance_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** columns and relationships of "blocks" */
export type Blocks = {
  __typename?: "blocks";
  /** An array relationship */
  account_transactions: Array<Account_Transactions>;
  /** An aggregate relationship */
  account_transactions_aggregate: Account_Transactions_Aggregate;
  /** An array relationship */
  begin_block_events: Array<Begin_Block_Events>;
  /** An aggregate relationship */
  begin_block_events_aggregate: Begin_Block_Events_Aggregate;
  /** An array relationship */
  code_proposals: Array<Code_Proposals>;
  /** An aggregate relationship */
  code_proposals_aggregate: Code_Proposals_Aggregate;
  /** An array relationship */
  contract_histories: Array<Contract_Histories>;
  /** An aggregate relationship */
  contract_histories_aggregate: Contract_Histories_Aggregate;
  /** An array relationship */
  contract_proposals: Array<Contract_Proposals>;
  /** An aggregate relationship */
  contract_proposals_aggregate: Contract_Proposals_Aggregate;
  /** An array relationship */
  end_block_events: Array<End_Block_Events>;
  /** An aggregate relationship */
  end_block_events_aggregate: End_Block_Events_Aggregate;
  hash: Scalars["bytea"];
  height: Scalars["Int"];
  /** An array relationship */
  lcd_tx_results: Array<Lcd_Tx_Results>;
  /** An aggregate relationship */
  lcd_tx_results_aggregate: Lcd_Tx_Results_Aggregate;
  /** An array relationship */
  pool_transactions: Array<Pool_Transactions>;
  /** An aggregate relationship */
  pool_transactions_aggregate: Pool_Transactions_Aggregate;
  /** An array relationship */
  profit_by_denoms: Array<Profit_By_Denoms>;
  /** An aggregate relationship */
  profit_by_denoms_aggregate: Profit_By_Denoms_Aggregate;
  /** An array relationship */
  profit_by_routes: Array<Profit_By_Routes>;
  /** An aggregate relationship */
  profit_by_routes_aggregate: Profit_By_Routes_Aggregate;
  /** An array relationship */
  proposals: Array<Proposals>;
  /** An aggregate relationship */
  proposals_aggregate: Proposals_Aggregate;
  proposer?: Maybe<Scalars["String"]>;
  timestamp: Scalars["timestamp"];
  /** An array relationship */
  trade_by_routes: Array<Trade_By_Routes>;
  /** An aggregate relationship */
  trade_by_routes_aggregate: Trade_By_Routes_Aggregate;
  /** An array relationship */
  trades: Array<Trades>;
  /** An aggregate relationship */
  trades_aggregate: Trades_Aggregate;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** An object relationship */
  validator?: Maybe<Validators>;
};

/** columns and relationships of "blocks" */
export type BlocksAccount_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Account_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Account_Transactions_Order_By>>;
  where?: InputMaybe<Account_Transactions_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksAccount_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Account_Transactions_Order_By>>;
  where?: InputMaybe<Account_Transactions_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksBegin_Block_EventsArgs = {
  distinct_on?: InputMaybe<Array<Begin_Block_Events_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Begin_Block_Events_Order_By>>;
  where?: InputMaybe<Begin_Block_Events_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksBegin_Block_Events_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Begin_Block_Events_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Begin_Block_Events_Order_By>>;
  where?: InputMaybe<Begin_Block_Events_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksCode_ProposalsArgs = {
  distinct_on?: InputMaybe<Array<Code_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Code_Proposals_Order_By>>;
  where?: InputMaybe<Code_Proposals_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksCode_Proposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Code_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Code_Proposals_Order_By>>;
  where?: InputMaybe<Code_Proposals_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksContract_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Contract_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Histories_Order_By>>;
  where?: InputMaybe<Contract_Histories_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksContract_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Histories_Order_By>>;
  where?: InputMaybe<Contract_Histories_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksContract_ProposalsArgs = {
  distinct_on?: InputMaybe<Array<Contract_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Proposals_Order_By>>;
  where?: InputMaybe<Contract_Proposals_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksContract_Proposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Proposals_Order_By>>;
  where?: InputMaybe<Contract_Proposals_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksEnd_Block_EventsArgs = {
  distinct_on?: InputMaybe<Array<End_Block_Events_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<End_Block_Events_Order_By>>;
  where?: InputMaybe<End_Block_Events_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksEnd_Block_Events_AggregateArgs = {
  distinct_on?: InputMaybe<Array<End_Block_Events_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<End_Block_Events_Order_By>>;
  where?: InputMaybe<End_Block_Events_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksLcd_Tx_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Lcd_Tx_Results_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Lcd_Tx_Results_Order_By>>;
  where?: InputMaybe<Lcd_Tx_Results_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksLcd_Tx_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lcd_Tx_Results_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Lcd_Tx_Results_Order_By>>;
  where?: InputMaybe<Lcd_Tx_Results_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksPool_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Pool_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pool_Transactions_Order_By>>;
  where?: InputMaybe<Pool_Transactions_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksPool_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pool_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pool_Transactions_Order_By>>;
  where?: InputMaybe<Pool_Transactions_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksProfit_By_DenomsArgs = {
  distinct_on?: InputMaybe<Array<Profit_By_Denoms_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Profit_By_Denoms_Order_By>>;
  where?: InputMaybe<Profit_By_Denoms_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksProfit_By_Denoms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profit_By_Denoms_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Profit_By_Denoms_Order_By>>;
  where?: InputMaybe<Profit_By_Denoms_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksProfit_By_RoutesArgs = {
  distinct_on?: InputMaybe<Array<Profit_By_Routes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Profit_By_Routes_Order_By>>;
  where?: InputMaybe<Profit_By_Routes_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksProfit_By_Routes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profit_By_Routes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Profit_By_Routes_Order_By>>;
  where?: InputMaybe<Profit_By_Routes_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksProposalsArgs = {
  distinct_on?: InputMaybe<Array<Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Proposals_Order_By>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Proposals_Order_By>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksTrade_By_RoutesArgs = {
  distinct_on?: InputMaybe<Array<Trade_By_Routes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Trade_By_Routes_Order_By>>;
  where?: InputMaybe<Trade_By_Routes_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksTrade_By_Routes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_By_Routes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Trade_By_Routes_Order_By>>;
  where?: InputMaybe<Trade_By_Routes_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksTradesArgs = {
  distinct_on?: InputMaybe<Array<Trades_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Trades_Order_By>>;
  where?: InputMaybe<Trades_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksTrades_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trades_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Trades_Order_By>>;
  where?: InputMaybe<Trades_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** aggregated selection of "blocks" */
export type Blocks_Aggregate = {
  __typename?: "blocks_aggregate";
  aggregate?: Maybe<Blocks_Aggregate_Fields>;
  nodes: Array<Blocks>;
};

export type Blocks_Aggregate_Bool_Exp = {
  count?: InputMaybe<Blocks_Aggregate_Bool_Exp_Count>;
};

export type Blocks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Blocks_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Blocks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "blocks" */
export type Blocks_Aggregate_Fields = {
  __typename?: "blocks_aggregate_fields";
  avg?: Maybe<Blocks_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Blocks_Max_Fields>;
  min?: Maybe<Blocks_Min_Fields>;
  stddev?: Maybe<Blocks_Stddev_Fields>;
  stddev_pop?: Maybe<Blocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Blocks_Stddev_Samp_Fields>;
  sum?: Maybe<Blocks_Sum_Fields>;
  var_pop?: Maybe<Blocks_Var_Pop_Fields>;
  var_samp?: Maybe<Blocks_Var_Samp_Fields>;
  variance?: Maybe<Blocks_Variance_Fields>;
};

/** aggregate fields of "blocks" */
export type Blocks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blocks_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "blocks" */
export type Blocks_Aggregate_Order_By = {
  avg?: InputMaybe<Blocks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Blocks_Max_Order_By>;
  min?: InputMaybe<Blocks_Min_Order_By>;
  stddev?: InputMaybe<Blocks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Blocks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Blocks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Blocks_Sum_Order_By>;
  var_pop?: InputMaybe<Blocks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Blocks_Var_Samp_Order_By>;
  variance?: InputMaybe<Blocks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "blocks" */
export type Blocks_Arr_Rel_Insert_Input = {
  data: Array<Blocks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Blocks_On_Conflict>;
};

/** aggregate avg on columns */
export type Blocks_Avg_Fields = {
  __typename?: "blocks_avg_fields";
  height?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "blocks" */
export type Blocks_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "blocks". All fields are combined with a logical 'AND'. */
export type Blocks_Bool_Exp = {
  _and?: InputMaybe<Array<Blocks_Bool_Exp>>;
  _not?: InputMaybe<Blocks_Bool_Exp>;
  _or?: InputMaybe<Array<Blocks_Bool_Exp>>;
  account_transactions?: InputMaybe<Account_Transactions_Bool_Exp>;
  account_transactions_aggregate?: InputMaybe<Account_Transactions_Aggregate_Bool_Exp>;
  begin_block_events?: InputMaybe<Begin_Block_Events_Bool_Exp>;
  begin_block_events_aggregate?: InputMaybe<Begin_Block_Events_Aggregate_Bool_Exp>;
  code_proposals?: InputMaybe<Code_Proposals_Bool_Exp>;
  code_proposals_aggregate?: InputMaybe<Code_Proposals_Aggregate_Bool_Exp>;
  contract_histories?: InputMaybe<Contract_Histories_Bool_Exp>;
  contract_histories_aggregate?: InputMaybe<Contract_Histories_Aggregate_Bool_Exp>;
  contract_proposals?: InputMaybe<Contract_Proposals_Bool_Exp>;
  contract_proposals_aggregate?: InputMaybe<Contract_Proposals_Aggregate_Bool_Exp>;
  end_block_events?: InputMaybe<End_Block_Events_Bool_Exp>;
  end_block_events_aggregate?: InputMaybe<End_Block_Events_Aggregate_Bool_Exp>;
  hash?: InputMaybe<Bytea_Comparison_Exp>;
  height?: InputMaybe<Int_Comparison_Exp>;
  lcd_tx_results?: InputMaybe<Lcd_Tx_Results_Bool_Exp>;
  lcd_tx_results_aggregate?: InputMaybe<Lcd_Tx_Results_Aggregate_Bool_Exp>;
  pool_transactions?: InputMaybe<Pool_Transactions_Bool_Exp>;
  pool_transactions_aggregate?: InputMaybe<Pool_Transactions_Aggregate_Bool_Exp>;
  profit_by_denoms?: InputMaybe<Profit_By_Denoms_Bool_Exp>;
  profit_by_denoms_aggregate?: InputMaybe<Profit_By_Denoms_Aggregate_Bool_Exp>;
  profit_by_routes?: InputMaybe<Profit_By_Routes_Bool_Exp>;
  profit_by_routes_aggregate?: InputMaybe<Profit_By_Routes_Aggregate_Bool_Exp>;
  proposals?: InputMaybe<Proposals_Bool_Exp>;
  proposals_aggregate?: InputMaybe<Proposals_Aggregate_Bool_Exp>;
  proposer?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  trade_by_routes?: InputMaybe<Trade_By_Routes_Bool_Exp>;
  trade_by_routes_aggregate?: InputMaybe<Trade_By_Routes_Aggregate_Bool_Exp>;
  trades?: InputMaybe<Trades_Bool_Exp>;
  trades_aggregate?: InputMaybe<Trades_Aggregate_Bool_Exp>;
  transactions?: InputMaybe<Transactions_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Bool_Exp>;
  validator?: InputMaybe<Validators_Bool_Exp>;
};

/** unique or primary key constraints on table "blocks" */
export enum Blocks_Constraint {
  /** unique or primary key constraint on columns "height" */
  BlocksPkey = "blocks_pkey",
}

/** input type for incrementing numeric columns in table "blocks" */
export type Blocks_Inc_Input = {
  height?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "blocks" */
export type Blocks_Insert_Input = {
  account_transactions?: InputMaybe<Account_Transactions_Arr_Rel_Insert_Input>;
  begin_block_events?: InputMaybe<Begin_Block_Events_Arr_Rel_Insert_Input>;
  code_proposals?: InputMaybe<Code_Proposals_Arr_Rel_Insert_Input>;
  contract_histories?: InputMaybe<Contract_Histories_Arr_Rel_Insert_Input>;
  contract_proposals?: InputMaybe<Contract_Proposals_Arr_Rel_Insert_Input>;
  end_block_events?: InputMaybe<End_Block_Events_Arr_Rel_Insert_Input>;
  hash?: InputMaybe<Scalars["bytea"]>;
  height?: InputMaybe<Scalars["Int"]>;
  lcd_tx_results?: InputMaybe<Lcd_Tx_Results_Arr_Rel_Insert_Input>;
  pool_transactions?: InputMaybe<Pool_Transactions_Arr_Rel_Insert_Input>;
  profit_by_denoms?: InputMaybe<Profit_By_Denoms_Arr_Rel_Insert_Input>;
  profit_by_routes?: InputMaybe<Profit_By_Routes_Arr_Rel_Insert_Input>;
  proposals?: InputMaybe<Proposals_Arr_Rel_Insert_Input>;
  proposer?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["timestamp"]>;
  trade_by_routes?: InputMaybe<Trade_By_Routes_Arr_Rel_Insert_Input>;
  trades?: InputMaybe<Trades_Arr_Rel_Insert_Input>;
  transactions?: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  validator?: InputMaybe<Validators_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Blocks_Max_Fields = {
  __typename?: "blocks_max_fields";
  height?: Maybe<Scalars["Int"]>;
  proposer?: Maybe<Scalars["String"]>;
  timestamp?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "blocks" */
export type Blocks_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Blocks_Min_Fields = {
  __typename?: "blocks_min_fields";
  height?: Maybe<Scalars["Int"]>;
  proposer?: Maybe<Scalars["String"]>;
  timestamp?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "blocks" */
export type Blocks_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "blocks" */
export type Blocks_Mutation_Response = {
  __typename?: "blocks_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Blocks>;
};

/** input type for inserting object relation for remote table "blocks" */
export type Blocks_Obj_Rel_Insert_Input = {
  data: Blocks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Blocks_On_Conflict>;
};

/** on_conflict condition type for table "blocks" */
export type Blocks_On_Conflict = {
  constraint: Blocks_Constraint;
  update_columns?: Array<Blocks_Update_Column>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

/** Ordering options when selecting data from "blocks". */
export type Blocks_Order_By = {
  account_transactions_aggregate?: InputMaybe<Account_Transactions_Aggregate_Order_By>;
  begin_block_events_aggregate?: InputMaybe<Begin_Block_Events_Aggregate_Order_By>;
  code_proposals_aggregate?: InputMaybe<Code_Proposals_Aggregate_Order_By>;
  contract_histories_aggregate?: InputMaybe<Contract_Histories_Aggregate_Order_By>;
  contract_proposals_aggregate?: InputMaybe<Contract_Proposals_Aggregate_Order_By>;
  end_block_events_aggregate?: InputMaybe<End_Block_Events_Aggregate_Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  lcd_tx_results_aggregate?: InputMaybe<Lcd_Tx_Results_Aggregate_Order_By>;
  pool_transactions_aggregate?: InputMaybe<Pool_Transactions_Aggregate_Order_By>;
  profit_by_denoms_aggregate?: InputMaybe<Profit_By_Denoms_Aggregate_Order_By>;
  profit_by_routes_aggregate?: InputMaybe<Profit_By_Routes_Aggregate_Order_By>;
  proposals_aggregate?: InputMaybe<Proposals_Aggregate_Order_By>;
  proposer?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  trade_by_routes_aggregate?: InputMaybe<Trade_By_Routes_Aggregate_Order_By>;
  trades_aggregate?: InputMaybe<Trades_Aggregate_Order_By>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  validator?: InputMaybe<Validators_Order_By>;
};

/** primary key columns input for table: blocks */
export type Blocks_Pk_Columns_Input = {
  height: Scalars["Int"];
};

/** select columns of table "blocks" */
export enum Blocks_Select_Column {
  /** column name */
  Hash = "hash",
  /** column name */
  Height = "height",
  /** column name */
  Proposer = "proposer",
  /** column name */
  Timestamp = "timestamp",
}

/** input type for updating data in table "blocks" */
export type Blocks_Set_Input = {
  hash?: InputMaybe<Scalars["bytea"]>;
  height?: InputMaybe<Scalars["Int"]>;
  proposer?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["timestamp"]>;
};

/** aggregate stddev on columns */
export type Blocks_Stddev_Fields = {
  __typename?: "blocks_stddev_fields";
  height?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "blocks" */
export type Blocks_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Blocks_Stddev_Pop_Fields = {
  __typename?: "blocks_stddev_pop_fields";
  height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "blocks" */
export type Blocks_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Blocks_Stddev_Samp_Fields = {
  __typename?: "blocks_stddev_samp_fields";
  height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "blocks" */
export type Blocks_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "blocks" */
export type Blocks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Blocks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Blocks_Stream_Cursor_Value_Input = {
  hash?: InputMaybe<Scalars["bytea"]>;
  height?: InputMaybe<Scalars["Int"]>;
  proposer?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["timestamp"]>;
};

/** aggregate sum on columns */
export type Blocks_Sum_Fields = {
  __typename?: "blocks_sum_fields";
  height?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "blocks" */
export type Blocks_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** update columns of table "blocks" */
export enum Blocks_Update_Column {
  /** column name */
  Hash = "hash",
  /** column name */
  Height = "height",
  /** column name */
  Proposer = "proposer",
  /** column name */
  Timestamp = "timestamp",
}

export type Blocks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Blocks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Blocks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Blocks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Blocks_Var_Pop_Fields = {
  __typename?: "blocks_var_pop_fields";
  height?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "blocks" */
export type Blocks_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Blocks_Var_Samp_Fields = {
  __typename?: "blocks_var_samp_fields";
  height?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "blocks" */
export type Blocks_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Blocks_Variance_Fields = {
  __typename?: "blocks_variance_fields";
  height?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "blocks" */
export type Blocks_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["bytea"]>;
  _gt?: InputMaybe<Scalars["bytea"]>;
  _gte?: InputMaybe<Scalars["bytea"]>;
  _in?: InputMaybe<Array<Scalars["bytea"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["bytea"]>;
  _lte?: InputMaybe<Scalars["bytea"]>;
  _neq?: InputMaybe<Scalars["bytea"]>;
  _nin?: InputMaybe<Array<Scalars["bytea"]>>;
};

/** columns and relationships of "code_proposals" */
export type Code_Proposals = {
  __typename?: "code_proposals";
  /** An object relationship */
  block?: Maybe<Blocks>;
  /** An object relationship */
  code: Codes;
  code_id: Scalars["Int"];
  /** An object relationship */
  proposal: Proposals;
  proposal_id: Scalars["Int"];
  resolved_height?: Maybe<Scalars["Int"]>;
};

/** aggregated selection of "code_proposals" */
export type Code_Proposals_Aggregate = {
  __typename?: "code_proposals_aggregate";
  aggregate?: Maybe<Code_Proposals_Aggregate_Fields>;
  nodes: Array<Code_Proposals>;
};

export type Code_Proposals_Aggregate_Bool_Exp = {
  count?: InputMaybe<Code_Proposals_Aggregate_Bool_Exp_Count>;
};

export type Code_Proposals_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Code_Proposals_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Code_Proposals_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "code_proposals" */
export type Code_Proposals_Aggregate_Fields = {
  __typename?: "code_proposals_aggregate_fields";
  avg?: Maybe<Code_Proposals_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Code_Proposals_Max_Fields>;
  min?: Maybe<Code_Proposals_Min_Fields>;
  stddev?: Maybe<Code_Proposals_Stddev_Fields>;
  stddev_pop?: Maybe<Code_Proposals_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Code_Proposals_Stddev_Samp_Fields>;
  sum?: Maybe<Code_Proposals_Sum_Fields>;
  var_pop?: Maybe<Code_Proposals_Var_Pop_Fields>;
  var_samp?: Maybe<Code_Proposals_Var_Samp_Fields>;
  variance?: Maybe<Code_Proposals_Variance_Fields>;
};

/** aggregate fields of "code_proposals" */
export type Code_Proposals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Code_Proposals_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "code_proposals" */
export type Code_Proposals_Aggregate_Order_By = {
  avg?: InputMaybe<Code_Proposals_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Code_Proposals_Max_Order_By>;
  min?: InputMaybe<Code_Proposals_Min_Order_By>;
  stddev?: InputMaybe<Code_Proposals_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Code_Proposals_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Code_Proposals_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Code_Proposals_Sum_Order_By>;
  var_pop?: InputMaybe<Code_Proposals_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Code_Proposals_Var_Samp_Order_By>;
  variance?: InputMaybe<Code_Proposals_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "code_proposals" */
export type Code_Proposals_Arr_Rel_Insert_Input = {
  data: Array<Code_Proposals_Insert_Input>;
};

/** aggregate avg on columns */
export type Code_Proposals_Avg_Fields = {
  __typename?: "code_proposals_avg_fields";
  code_id?: Maybe<Scalars["Float"]>;
  proposal_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "code_proposals" */
export type Code_Proposals_Avg_Order_By = {
  code_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "code_proposals". All fields are combined with a logical 'AND'. */
export type Code_Proposals_Bool_Exp = {
  _and?: InputMaybe<Array<Code_Proposals_Bool_Exp>>;
  _not?: InputMaybe<Code_Proposals_Bool_Exp>;
  _or?: InputMaybe<Array<Code_Proposals_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  code?: InputMaybe<Codes_Bool_Exp>;
  code_id?: InputMaybe<Int_Comparison_Exp>;
  proposal?: InputMaybe<Proposals_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  resolved_height?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "code_proposals" */
export type Code_Proposals_Inc_Input = {
  code_id?: InputMaybe<Scalars["Int"]>;
  proposal_id?: InputMaybe<Scalars["Int"]>;
  resolved_height?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "code_proposals" */
export type Code_Proposals_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  code?: InputMaybe<Codes_Obj_Rel_Insert_Input>;
  code_id?: InputMaybe<Scalars["Int"]>;
  proposal?: InputMaybe<Proposals_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars["Int"]>;
  resolved_height?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Code_Proposals_Max_Fields = {
  __typename?: "code_proposals_max_fields";
  code_id?: Maybe<Scalars["Int"]>;
  proposal_id?: Maybe<Scalars["Int"]>;
  resolved_height?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "code_proposals" */
export type Code_Proposals_Max_Order_By = {
  code_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Code_Proposals_Min_Fields = {
  __typename?: "code_proposals_min_fields";
  code_id?: Maybe<Scalars["Int"]>;
  proposal_id?: Maybe<Scalars["Int"]>;
  resolved_height?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "code_proposals" */
export type Code_Proposals_Min_Order_By = {
  code_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "code_proposals" */
export type Code_Proposals_Mutation_Response = {
  __typename?: "code_proposals_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Code_Proposals>;
};

/** Ordering options when selecting data from "code_proposals". */
export type Code_Proposals_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  code?: InputMaybe<Codes_Order_By>;
  code_id?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposals_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** select columns of table "code_proposals" */
export enum Code_Proposals_Select_Column {
  /** column name */
  CodeId = "code_id",
  /** column name */
  ProposalId = "proposal_id",
  /** column name */
  ResolvedHeight = "resolved_height",
}

/** input type for updating data in table "code_proposals" */
export type Code_Proposals_Set_Input = {
  code_id?: InputMaybe<Scalars["Int"]>;
  proposal_id?: InputMaybe<Scalars["Int"]>;
  resolved_height?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Code_Proposals_Stddev_Fields = {
  __typename?: "code_proposals_stddev_fields";
  code_id?: Maybe<Scalars["Float"]>;
  proposal_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "code_proposals" */
export type Code_Proposals_Stddev_Order_By = {
  code_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Code_Proposals_Stddev_Pop_Fields = {
  __typename?: "code_proposals_stddev_pop_fields";
  code_id?: Maybe<Scalars["Float"]>;
  proposal_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "code_proposals" */
export type Code_Proposals_Stddev_Pop_Order_By = {
  code_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Code_Proposals_Stddev_Samp_Fields = {
  __typename?: "code_proposals_stddev_samp_fields";
  code_id?: Maybe<Scalars["Float"]>;
  proposal_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "code_proposals" */
export type Code_Proposals_Stddev_Samp_Order_By = {
  code_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "code_proposals" */
export type Code_Proposals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Code_Proposals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Code_Proposals_Stream_Cursor_Value_Input = {
  code_id?: InputMaybe<Scalars["Int"]>;
  proposal_id?: InputMaybe<Scalars["Int"]>;
  resolved_height?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Code_Proposals_Sum_Fields = {
  __typename?: "code_proposals_sum_fields";
  code_id?: Maybe<Scalars["Int"]>;
  proposal_id?: Maybe<Scalars["Int"]>;
  resolved_height?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "code_proposals" */
export type Code_Proposals_Sum_Order_By = {
  code_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

export type Code_Proposals_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Code_Proposals_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Code_Proposals_Set_Input>;
  /** filter the rows which have to be updated */
  where: Code_Proposals_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Code_Proposals_Var_Pop_Fields = {
  __typename?: "code_proposals_var_pop_fields";
  code_id?: Maybe<Scalars["Float"]>;
  proposal_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "code_proposals" */
export type Code_Proposals_Var_Pop_Order_By = {
  code_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Code_Proposals_Var_Samp_Fields = {
  __typename?: "code_proposals_var_samp_fields";
  code_id?: Maybe<Scalars["Float"]>;
  proposal_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "code_proposals" */
export type Code_Proposals_Var_Samp_Order_By = {
  code_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Code_Proposals_Variance_Fields = {
  __typename?: "code_proposals_variance_fields";
  code_id?: Maybe<Scalars["Float"]>;
  proposal_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "code_proposals" */
export type Code_Proposals_Variance_Order_By = {
  code_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** columns and relationships of "codes" */
export type Codes = {
  __typename?: "codes";
  access_config_addresses: Scalars["json"];
  access_config_permission: Scalars["String"];
  /** An object relationship */
  account: Accounts;
  /** An array relationship */
  code_proposals: Array<Code_Proposals>;
  /** An aggregate relationship */
  code_proposals_aggregate: Code_Proposals_Aggregate;
  /** An array relationship */
  contract_histories: Array<Contract_Histories>;
  /** An aggregate relationship */
  contract_histories_aggregate: Contract_Histories_Aggregate;
  contract_instantiated: Scalars["Int"];
  /** An array relationship */
  contracts: Array<Contracts>;
  /** An aggregate relationship */
  contracts_aggregate: Contracts_Aggregate;
  cw2_contract?: Maybe<Scalars["String"]>;
  cw2_version?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  /** An object relationship */
  transaction?: Maybe<Transactions>;
  transaction_id?: Maybe<Scalars["Int"]>;
  uploader: Scalars["Int"];
};

/** columns and relationships of "codes" */
export type CodesAccess_Config_AddressesArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "codes" */
export type CodesCode_ProposalsArgs = {
  distinct_on?: InputMaybe<Array<Code_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Code_Proposals_Order_By>>;
  where?: InputMaybe<Code_Proposals_Bool_Exp>;
};

/** columns and relationships of "codes" */
export type CodesCode_Proposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Code_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Code_Proposals_Order_By>>;
  where?: InputMaybe<Code_Proposals_Bool_Exp>;
};

/** columns and relationships of "codes" */
export type CodesContract_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Contract_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Histories_Order_By>>;
  where?: InputMaybe<Contract_Histories_Bool_Exp>;
};

/** columns and relationships of "codes" */
export type CodesContract_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Histories_Order_By>>;
  where?: InputMaybe<Contract_Histories_Bool_Exp>;
};

/** columns and relationships of "codes" */
export type CodesContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

/** columns and relationships of "codes" */
export type CodesContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

/** aggregated selection of "codes" */
export type Codes_Aggregate = {
  __typename?: "codes_aggregate";
  aggregate?: Maybe<Codes_Aggregate_Fields>;
  nodes: Array<Codes>;
};

export type Codes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Codes_Aggregate_Bool_Exp_Count>;
};

export type Codes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Codes_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Codes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "codes" */
export type Codes_Aggregate_Fields = {
  __typename?: "codes_aggregate_fields";
  avg?: Maybe<Codes_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Codes_Max_Fields>;
  min?: Maybe<Codes_Min_Fields>;
  stddev?: Maybe<Codes_Stddev_Fields>;
  stddev_pop?: Maybe<Codes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Codes_Stddev_Samp_Fields>;
  sum?: Maybe<Codes_Sum_Fields>;
  var_pop?: Maybe<Codes_Var_Pop_Fields>;
  var_samp?: Maybe<Codes_Var_Samp_Fields>;
  variance?: Maybe<Codes_Variance_Fields>;
};

/** aggregate fields of "codes" */
export type Codes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Codes_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "codes" */
export type Codes_Aggregate_Order_By = {
  avg?: InputMaybe<Codes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Codes_Max_Order_By>;
  min?: InputMaybe<Codes_Min_Order_By>;
  stddev?: InputMaybe<Codes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Codes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Codes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Codes_Sum_Order_By>;
  var_pop?: InputMaybe<Codes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Codes_Var_Samp_Order_By>;
  variance?: InputMaybe<Codes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "codes" */
export type Codes_Arr_Rel_Insert_Input = {
  data: Array<Codes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Codes_On_Conflict>;
};

/** aggregate avg on columns */
export type Codes_Avg_Fields = {
  __typename?: "codes_avg_fields";
  contract_instantiated?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
  uploader?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "codes" */
export type Codes_Avg_Order_By = {
  contract_instantiated?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  uploader?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "codes". All fields are combined with a logical 'AND'. */
export type Codes_Bool_Exp = {
  _and?: InputMaybe<Array<Codes_Bool_Exp>>;
  _not?: InputMaybe<Codes_Bool_Exp>;
  _or?: InputMaybe<Array<Codes_Bool_Exp>>;
  access_config_addresses?: InputMaybe<Json_Comparison_Exp>;
  access_config_permission?: InputMaybe<String_Comparison_Exp>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  code_proposals?: InputMaybe<Code_Proposals_Bool_Exp>;
  code_proposals_aggregate?: InputMaybe<Code_Proposals_Aggregate_Bool_Exp>;
  contract_histories?: InputMaybe<Contract_Histories_Bool_Exp>;
  contract_histories_aggregate?: InputMaybe<Contract_Histories_Aggregate_Bool_Exp>;
  contract_instantiated?: InputMaybe<Int_Comparison_Exp>;
  contracts?: InputMaybe<Contracts_Bool_Exp>;
  contracts_aggregate?: InputMaybe<Contracts_Aggregate_Bool_Exp>;
  cw2_contract?: InputMaybe<String_Comparison_Exp>;
  cw2_version?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  transaction?: InputMaybe<Transactions_Bool_Exp>;
  transaction_id?: InputMaybe<Int_Comparison_Exp>;
  uploader?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "codes" */
export enum Codes_Constraint {
  /** unique or primary key constraint on columns "id" */
  CodesPkey = "codes_pkey",
}

/** input type for incrementing numeric columns in table "codes" */
export type Codes_Inc_Input = {
  contract_instantiated?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
  uploader?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "codes" */
export type Codes_Insert_Input = {
  access_config_addresses?: InputMaybe<Scalars["json"]>;
  access_config_permission?: InputMaybe<Scalars["String"]>;
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  code_proposals?: InputMaybe<Code_Proposals_Arr_Rel_Insert_Input>;
  contract_histories?: InputMaybe<Contract_Histories_Arr_Rel_Insert_Input>;
  contract_instantiated?: InputMaybe<Scalars["Int"]>;
  contracts?: InputMaybe<Contracts_Arr_Rel_Insert_Input>;
  cw2_contract?: InputMaybe<Scalars["String"]>;
  cw2_version?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
  uploader?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Codes_Max_Fields = {
  __typename?: "codes_max_fields";
  access_config_permission?: Maybe<Scalars["String"]>;
  contract_instantiated?: Maybe<Scalars["Int"]>;
  cw2_contract?: Maybe<Scalars["String"]>;
  cw2_version?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  transaction_id?: Maybe<Scalars["Int"]>;
  uploader?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "codes" */
export type Codes_Max_Order_By = {
  access_config_permission?: InputMaybe<Order_By>;
  contract_instantiated?: InputMaybe<Order_By>;
  cw2_contract?: InputMaybe<Order_By>;
  cw2_version?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  uploader?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Codes_Min_Fields = {
  __typename?: "codes_min_fields";
  access_config_permission?: Maybe<Scalars["String"]>;
  contract_instantiated?: Maybe<Scalars["Int"]>;
  cw2_contract?: Maybe<Scalars["String"]>;
  cw2_version?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  transaction_id?: Maybe<Scalars["Int"]>;
  uploader?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "codes" */
export type Codes_Min_Order_By = {
  access_config_permission?: InputMaybe<Order_By>;
  contract_instantiated?: InputMaybe<Order_By>;
  cw2_contract?: InputMaybe<Order_By>;
  cw2_version?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  uploader?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "codes" */
export type Codes_Mutation_Response = {
  __typename?: "codes_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Codes>;
};

/** input type for inserting object relation for remote table "codes" */
export type Codes_Obj_Rel_Insert_Input = {
  data: Codes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Codes_On_Conflict>;
};

/** on_conflict condition type for table "codes" */
export type Codes_On_Conflict = {
  constraint: Codes_Constraint;
  update_columns?: Array<Codes_Update_Column>;
  where?: InputMaybe<Codes_Bool_Exp>;
};

/** Ordering options when selecting data from "codes". */
export type Codes_Order_By = {
  access_config_addresses?: InputMaybe<Order_By>;
  access_config_permission?: InputMaybe<Order_By>;
  account?: InputMaybe<Accounts_Order_By>;
  code_proposals_aggregate?: InputMaybe<Code_Proposals_Aggregate_Order_By>;
  contract_histories_aggregate?: InputMaybe<Contract_Histories_Aggregate_Order_By>;
  contract_instantiated?: InputMaybe<Order_By>;
  contracts_aggregate?: InputMaybe<Contracts_Aggregate_Order_By>;
  cw2_contract?: InputMaybe<Order_By>;
  cw2_version?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transactions_Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  uploader?: InputMaybe<Order_By>;
};

/** primary key columns input for table: codes */
export type Codes_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "codes" */
export enum Codes_Select_Column {
  /** column name */
  AccessConfigAddresses = "access_config_addresses",
  /** column name */
  AccessConfigPermission = "access_config_permission",
  /** column name */
  ContractInstantiated = "contract_instantiated",
  /** column name */
  Cw2Contract = "cw2_contract",
  /** column name */
  Cw2Version = "cw2_version",
  /** column name */
  Id = "id",
  /** column name */
  TransactionId = "transaction_id",
  /** column name */
  Uploader = "uploader",
}

/** input type for updating data in table "codes" */
export type Codes_Set_Input = {
  access_config_addresses?: InputMaybe<Scalars["json"]>;
  access_config_permission?: InputMaybe<Scalars["String"]>;
  contract_instantiated?: InputMaybe<Scalars["Int"]>;
  cw2_contract?: InputMaybe<Scalars["String"]>;
  cw2_version?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
  uploader?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Codes_Stddev_Fields = {
  __typename?: "codes_stddev_fields";
  contract_instantiated?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
  uploader?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "codes" */
export type Codes_Stddev_Order_By = {
  contract_instantiated?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  uploader?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Codes_Stddev_Pop_Fields = {
  __typename?: "codes_stddev_pop_fields";
  contract_instantiated?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
  uploader?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "codes" */
export type Codes_Stddev_Pop_Order_By = {
  contract_instantiated?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  uploader?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Codes_Stddev_Samp_Fields = {
  __typename?: "codes_stddev_samp_fields";
  contract_instantiated?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
  uploader?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "codes" */
export type Codes_Stddev_Samp_Order_By = {
  contract_instantiated?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  uploader?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "codes" */
export type Codes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Codes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Codes_Stream_Cursor_Value_Input = {
  access_config_addresses?: InputMaybe<Scalars["json"]>;
  access_config_permission?: InputMaybe<Scalars["String"]>;
  contract_instantiated?: InputMaybe<Scalars["Int"]>;
  cw2_contract?: InputMaybe<Scalars["String"]>;
  cw2_version?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
  uploader?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Codes_Sum_Fields = {
  __typename?: "codes_sum_fields";
  contract_instantiated?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  transaction_id?: Maybe<Scalars["Int"]>;
  uploader?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "codes" */
export type Codes_Sum_Order_By = {
  contract_instantiated?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  uploader?: InputMaybe<Order_By>;
};

/** update columns of table "codes" */
export enum Codes_Update_Column {
  /** column name */
  AccessConfigAddresses = "access_config_addresses",
  /** column name */
  AccessConfigPermission = "access_config_permission",
  /** column name */
  ContractInstantiated = "contract_instantiated",
  /** column name */
  Cw2Contract = "cw2_contract",
  /** column name */
  Cw2Version = "cw2_version",
  /** column name */
  Id = "id",
  /** column name */
  TransactionId = "transaction_id",
  /** column name */
  Uploader = "uploader",
}

export type Codes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Codes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Codes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Codes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Codes_Var_Pop_Fields = {
  __typename?: "codes_var_pop_fields";
  contract_instantiated?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
  uploader?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "codes" */
export type Codes_Var_Pop_Order_By = {
  contract_instantiated?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  uploader?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Codes_Var_Samp_Fields = {
  __typename?: "codes_var_samp_fields";
  contract_instantiated?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
  uploader?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "codes" */
export type Codes_Var_Samp_Order_By = {
  contract_instantiated?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  uploader?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Codes_Variance_Fields = {
  __typename?: "codes_variance_fields";
  contract_instantiated?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
  uploader?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "codes" */
export type Codes_Variance_Order_By = {
  contract_instantiated?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  uploader?: InputMaybe<Order_By>;
};

/** columns and relationships of "contract_histories" */
export type Contract_Histories = {
  __typename?: "contract_histories";
  /** An object relationship */
  account: Accounts;
  /** An object relationship */
  block: Blocks;
  block_height: Scalars["Int"];
  /** An object relationship */
  code: Codes;
  code_id: Scalars["Int"];
  /** An object relationship */
  contract: Contracts;
  contract_id: Scalars["Int"];
  remark: Scalars["json"];
  sender: Scalars["Int"];
};

/** columns and relationships of "contract_histories" */
export type Contract_HistoriesRemarkArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "contract_histories" */
export type Contract_Histories_Aggregate = {
  __typename?: "contract_histories_aggregate";
  aggregate?: Maybe<Contract_Histories_Aggregate_Fields>;
  nodes: Array<Contract_Histories>;
};

export type Contract_Histories_Aggregate_Bool_Exp = {
  count?: InputMaybe<Contract_Histories_Aggregate_Bool_Exp_Count>;
};

export type Contract_Histories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Contract_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Contract_Histories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "contract_histories" */
export type Contract_Histories_Aggregate_Fields = {
  __typename?: "contract_histories_aggregate_fields";
  avg?: Maybe<Contract_Histories_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Contract_Histories_Max_Fields>;
  min?: Maybe<Contract_Histories_Min_Fields>;
  stddev?: Maybe<Contract_Histories_Stddev_Fields>;
  stddev_pop?: Maybe<Contract_Histories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contract_Histories_Stddev_Samp_Fields>;
  sum?: Maybe<Contract_Histories_Sum_Fields>;
  var_pop?: Maybe<Contract_Histories_Var_Pop_Fields>;
  var_samp?: Maybe<Contract_Histories_Var_Samp_Fields>;
  variance?: Maybe<Contract_Histories_Variance_Fields>;
};

/** aggregate fields of "contract_histories" */
export type Contract_Histories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contract_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "contract_histories" */
export type Contract_Histories_Aggregate_Order_By = {
  avg?: InputMaybe<Contract_Histories_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Contract_Histories_Max_Order_By>;
  min?: InputMaybe<Contract_Histories_Min_Order_By>;
  stddev?: InputMaybe<Contract_Histories_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Contract_Histories_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Contract_Histories_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Contract_Histories_Sum_Order_By>;
  var_pop?: InputMaybe<Contract_Histories_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Contract_Histories_Var_Samp_Order_By>;
  variance?: InputMaybe<Contract_Histories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "contract_histories" */
export type Contract_Histories_Arr_Rel_Insert_Input = {
  data: Array<Contract_Histories_Insert_Input>;
};

/** aggregate avg on columns */
export type Contract_Histories_Avg_Fields = {
  __typename?: "contract_histories_avg_fields";
  block_height?: Maybe<Scalars["Float"]>;
  code_id?: Maybe<Scalars["Float"]>;
  contract_id?: Maybe<Scalars["Float"]>;
  sender?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "contract_histories" */
export type Contract_Histories_Avg_Order_By = {
  block_height?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "contract_histories". All fields are combined with a logical 'AND'. */
export type Contract_Histories_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_Histories_Bool_Exp>>;
  _not?: InputMaybe<Contract_Histories_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_Histories_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  block_height?: InputMaybe<Int_Comparison_Exp>;
  code?: InputMaybe<Codes_Bool_Exp>;
  code_id?: InputMaybe<Int_Comparison_Exp>;
  contract?: InputMaybe<Contracts_Bool_Exp>;
  contract_id?: InputMaybe<Int_Comparison_Exp>;
  remark?: InputMaybe<Json_Comparison_Exp>;
  sender?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "contract_histories" */
export type Contract_Histories_Inc_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  code_id?: InputMaybe<Scalars["Int"]>;
  contract_id?: InputMaybe<Scalars["Int"]>;
  sender?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "contract_histories" */
export type Contract_Histories_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  block_height?: InputMaybe<Scalars["Int"]>;
  code?: InputMaybe<Codes_Obj_Rel_Insert_Input>;
  code_id?: InputMaybe<Scalars["Int"]>;
  contract?: InputMaybe<Contracts_Obj_Rel_Insert_Input>;
  contract_id?: InputMaybe<Scalars["Int"]>;
  remark?: InputMaybe<Scalars["json"]>;
  sender?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Contract_Histories_Max_Fields = {
  __typename?: "contract_histories_max_fields";
  block_height?: Maybe<Scalars["Int"]>;
  code_id?: Maybe<Scalars["Int"]>;
  contract_id?: Maybe<Scalars["Int"]>;
  sender?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "contract_histories" */
export type Contract_Histories_Max_Order_By = {
  block_height?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Contract_Histories_Min_Fields = {
  __typename?: "contract_histories_min_fields";
  block_height?: Maybe<Scalars["Int"]>;
  code_id?: Maybe<Scalars["Int"]>;
  contract_id?: Maybe<Scalars["Int"]>;
  sender?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "contract_histories" */
export type Contract_Histories_Min_Order_By = {
  block_height?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "contract_histories" */
export type Contract_Histories_Mutation_Response = {
  __typename?: "contract_histories_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Contract_Histories>;
};

/** Ordering options when selecting data from "contract_histories". */
export type Contract_Histories_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  block?: InputMaybe<Blocks_Order_By>;
  block_height?: InputMaybe<Order_By>;
  code?: InputMaybe<Codes_Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract?: InputMaybe<Contracts_Order_By>;
  contract_id?: InputMaybe<Order_By>;
  remark?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** select columns of table "contract_histories" */
export enum Contract_Histories_Select_Column {
  /** column name */
  BlockHeight = "block_height",
  /** column name */
  CodeId = "code_id",
  /** column name */
  ContractId = "contract_id",
  /** column name */
  Remark = "remark",
  /** column name */
  Sender = "sender",
}

/** input type for updating data in table "contract_histories" */
export type Contract_Histories_Set_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  code_id?: InputMaybe<Scalars["Int"]>;
  contract_id?: InputMaybe<Scalars["Int"]>;
  remark?: InputMaybe<Scalars["json"]>;
  sender?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Contract_Histories_Stddev_Fields = {
  __typename?: "contract_histories_stddev_fields";
  block_height?: Maybe<Scalars["Float"]>;
  code_id?: Maybe<Scalars["Float"]>;
  contract_id?: Maybe<Scalars["Float"]>;
  sender?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "contract_histories" */
export type Contract_Histories_Stddev_Order_By = {
  block_height?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Contract_Histories_Stddev_Pop_Fields = {
  __typename?: "contract_histories_stddev_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
  code_id?: Maybe<Scalars["Float"]>;
  contract_id?: Maybe<Scalars["Float"]>;
  sender?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "contract_histories" */
export type Contract_Histories_Stddev_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Contract_Histories_Stddev_Samp_Fields = {
  __typename?: "contract_histories_stddev_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
  code_id?: Maybe<Scalars["Float"]>;
  contract_id?: Maybe<Scalars["Float"]>;
  sender?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "contract_histories" */
export type Contract_Histories_Stddev_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "contract_histories" */
export type Contract_Histories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_Histories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_Histories_Stream_Cursor_Value_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  code_id?: InputMaybe<Scalars["Int"]>;
  contract_id?: InputMaybe<Scalars["Int"]>;
  remark?: InputMaybe<Scalars["json"]>;
  sender?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Contract_Histories_Sum_Fields = {
  __typename?: "contract_histories_sum_fields";
  block_height?: Maybe<Scalars["Int"]>;
  code_id?: Maybe<Scalars["Int"]>;
  contract_id?: Maybe<Scalars["Int"]>;
  sender?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "contract_histories" */
export type Contract_Histories_Sum_Order_By = {
  block_height?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

export type Contract_Histories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Contract_Histories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contract_Histories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contract_Histories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Contract_Histories_Var_Pop_Fields = {
  __typename?: "contract_histories_var_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
  code_id?: Maybe<Scalars["Float"]>;
  contract_id?: Maybe<Scalars["Float"]>;
  sender?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "contract_histories" */
export type Contract_Histories_Var_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Contract_Histories_Var_Samp_Fields = {
  __typename?: "contract_histories_var_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
  code_id?: Maybe<Scalars["Float"]>;
  contract_id?: Maybe<Scalars["Float"]>;
  sender?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "contract_histories" */
export type Contract_Histories_Var_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Contract_Histories_Variance_Fields = {
  __typename?: "contract_histories_variance_fields";
  block_height?: Maybe<Scalars["Float"]>;
  code_id?: Maybe<Scalars["Float"]>;
  contract_id?: Maybe<Scalars["Float"]>;
  sender?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "contract_histories" */
export type Contract_Histories_Variance_Order_By = {
  block_height?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** columns and relationships of "contract_proposals" */
export type Contract_Proposals = {
  __typename?: "contract_proposals";
  /** An object relationship */
  block?: Maybe<Blocks>;
  /** An object relationship */
  contract: Contracts;
  contract_id: Scalars["Int"];
  /** An object relationship */
  proposal: Proposals;
  proposal_id: Scalars["Int"];
  resolved_height?: Maybe<Scalars["Int"]>;
};

/** aggregated selection of "contract_proposals" */
export type Contract_Proposals_Aggregate = {
  __typename?: "contract_proposals_aggregate";
  aggregate?: Maybe<Contract_Proposals_Aggregate_Fields>;
  nodes: Array<Contract_Proposals>;
};

export type Contract_Proposals_Aggregate_Bool_Exp = {
  count?: InputMaybe<Contract_Proposals_Aggregate_Bool_Exp_Count>;
};

export type Contract_Proposals_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Contract_Proposals_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Contract_Proposals_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "contract_proposals" */
export type Contract_Proposals_Aggregate_Fields = {
  __typename?: "contract_proposals_aggregate_fields";
  avg?: Maybe<Contract_Proposals_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Contract_Proposals_Max_Fields>;
  min?: Maybe<Contract_Proposals_Min_Fields>;
  stddev?: Maybe<Contract_Proposals_Stddev_Fields>;
  stddev_pop?: Maybe<Contract_Proposals_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contract_Proposals_Stddev_Samp_Fields>;
  sum?: Maybe<Contract_Proposals_Sum_Fields>;
  var_pop?: Maybe<Contract_Proposals_Var_Pop_Fields>;
  var_samp?: Maybe<Contract_Proposals_Var_Samp_Fields>;
  variance?: Maybe<Contract_Proposals_Variance_Fields>;
};

/** aggregate fields of "contract_proposals" */
export type Contract_Proposals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contract_Proposals_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "contract_proposals" */
export type Contract_Proposals_Aggregate_Order_By = {
  avg?: InputMaybe<Contract_Proposals_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Contract_Proposals_Max_Order_By>;
  min?: InputMaybe<Contract_Proposals_Min_Order_By>;
  stddev?: InputMaybe<Contract_Proposals_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Contract_Proposals_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Contract_Proposals_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Contract_Proposals_Sum_Order_By>;
  var_pop?: InputMaybe<Contract_Proposals_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Contract_Proposals_Var_Samp_Order_By>;
  variance?: InputMaybe<Contract_Proposals_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "contract_proposals" */
export type Contract_Proposals_Arr_Rel_Insert_Input = {
  data: Array<Contract_Proposals_Insert_Input>;
};

/** aggregate avg on columns */
export type Contract_Proposals_Avg_Fields = {
  __typename?: "contract_proposals_avg_fields";
  contract_id?: Maybe<Scalars["Float"]>;
  proposal_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "contract_proposals" */
export type Contract_Proposals_Avg_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "contract_proposals". All fields are combined with a logical 'AND'. */
export type Contract_Proposals_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_Proposals_Bool_Exp>>;
  _not?: InputMaybe<Contract_Proposals_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_Proposals_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  contract?: InputMaybe<Contracts_Bool_Exp>;
  contract_id?: InputMaybe<Int_Comparison_Exp>;
  proposal?: InputMaybe<Proposals_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  resolved_height?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "contract_proposals" */
export type Contract_Proposals_Inc_Input = {
  contract_id?: InputMaybe<Scalars["Int"]>;
  proposal_id?: InputMaybe<Scalars["Int"]>;
  resolved_height?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "contract_proposals" */
export type Contract_Proposals_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  contract?: InputMaybe<Contracts_Obj_Rel_Insert_Input>;
  contract_id?: InputMaybe<Scalars["Int"]>;
  proposal?: InputMaybe<Proposals_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars["Int"]>;
  resolved_height?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Contract_Proposals_Max_Fields = {
  __typename?: "contract_proposals_max_fields";
  contract_id?: Maybe<Scalars["Int"]>;
  proposal_id?: Maybe<Scalars["Int"]>;
  resolved_height?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "contract_proposals" */
export type Contract_Proposals_Max_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Contract_Proposals_Min_Fields = {
  __typename?: "contract_proposals_min_fields";
  contract_id?: Maybe<Scalars["Int"]>;
  proposal_id?: Maybe<Scalars["Int"]>;
  resolved_height?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "contract_proposals" */
export type Contract_Proposals_Min_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "contract_proposals" */
export type Contract_Proposals_Mutation_Response = {
  __typename?: "contract_proposals_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Contract_Proposals>;
};

/** Ordering options when selecting data from "contract_proposals". */
export type Contract_Proposals_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  contract?: InputMaybe<Contracts_Order_By>;
  contract_id?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposals_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** select columns of table "contract_proposals" */
export enum Contract_Proposals_Select_Column {
  /** column name */
  ContractId = "contract_id",
  /** column name */
  ProposalId = "proposal_id",
  /** column name */
  ResolvedHeight = "resolved_height",
}

/** input type for updating data in table "contract_proposals" */
export type Contract_Proposals_Set_Input = {
  contract_id?: InputMaybe<Scalars["Int"]>;
  proposal_id?: InputMaybe<Scalars["Int"]>;
  resolved_height?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Contract_Proposals_Stddev_Fields = {
  __typename?: "contract_proposals_stddev_fields";
  contract_id?: Maybe<Scalars["Float"]>;
  proposal_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "contract_proposals" */
export type Contract_Proposals_Stddev_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Contract_Proposals_Stddev_Pop_Fields = {
  __typename?: "contract_proposals_stddev_pop_fields";
  contract_id?: Maybe<Scalars["Float"]>;
  proposal_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "contract_proposals" */
export type Contract_Proposals_Stddev_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Contract_Proposals_Stddev_Samp_Fields = {
  __typename?: "contract_proposals_stddev_samp_fields";
  contract_id?: Maybe<Scalars["Float"]>;
  proposal_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "contract_proposals" */
export type Contract_Proposals_Stddev_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "contract_proposals" */
export type Contract_Proposals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_Proposals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_Proposals_Stream_Cursor_Value_Input = {
  contract_id?: InputMaybe<Scalars["Int"]>;
  proposal_id?: InputMaybe<Scalars["Int"]>;
  resolved_height?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Contract_Proposals_Sum_Fields = {
  __typename?: "contract_proposals_sum_fields";
  contract_id?: Maybe<Scalars["Int"]>;
  proposal_id?: Maybe<Scalars["Int"]>;
  resolved_height?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "contract_proposals" */
export type Contract_Proposals_Sum_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

export type Contract_Proposals_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Contract_Proposals_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contract_Proposals_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contract_Proposals_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Contract_Proposals_Var_Pop_Fields = {
  __typename?: "contract_proposals_var_pop_fields";
  contract_id?: Maybe<Scalars["Float"]>;
  proposal_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "contract_proposals" */
export type Contract_Proposals_Var_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Contract_Proposals_Var_Samp_Fields = {
  __typename?: "contract_proposals_var_samp_fields";
  contract_id?: Maybe<Scalars["Float"]>;
  proposal_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "contract_proposals" */
export type Contract_Proposals_Var_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Contract_Proposals_Variance_Fields = {
  __typename?: "contract_proposals_variance_fields";
  contract_id?: Maybe<Scalars["Float"]>;
  proposal_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "contract_proposals" */
export type Contract_Proposals_Variance_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** columns and relationships of "contract_transactions" */
export type Contract_Transactions = {
  __typename?: "contract_transactions";
  /** An object relationship */
  contract: Contracts;
  contract_id: Scalars["Int"];
  /** An object relationship */
  transaction: Transactions;
  tx_id: Scalars["Int"];
};

/** aggregated selection of "contract_transactions" */
export type Contract_Transactions_Aggregate = {
  __typename?: "contract_transactions_aggregate";
  aggregate?: Maybe<Contract_Transactions_Aggregate_Fields>;
  nodes: Array<Contract_Transactions>;
};

export type Contract_Transactions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Contract_Transactions_Aggregate_Bool_Exp_Count>;
};

export type Contract_Transactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Contract_Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Contract_Transactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "contract_transactions" */
export type Contract_Transactions_Aggregate_Fields = {
  __typename?: "contract_transactions_aggregate_fields";
  avg?: Maybe<Contract_Transactions_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Contract_Transactions_Max_Fields>;
  min?: Maybe<Contract_Transactions_Min_Fields>;
  stddev?: Maybe<Contract_Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Contract_Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contract_Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Contract_Transactions_Sum_Fields>;
  var_pop?: Maybe<Contract_Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Contract_Transactions_Var_Samp_Fields>;
  variance?: Maybe<Contract_Transactions_Variance_Fields>;
};

/** aggregate fields of "contract_transactions" */
export type Contract_Transactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contract_Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "contract_transactions" */
export type Contract_Transactions_Aggregate_Order_By = {
  avg?: InputMaybe<Contract_Transactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Contract_Transactions_Max_Order_By>;
  min?: InputMaybe<Contract_Transactions_Min_Order_By>;
  stddev?: InputMaybe<Contract_Transactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Contract_Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Contract_Transactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Contract_Transactions_Sum_Order_By>;
  var_pop?: InputMaybe<Contract_Transactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Contract_Transactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Contract_Transactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "contract_transactions" */
export type Contract_Transactions_Arr_Rel_Insert_Input = {
  data: Array<Contract_Transactions_Insert_Input>;
};

/** aggregate avg on columns */
export type Contract_Transactions_Avg_Fields = {
  __typename?: "contract_transactions_avg_fields";
  contract_id?: Maybe<Scalars["Float"]>;
  tx_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "contract_transactions" */
export type Contract_Transactions_Avg_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  tx_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "contract_transactions". All fields are combined with a logical 'AND'. */
export type Contract_Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_Transactions_Bool_Exp>>;
  _not?: InputMaybe<Contract_Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_Transactions_Bool_Exp>>;
  contract?: InputMaybe<Contracts_Bool_Exp>;
  contract_id?: InputMaybe<Int_Comparison_Exp>;
  transaction?: InputMaybe<Transactions_Bool_Exp>;
  tx_id?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "contract_transactions" */
export type Contract_Transactions_Inc_Input = {
  contract_id?: InputMaybe<Scalars["Int"]>;
  tx_id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "contract_transactions" */
export type Contract_Transactions_Insert_Input = {
  contract?: InputMaybe<Contracts_Obj_Rel_Insert_Input>;
  contract_id?: InputMaybe<Scalars["Int"]>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  tx_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Contract_Transactions_Max_Fields = {
  __typename?: "contract_transactions_max_fields";
  contract_id?: Maybe<Scalars["Int"]>;
  tx_id?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "contract_transactions" */
export type Contract_Transactions_Max_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  tx_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Contract_Transactions_Min_Fields = {
  __typename?: "contract_transactions_min_fields";
  contract_id?: Maybe<Scalars["Int"]>;
  tx_id?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "contract_transactions" */
export type Contract_Transactions_Min_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  tx_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "contract_transactions" */
export type Contract_Transactions_Mutation_Response = {
  __typename?: "contract_transactions_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Contract_Transactions>;
};

/** Ordering options when selecting data from "contract_transactions". */
export type Contract_Transactions_Order_By = {
  contract?: InputMaybe<Contracts_Order_By>;
  contract_id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transactions_Order_By>;
  tx_id?: InputMaybe<Order_By>;
};

/** select columns of table "contract_transactions" */
export enum Contract_Transactions_Select_Column {
  /** column name */
  ContractId = "contract_id",
  /** column name */
  TxId = "tx_id",
}

/** input type for updating data in table "contract_transactions" */
export type Contract_Transactions_Set_Input = {
  contract_id?: InputMaybe<Scalars["Int"]>;
  tx_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Contract_Transactions_Stddev_Fields = {
  __typename?: "contract_transactions_stddev_fields";
  contract_id?: Maybe<Scalars["Float"]>;
  tx_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "contract_transactions" */
export type Contract_Transactions_Stddev_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  tx_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Contract_Transactions_Stddev_Pop_Fields = {
  __typename?: "contract_transactions_stddev_pop_fields";
  contract_id?: Maybe<Scalars["Float"]>;
  tx_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "contract_transactions" */
export type Contract_Transactions_Stddev_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  tx_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Contract_Transactions_Stddev_Samp_Fields = {
  __typename?: "contract_transactions_stddev_samp_fields";
  contract_id?: Maybe<Scalars["Float"]>;
  tx_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "contract_transactions" */
export type Contract_Transactions_Stddev_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  tx_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "contract_transactions" */
export type Contract_Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_Transactions_Stream_Cursor_Value_Input = {
  contract_id?: InputMaybe<Scalars["Int"]>;
  tx_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Contract_Transactions_Sum_Fields = {
  __typename?: "contract_transactions_sum_fields";
  contract_id?: Maybe<Scalars["Int"]>;
  tx_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "contract_transactions" */
export type Contract_Transactions_Sum_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  tx_id?: InputMaybe<Order_By>;
};

export type Contract_Transactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Contract_Transactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contract_Transactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contract_Transactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Contract_Transactions_Var_Pop_Fields = {
  __typename?: "contract_transactions_var_pop_fields";
  contract_id?: Maybe<Scalars["Float"]>;
  tx_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "contract_transactions" */
export type Contract_Transactions_Var_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  tx_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Contract_Transactions_Var_Samp_Fields = {
  __typename?: "contract_transactions_var_samp_fields";
  contract_id?: Maybe<Scalars["Float"]>;
  tx_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "contract_transactions" */
export type Contract_Transactions_Var_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  tx_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Contract_Transactions_Variance_Fields = {
  __typename?: "contract_transactions_variance_fields";
  contract_id?: Maybe<Scalars["Float"]>;
  tx_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "contract_transactions" */
export type Contract_Transactions_Variance_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  tx_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "contract_transactions_view" */
export type Contract_Transactions_View = {
  __typename?: "contract_transactions_view";
  contract_address: Scalars["String"];
  hash: Scalars["bytea"];
  height: Scalars["Int"];
  is_clear_admin: Scalars["Boolean"];
  is_execute: Scalars["Boolean"];
  is_ibc: Scalars["Boolean"];
  is_instantiate: Scalars["Boolean"];
  is_migrate: Scalars["Boolean"];
  is_send: Scalars["Boolean"];
  is_store_code: Scalars["Boolean"];
  is_update_admin: Scalars["Boolean"];
  messages: Scalars["json"];
  sender: Scalars["String"];
  success: Scalars["Boolean"];
  timestamp: Scalars["timestamp"];
};

/** columns and relationships of "contract_transactions_view" */
export type Contract_Transactions_ViewMessagesArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "contract_transactions_view" */
export type Contract_Transactions_View_Aggregate = {
  __typename?: "contract_transactions_view_aggregate";
  aggregate?: Maybe<Contract_Transactions_View_Aggregate_Fields>;
  nodes: Array<Contract_Transactions_View>;
};

/** aggregate fields of "contract_transactions_view" */
export type Contract_Transactions_View_Aggregate_Fields = {
  __typename?: "contract_transactions_view_aggregate_fields";
  avg?: Maybe<Contract_Transactions_View_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Contract_Transactions_View_Max_Fields>;
  min?: Maybe<Contract_Transactions_View_Min_Fields>;
  stddev?: Maybe<Contract_Transactions_View_Stddev_Fields>;
  stddev_pop?: Maybe<Contract_Transactions_View_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contract_Transactions_View_Stddev_Samp_Fields>;
  sum?: Maybe<Contract_Transactions_View_Sum_Fields>;
  var_pop?: Maybe<Contract_Transactions_View_Var_Pop_Fields>;
  var_samp?: Maybe<Contract_Transactions_View_Var_Samp_Fields>;
  variance?: Maybe<Contract_Transactions_View_Variance_Fields>;
};

/** aggregate fields of "contract_transactions_view" */
export type Contract_Transactions_View_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contract_Transactions_View_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Contract_Transactions_View_Avg_Fields = {
  __typename?: "contract_transactions_view_avg_fields";
  height?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "contract_transactions_view". All fields are combined with a logical 'AND'. */
export type Contract_Transactions_View_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_Transactions_View_Bool_Exp>>;
  _not?: InputMaybe<Contract_Transactions_View_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_Transactions_View_Bool_Exp>>;
  contract_address?: InputMaybe<String_Comparison_Exp>;
  hash?: InputMaybe<Bytea_Comparison_Exp>;
  height?: InputMaybe<Int_Comparison_Exp>;
  is_clear_admin?: InputMaybe<Boolean_Comparison_Exp>;
  is_execute?: InputMaybe<Boolean_Comparison_Exp>;
  is_ibc?: InputMaybe<Boolean_Comparison_Exp>;
  is_instantiate?: InputMaybe<Boolean_Comparison_Exp>;
  is_migrate?: InputMaybe<Boolean_Comparison_Exp>;
  is_send?: InputMaybe<Boolean_Comparison_Exp>;
  is_store_code?: InputMaybe<Boolean_Comparison_Exp>;
  is_update_admin?: InputMaybe<Boolean_Comparison_Exp>;
  messages?: InputMaybe<Json_Comparison_Exp>;
  sender?: InputMaybe<String_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "contract_transactions_view" */
export type Contract_Transactions_View_Inc_Input = {
  height?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "contract_transactions_view" */
export type Contract_Transactions_View_Insert_Input = {
  contract_address?: InputMaybe<Scalars["String"]>;
  hash?: InputMaybe<Scalars["bytea"]>;
  height?: InputMaybe<Scalars["Int"]>;
  is_clear_admin?: InputMaybe<Scalars["Boolean"]>;
  is_execute?: InputMaybe<Scalars["Boolean"]>;
  is_ibc?: InputMaybe<Scalars["Boolean"]>;
  is_instantiate?: InputMaybe<Scalars["Boolean"]>;
  is_migrate?: InputMaybe<Scalars["Boolean"]>;
  is_send?: InputMaybe<Scalars["Boolean"]>;
  is_store_code?: InputMaybe<Scalars["Boolean"]>;
  is_update_admin?: InputMaybe<Scalars["Boolean"]>;
  messages?: InputMaybe<Scalars["json"]>;
  sender?: InputMaybe<Scalars["String"]>;
  success?: InputMaybe<Scalars["Boolean"]>;
  timestamp?: InputMaybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type Contract_Transactions_View_Max_Fields = {
  __typename?: "contract_transactions_view_max_fields";
  contract_address?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  sender?: Maybe<Scalars["String"]>;
  timestamp?: Maybe<Scalars["timestamp"]>;
};

/** aggregate min on columns */
export type Contract_Transactions_View_Min_Fields = {
  __typename?: "contract_transactions_view_min_fields";
  contract_address?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  sender?: Maybe<Scalars["String"]>;
  timestamp?: Maybe<Scalars["timestamp"]>;
};

/** response of any mutation on the table "contract_transactions_view" */
export type Contract_Transactions_View_Mutation_Response = {
  __typename?: "contract_transactions_view_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Contract_Transactions_View>;
};

/** Ordering options when selecting data from "contract_transactions_view". */
export type Contract_Transactions_View_Order_By = {
  contract_address?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  is_clear_admin?: InputMaybe<Order_By>;
  is_execute?: InputMaybe<Order_By>;
  is_ibc?: InputMaybe<Order_By>;
  is_instantiate?: InputMaybe<Order_By>;
  is_migrate?: InputMaybe<Order_By>;
  is_send?: InputMaybe<Order_By>;
  is_store_code?: InputMaybe<Order_By>;
  is_update_admin?: InputMaybe<Order_By>;
  messages?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "contract_transactions_view" */
export enum Contract_Transactions_View_Select_Column {
  /** column name */
  ContractAddress = "contract_address",
  /** column name */
  Hash = "hash",
  /** column name */
  Height = "height",
  /** column name */
  IsClearAdmin = "is_clear_admin",
  /** column name */
  IsExecute = "is_execute",
  /** column name */
  IsIbc = "is_ibc",
  /** column name */
  IsInstantiate = "is_instantiate",
  /** column name */
  IsMigrate = "is_migrate",
  /** column name */
  IsSend = "is_send",
  /** column name */
  IsStoreCode = "is_store_code",
  /** column name */
  IsUpdateAdmin = "is_update_admin",
  /** column name */
  Messages = "messages",
  /** column name */
  Sender = "sender",
  /** column name */
  Success = "success",
  /** column name */
  Timestamp = "timestamp",
}

/** input type for updating data in table "contract_transactions_view" */
export type Contract_Transactions_View_Set_Input = {
  contract_address?: InputMaybe<Scalars["String"]>;
  hash?: InputMaybe<Scalars["bytea"]>;
  height?: InputMaybe<Scalars["Int"]>;
  is_clear_admin?: InputMaybe<Scalars["Boolean"]>;
  is_execute?: InputMaybe<Scalars["Boolean"]>;
  is_ibc?: InputMaybe<Scalars["Boolean"]>;
  is_instantiate?: InputMaybe<Scalars["Boolean"]>;
  is_migrate?: InputMaybe<Scalars["Boolean"]>;
  is_send?: InputMaybe<Scalars["Boolean"]>;
  is_store_code?: InputMaybe<Scalars["Boolean"]>;
  is_update_admin?: InputMaybe<Scalars["Boolean"]>;
  messages?: InputMaybe<Scalars["json"]>;
  sender?: InputMaybe<Scalars["String"]>;
  success?: InputMaybe<Scalars["Boolean"]>;
  timestamp?: InputMaybe<Scalars["timestamp"]>;
};

/** aggregate stddev on columns */
export type Contract_Transactions_View_Stddev_Fields = {
  __typename?: "contract_transactions_view_stddev_fields";
  height?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Contract_Transactions_View_Stddev_Pop_Fields = {
  __typename?: "contract_transactions_view_stddev_pop_fields";
  height?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Contract_Transactions_View_Stddev_Samp_Fields = {
  __typename?: "contract_transactions_view_stddev_samp_fields";
  height?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "contract_transactions_view" */
export type Contract_Transactions_View_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_Transactions_View_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_Transactions_View_Stream_Cursor_Value_Input = {
  contract_address?: InputMaybe<Scalars["String"]>;
  hash?: InputMaybe<Scalars["bytea"]>;
  height?: InputMaybe<Scalars["Int"]>;
  is_clear_admin?: InputMaybe<Scalars["Boolean"]>;
  is_execute?: InputMaybe<Scalars["Boolean"]>;
  is_ibc?: InputMaybe<Scalars["Boolean"]>;
  is_instantiate?: InputMaybe<Scalars["Boolean"]>;
  is_migrate?: InputMaybe<Scalars["Boolean"]>;
  is_send?: InputMaybe<Scalars["Boolean"]>;
  is_store_code?: InputMaybe<Scalars["Boolean"]>;
  is_update_admin?: InputMaybe<Scalars["Boolean"]>;
  messages?: InputMaybe<Scalars["json"]>;
  sender?: InputMaybe<Scalars["String"]>;
  success?: InputMaybe<Scalars["Boolean"]>;
  timestamp?: InputMaybe<Scalars["timestamp"]>;
};

/** aggregate sum on columns */
export type Contract_Transactions_View_Sum_Fields = {
  __typename?: "contract_transactions_view_sum_fields";
  height?: Maybe<Scalars["Int"]>;
};

export type Contract_Transactions_View_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Contract_Transactions_View_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contract_Transactions_View_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contract_Transactions_View_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Contract_Transactions_View_Var_Pop_Fields = {
  __typename?: "contract_transactions_view_var_pop_fields";
  height?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Contract_Transactions_View_Var_Samp_Fields = {
  __typename?: "contract_transactions_view_var_samp_fields";
  height?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Contract_Transactions_View_Variance_Fields = {
  __typename?: "contract_transactions_view_variance_fields";
  height?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "contracts" */
export type Contracts = {
  __typename?: "contracts";
  /** An object relationship */
  account?: Maybe<Accounts>;
  /** An object relationship */
  accountByInitBy?: Maybe<Accounts>;
  address: Scalars["String"];
  admin?: Maybe<Scalars["Int"]>;
  /** An object relationship */
  code: Codes;
  code_id: Scalars["Int"];
  contract_executed: Scalars["Int"];
  /** An array relationship */
  contract_histories: Array<Contract_Histories>;
  /** An aggregate relationship */
  contract_histories_aggregate: Contract_Histories_Aggregate;
  /** An array relationship */
  contract_proposals: Array<Contract_Proposals>;
  /** An aggregate relationship */
  contract_proposals_aggregate: Contract_Proposals_Aggregate;
  /** An array relationship */
  contract_transactions: Array<Contract_Transactions>;
  /** An aggregate relationship */
  contract_transactions_aggregate: Contract_Transactions_Aggregate;
  id: Scalars["Int"];
  init_by?: Maybe<Scalars["Int"]>;
  init_msg?: Maybe<Scalars["String"]>;
  init_tx_id?: Maybe<Scalars["Int"]>;
  label: Scalars["String"];
  /** An object relationship */
  transaction?: Maybe<Transactions>;
};

/** columns and relationships of "contracts" */
export type ContractsContract_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Contract_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Histories_Order_By>>;
  where?: InputMaybe<Contract_Histories_Bool_Exp>;
};

/** columns and relationships of "contracts" */
export type ContractsContract_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Histories_Order_By>>;
  where?: InputMaybe<Contract_Histories_Bool_Exp>;
};

/** columns and relationships of "contracts" */
export type ContractsContract_ProposalsArgs = {
  distinct_on?: InputMaybe<Array<Contract_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Proposals_Order_By>>;
  where?: InputMaybe<Contract_Proposals_Bool_Exp>;
};

/** columns and relationships of "contracts" */
export type ContractsContract_Proposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Proposals_Order_By>>;
  where?: InputMaybe<Contract_Proposals_Bool_Exp>;
};

/** columns and relationships of "contracts" */
export type ContractsContract_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Transactions_Order_By>>;
  where?: InputMaybe<Contract_Transactions_Bool_Exp>;
};

/** columns and relationships of "contracts" */
export type ContractsContract_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Transactions_Order_By>>;
  where?: InputMaybe<Contract_Transactions_Bool_Exp>;
};

/** aggregated selection of "contracts" */
export type Contracts_Aggregate = {
  __typename?: "contracts_aggregate";
  aggregate?: Maybe<Contracts_Aggregate_Fields>;
  nodes: Array<Contracts>;
};

export type Contracts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Contracts_Aggregate_Bool_Exp_Count>;
};

export type Contracts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Contracts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Contracts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "contracts" */
export type Contracts_Aggregate_Fields = {
  __typename?: "contracts_aggregate_fields";
  avg?: Maybe<Contracts_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Contracts_Max_Fields>;
  min?: Maybe<Contracts_Min_Fields>;
  stddev?: Maybe<Contracts_Stddev_Fields>;
  stddev_pop?: Maybe<Contracts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contracts_Stddev_Samp_Fields>;
  sum?: Maybe<Contracts_Sum_Fields>;
  var_pop?: Maybe<Contracts_Var_Pop_Fields>;
  var_samp?: Maybe<Contracts_Var_Samp_Fields>;
  variance?: Maybe<Contracts_Variance_Fields>;
};

/** aggregate fields of "contracts" */
export type Contracts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contracts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "contracts" */
export type Contracts_Aggregate_Order_By = {
  avg?: InputMaybe<Contracts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Contracts_Max_Order_By>;
  min?: InputMaybe<Contracts_Min_Order_By>;
  stddev?: InputMaybe<Contracts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Contracts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Contracts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Contracts_Sum_Order_By>;
  var_pop?: InputMaybe<Contracts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Contracts_Var_Samp_Order_By>;
  variance?: InputMaybe<Contracts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "contracts" */
export type Contracts_Arr_Rel_Insert_Input = {
  data: Array<Contracts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Contracts_On_Conflict>;
};

/** aggregate avg on columns */
export type Contracts_Avg_Fields = {
  __typename?: "contracts_avg_fields";
  admin?: Maybe<Scalars["Float"]>;
  code_id?: Maybe<Scalars["Float"]>;
  contract_executed?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  init_by?: Maybe<Scalars["Float"]>;
  init_tx_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "contracts" */
export type Contracts_Avg_Order_By = {
  admin?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_executed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  init_by?: InputMaybe<Order_By>;
  init_tx_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "contracts". All fields are combined with a logical 'AND'. */
export type Contracts_Bool_Exp = {
  _and?: InputMaybe<Array<Contracts_Bool_Exp>>;
  _not?: InputMaybe<Contracts_Bool_Exp>;
  _or?: InputMaybe<Array<Contracts_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  accountByInitBy?: InputMaybe<Accounts_Bool_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  admin?: InputMaybe<Int_Comparison_Exp>;
  code?: InputMaybe<Codes_Bool_Exp>;
  code_id?: InputMaybe<Int_Comparison_Exp>;
  contract_executed?: InputMaybe<Int_Comparison_Exp>;
  contract_histories?: InputMaybe<Contract_Histories_Bool_Exp>;
  contract_histories_aggregate?: InputMaybe<Contract_Histories_Aggregate_Bool_Exp>;
  contract_proposals?: InputMaybe<Contract_Proposals_Bool_Exp>;
  contract_proposals_aggregate?: InputMaybe<Contract_Proposals_Aggregate_Bool_Exp>;
  contract_transactions?: InputMaybe<Contract_Transactions_Bool_Exp>;
  contract_transactions_aggregate?: InputMaybe<Contract_Transactions_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  init_by?: InputMaybe<Int_Comparison_Exp>;
  init_msg?: InputMaybe<String_Comparison_Exp>;
  init_tx_id?: InputMaybe<Int_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  transaction?: InputMaybe<Transactions_Bool_Exp>;
};

/** unique or primary key constraints on table "contracts" */
export enum Contracts_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContractsIdKey = "contracts_id_key",
  /** unique or primary key constraint on columns "address" */
  ContractsPkey = "contracts_pkey",
}

/** input type for incrementing numeric columns in table "contracts" */
export type Contracts_Inc_Input = {
  admin?: InputMaybe<Scalars["Int"]>;
  code_id?: InputMaybe<Scalars["Int"]>;
  contract_executed?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
  init_by?: InputMaybe<Scalars["Int"]>;
  init_tx_id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "contracts" */
export type Contracts_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  accountByInitBy?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  address?: InputMaybe<Scalars["String"]>;
  admin?: InputMaybe<Scalars["Int"]>;
  code?: InputMaybe<Codes_Obj_Rel_Insert_Input>;
  code_id?: InputMaybe<Scalars["Int"]>;
  contract_executed?: InputMaybe<Scalars["Int"]>;
  contract_histories?: InputMaybe<Contract_Histories_Arr_Rel_Insert_Input>;
  contract_proposals?: InputMaybe<Contract_Proposals_Arr_Rel_Insert_Input>;
  contract_transactions?: InputMaybe<Contract_Transactions_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars["Int"]>;
  init_by?: InputMaybe<Scalars["Int"]>;
  init_msg?: InputMaybe<Scalars["String"]>;
  init_tx_id?: InputMaybe<Scalars["Int"]>;
  label?: InputMaybe<Scalars["String"]>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Contracts_Max_Fields = {
  __typename?: "contracts_max_fields";
  address?: Maybe<Scalars["String"]>;
  admin?: Maybe<Scalars["Int"]>;
  code_id?: Maybe<Scalars["Int"]>;
  contract_executed?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  init_by?: Maybe<Scalars["Int"]>;
  init_msg?: Maybe<Scalars["String"]>;
  init_tx_id?: Maybe<Scalars["Int"]>;
  label?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "contracts" */
export type Contracts_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  admin?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_executed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  init_by?: InputMaybe<Order_By>;
  init_msg?: InputMaybe<Order_By>;
  init_tx_id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Contracts_Min_Fields = {
  __typename?: "contracts_min_fields";
  address?: Maybe<Scalars["String"]>;
  admin?: Maybe<Scalars["Int"]>;
  code_id?: Maybe<Scalars["Int"]>;
  contract_executed?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  init_by?: Maybe<Scalars["Int"]>;
  init_msg?: Maybe<Scalars["String"]>;
  init_tx_id?: Maybe<Scalars["Int"]>;
  label?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "contracts" */
export type Contracts_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  admin?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_executed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  init_by?: InputMaybe<Order_By>;
  init_msg?: InputMaybe<Order_By>;
  init_tx_id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "contracts" */
export type Contracts_Mutation_Response = {
  __typename?: "contracts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Contracts>;
};

/** input type for inserting object relation for remote table "contracts" */
export type Contracts_Obj_Rel_Insert_Input = {
  data: Contracts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Contracts_On_Conflict>;
};

/** on_conflict condition type for table "contracts" */
export type Contracts_On_Conflict = {
  constraint: Contracts_Constraint;
  update_columns?: Array<Contracts_Update_Column>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

/** Ordering options when selecting data from "contracts". */
export type Contracts_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  accountByInitBy?: InputMaybe<Accounts_Order_By>;
  address?: InputMaybe<Order_By>;
  admin?: InputMaybe<Order_By>;
  code?: InputMaybe<Codes_Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_executed?: InputMaybe<Order_By>;
  contract_histories_aggregate?: InputMaybe<Contract_Histories_Aggregate_Order_By>;
  contract_proposals_aggregate?: InputMaybe<Contract_Proposals_Aggregate_Order_By>;
  contract_transactions_aggregate?: InputMaybe<Contract_Transactions_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  init_by?: InputMaybe<Order_By>;
  init_msg?: InputMaybe<Order_By>;
  init_tx_id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transactions_Order_By>;
};

/** primary key columns input for table: contracts */
export type Contracts_Pk_Columns_Input = {
  address: Scalars["String"];
};

/** select columns of table "contracts" */
export enum Contracts_Select_Column {
  /** column name */
  Address = "address",
  /** column name */
  Admin = "admin",
  /** column name */
  CodeId = "code_id",
  /** column name */
  ContractExecuted = "contract_executed",
  /** column name */
  Id = "id",
  /** column name */
  InitBy = "init_by",
  /** column name */
  InitMsg = "init_msg",
  /** column name */
  InitTxId = "init_tx_id",
  /** column name */
  Label = "label",
}

/** input type for updating data in table "contracts" */
export type Contracts_Set_Input = {
  address?: InputMaybe<Scalars["String"]>;
  admin?: InputMaybe<Scalars["Int"]>;
  code_id?: InputMaybe<Scalars["Int"]>;
  contract_executed?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
  init_by?: InputMaybe<Scalars["Int"]>;
  init_msg?: InputMaybe<Scalars["String"]>;
  init_tx_id?: InputMaybe<Scalars["Int"]>;
  label?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Contracts_Stddev_Fields = {
  __typename?: "contracts_stddev_fields";
  admin?: Maybe<Scalars["Float"]>;
  code_id?: Maybe<Scalars["Float"]>;
  contract_executed?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  init_by?: Maybe<Scalars["Float"]>;
  init_tx_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "contracts" */
export type Contracts_Stddev_Order_By = {
  admin?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_executed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  init_by?: InputMaybe<Order_By>;
  init_tx_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Contracts_Stddev_Pop_Fields = {
  __typename?: "contracts_stddev_pop_fields";
  admin?: Maybe<Scalars["Float"]>;
  code_id?: Maybe<Scalars["Float"]>;
  contract_executed?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  init_by?: Maybe<Scalars["Float"]>;
  init_tx_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "contracts" */
export type Contracts_Stddev_Pop_Order_By = {
  admin?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_executed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  init_by?: InputMaybe<Order_By>;
  init_tx_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Contracts_Stddev_Samp_Fields = {
  __typename?: "contracts_stddev_samp_fields";
  admin?: Maybe<Scalars["Float"]>;
  code_id?: Maybe<Scalars["Float"]>;
  contract_executed?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  init_by?: Maybe<Scalars["Float"]>;
  init_tx_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "contracts" */
export type Contracts_Stddev_Samp_Order_By = {
  admin?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_executed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  init_by?: InputMaybe<Order_By>;
  init_tx_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "contracts" */
export type Contracts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contracts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contracts_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars["String"]>;
  admin?: InputMaybe<Scalars["Int"]>;
  code_id?: InputMaybe<Scalars["Int"]>;
  contract_executed?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
  init_by?: InputMaybe<Scalars["Int"]>;
  init_msg?: InputMaybe<Scalars["String"]>;
  init_tx_id?: InputMaybe<Scalars["Int"]>;
  label?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Contracts_Sum_Fields = {
  __typename?: "contracts_sum_fields";
  admin?: Maybe<Scalars["Int"]>;
  code_id?: Maybe<Scalars["Int"]>;
  contract_executed?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  init_by?: Maybe<Scalars["Int"]>;
  init_tx_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "contracts" */
export type Contracts_Sum_Order_By = {
  admin?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_executed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  init_by?: InputMaybe<Order_By>;
  init_tx_id?: InputMaybe<Order_By>;
};

/** update columns of table "contracts" */
export enum Contracts_Update_Column {
  /** column name */
  Address = "address",
  /** column name */
  Admin = "admin",
  /** column name */
  CodeId = "code_id",
  /** column name */
  ContractExecuted = "contract_executed",
  /** column name */
  Id = "id",
  /** column name */
  InitBy = "init_by",
  /** column name */
  InitMsg = "init_msg",
  /** column name */
  InitTxId = "init_tx_id",
  /** column name */
  Label = "label",
}

export type Contracts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Contracts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contracts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contracts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Contracts_Var_Pop_Fields = {
  __typename?: "contracts_var_pop_fields";
  admin?: Maybe<Scalars["Float"]>;
  code_id?: Maybe<Scalars["Float"]>;
  contract_executed?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  init_by?: Maybe<Scalars["Float"]>;
  init_tx_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "contracts" */
export type Contracts_Var_Pop_Order_By = {
  admin?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_executed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  init_by?: InputMaybe<Order_By>;
  init_tx_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Contracts_Var_Samp_Fields = {
  __typename?: "contracts_var_samp_fields";
  admin?: Maybe<Scalars["Float"]>;
  code_id?: Maybe<Scalars["Float"]>;
  contract_executed?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  init_by?: Maybe<Scalars["Float"]>;
  init_tx_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "contracts" */
export type Contracts_Var_Samp_Order_By = {
  admin?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_executed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  init_by?: InputMaybe<Order_By>;
  init_tx_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Contracts_Variance_Fields = {
  __typename?: "contracts_variance_fields";
  admin?: Maybe<Scalars["Float"]>;
  code_id?: Maybe<Scalars["Float"]>;
  contract_executed?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  init_by?: Maybe<Scalars["Float"]>;
  init_tx_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "contracts" */
export type Contracts_Variance_Order_By = {
  admin?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract_executed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  init_by?: InputMaybe<Order_By>;
  init_tx_id?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "end_block_events" */
export type End_Block_Events = {
  __typename?: "end_block_events";
  /** An object relationship */
  block: Blocks;
  block_height: Scalars["Int"];
  events: Scalars["json"];
};

/** columns and relationships of "end_block_events" */
export type End_Block_EventsEventsArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "end_block_events" */
export type End_Block_Events_Aggregate = {
  __typename?: "end_block_events_aggregate";
  aggregate?: Maybe<End_Block_Events_Aggregate_Fields>;
  nodes: Array<End_Block_Events>;
};

export type End_Block_Events_Aggregate_Bool_Exp = {
  count?: InputMaybe<End_Block_Events_Aggregate_Bool_Exp_Count>;
};

export type End_Block_Events_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<End_Block_Events_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<End_Block_Events_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "end_block_events" */
export type End_Block_Events_Aggregate_Fields = {
  __typename?: "end_block_events_aggregate_fields";
  avg?: Maybe<End_Block_Events_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<End_Block_Events_Max_Fields>;
  min?: Maybe<End_Block_Events_Min_Fields>;
  stddev?: Maybe<End_Block_Events_Stddev_Fields>;
  stddev_pop?: Maybe<End_Block_Events_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<End_Block_Events_Stddev_Samp_Fields>;
  sum?: Maybe<End_Block_Events_Sum_Fields>;
  var_pop?: Maybe<End_Block_Events_Var_Pop_Fields>;
  var_samp?: Maybe<End_Block_Events_Var_Samp_Fields>;
  variance?: Maybe<End_Block_Events_Variance_Fields>;
};

/** aggregate fields of "end_block_events" */
export type End_Block_Events_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<End_Block_Events_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "end_block_events" */
export type End_Block_Events_Aggregate_Order_By = {
  avg?: InputMaybe<End_Block_Events_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<End_Block_Events_Max_Order_By>;
  min?: InputMaybe<End_Block_Events_Min_Order_By>;
  stddev?: InputMaybe<End_Block_Events_Stddev_Order_By>;
  stddev_pop?: InputMaybe<End_Block_Events_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<End_Block_Events_Stddev_Samp_Order_By>;
  sum?: InputMaybe<End_Block_Events_Sum_Order_By>;
  var_pop?: InputMaybe<End_Block_Events_Var_Pop_Order_By>;
  var_samp?: InputMaybe<End_Block_Events_Var_Samp_Order_By>;
  variance?: InputMaybe<End_Block_Events_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "end_block_events" */
export type End_Block_Events_Arr_Rel_Insert_Input = {
  data: Array<End_Block_Events_Insert_Input>;
};

/** aggregate avg on columns */
export type End_Block_Events_Avg_Fields = {
  __typename?: "end_block_events_avg_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "end_block_events" */
export type End_Block_Events_Avg_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "end_block_events". All fields are combined with a logical 'AND'. */
export type End_Block_Events_Bool_Exp = {
  _and?: InputMaybe<Array<End_Block_Events_Bool_Exp>>;
  _not?: InputMaybe<End_Block_Events_Bool_Exp>;
  _or?: InputMaybe<Array<End_Block_Events_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  block_height?: InputMaybe<Int_Comparison_Exp>;
  events?: InputMaybe<Json_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "end_block_events" */
export type End_Block_Events_Inc_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "end_block_events" */
export type End_Block_Events_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  block_height?: InputMaybe<Scalars["Int"]>;
  events?: InputMaybe<Scalars["json"]>;
};

/** aggregate max on columns */
export type End_Block_Events_Max_Fields = {
  __typename?: "end_block_events_max_fields";
  block_height?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "end_block_events" */
export type End_Block_Events_Max_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type End_Block_Events_Min_Fields = {
  __typename?: "end_block_events_min_fields";
  block_height?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "end_block_events" */
export type End_Block_Events_Min_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "end_block_events" */
export type End_Block_Events_Mutation_Response = {
  __typename?: "end_block_events_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<End_Block_Events>;
};

/** Ordering options when selecting data from "end_block_events". */
export type End_Block_Events_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  block_height?: InputMaybe<Order_By>;
  events?: InputMaybe<Order_By>;
};

/** select columns of table "end_block_events" */
export enum End_Block_Events_Select_Column {
  /** column name */
  BlockHeight = "block_height",
  /** column name */
  Events = "events",
}

/** input type for updating data in table "end_block_events" */
export type End_Block_Events_Set_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  events?: InputMaybe<Scalars["json"]>;
};

/** aggregate stddev on columns */
export type End_Block_Events_Stddev_Fields = {
  __typename?: "end_block_events_stddev_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "end_block_events" */
export type End_Block_Events_Stddev_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type End_Block_Events_Stddev_Pop_Fields = {
  __typename?: "end_block_events_stddev_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "end_block_events" */
export type End_Block_Events_Stddev_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type End_Block_Events_Stddev_Samp_Fields = {
  __typename?: "end_block_events_stddev_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "end_block_events" */
export type End_Block_Events_Stddev_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "end_block_events" */
export type End_Block_Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: End_Block_Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type End_Block_Events_Stream_Cursor_Value_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  events?: InputMaybe<Scalars["json"]>;
};

/** aggregate sum on columns */
export type End_Block_Events_Sum_Fields = {
  __typename?: "end_block_events_sum_fields";
  block_height?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "end_block_events" */
export type End_Block_Events_Sum_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

export type End_Block_Events_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<End_Block_Events_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<End_Block_Events_Set_Input>;
  /** filter the rows which have to be updated */
  where: End_Block_Events_Bool_Exp;
};

/** aggregate var_pop on columns */
export type End_Block_Events_Var_Pop_Fields = {
  __typename?: "end_block_events_var_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "end_block_events" */
export type End_Block_Events_Var_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type End_Block_Events_Var_Samp_Fields = {
  __typename?: "end_block_events_var_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "end_block_events" */
export type End_Block_Events_Var_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type End_Block_Events_Variance_Fields = {
  __typename?: "end_block_events_variance_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "end_block_events" */
export type End_Block_Events_Variance_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

export type Get_Top_Pool_Assets_Args = {
  is_superfluid_flag?: InputMaybe<Scalars["Boolean"]>;
  limit_arg?: InputMaybe<Scalars["Int"]>;
  pool_type_arg?: InputMaybe<Scalars["pooltype"]>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["json"]>;
  _gt?: InputMaybe<Scalars["json"]>;
  _gte?: InputMaybe<Scalars["json"]>;
  _in?: InputMaybe<Array<Scalars["json"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["json"]>;
  _lte?: InputMaybe<Scalars["json"]>;
  _neq?: InputMaybe<Scalars["json"]>;
  _nin?: InputMaybe<Array<Scalars["json"]>>;
};

/** columns and relationships of "lcd_tx_results" */
export type Lcd_Tx_Results = {
  __typename?: "lcd_tx_results";
  /** An object relationship */
  block: Blocks;
  block_height: Scalars["Int"];
  result: Scalars["json"];
  /** An object relationship */
  transaction: Transactions;
  transaction_id: Scalars["Int"];
};

/** columns and relationships of "lcd_tx_results" */
export type Lcd_Tx_ResultsResultArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "lcd_tx_results" */
export type Lcd_Tx_Results_Aggregate = {
  __typename?: "lcd_tx_results_aggregate";
  aggregate?: Maybe<Lcd_Tx_Results_Aggregate_Fields>;
  nodes: Array<Lcd_Tx_Results>;
};

export type Lcd_Tx_Results_Aggregate_Bool_Exp = {
  count?: InputMaybe<Lcd_Tx_Results_Aggregate_Bool_Exp_Count>;
};

export type Lcd_Tx_Results_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Lcd_Tx_Results_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Lcd_Tx_Results_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "lcd_tx_results" */
export type Lcd_Tx_Results_Aggregate_Fields = {
  __typename?: "lcd_tx_results_aggregate_fields";
  avg?: Maybe<Lcd_Tx_Results_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Lcd_Tx_Results_Max_Fields>;
  min?: Maybe<Lcd_Tx_Results_Min_Fields>;
  stddev?: Maybe<Lcd_Tx_Results_Stddev_Fields>;
  stddev_pop?: Maybe<Lcd_Tx_Results_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lcd_Tx_Results_Stddev_Samp_Fields>;
  sum?: Maybe<Lcd_Tx_Results_Sum_Fields>;
  var_pop?: Maybe<Lcd_Tx_Results_Var_Pop_Fields>;
  var_samp?: Maybe<Lcd_Tx_Results_Var_Samp_Fields>;
  variance?: Maybe<Lcd_Tx_Results_Variance_Fields>;
};

/** aggregate fields of "lcd_tx_results" */
export type Lcd_Tx_Results_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Lcd_Tx_Results_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "lcd_tx_results" */
export type Lcd_Tx_Results_Aggregate_Order_By = {
  avg?: InputMaybe<Lcd_Tx_Results_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Lcd_Tx_Results_Max_Order_By>;
  min?: InputMaybe<Lcd_Tx_Results_Min_Order_By>;
  stddev?: InputMaybe<Lcd_Tx_Results_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Lcd_Tx_Results_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Lcd_Tx_Results_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Lcd_Tx_Results_Sum_Order_By>;
  var_pop?: InputMaybe<Lcd_Tx_Results_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Lcd_Tx_Results_Var_Samp_Order_By>;
  variance?: InputMaybe<Lcd_Tx_Results_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "lcd_tx_results" */
export type Lcd_Tx_Results_Arr_Rel_Insert_Input = {
  data: Array<Lcd_Tx_Results_Insert_Input>;
};

/** aggregate avg on columns */
export type Lcd_Tx_Results_Avg_Fields = {
  __typename?: "lcd_tx_results_avg_fields";
  block_height?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "lcd_tx_results" */
export type Lcd_Tx_Results_Avg_Order_By = {
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "lcd_tx_results". All fields are combined with a logical 'AND'. */
export type Lcd_Tx_Results_Bool_Exp = {
  _and?: InputMaybe<Array<Lcd_Tx_Results_Bool_Exp>>;
  _not?: InputMaybe<Lcd_Tx_Results_Bool_Exp>;
  _or?: InputMaybe<Array<Lcd_Tx_Results_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  block_height?: InputMaybe<Int_Comparison_Exp>;
  result?: InputMaybe<Json_Comparison_Exp>;
  transaction?: InputMaybe<Transactions_Bool_Exp>;
  transaction_id?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "lcd_tx_results" */
export type Lcd_Tx_Results_Inc_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "lcd_tx_results" */
export type Lcd_Tx_Results_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  block_height?: InputMaybe<Scalars["Int"]>;
  result?: InputMaybe<Scalars["json"]>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Lcd_Tx_Results_Max_Fields = {
  __typename?: "lcd_tx_results_max_fields";
  block_height?: Maybe<Scalars["Int"]>;
  transaction_id?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "lcd_tx_results" */
export type Lcd_Tx_Results_Max_Order_By = {
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Lcd_Tx_Results_Min_Fields = {
  __typename?: "lcd_tx_results_min_fields";
  block_height?: Maybe<Scalars["Int"]>;
  transaction_id?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "lcd_tx_results" */
export type Lcd_Tx_Results_Min_Order_By = {
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "lcd_tx_results" */
export type Lcd_Tx_Results_Mutation_Response = {
  __typename?: "lcd_tx_results_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Lcd_Tx_Results>;
};

/** Ordering options when selecting data from "lcd_tx_results". */
export type Lcd_Tx_Results_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  block_height?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transactions_Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** select columns of table "lcd_tx_results" */
export enum Lcd_Tx_Results_Select_Column {
  /** column name */
  BlockHeight = "block_height",
  /** column name */
  Result = "result",
  /** column name */
  TransactionId = "transaction_id",
}

/** input type for updating data in table "lcd_tx_results" */
export type Lcd_Tx_Results_Set_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  result?: InputMaybe<Scalars["json"]>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Lcd_Tx_Results_Stddev_Fields = {
  __typename?: "lcd_tx_results_stddev_fields";
  block_height?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "lcd_tx_results" */
export type Lcd_Tx_Results_Stddev_Order_By = {
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Lcd_Tx_Results_Stddev_Pop_Fields = {
  __typename?: "lcd_tx_results_stddev_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "lcd_tx_results" */
export type Lcd_Tx_Results_Stddev_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Lcd_Tx_Results_Stddev_Samp_Fields = {
  __typename?: "lcd_tx_results_stddev_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "lcd_tx_results" */
export type Lcd_Tx_Results_Stddev_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "lcd_tx_results" */
export type Lcd_Tx_Results_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Lcd_Tx_Results_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Lcd_Tx_Results_Stream_Cursor_Value_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  result?: InputMaybe<Scalars["json"]>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Lcd_Tx_Results_Sum_Fields = {
  __typename?: "lcd_tx_results_sum_fields";
  block_height?: Maybe<Scalars["Int"]>;
  transaction_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "lcd_tx_results" */
export type Lcd_Tx_Results_Sum_Order_By = {
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

export type Lcd_Tx_Results_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Lcd_Tx_Results_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Lcd_Tx_Results_Set_Input>;
  /** filter the rows which have to be updated */
  where: Lcd_Tx_Results_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Lcd_Tx_Results_Var_Pop_Fields = {
  __typename?: "lcd_tx_results_var_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "lcd_tx_results" */
export type Lcd_Tx_Results_Var_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Lcd_Tx_Results_Var_Samp_Fields = {
  __typename?: "lcd_tx_results_var_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "lcd_tx_results" */
export type Lcd_Tx_Results_Var_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Lcd_Tx_Results_Variance_Fields = {
  __typename?: "lcd_tx_results_variance_fields";
  block_height?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "lcd_tx_results" */
export type Lcd_Tx_Results_Variance_Order_By = {
  block_height?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "account_transactions" */
  delete_account_transactions?: Maybe<Account_Transactions_Mutation_Response>;
  /** delete single row from the table: "account_transactions" */
  delete_account_transactions_by_pk?: Maybe<Account_Transactions>;
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "begin_block_events" */
  delete_begin_block_events?: Maybe<Begin_Block_Events_Mutation_Response>;
  /** delete data from the table: "blocks" */
  delete_blocks?: Maybe<Blocks_Mutation_Response>;
  /** delete single row from the table: "blocks" */
  delete_blocks_by_pk?: Maybe<Blocks>;
  /** delete data from the table: "code_proposals" */
  delete_code_proposals?: Maybe<Code_Proposals_Mutation_Response>;
  /** delete data from the table: "codes" */
  delete_codes?: Maybe<Codes_Mutation_Response>;
  /** delete single row from the table: "codes" */
  delete_codes_by_pk?: Maybe<Codes>;
  /** delete data from the table: "contract_histories" */
  delete_contract_histories?: Maybe<Contract_Histories_Mutation_Response>;
  /** delete data from the table: "contract_proposals" */
  delete_contract_proposals?: Maybe<Contract_Proposals_Mutation_Response>;
  /** delete data from the table: "contract_transactions" */
  delete_contract_transactions?: Maybe<Contract_Transactions_Mutation_Response>;
  /** delete data from the table: "contract_transactions_view" */
  delete_contract_transactions_view?: Maybe<Contract_Transactions_View_Mutation_Response>;
  /** delete data from the table: "contracts" */
  delete_contracts?: Maybe<Contracts_Mutation_Response>;
  /** delete single row from the table: "contracts" */
  delete_contracts_by_pk?: Maybe<Contracts>;
  /** delete data from the table: "end_block_events" */
  delete_end_block_events?: Maybe<End_Block_Events_Mutation_Response>;
  /** delete data from the table: "lcd_tx_results" */
  delete_lcd_tx_results?: Maybe<Lcd_Tx_Results_Mutation_Response>;
  /** delete data from the table: "pool_transactions" */
  delete_pool_transactions?: Maybe<Pool_Transactions_Mutation_Response>;
  /** delete data from the table: "pools" */
  delete_pools?: Maybe<Pools_Mutation_Response>;
  /** delete single row from the table: "pools" */
  delete_pools_by_pk?: Maybe<Pools>;
  /** delete data from the table: "profit_by_denoms" */
  delete_profit_by_denoms?: Maybe<Profit_By_Denoms_Mutation_Response>;
  /** delete data from the table: "profit_by_routes" */
  delete_profit_by_routes?: Maybe<Profit_By_Routes_Mutation_Response>;
  /** delete data from the table: "proposals" */
  delete_proposals?: Maybe<Proposals_Mutation_Response>;
  /** delete single row from the table: "proposals" */
  delete_proposals_by_pk?: Maybe<Proposals>;
  /** delete data from the table: "top_assets_result" */
  delete_top_assets_result?: Maybe<Top_Assets_Result_Mutation_Response>;
  /** delete data from the table: "tracking" */
  delete_tracking?: Maybe<Tracking_Mutation_Response>;
  /** delete single row from the table: "tracking" */
  delete_tracking_by_pk?: Maybe<Tracking>;
  /** delete data from the table: "trade_by_routes" */
  delete_trade_by_routes?: Maybe<Trade_By_Routes_Mutation_Response>;
  /** delete data from the table: "trades" */
  delete_trades?: Maybe<Trades_Mutation_Response>;
  /** delete data from the table: "transactions" */
  delete_transactions?: Maybe<Transactions_Mutation_Response>;
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk?: Maybe<Transactions>;
  /** delete data from the table: "validators" */
  delete_validators?: Maybe<Validators_Mutation_Response>;
  /** delete single row from the table: "validators" */
  delete_validators_by_pk?: Maybe<Validators>;
  /** insert data into the table: "account_transactions" */
  insert_account_transactions?: Maybe<Account_Transactions_Mutation_Response>;
  /** insert a single row into the table: "account_transactions" */
  insert_account_transactions_one?: Maybe<Account_Transactions>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "begin_block_events" */
  insert_begin_block_events?: Maybe<Begin_Block_Events_Mutation_Response>;
  /** insert a single row into the table: "begin_block_events" */
  insert_begin_block_events_one?: Maybe<Begin_Block_Events>;
  /** insert data into the table: "blocks" */
  insert_blocks?: Maybe<Blocks_Mutation_Response>;
  /** insert a single row into the table: "blocks" */
  insert_blocks_one?: Maybe<Blocks>;
  /** insert data into the table: "code_proposals" */
  insert_code_proposals?: Maybe<Code_Proposals_Mutation_Response>;
  /** insert a single row into the table: "code_proposals" */
  insert_code_proposals_one?: Maybe<Code_Proposals>;
  /** insert data into the table: "codes" */
  insert_codes?: Maybe<Codes_Mutation_Response>;
  /** insert a single row into the table: "codes" */
  insert_codes_one?: Maybe<Codes>;
  /** insert data into the table: "contract_histories" */
  insert_contract_histories?: Maybe<Contract_Histories_Mutation_Response>;
  /** insert a single row into the table: "contract_histories" */
  insert_contract_histories_one?: Maybe<Contract_Histories>;
  /** insert data into the table: "contract_proposals" */
  insert_contract_proposals?: Maybe<Contract_Proposals_Mutation_Response>;
  /** insert a single row into the table: "contract_proposals" */
  insert_contract_proposals_one?: Maybe<Contract_Proposals>;
  /** insert data into the table: "contract_transactions" */
  insert_contract_transactions?: Maybe<Contract_Transactions_Mutation_Response>;
  /** insert a single row into the table: "contract_transactions" */
  insert_contract_transactions_one?: Maybe<Contract_Transactions>;
  /** insert data into the table: "contract_transactions_view" */
  insert_contract_transactions_view?: Maybe<Contract_Transactions_View_Mutation_Response>;
  /** insert a single row into the table: "contract_transactions_view" */
  insert_contract_transactions_view_one?: Maybe<Contract_Transactions_View>;
  /** insert data into the table: "contracts" */
  insert_contracts?: Maybe<Contracts_Mutation_Response>;
  /** insert a single row into the table: "contracts" */
  insert_contracts_one?: Maybe<Contracts>;
  /** insert data into the table: "end_block_events" */
  insert_end_block_events?: Maybe<End_Block_Events_Mutation_Response>;
  /** insert a single row into the table: "end_block_events" */
  insert_end_block_events_one?: Maybe<End_Block_Events>;
  /** insert data into the table: "lcd_tx_results" */
  insert_lcd_tx_results?: Maybe<Lcd_Tx_Results_Mutation_Response>;
  /** insert a single row into the table: "lcd_tx_results" */
  insert_lcd_tx_results_one?: Maybe<Lcd_Tx_Results>;
  /** insert data into the table: "pool_transactions" */
  insert_pool_transactions?: Maybe<Pool_Transactions_Mutation_Response>;
  /** insert a single row into the table: "pool_transactions" */
  insert_pool_transactions_one?: Maybe<Pool_Transactions>;
  /** insert data into the table: "pools" */
  insert_pools?: Maybe<Pools_Mutation_Response>;
  /** insert a single row into the table: "pools" */
  insert_pools_one?: Maybe<Pools>;
  /** insert data into the table: "profit_by_denoms" */
  insert_profit_by_denoms?: Maybe<Profit_By_Denoms_Mutation_Response>;
  /** insert a single row into the table: "profit_by_denoms" */
  insert_profit_by_denoms_one?: Maybe<Profit_By_Denoms>;
  /** insert data into the table: "profit_by_routes" */
  insert_profit_by_routes?: Maybe<Profit_By_Routes_Mutation_Response>;
  /** insert a single row into the table: "profit_by_routes" */
  insert_profit_by_routes_one?: Maybe<Profit_By_Routes>;
  /** insert data into the table: "proposals" */
  insert_proposals?: Maybe<Proposals_Mutation_Response>;
  /** insert a single row into the table: "proposals" */
  insert_proposals_one?: Maybe<Proposals>;
  /** insert data into the table: "top_assets_result" */
  insert_top_assets_result?: Maybe<Top_Assets_Result_Mutation_Response>;
  /** insert a single row into the table: "top_assets_result" */
  insert_top_assets_result_one?: Maybe<Top_Assets_Result>;
  /** insert data into the table: "tracking" */
  insert_tracking?: Maybe<Tracking_Mutation_Response>;
  /** insert a single row into the table: "tracking" */
  insert_tracking_one?: Maybe<Tracking>;
  /** insert data into the table: "trade_by_routes" */
  insert_trade_by_routes?: Maybe<Trade_By_Routes_Mutation_Response>;
  /** insert a single row into the table: "trade_by_routes" */
  insert_trade_by_routes_one?: Maybe<Trade_By_Routes>;
  /** insert data into the table: "trades" */
  insert_trades?: Maybe<Trades_Mutation_Response>;
  /** insert a single row into the table: "trades" */
  insert_trades_one?: Maybe<Trades>;
  /** insert data into the table: "transactions" */
  insert_transactions?: Maybe<Transactions_Mutation_Response>;
  /** insert a single row into the table: "transactions" */
  insert_transactions_one?: Maybe<Transactions>;
  /** insert data into the table: "validators" */
  insert_validators?: Maybe<Validators_Mutation_Response>;
  /** insert a single row into the table: "validators" */
  insert_validators_one?: Maybe<Validators>;
  /** update data of the table: "account_transactions" */
  update_account_transactions?: Maybe<Account_Transactions_Mutation_Response>;
  /** update single row of the table: "account_transactions" */
  update_account_transactions_by_pk?: Maybe<Account_Transactions>;
  /** update multiples rows of table: "account_transactions" */
  update_account_transactions_many?: Maybe<
    Array<Maybe<Account_Transactions_Mutation_Response>>
  >;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "begin_block_events" */
  update_begin_block_events?: Maybe<Begin_Block_Events_Mutation_Response>;
  /** update multiples rows of table: "begin_block_events" */
  update_begin_block_events_many?: Maybe<
    Array<Maybe<Begin_Block_Events_Mutation_Response>>
  >;
  /** update data of the table: "blocks" */
  update_blocks?: Maybe<Blocks_Mutation_Response>;
  /** update single row of the table: "blocks" */
  update_blocks_by_pk?: Maybe<Blocks>;
  /** update multiples rows of table: "blocks" */
  update_blocks_many?: Maybe<Array<Maybe<Blocks_Mutation_Response>>>;
  /** update data of the table: "code_proposals" */
  update_code_proposals?: Maybe<Code_Proposals_Mutation_Response>;
  /** update multiples rows of table: "code_proposals" */
  update_code_proposals_many?: Maybe<
    Array<Maybe<Code_Proposals_Mutation_Response>>
  >;
  /** update data of the table: "codes" */
  update_codes?: Maybe<Codes_Mutation_Response>;
  /** update single row of the table: "codes" */
  update_codes_by_pk?: Maybe<Codes>;
  /** update multiples rows of table: "codes" */
  update_codes_many?: Maybe<Array<Maybe<Codes_Mutation_Response>>>;
  /** update data of the table: "contract_histories" */
  update_contract_histories?: Maybe<Contract_Histories_Mutation_Response>;
  /** update multiples rows of table: "contract_histories" */
  update_contract_histories_many?: Maybe<
    Array<Maybe<Contract_Histories_Mutation_Response>>
  >;
  /** update data of the table: "contract_proposals" */
  update_contract_proposals?: Maybe<Contract_Proposals_Mutation_Response>;
  /** update multiples rows of table: "contract_proposals" */
  update_contract_proposals_many?: Maybe<
    Array<Maybe<Contract_Proposals_Mutation_Response>>
  >;
  /** update data of the table: "contract_transactions" */
  update_contract_transactions?: Maybe<Contract_Transactions_Mutation_Response>;
  /** update multiples rows of table: "contract_transactions" */
  update_contract_transactions_many?: Maybe<
    Array<Maybe<Contract_Transactions_Mutation_Response>>
  >;
  /** update data of the table: "contract_transactions_view" */
  update_contract_transactions_view?: Maybe<Contract_Transactions_View_Mutation_Response>;
  /** update multiples rows of table: "contract_transactions_view" */
  update_contract_transactions_view_many?: Maybe<
    Array<Maybe<Contract_Transactions_View_Mutation_Response>>
  >;
  /** update data of the table: "contracts" */
  update_contracts?: Maybe<Contracts_Mutation_Response>;
  /** update single row of the table: "contracts" */
  update_contracts_by_pk?: Maybe<Contracts>;
  /** update multiples rows of table: "contracts" */
  update_contracts_many?: Maybe<Array<Maybe<Contracts_Mutation_Response>>>;
  /** update data of the table: "end_block_events" */
  update_end_block_events?: Maybe<End_Block_Events_Mutation_Response>;
  /** update multiples rows of table: "end_block_events" */
  update_end_block_events_many?: Maybe<
    Array<Maybe<End_Block_Events_Mutation_Response>>
  >;
  /** update data of the table: "lcd_tx_results" */
  update_lcd_tx_results?: Maybe<Lcd_Tx_Results_Mutation_Response>;
  /** update multiples rows of table: "lcd_tx_results" */
  update_lcd_tx_results_many?: Maybe<
    Array<Maybe<Lcd_Tx_Results_Mutation_Response>>
  >;
  /** update data of the table: "pool_transactions" */
  update_pool_transactions?: Maybe<Pool_Transactions_Mutation_Response>;
  /** update multiples rows of table: "pool_transactions" */
  update_pool_transactions_many?: Maybe<
    Array<Maybe<Pool_Transactions_Mutation_Response>>
  >;
  /** update data of the table: "pools" */
  update_pools?: Maybe<Pools_Mutation_Response>;
  /** update single row of the table: "pools" */
  update_pools_by_pk?: Maybe<Pools>;
  /** update multiples rows of table: "pools" */
  update_pools_many?: Maybe<Array<Maybe<Pools_Mutation_Response>>>;
  /** update data of the table: "profit_by_denoms" */
  update_profit_by_denoms?: Maybe<Profit_By_Denoms_Mutation_Response>;
  /** update multiples rows of table: "profit_by_denoms" */
  update_profit_by_denoms_many?: Maybe<
    Array<Maybe<Profit_By_Denoms_Mutation_Response>>
  >;
  /** update data of the table: "profit_by_routes" */
  update_profit_by_routes?: Maybe<Profit_By_Routes_Mutation_Response>;
  /** update multiples rows of table: "profit_by_routes" */
  update_profit_by_routes_many?: Maybe<
    Array<Maybe<Profit_By_Routes_Mutation_Response>>
  >;
  /** update data of the table: "proposals" */
  update_proposals?: Maybe<Proposals_Mutation_Response>;
  /** update single row of the table: "proposals" */
  update_proposals_by_pk?: Maybe<Proposals>;
  /** update multiples rows of table: "proposals" */
  update_proposals_many?: Maybe<Array<Maybe<Proposals_Mutation_Response>>>;
  /** update data of the table: "top_assets_result" */
  update_top_assets_result?: Maybe<Top_Assets_Result_Mutation_Response>;
  /** update multiples rows of table: "top_assets_result" */
  update_top_assets_result_many?: Maybe<
    Array<Maybe<Top_Assets_Result_Mutation_Response>>
  >;
  /** update data of the table: "tracking" */
  update_tracking?: Maybe<Tracking_Mutation_Response>;
  /** update single row of the table: "tracking" */
  update_tracking_by_pk?: Maybe<Tracking>;
  /** update multiples rows of table: "tracking" */
  update_tracking_many?: Maybe<Array<Maybe<Tracking_Mutation_Response>>>;
  /** update data of the table: "trade_by_routes" */
  update_trade_by_routes?: Maybe<Trade_By_Routes_Mutation_Response>;
  /** update multiples rows of table: "trade_by_routes" */
  update_trade_by_routes_many?: Maybe<
    Array<Maybe<Trade_By_Routes_Mutation_Response>>
  >;
  /** update data of the table: "trades" */
  update_trades?: Maybe<Trades_Mutation_Response>;
  /** update multiples rows of table: "trades" */
  update_trades_many?: Maybe<Array<Maybe<Trades_Mutation_Response>>>;
  /** update data of the table: "transactions" */
  update_transactions?: Maybe<Transactions_Mutation_Response>;
  /** update single row of the table: "transactions" */
  update_transactions_by_pk?: Maybe<Transactions>;
  /** update multiples rows of table: "transactions" */
  update_transactions_many?: Maybe<
    Array<Maybe<Transactions_Mutation_Response>>
  >;
  /** update data of the table: "validators" */
  update_validators?: Maybe<Validators_Mutation_Response>;
  /** update single row of the table: "validators" */
  update_validators_by_pk?: Maybe<Validators>;
  /** update multiples rows of table: "validators" */
  update_validators_many?: Maybe<Array<Maybe<Validators_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_Account_TransactionsArgs = {
  where: Account_Transactions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Account_Transactions_By_PkArgs = {
  account_id: Scalars["Int"];
  transaction_id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  address: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Begin_Block_EventsArgs = {
  where: Begin_Block_Events_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_BlocksArgs = {
  where: Blocks_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Blocks_By_PkArgs = {
  height: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_Code_ProposalsArgs = {
  where: Code_Proposals_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_CodesArgs = {
  where: Codes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Codes_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_Contract_HistoriesArgs = {
  where: Contract_Histories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Contract_ProposalsArgs = {
  where: Contract_Proposals_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Contract_TransactionsArgs = {
  where: Contract_Transactions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Contract_Transactions_ViewArgs = {
  where: Contract_Transactions_View_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ContractsArgs = {
  where: Contracts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Contracts_By_PkArgs = {
  address: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_End_Block_EventsArgs = {
  where: End_Block_Events_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Lcd_Tx_ResultsArgs = {
  where: Lcd_Tx_Results_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Pool_TransactionsArgs = {
  where: Pool_Transactions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_PoolsArgs = {
  where: Pools_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Pools_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_Profit_By_DenomsArgs = {
  where: Profit_By_Denoms_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Profit_By_RoutesArgs = {
  where: Profit_By_Routes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ProposalsArgs = {
  where: Proposals_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Proposals_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_Top_Assets_ResultArgs = {
  where: Top_Assets_Result_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_TrackingArgs = {
  where: Tracking_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Tracking_By_PkArgs = {
  chain_id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Trade_By_RoutesArgs = {
  where: Trade_By_Routes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_TradesArgs = {
  where: Trades_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_TransactionsArgs = {
  where: Transactions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Transactions_By_PkArgs = {
  block_height: Scalars["Int"];
  hash: Scalars["bytea"];
};

/** mutation root */
export type Mutation_RootDelete_ValidatorsArgs = {
  where: Validators_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Validators_By_PkArgs = {
  operator_address: Scalars["String"];
};

/** mutation root */
export type Mutation_RootInsert_Account_TransactionsArgs = {
  objects: Array<Account_Transactions_Insert_Input>;
  on_conflict?: InputMaybe<Account_Transactions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Account_Transactions_OneArgs = {
  object: Account_Transactions_Insert_Input;
  on_conflict?: InputMaybe<Account_Transactions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Begin_Block_EventsArgs = {
  objects: Array<Begin_Block_Events_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Begin_Block_Events_OneArgs = {
  object: Begin_Block_Events_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_BlocksArgs = {
  objects: Array<Blocks_Insert_Input>;
  on_conflict?: InputMaybe<Blocks_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Blocks_OneArgs = {
  object: Blocks_Insert_Input;
  on_conflict?: InputMaybe<Blocks_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Code_ProposalsArgs = {
  objects: Array<Code_Proposals_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Code_Proposals_OneArgs = {
  object: Code_Proposals_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_CodesArgs = {
  objects: Array<Codes_Insert_Input>;
  on_conflict?: InputMaybe<Codes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Codes_OneArgs = {
  object: Codes_Insert_Input;
  on_conflict?: InputMaybe<Codes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Contract_HistoriesArgs = {
  objects: Array<Contract_Histories_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Contract_Histories_OneArgs = {
  object: Contract_Histories_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Contract_ProposalsArgs = {
  objects: Array<Contract_Proposals_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Contract_Proposals_OneArgs = {
  object: Contract_Proposals_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Contract_TransactionsArgs = {
  objects: Array<Contract_Transactions_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Contract_Transactions_OneArgs = {
  object: Contract_Transactions_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Contract_Transactions_ViewArgs = {
  objects: Array<Contract_Transactions_View_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Contract_Transactions_View_OneArgs = {
  object: Contract_Transactions_View_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_ContractsArgs = {
  objects: Array<Contracts_Insert_Input>;
  on_conflict?: InputMaybe<Contracts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Contracts_OneArgs = {
  object: Contracts_Insert_Input;
  on_conflict?: InputMaybe<Contracts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_End_Block_EventsArgs = {
  objects: Array<End_Block_Events_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_End_Block_Events_OneArgs = {
  object: End_Block_Events_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Lcd_Tx_ResultsArgs = {
  objects: Array<Lcd_Tx_Results_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Lcd_Tx_Results_OneArgs = {
  object: Lcd_Tx_Results_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Pool_TransactionsArgs = {
  objects: Array<Pool_Transactions_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Pool_Transactions_OneArgs = {
  object: Pool_Transactions_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_PoolsArgs = {
  objects: Array<Pools_Insert_Input>;
  on_conflict?: InputMaybe<Pools_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Pools_OneArgs = {
  object: Pools_Insert_Input;
  on_conflict?: InputMaybe<Pools_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Profit_By_DenomsArgs = {
  objects: Array<Profit_By_Denoms_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Profit_By_Denoms_OneArgs = {
  object: Profit_By_Denoms_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Profit_By_RoutesArgs = {
  objects: Array<Profit_By_Routes_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Profit_By_Routes_OneArgs = {
  object: Profit_By_Routes_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_ProposalsArgs = {
  objects: Array<Proposals_Insert_Input>;
  on_conflict?: InputMaybe<Proposals_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Proposals_OneArgs = {
  object: Proposals_Insert_Input;
  on_conflict?: InputMaybe<Proposals_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Top_Assets_ResultArgs = {
  objects: Array<Top_Assets_Result_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Top_Assets_Result_OneArgs = {
  object: Top_Assets_Result_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_TrackingArgs = {
  objects: Array<Tracking_Insert_Input>;
  on_conflict?: InputMaybe<Tracking_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tracking_OneArgs = {
  object: Tracking_Insert_Input;
  on_conflict?: InputMaybe<Tracking_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Trade_By_RoutesArgs = {
  objects: Array<Trade_By_Routes_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Trade_By_Routes_OneArgs = {
  object: Trade_By_Routes_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_TradesArgs = {
  objects: Array<Trades_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Trades_OneArgs = {
  object: Trades_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_TransactionsArgs = {
  objects: Array<Transactions_Insert_Input>;
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Transactions_OneArgs = {
  object: Transactions_Insert_Input;
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ValidatorsArgs = {
  objects: Array<Validators_Insert_Input>;
  on_conflict?: InputMaybe<Validators_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Validators_OneArgs = {
  object: Validators_Insert_Input;
  on_conflict?: InputMaybe<Validators_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Account_TransactionsArgs = {
  _inc?: InputMaybe<Account_Transactions_Inc_Input>;
  _set?: InputMaybe<Account_Transactions_Set_Input>;
  where: Account_Transactions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Account_Transactions_By_PkArgs = {
  _inc?: InputMaybe<Account_Transactions_Inc_Input>;
  _set?: InputMaybe<Account_Transactions_Set_Input>;
  pk_columns: Account_Transactions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Account_Transactions_ManyArgs = {
  updates: Array<Account_Transactions_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Begin_Block_EventsArgs = {
  _inc?: InputMaybe<Begin_Block_Events_Inc_Input>;
  _set?: InputMaybe<Begin_Block_Events_Set_Input>;
  where: Begin_Block_Events_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Begin_Block_Events_ManyArgs = {
  updates: Array<Begin_Block_Events_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_BlocksArgs = {
  _inc?: InputMaybe<Blocks_Inc_Input>;
  _set?: InputMaybe<Blocks_Set_Input>;
  where: Blocks_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Blocks_By_PkArgs = {
  _inc?: InputMaybe<Blocks_Inc_Input>;
  _set?: InputMaybe<Blocks_Set_Input>;
  pk_columns: Blocks_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Blocks_ManyArgs = {
  updates: Array<Blocks_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Code_ProposalsArgs = {
  _inc?: InputMaybe<Code_Proposals_Inc_Input>;
  _set?: InputMaybe<Code_Proposals_Set_Input>;
  where: Code_Proposals_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Code_Proposals_ManyArgs = {
  updates: Array<Code_Proposals_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_CodesArgs = {
  _inc?: InputMaybe<Codes_Inc_Input>;
  _set?: InputMaybe<Codes_Set_Input>;
  where: Codes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Codes_By_PkArgs = {
  _inc?: InputMaybe<Codes_Inc_Input>;
  _set?: InputMaybe<Codes_Set_Input>;
  pk_columns: Codes_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Codes_ManyArgs = {
  updates: Array<Codes_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Contract_HistoriesArgs = {
  _inc?: InputMaybe<Contract_Histories_Inc_Input>;
  _set?: InputMaybe<Contract_Histories_Set_Input>;
  where: Contract_Histories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Contract_Histories_ManyArgs = {
  updates: Array<Contract_Histories_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Contract_ProposalsArgs = {
  _inc?: InputMaybe<Contract_Proposals_Inc_Input>;
  _set?: InputMaybe<Contract_Proposals_Set_Input>;
  where: Contract_Proposals_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Contract_Proposals_ManyArgs = {
  updates: Array<Contract_Proposals_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Contract_TransactionsArgs = {
  _inc?: InputMaybe<Contract_Transactions_Inc_Input>;
  _set?: InputMaybe<Contract_Transactions_Set_Input>;
  where: Contract_Transactions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Contract_Transactions_ManyArgs = {
  updates: Array<Contract_Transactions_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Contract_Transactions_ViewArgs = {
  _inc?: InputMaybe<Contract_Transactions_View_Inc_Input>;
  _set?: InputMaybe<Contract_Transactions_View_Set_Input>;
  where: Contract_Transactions_View_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Contract_Transactions_View_ManyArgs = {
  updates: Array<Contract_Transactions_View_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ContractsArgs = {
  _inc?: InputMaybe<Contracts_Inc_Input>;
  _set?: InputMaybe<Contracts_Set_Input>;
  where: Contracts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Contracts_By_PkArgs = {
  _inc?: InputMaybe<Contracts_Inc_Input>;
  _set?: InputMaybe<Contracts_Set_Input>;
  pk_columns: Contracts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Contracts_ManyArgs = {
  updates: Array<Contracts_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_End_Block_EventsArgs = {
  _inc?: InputMaybe<End_Block_Events_Inc_Input>;
  _set?: InputMaybe<End_Block_Events_Set_Input>;
  where: End_Block_Events_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_End_Block_Events_ManyArgs = {
  updates: Array<End_Block_Events_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Lcd_Tx_ResultsArgs = {
  _inc?: InputMaybe<Lcd_Tx_Results_Inc_Input>;
  _set?: InputMaybe<Lcd_Tx_Results_Set_Input>;
  where: Lcd_Tx_Results_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Lcd_Tx_Results_ManyArgs = {
  updates: Array<Lcd_Tx_Results_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Pool_TransactionsArgs = {
  _inc?: InputMaybe<Pool_Transactions_Inc_Input>;
  _set?: InputMaybe<Pool_Transactions_Set_Input>;
  where: Pool_Transactions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Pool_Transactions_ManyArgs = {
  updates: Array<Pool_Transactions_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PoolsArgs = {
  _inc?: InputMaybe<Pools_Inc_Input>;
  _set?: InputMaybe<Pools_Set_Input>;
  where: Pools_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Pools_By_PkArgs = {
  _inc?: InputMaybe<Pools_Inc_Input>;
  _set?: InputMaybe<Pools_Set_Input>;
  pk_columns: Pools_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Pools_ManyArgs = {
  updates: Array<Pools_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Profit_By_DenomsArgs = {
  _inc?: InputMaybe<Profit_By_Denoms_Inc_Input>;
  _set?: InputMaybe<Profit_By_Denoms_Set_Input>;
  where: Profit_By_Denoms_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Profit_By_Denoms_ManyArgs = {
  updates: Array<Profit_By_Denoms_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Profit_By_RoutesArgs = {
  _inc?: InputMaybe<Profit_By_Routes_Inc_Input>;
  _set?: InputMaybe<Profit_By_Routes_Set_Input>;
  where: Profit_By_Routes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Profit_By_Routes_ManyArgs = {
  updates: Array<Profit_By_Routes_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ProposalsArgs = {
  _inc?: InputMaybe<Proposals_Inc_Input>;
  _set?: InputMaybe<Proposals_Set_Input>;
  where: Proposals_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Proposals_By_PkArgs = {
  _inc?: InputMaybe<Proposals_Inc_Input>;
  _set?: InputMaybe<Proposals_Set_Input>;
  pk_columns: Proposals_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Proposals_ManyArgs = {
  updates: Array<Proposals_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Top_Assets_ResultArgs = {
  _inc?: InputMaybe<Top_Assets_Result_Inc_Input>;
  _set?: InputMaybe<Top_Assets_Result_Set_Input>;
  where: Top_Assets_Result_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Top_Assets_Result_ManyArgs = {
  updates: Array<Top_Assets_Result_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_TrackingArgs = {
  _inc?: InputMaybe<Tracking_Inc_Input>;
  _set?: InputMaybe<Tracking_Set_Input>;
  where: Tracking_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Tracking_By_PkArgs = {
  _inc?: InputMaybe<Tracking_Inc_Input>;
  _set?: InputMaybe<Tracking_Set_Input>;
  pk_columns: Tracking_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Tracking_ManyArgs = {
  updates: Array<Tracking_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Trade_By_RoutesArgs = {
  _inc?: InputMaybe<Trade_By_Routes_Inc_Input>;
  _set?: InputMaybe<Trade_By_Routes_Set_Input>;
  where: Trade_By_Routes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Trade_By_Routes_ManyArgs = {
  updates: Array<Trade_By_Routes_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_TradesArgs = {
  _inc?: InputMaybe<Trades_Inc_Input>;
  _set?: InputMaybe<Trades_Set_Input>;
  where: Trades_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Trades_ManyArgs = {
  updates: Array<Trades_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_TransactionsArgs = {
  _inc?: InputMaybe<Transactions_Inc_Input>;
  _set?: InputMaybe<Transactions_Set_Input>;
  where: Transactions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Transactions_By_PkArgs = {
  _inc?: InputMaybe<Transactions_Inc_Input>;
  _set?: InputMaybe<Transactions_Set_Input>;
  pk_columns: Transactions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Transactions_ManyArgs = {
  updates: Array<Transactions_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ValidatorsArgs = {
  _inc?: InputMaybe<Validators_Inc_Input>;
  _set?: InputMaybe<Validators_Set_Input>;
  where: Validators_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Validators_By_PkArgs = {
  _inc?: InputMaybe<Validators_Inc_Input>;
  _set?: InputMaybe<Validators_Set_Input>;
  pk_columns: Validators_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Validators_ManyArgs = {
  updates: Array<Validators_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "pool_transactions" */
export type Pool_Transactions = {
  __typename?: "pool_transactions";
  /** An object relationship */
  block: Blocks;
  block_height: Scalars["Int"];
  is_bond: Scalars["Boolean"];
  is_lp: Scalars["Boolean"];
  is_superfluid: Scalars["Boolean"];
  is_swap: Scalars["Boolean"];
  /** An object relationship */
  pool: Pools;
  pool_id: Scalars["Int"];
  /** An object relationship */
  transaction: Transactions;
  transaction_id: Scalars["Int"];
};

/** aggregated selection of "pool_transactions" */
export type Pool_Transactions_Aggregate = {
  __typename?: "pool_transactions_aggregate";
  aggregate?: Maybe<Pool_Transactions_Aggregate_Fields>;
  nodes: Array<Pool_Transactions>;
};

export type Pool_Transactions_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Pool_Transactions_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Pool_Transactions_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Pool_Transactions_Aggregate_Bool_Exp_Count>;
};

export type Pool_Transactions_Aggregate_Bool_Exp_Bool_And = {
  arguments: Pool_Transactions_Select_Column_Pool_Transactions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Pool_Transactions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Pool_Transactions_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Pool_Transactions_Select_Column_Pool_Transactions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Pool_Transactions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Pool_Transactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Pool_Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Pool_Transactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "pool_transactions" */
export type Pool_Transactions_Aggregate_Fields = {
  __typename?: "pool_transactions_aggregate_fields";
  avg?: Maybe<Pool_Transactions_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Pool_Transactions_Max_Fields>;
  min?: Maybe<Pool_Transactions_Min_Fields>;
  stddev?: Maybe<Pool_Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Pool_Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pool_Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Pool_Transactions_Sum_Fields>;
  var_pop?: Maybe<Pool_Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Pool_Transactions_Var_Samp_Fields>;
  variance?: Maybe<Pool_Transactions_Variance_Fields>;
};

/** aggregate fields of "pool_transactions" */
export type Pool_Transactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pool_Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "pool_transactions" */
export type Pool_Transactions_Aggregate_Order_By = {
  avg?: InputMaybe<Pool_Transactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pool_Transactions_Max_Order_By>;
  min?: InputMaybe<Pool_Transactions_Min_Order_By>;
  stddev?: InputMaybe<Pool_Transactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pool_Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pool_Transactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pool_Transactions_Sum_Order_By>;
  var_pop?: InputMaybe<Pool_Transactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pool_Transactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Pool_Transactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pool_transactions" */
export type Pool_Transactions_Arr_Rel_Insert_Input = {
  data: Array<Pool_Transactions_Insert_Input>;
};

/** aggregate avg on columns */
export type Pool_Transactions_Avg_Fields = {
  __typename?: "pool_transactions_avg_fields";
  block_height?: Maybe<Scalars["Float"]>;
  pool_id?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "pool_transactions" */
export type Pool_Transactions_Avg_Order_By = {
  block_height?: InputMaybe<Order_By>;
  pool_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pool_transactions". All fields are combined with a logical 'AND'. */
export type Pool_Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Pool_Transactions_Bool_Exp>>;
  _not?: InputMaybe<Pool_Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Pool_Transactions_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  block_height?: InputMaybe<Int_Comparison_Exp>;
  is_bond?: InputMaybe<Boolean_Comparison_Exp>;
  is_lp?: InputMaybe<Boolean_Comparison_Exp>;
  is_superfluid?: InputMaybe<Boolean_Comparison_Exp>;
  is_swap?: InputMaybe<Boolean_Comparison_Exp>;
  pool?: InputMaybe<Pools_Bool_Exp>;
  pool_id?: InputMaybe<Int_Comparison_Exp>;
  transaction?: InputMaybe<Transactions_Bool_Exp>;
  transaction_id?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "pool_transactions" */
export type Pool_Transactions_Inc_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  pool_id?: InputMaybe<Scalars["Int"]>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "pool_transactions" */
export type Pool_Transactions_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  block_height?: InputMaybe<Scalars["Int"]>;
  is_bond?: InputMaybe<Scalars["Boolean"]>;
  is_lp?: InputMaybe<Scalars["Boolean"]>;
  is_superfluid?: InputMaybe<Scalars["Boolean"]>;
  is_swap?: InputMaybe<Scalars["Boolean"]>;
  pool?: InputMaybe<Pools_Obj_Rel_Insert_Input>;
  pool_id?: InputMaybe<Scalars["Int"]>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Pool_Transactions_Max_Fields = {
  __typename?: "pool_transactions_max_fields";
  block_height?: Maybe<Scalars["Int"]>;
  pool_id?: Maybe<Scalars["Int"]>;
  transaction_id?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "pool_transactions" */
export type Pool_Transactions_Max_Order_By = {
  block_height?: InputMaybe<Order_By>;
  pool_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pool_Transactions_Min_Fields = {
  __typename?: "pool_transactions_min_fields";
  block_height?: Maybe<Scalars["Int"]>;
  pool_id?: Maybe<Scalars["Int"]>;
  transaction_id?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "pool_transactions" */
export type Pool_Transactions_Min_Order_By = {
  block_height?: InputMaybe<Order_By>;
  pool_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pool_transactions" */
export type Pool_Transactions_Mutation_Response = {
  __typename?: "pool_transactions_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Pool_Transactions>;
};

/** Ordering options when selecting data from "pool_transactions". */
export type Pool_Transactions_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  block_height?: InputMaybe<Order_By>;
  is_bond?: InputMaybe<Order_By>;
  is_lp?: InputMaybe<Order_By>;
  is_superfluid?: InputMaybe<Order_By>;
  is_swap?: InputMaybe<Order_By>;
  pool?: InputMaybe<Pools_Order_By>;
  pool_id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transactions_Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** select columns of table "pool_transactions" */
export enum Pool_Transactions_Select_Column {
  /** column name */
  BlockHeight = "block_height",
  /** column name */
  IsBond = "is_bond",
  /** column name */
  IsLp = "is_lp",
  /** column name */
  IsSuperfluid = "is_superfluid",
  /** column name */
  IsSwap = "is_swap",
  /** column name */
  PoolId = "pool_id",
  /** column name */
  TransactionId = "transaction_id",
}

/** select "pool_transactions_aggregate_bool_exp_bool_and_arguments_columns" columns of table "pool_transactions" */
export enum Pool_Transactions_Select_Column_Pool_Transactions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsBond = "is_bond",
  /** column name */
  IsLp = "is_lp",
  /** column name */
  IsSuperfluid = "is_superfluid",
  /** column name */
  IsSwap = "is_swap",
}

/** select "pool_transactions_aggregate_bool_exp_bool_or_arguments_columns" columns of table "pool_transactions" */
export enum Pool_Transactions_Select_Column_Pool_Transactions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsBond = "is_bond",
  /** column name */
  IsLp = "is_lp",
  /** column name */
  IsSuperfluid = "is_superfluid",
  /** column name */
  IsSwap = "is_swap",
}

/** input type for updating data in table "pool_transactions" */
export type Pool_Transactions_Set_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  is_bond?: InputMaybe<Scalars["Boolean"]>;
  is_lp?: InputMaybe<Scalars["Boolean"]>;
  is_superfluid?: InputMaybe<Scalars["Boolean"]>;
  is_swap?: InputMaybe<Scalars["Boolean"]>;
  pool_id?: InputMaybe<Scalars["Int"]>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Pool_Transactions_Stddev_Fields = {
  __typename?: "pool_transactions_stddev_fields";
  block_height?: Maybe<Scalars["Float"]>;
  pool_id?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "pool_transactions" */
export type Pool_Transactions_Stddev_Order_By = {
  block_height?: InputMaybe<Order_By>;
  pool_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pool_Transactions_Stddev_Pop_Fields = {
  __typename?: "pool_transactions_stddev_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
  pool_id?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "pool_transactions" */
export type Pool_Transactions_Stddev_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
  pool_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pool_Transactions_Stddev_Samp_Fields = {
  __typename?: "pool_transactions_stddev_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
  pool_id?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "pool_transactions" */
export type Pool_Transactions_Stddev_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
  pool_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pool_transactions" */
export type Pool_Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pool_Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pool_Transactions_Stream_Cursor_Value_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  is_bond?: InputMaybe<Scalars["Boolean"]>;
  is_lp?: InputMaybe<Scalars["Boolean"]>;
  is_superfluid?: InputMaybe<Scalars["Boolean"]>;
  is_swap?: InputMaybe<Scalars["Boolean"]>;
  pool_id?: InputMaybe<Scalars["Int"]>;
  transaction_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Pool_Transactions_Sum_Fields = {
  __typename?: "pool_transactions_sum_fields";
  block_height?: Maybe<Scalars["Int"]>;
  pool_id?: Maybe<Scalars["Int"]>;
  transaction_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "pool_transactions" */
export type Pool_Transactions_Sum_Order_By = {
  block_height?: InputMaybe<Order_By>;
  pool_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

export type Pool_Transactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pool_Transactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pool_Transactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Pool_Transactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pool_Transactions_Var_Pop_Fields = {
  __typename?: "pool_transactions_var_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
  pool_id?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "pool_transactions" */
export type Pool_Transactions_Var_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
  pool_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pool_Transactions_Var_Samp_Fields = {
  __typename?: "pool_transactions_var_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
  pool_id?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "pool_transactions" */
export type Pool_Transactions_Var_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
  pool_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Pool_Transactions_Variance_Fields = {
  __typename?: "pool_transactions_variance_fields";
  block_height?: Maybe<Scalars["Float"]>;
  pool_id?: Maybe<Scalars["Float"]>;
  transaction_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "pool_transactions" */
export type Pool_Transactions_Variance_Order_By = {
  block_height?: InputMaybe<Order_By>;
  pool_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "pools" */
export type Pools = {
  __typename?: "pools";
  /** An object relationship */
  account?: Maybe<Accounts>;
  address: Scalars["String"];
  create_tx_id?: Maybe<Scalars["Int"]>;
  creator?: Maybe<Scalars["Int"]>;
  exit_fee: Scalars["String"];
  future_pool_governor: Scalars["String"];
  id: Scalars["Int"];
  is_superfluid: Scalars["Boolean"];
  is_supported: Scalars["Boolean"];
  liquidity: Scalars["json"];
  /** An array relationship */
  pool_transactions: Array<Pool_Transactions>;
  /** An aggregate relationship */
  pool_transactions_aggregate: Pool_Transactions_Aggregate;
  scaling_factor_controller?: Maybe<Scalars["String"]>;
  scaling_factors?: Maybe<Scalars["json"]>;
  smooth_weight_change_params?: Maybe<Scalars["json"]>;
  swap_fee: Scalars["String"];
  total_shares: Scalars["json"];
  /** An object relationship */
  transaction?: Maybe<Transactions>;
  type: Scalars["pooltype"];
  weight?: Maybe<Scalars["json"]>;
};

/** columns and relationships of "pools" */
export type PoolsLiquidityArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "pools" */
export type PoolsPool_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Pool_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pool_Transactions_Order_By>>;
  where?: InputMaybe<Pool_Transactions_Bool_Exp>;
};

/** columns and relationships of "pools" */
export type PoolsPool_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pool_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pool_Transactions_Order_By>>;
  where?: InputMaybe<Pool_Transactions_Bool_Exp>;
};

/** columns and relationships of "pools" */
export type PoolsScaling_FactorsArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "pools" */
export type PoolsSmooth_Weight_Change_ParamsArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "pools" */
export type PoolsTotal_SharesArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "pools" */
export type PoolsWeightArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "pools" */
export type Pools_Aggregate = {
  __typename?: "pools_aggregate";
  aggregate?: Maybe<Pools_Aggregate_Fields>;
  nodes: Array<Pools>;
};

export type Pools_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Pools_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Pools_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Pools_Aggregate_Bool_Exp_Count>;
};

export type Pools_Aggregate_Bool_Exp_Bool_And = {
  arguments: Pools_Select_Column_Pools_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Pools_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Pools_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Pools_Select_Column_Pools_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Pools_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Pools_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Pools_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Pools_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "pools" */
export type Pools_Aggregate_Fields = {
  __typename?: "pools_aggregate_fields";
  avg?: Maybe<Pools_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Pools_Max_Fields>;
  min?: Maybe<Pools_Min_Fields>;
  stddev?: Maybe<Pools_Stddev_Fields>;
  stddev_pop?: Maybe<Pools_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pools_Stddev_Samp_Fields>;
  sum?: Maybe<Pools_Sum_Fields>;
  var_pop?: Maybe<Pools_Var_Pop_Fields>;
  var_samp?: Maybe<Pools_Var_Samp_Fields>;
  variance?: Maybe<Pools_Variance_Fields>;
};

/** aggregate fields of "pools" */
export type Pools_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pools_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "pools" */
export type Pools_Aggregate_Order_By = {
  avg?: InputMaybe<Pools_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pools_Max_Order_By>;
  min?: InputMaybe<Pools_Min_Order_By>;
  stddev?: InputMaybe<Pools_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pools_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pools_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pools_Sum_Order_By>;
  var_pop?: InputMaybe<Pools_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pools_Var_Samp_Order_By>;
  variance?: InputMaybe<Pools_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pools" */
export type Pools_Arr_Rel_Insert_Input = {
  data: Array<Pools_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pools_On_Conflict>;
};

/** aggregate avg on columns */
export type Pools_Avg_Fields = {
  __typename?: "pools_avg_fields";
  create_tx_id?: Maybe<Scalars["Float"]>;
  creator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "pools" */
export type Pools_Avg_Order_By = {
  create_tx_id?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pools". All fields are combined with a logical 'AND'. */
export type Pools_Bool_Exp = {
  _and?: InputMaybe<Array<Pools_Bool_Exp>>;
  _not?: InputMaybe<Pools_Bool_Exp>;
  _or?: InputMaybe<Array<Pools_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  create_tx_id?: InputMaybe<Int_Comparison_Exp>;
  creator?: InputMaybe<Int_Comparison_Exp>;
  exit_fee?: InputMaybe<String_Comparison_Exp>;
  future_pool_governor?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_superfluid?: InputMaybe<Boolean_Comparison_Exp>;
  is_supported?: InputMaybe<Boolean_Comparison_Exp>;
  liquidity?: InputMaybe<Json_Comparison_Exp>;
  pool_transactions?: InputMaybe<Pool_Transactions_Bool_Exp>;
  pool_transactions_aggregate?: InputMaybe<Pool_Transactions_Aggregate_Bool_Exp>;
  scaling_factor_controller?: InputMaybe<String_Comparison_Exp>;
  scaling_factors?: InputMaybe<Json_Comparison_Exp>;
  smooth_weight_change_params?: InputMaybe<Json_Comparison_Exp>;
  swap_fee?: InputMaybe<String_Comparison_Exp>;
  total_shares?: InputMaybe<Json_Comparison_Exp>;
  transaction?: InputMaybe<Transactions_Bool_Exp>;
  type?: InputMaybe<Pooltype_Comparison_Exp>;
  weight?: InputMaybe<Json_Comparison_Exp>;
};

/** unique or primary key constraints on table "pools" */
export enum Pools_Constraint {
  /** unique or primary key constraint on columns "id" */
  PoolsPkey = "pools_pkey",
}

/** input type for incrementing numeric columns in table "pools" */
export type Pools_Inc_Input = {
  create_tx_id?: InputMaybe<Scalars["Int"]>;
  creator?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "pools" */
export type Pools_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  address?: InputMaybe<Scalars["String"]>;
  create_tx_id?: InputMaybe<Scalars["Int"]>;
  creator?: InputMaybe<Scalars["Int"]>;
  exit_fee?: InputMaybe<Scalars["String"]>;
  future_pool_governor?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  is_superfluid?: InputMaybe<Scalars["Boolean"]>;
  is_supported?: InputMaybe<Scalars["Boolean"]>;
  liquidity?: InputMaybe<Scalars["json"]>;
  pool_transactions?: InputMaybe<Pool_Transactions_Arr_Rel_Insert_Input>;
  scaling_factor_controller?: InputMaybe<Scalars["String"]>;
  scaling_factors?: InputMaybe<Scalars["json"]>;
  smooth_weight_change_params?: InputMaybe<Scalars["json"]>;
  swap_fee?: InputMaybe<Scalars["String"]>;
  total_shares?: InputMaybe<Scalars["json"]>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  type?: InputMaybe<Scalars["pooltype"]>;
  weight?: InputMaybe<Scalars["json"]>;
};

/** aggregate max on columns */
export type Pools_Max_Fields = {
  __typename?: "pools_max_fields";
  address?: Maybe<Scalars["String"]>;
  create_tx_id?: Maybe<Scalars["Int"]>;
  creator?: Maybe<Scalars["Int"]>;
  exit_fee?: Maybe<Scalars["String"]>;
  future_pool_governor?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  scaling_factor_controller?: Maybe<Scalars["String"]>;
  swap_fee?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["pooltype"]>;
};

/** order by max() on columns of table "pools" */
export type Pools_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  create_tx_id?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  exit_fee?: InputMaybe<Order_By>;
  future_pool_governor?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  scaling_factor_controller?: InputMaybe<Order_By>;
  swap_fee?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pools_Min_Fields = {
  __typename?: "pools_min_fields";
  address?: Maybe<Scalars["String"]>;
  create_tx_id?: Maybe<Scalars["Int"]>;
  creator?: Maybe<Scalars["Int"]>;
  exit_fee?: Maybe<Scalars["String"]>;
  future_pool_governor?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  scaling_factor_controller?: Maybe<Scalars["String"]>;
  swap_fee?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["pooltype"]>;
};

/** order by min() on columns of table "pools" */
export type Pools_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  create_tx_id?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  exit_fee?: InputMaybe<Order_By>;
  future_pool_governor?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  scaling_factor_controller?: InputMaybe<Order_By>;
  swap_fee?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pools" */
export type Pools_Mutation_Response = {
  __typename?: "pools_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Pools>;
};

/** input type for inserting object relation for remote table "pools" */
export type Pools_Obj_Rel_Insert_Input = {
  data: Pools_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Pools_On_Conflict>;
};

/** on_conflict condition type for table "pools" */
export type Pools_On_Conflict = {
  constraint: Pools_Constraint;
  update_columns?: Array<Pools_Update_Column>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

/** Ordering options when selecting data from "pools". */
export type Pools_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  address?: InputMaybe<Order_By>;
  create_tx_id?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  exit_fee?: InputMaybe<Order_By>;
  future_pool_governor?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_superfluid?: InputMaybe<Order_By>;
  is_supported?: InputMaybe<Order_By>;
  liquidity?: InputMaybe<Order_By>;
  pool_transactions_aggregate?: InputMaybe<Pool_Transactions_Aggregate_Order_By>;
  scaling_factor_controller?: InputMaybe<Order_By>;
  scaling_factors?: InputMaybe<Order_By>;
  smooth_weight_change_params?: InputMaybe<Order_By>;
  swap_fee?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transactions_Order_By>;
  type?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pools */
export type Pools_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "pools" */
export enum Pools_Select_Column {
  /** column name */
  Address = "address",
  /** column name */
  CreateTxId = "create_tx_id",
  /** column name */
  Creator = "creator",
  /** column name */
  ExitFee = "exit_fee",
  /** column name */
  FuturePoolGovernor = "future_pool_governor",
  /** column name */
  Id = "id",
  /** column name */
  IsSuperfluid = "is_superfluid",
  /** column name */
  IsSupported = "is_supported",
  /** column name */
  Liquidity = "liquidity",
  /** column name */
  ScalingFactorController = "scaling_factor_controller",
  /** column name */
  ScalingFactors = "scaling_factors",
  /** column name */
  SmoothWeightChangeParams = "smooth_weight_change_params",
  /** column name */
  SwapFee = "swap_fee",
  /** column name */
  TotalShares = "total_shares",
  /** column name */
  Type = "type",
  /** column name */
  Weight = "weight",
}

/** select "pools_aggregate_bool_exp_bool_and_arguments_columns" columns of table "pools" */
export enum Pools_Select_Column_Pools_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsSuperfluid = "is_superfluid",
  /** column name */
  IsSupported = "is_supported",
}

/** select "pools_aggregate_bool_exp_bool_or_arguments_columns" columns of table "pools" */
export enum Pools_Select_Column_Pools_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsSuperfluid = "is_superfluid",
  /** column name */
  IsSupported = "is_supported",
}

/** input type for updating data in table "pools" */
export type Pools_Set_Input = {
  address?: InputMaybe<Scalars["String"]>;
  create_tx_id?: InputMaybe<Scalars["Int"]>;
  creator?: InputMaybe<Scalars["Int"]>;
  exit_fee?: InputMaybe<Scalars["String"]>;
  future_pool_governor?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  is_superfluid?: InputMaybe<Scalars["Boolean"]>;
  is_supported?: InputMaybe<Scalars["Boolean"]>;
  liquidity?: InputMaybe<Scalars["json"]>;
  scaling_factor_controller?: InputMaybe<Scalars["String"]>;
  scaling_factors?: InputMaybe<Scalars["json"]>;
  smooth_weight_change_params?: InputMaybe<Scalars["json"]>;
  swap_fee?: InputMaybe<Scalars["String"]>;
  total_shares?: InputMaybe<Scalars["json"]>;
  type?: InputMaybe<Scalars["pooltype"]>;
  weight?: InputMaybe<Scalars["json"]>;
};

/** aggregate stddev on columns */
export type Pools_Stddev_Fields = {
  __typename?: "pools_stddev_fields";
  create_tx_id?: Maybe<Scalars["Float"]>;
  creator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "pools" */
export type Pools_Stddev_Order_By = {
  create_tx_id?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pools_Stddev_Pop_Fields = {
  __typename?: "pools_stddev_pop_fields";
  create_tx_id?: Maybe<Scalars["Float"]>;
  creator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "pools" */
export type Pools_Stddev_Pop_Order_By = {
  create_tx_id?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pools_Stddev_Samp_Fields = {
  __typename?: "pools_stddev_samp_fields";
  create_tx_id?: Maybe<Scalars["Float"]>;
  creator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "pools" */
export type Pools_Stddev_Samp_Order_By = {
  create_tx_id?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pools" */
export type Pools_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pools_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pools_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars["String"]>;
  create_tx_id?: InputMaybe<Scalars["Int"]>;
  creator?: InputMaybe<Scalars["Int"]>;
  exit_fee?: InputMaybe<Scalars["String"]>;
  future_pool_governor?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  is_superfluid?: InputMaybe<Scalars["Boolean"]>;
  is_supported?: InputMaybe<Scalars["Boolean"]>;
  liquidity?: InputMaybe<Scalars["json"]>;
  scaling_factor_controller?: InputMaybe<Scalars["String"]>;
  scaling_factors?: InputMaybe<Scalars["json"]>;
  smooth_weight_change_params?: InputMaybe<Scalars["json"]>;
  swap_fee?: InputMaybe<Scalars["String"]>;
  total_shares?: InputMaybe<Scalars["json"]>;
  type?: InputMaybe<Scalars["pooltype"]>;
  weight?: InputMaybe<Scalars["json"]>;
};

/** aggregate sum on columns */
export type Pools_Sum_Fields = {
  __typename?: "pools_sum_fields";
  create_tx_id?: Maybe<Scalars["Int"]>;
  creator?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "pools" */
export type Pools_Sum_Order_By = {
  create_tx_id?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "pools" */
export enum Pools_Update_Column {
  /** column name */
  Address = "address",
  /** column name */
  CreateTxId = "create_tx_id",
  /** column name */
  Creator = "creator",
  /** column name */
  ExitFee = "exit_fee",
  /** column name */
  FuturePoolGovernor = "future_pool_governor",
  /** column name */
  Id = "id",
  /** column name */
  IsSuperfluid = "is_superfluid",
  /** column name */
  IsSupported = "is_supported",
  /** column name */
  Liquidity = "liquidity",
  /** column name */
  ScalingFactorController = "scaling_factor_controller",
  /** column name */
  ScalingFactors = "scaling_factors",
  /** column name */
  SmoothWeightChangeParams = "smooth_weight_change_params",
  /** column name */
  SwapFee = "swap_fee",
  /** column name */
  TotalShares = "total_shares",
  /** column name */
  Type = "type",
  /** column name */
  Weight = "weight",
}

export type Pools_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pools_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pools_Set_Input>;
  /** filter the rows which have to be updated */
  where: Pools_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pools_Var_Pop_Fields = {
  __typename?: "pools_var_pop_fields";
  create_tx_id?: Maybe<Scalars["Float"]>;
  creator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "pools" */
export type Pools_Var_Pop_Order_By = {
  create_tx_id?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pools_Var_Samp_Fields = {
  __typename?: "pools_var_samp_fields";
  create_tx_id?: Maybe<Scalars["Float"]>;
  creator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "pools" */
export type Pools_Var_Samp_Order_By = {
  create_tx_id?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Pools_Variance_Fields = {
  __typename?: "pools_variance_fields";
  create_tx_id?: Maybe<Scalars["Float"]>;
  creator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "pools" */
export type Pools_Variance_Order_By = {
  create_tx_id?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "pooltype". All fields are combined with logical 'AND'. */
export type Pooltype_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["pooltype"]>;
  _gt?: InputMaybe<Scalars["pooltype"]>;
  _gte?: InputMaybe<Scalars["pooltype"]>;
  _in?: InputMaybe<Array<Scalars["pooltype"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["pooltype"]>;
  _lte?: InputMaybe<Scalars["pooltype"]>;
  _neq?: InputMaybe<Scalars["pooltype"]>;
  _nin?: InputMaybe<Array<Scalars["pooltype"]>>;
};

/** columns and relationships of "profit_by_denoms" */
export type Profit_By_Denoms = {
  __typename?: "profit_by_denoms";
  amount: Scalars["String"];
  /** An object relationship */
  block: Blocks;
  block_height: Scalars["Int"];
  denom: Scalars["String"];
};

/** aggregated selection of "profit_by_denoms" */
export type Profit_By_Denoms_Aggregate = {
  __typename?: "profit_by_denoms_aggregate";
  aggregate?: Maybe<Profit_By_Denoms_Aggregate_Fields>;
  nodes: Array<Profit_By_Denoms>;
};

export type Profit_By_Denoms_Aggregate_Bool_Exp = {
  count?: InputMaybe<Profit_By_Denoms_Aggregate_Bool_Exp_Count>;
};

export type Profit_By_Denoms_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Profit_By_Denoms_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Profit_By_Denoms_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "profit_by_denoms" */
export type Profit_By_Denoms_Aggregate_Fields = {
  __typename?: "profit_by_denoms_aggregate_fields";
  avg?: Maybe<Profit_By_Denoms_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Profit_By_Denoms_Max_Fields>;
  min?: Maybe<Profit_By_Denoms_Min_Fields>;
  stddev?: Maybe<Profit_By_Denoms_Stddev_Fields>;
  stddev_pop?: Maybe<Profit_By_Denoms_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profit_By_Denoms_Stddev_Samp_Fields>;
  sum?: Maybe<Profit_By_Denoms_Sum_Fields>;
  var_pop?: Maybe<Profit_By_Denoms_Var_Pop_Fields>;
  var_samp?: Maybe<Profit_By_Denoms_Var_Samp_Fields>;
  variance?: Maybe<Profit_By_Denoms_Variance_Fields>;
};

/** aggregate fields of "profit_by_denoms" */
export type Profit_By_Denoms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profit_By_Denoms_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "profit_by_denoms" */
export type Profit_By_Denoms_Aggregate_Order_By = {
  avg?: InputMaybe<Profit_By_Denoms_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Profit_By_Denoms_Max_Order_By>;
  min?: InputMaybe<Profit_By_Denoms_Min_Order_By>;
  stddev?: InputMaybe<Profit_By_Denoms_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Profit_By_Denoms_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Profit_By_Denoms_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Profit_By_Denoms_Sum_Order_By>;
  var_pop?: InputMaybe<Profit_By_Denoms_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Profit_By_Denoms_Var_Samp_Order_By>;
  variance?: InputMaybe<Profit_By_Denoms_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "profit_by_denoms" */
export type Profit_By_Denoms_Arr_Rel_Insert_Input = {
  data: Array<Profit_By_Denoms_Insert_Input>;
};

/** aggregate avg on columns */
export type Profit_By_Denoms_Avg_Fields = {
  __typename?: "profit_by_denoms_avg_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "profit_by_denoms" */
export type Profit_By_Denoms_Avg_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "profit_by_denoms". All fields are combined with a logical 'AND'. */
export type Profit_By_Denoms_Bool_Exp = {
  _and?: InputMaybe<Array<Profit_By_Denoms_Bool_Exp>>;
  _not?: InputMaybe<Profit_By_Denoms_Bool_Exp>;
  _or?: InputMaybe<Array<Profit_By_Denoms_Bool_Exp>>;
  amount?: InputMaybe<String_Comparison_Exp>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  block_height?: InputMaybe<Int_Comparison_Exp>;
  denom?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "profit_by_denoms" */
export type Profit_By_Denoms_Inc_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "profit_by_denoms" */
export type Profit_By_Denoms_Insert_Input = {
  amount?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  block_height?: InputMaybe<Scalars["Int"]>;
  denom?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Profit_By_Denoms_Max_Fields = {
  __typename?: "profit_by_denoms_max_fields";
  amount?: Maybe<Scalars["String"]>;
  block_height?: Maybe<Scalars["Int"]>;
  denom?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "profit_by_denoms" */
export type Profit_By_Denoms_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Profit_By_Denoms_Min_Fields = {
  __typename?: "profit_by_denoms_min_fields";
  amount?: Maybe<Scalars["String"]>;
  block_height?: Maybe<Scalars["Int"]>;
  denom?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "profit_by_denoms" */
export type Profit_By_Denoms_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "profit_by_denoms" */
export type Profit_By_Denoms_Mutation_Response = {
  __typename?: "profit_by_denoms_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Profit_By_Denoms>;
};

/** Ordering options when selecting data from "profit_by_denoms". */
export type Profit_By_Denoms_Order_By = {
  amount?: InputMaybe<Order_By>;
  block?: InputMaybe<Blocks_Order_By>;
  block_height?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
};

/** select columns of table "profit_by_denoms" */
export enum Profit_By_Denoms_Select_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  BlockHeight = "block_height",
  /** column name */
  Denom = "denom",
}

/** input type for updating data in table "profit_by_denoms" */
export type Profit_By_Denoms_Set_Input = {
  amount?: InputMaybe<Scalars["String"]>;
  block_height?: InputMaybe<Scalars["Int"]>;
  denom?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Profit_By_Denoms_Stddev_Fields = {
  __typename?: "profit_by_denoms_stddev_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "profit_by_denoms" */
export type Profit_By_Denoms_Stddev_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Profit_By_Denoms_Stddev_Pop_Fields = {
  __typename?: "profit_by_denoms_stddev_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "profit_by_denoms" */
export type Profit_By_Denoms_Stddev_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Profit_By_Denoms_Stddev_Samp_Fields = {
  __typename?: "profit_by_denoms_stddev_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "profit_by_denoms" */
export type Profit_By_Denoms_Stddev_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "profit_by_denoms" */
export type Profit_By_Denoms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Profit_By_Denoms_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Profit_By_Denoms_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars["String"]>;
  block_height?: InputMaybe<Scalars["Int"]>;
  denom?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Profit_By_Denoms_Sum_Fields = {
  __typename?: "profit_by_denoms_sum_fields";
  block_height?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "profit_by_denoms" */
export type Profit_By_Denoms_Sum_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

export type Profit_By_Denoms_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Profit_By_Denoms_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Profit_By_Denoms_Set_Input>;
  /** filter the rows which have to be updated */
  where: Profit_By_Denoms_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Profit_By_Denoms_Var_Pop_Fields = {
  __typename?: "profit_by_denoms_var_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "profit_by_denoms" */
export type Profit_By_Denoms_Var_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Profit_By_Denoms_Var_Samp_Fields = {
  __typename?: "profit_by_denoms_var_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "profit_by_denoms" */
export type Profit_By_Denoms_Var_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Profit_By_Denoms_Variance_Fields = {
  __typename?: "profit_by_denoms_variance_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "profit_by_denoms" */
export type Profit_By_Denoms_Variance_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** columns and relationships of "profit_by_routes" */
export type Profit_By_Routes = {
  __typename?: "profit_by_routes";
  amount: Scalars["String"];
  /** An object relationship */
  block: Blocks;
  block_height: Scalars["Int"];
  denom: Scalars["String"];
  route: Scalars["json"];
};

/** columns and relationships of "profit_by_routes" */
export type Profit_By_RoutesRouteArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "profit_by_routes" */
export type Profit_By_Routes_Aggregate = {
  __typename?: "profit_by_routes_aggregate";
  aggregate?: Maybe<Profit_By_Routes_Aggregate_Fields>;
  nodes: Array<Profit_By_Routes>;
};

export type Profit_By_Routes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Profit_By_Routes_Aggregate_Bool_Exp_Count>;
};

export type Profit_By_Routes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Profit_By_Routes_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Profit_By_Routes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "profit_by_routes" */
export type Profit_By_Routes_Aggregate_Fields = {
  __typename?: "profit_by_routes_aggregate_fields";
  avg?: Maybe<Profit_By_Routes_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Profit_By_Routes_Max_Fields>;
  min?: Maybe<Profit_By_Routes_Min_Fields>;
  stddev?: Maybe<Profit_By_Routes_Stddev_Fields>;
  stddev_pop?: Maybe<Profit_By_Routes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profit_By_Routes_Stddev_Samp_Fields>;
  sum?: Maybe<Profit_By_Routes_Sum_Fields>;
  var_pop?: Maybe<Profit_By_Routes_Var_Pop_Fields>;
  var_samp?: Maybe<Profit_By_Routes_Var_Samp_Fields>;
  variance?: Maybe<Profit_By_Routes_Variance_Fields>;
};

/** aggregate fields of "profit_by_routes" */
export type Profit_By_Routes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profit_By_Routes_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "profit_by_routes" */
export type Profit_By_Routes_Aggregate_Order_By = {
  avg?: InputMaybe<Profit_By_Routes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Profit_By_Routes_Max_Order_By>;
  min?: InputMaybe<Profit_By_Routes_Min_Order_By>;
  stddev?: InputMaybe<Profit_By_Routes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Profit_By_Routes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Profit_By_Routes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Profit_By_Routes_Sum_Order_By>;
  var_pop?: InputMaybe<Profit_By_Routes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Profit_By_Routes_Var_Samp_Order_By>;
  variance?: InputMaybe<Profit_By_Routes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "profit_by_routes" */
export type Profit_By_Routes_Arr_Rel_Insert_Input = {
  data: Array<Profit_By_Routes_Insert_Input>;
};

/** aggregate avg on columns */
export type Profit_By_Routes_Avg_Fields = {
  __typename?: "profit_by_routes_avg_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "profit_by_routes" */
export type Profit_By_Routes_Avg_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "profit_by_routes". All fields are combined with a logical 'AND'. */
export type Profit_By_Routes_Bool_Exp = {
  _and?: InputMaybe<Array<Profit_By_Routes_Bool_Exp>>;
  _not?: InputMaybe<Profit_By_Routes_Bool_Exp>;
  _or?: InputMaybe<Array<Profit_By_Routes_Bool_Exp>>;
  amount?: InputMaybe<String_Comparison_Exp>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  block_height?: InputMaybe<Int_Comparison_Exp>;
  denom?: InputMaybe<String_Comparison_Exp>;
  route?: InputMaybe<Json_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "profit_by_routes" */
export type Profit_By_Routes_Inc_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "profit_by_routes" */
export type Profit_By_Routes_Insert_Input = {
  amount?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  block_height?: InputMaybe<Scalars["Int"]>;
  denom?: InputMaybe<Scalars["String"]>;
  route?: InputMaybe<Scalars["json"]>;
};

/** aggregate max on columns */
export type Profit_By_Routes_Max_Fields = {
  __typename?: "profit_by_routes_max_fields";
  amount?: Maybe<Scalars["String"]>;
  block_height?: Maybe<Scalars["Int"]>;
  denom?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "profit_by_routes" */
export type Profit_By_Routes_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Profit_By_Routes_Min_Fields = {
  __typename?: "profit_by_routes_min_fields";
  amount?: Maybe<Scalars["String"]>;
  block_height?: Maybe<Scalars["Int"]>;
  denom?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "profit_by_routes" */
export type Profit_By_Routes_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "profit_by_routes" */
export type Profit_By_Routes_Mutation_Response = {
  __typename?: "profit_by_routes_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Profit_By_Routes>;
};

/** Ordering options when selecting data from "profit_by_routes". */
export type Profit_By_Routes_Order_By = {
  amount?: InputMaybe<Order_By>;
  block?: InputMaybe<Blocks_Order_By>;
  block_height?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
  route?: InputMaybe<Order_By>;
};

/** select columns of table "profit_by_routes" */
export enum Profit_By_Routes_Select_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  BlockHeight = "block_height",
  /** column name */
  Denom = "denom",
  /** column name */
  Route = "route",
}

/** input type for updating data in table "profit_by_routes" */
export type Profit_By_Routes_Set_Input = {
  amount?: InputMaybe<Scalars["String"]>;
  block_height?: InputMaybe<Scalars["Int"]>;
  denom?: InputMaybe<Scalars["String"]>;
  route?: InputMaybe<Scalars["json"]>;
};

/** aggregate stddev on columns */
export type Profit_By_Routes_Stddev_Fields = {
  __typename?: "profit_by_routes_stddev_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "profit_by_routes" */
export type Profit_By_Routes_Stddev_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Profit_By_Routes_Stddev_Pop_Fields = {
  __typename?: "profit_by_routes_stddev_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "profit_by_routes" */
export type Profit_By_Routes_Stddev_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Profit_By_Routes_Stddev_Samp_Fields = {
  __typename?: "profit_by_routes_stddev_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "profit_by_routes" */
export type Profit_By_Routes_Stddev_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "profit_by_routes" */
export type Profit_By_Routes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Profit_By_Routes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Profit_By_Routes_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars["String"]>;
  block_height?: InputMaybe<Scalars["Int"]>;
  denom?: InputMaybe<Scalars["String"]>;
  route?: InputMaybe<Scalars["json"]>;
};

/** aggregate sum on columns */
export type Profit_By_Routes_Sum_Fields = {
  __typename?: "profit_by_routes_sum_fields";
  block_height?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "profit_by_routes" */
export type Profit_By_Routes_Sum_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

export type Profit_By_Routes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Profit_By_Routes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Profit_By_Routes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Profit_By_Routes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Profit_By_Routes_Var_Pop_Fields = {
  __typename?: "profit_by_routes_var_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "profit_by_routes" */
export type Profit_By_Routes_Var_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Profit_By_Routes_Var_Samp_Fields = {
  __typename?: "profit_by_routes_var_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "profit_by_routes" */
export type Profit_By_Routes_Var_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Profit_By_Routes_Variance_Fields = {
  __typename?: "profit_by_routes_variance_fields";
  block_height?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "profit_by_routes" */
export type Profit_By_Routes_Variance_Order_By = {
  block_height?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposals" */
export type Proposals = {
  __typename?: "proposals";
  /** An object relationship */
  account?: Maybe<Accounts>;
  /** An object relationship */
  block?: Maybe<Blocks>;
  /** An array relationship */
  code_proposals: Array<Code_Proposals>;
  /** An aggregate relationship */
  code_proposals_aggregate: Code_Proposals_Aggregate;
  content?: Maybe<Scalars["json"]>;
  /** An array relationship */
  contract_proposals: Array<Contract_Proposals>;
  /** An aggregate relationship */
  contract_proposals_aggregate: Contract_Proposals_Aggregate;
  deposit_end_time: Scalars["timestamp"];
  description: Scalars["String"];
  id: Scalars["Int"];
  is_expedited: Scalars["Boolean"];
  proposal_route: Scalars["String"];
  proposer_id?: Maybe<Scalars["Int"]>;
  resolved_height?: Maybe<Scalars["Int"]>;
  status: Scalars["proposalstatus"];
  submit_time: Scalars["timestamp"];
  title: Scalars["String"];
  type: Scalars["String"];
  voting_end_time: Scalars["timestamp"];
  voting_time: Scalars["timestamp"];
};

/** columns and relationships of "proposals" */
export type ProposalsCode_ProposalsArgs = {
  distinct_on?: InputMaybe<Array<Code_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Code_Proposals_Order_By>>;
  where?: InputMaybe<Code_Proposals_Bool_Exp>;
};

/** columns and relationships of "proposals" */
export type ProposalsCode_Proposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Code_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Code_Proposals_Order_By>>;
  where?: InputMaybe<Code_Proposals_Bool_Exp>;
};

/** columns and relationships of "proposals" */
export type ProposalsContentArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "proposals" */
export type ProposalsContract_ProposalsArgs = {
  distinct_on?: InputMaybe<Array<Contract_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Proposals_Order_By>>;
  where?: InputMaybe<Contract_Proposals_Bool_Exp>;
};

/** columns and relationships of "proposals" */
export type ProposalsContract_Proposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Proposals_Order_By>>;
  where?: InputMaybe<Contract_Proposals_Bool_Exp>;
};

/** aggregated selection of "proposals" */
export type Proposals_Aggregate = {
  __typename?: "proposals_aggregate";
  aggregate?: Maybe<Proposals_Aggregate_Fields>;
  nodes: Array<Proposals>;
};

export type Proposals_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Proposals_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Proposals_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Proposals_Aggregate_Bool_Exp_Count>;
};

export type Proposals_Aggregate_Bool_Exp_Bool_And = {
  arguments: Proposals_Select_Column_Proposals_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Proposals_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Proposals_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Proposals_Select_Column_Proposals_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Proposals_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Proposals_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposals_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Proposals_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposals" */
export type Proposals_Aggregate_Fields = {
  __typename?: "proposals_aggregate_fields";
  avg?: Maybe<Proposals_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Proposals_Max_Fields>;
  min?: Maybe<Proposals_Min_Fields>;
  stddev?: Maybe<Proposals_Stddev_Fields>;
  stddev_pop?: Maybe<Proposals_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposals_Stddev_Samp_Fields>;
  sum?: Maybe<Proposals_Sum_Fields>;
  var_pop?: Maybe<Proposals_Var_Pop_Fields>;
  var_samp?: Maybe<Proposals_Var_Samp_Fields>;
  variance?: Maybe<Proposals_Variance_Fields>;
};

/** aggregate fields of "proposals" */
export type Proposals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposals_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "proposals" */
export type Proposals_Aggregate_Order_By = {
  avg?: InputMaybe<Proposals_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposals_Max_Order_By>;
  min?: InputMaybe<Proposals_Min_Order_By>;
  stddev?: InputMaybe<Proposals_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposals_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposals_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposals_Sum_Order_By>;
  var_pop?: InputMaybe<Proposals_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposals_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposals_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposals" */
export type Proposals_Arr_Rel_Insert_Input = {
  data: Array<Proposals_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposals_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposals_Avg_Fields = {
  __typename?: "proposals_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  proposer_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "proposals" */
export type Proposals_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  proposer_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposals". All fields are combined with a logical 'AND'. */
export type Proposals_Bool_Exp = {
  _and?: InputMaybe<Array<Proposals_Bool_Exp>>;
  _not?: InputMaybe<Proposals_Bool_Exp>;
  _or?: InputMaybe<Array<Proposals_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  code_proposals?: InputMaybe<Code_Proposals_Bool_Exp>;
  code_proposals_aggregate?: InputMaybe<Code_Proposals_Aggregate_Bool_Exp>;
  content?: InputMaybe<Json_Comparison_Exp>;
  contract_proposals?: InputMaybe<Contract_Proposals_Bool_Exp>;
  contract_proposals_aggregate?: InputMaybe<Contract_Proposals_Aggregate_Bool_Exp>;
  deposit_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_expedited?: InputMaybe<Boolean_Comparison_Exp>;
  proposal_route?: InputMaybe<String_Comparison_Exp>;
  proposer_id?: InputMaybe<Int_Comparison_Exp>;
  resolved_height?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Proposalstatus_Comparison_Exp>;
  submit_time?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  voting_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  voting_time?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposals" */
export enum Proposals_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProposalsPkey = "proposals_pkey",
}

/** input type for incrementing numeric columns in table "proposals" */
export type Proposals_Inc_Input = {
  id?: InputMaybe<Scalars["Int"]>;
  proposer_id?: InputMaybe<Scalars["Int"]>;
  resolved_height?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "proposals" */
export type Proposals_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  code_proposals?: InputMaybe<Code_Proposals_Arr_Rel_Insert_Input>;
  content?: InputMaybe<Scalars["json"]>;
  contract_proposals?: InputMaybe<Contract_Proposals_Arr_Rel_Insert_Input>;
  deposit_end_time?: InputMaybe<Scalars["timestamp"]>;
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  is_expedited?: InputMaybe<Scalars["Boolean"]>;
  proposal_route?: InputMaybe<Scalars["String"]>;
  proposer_id?: InputMaybe<Scalars["Int"]>;
  resolved_height?: InputMaybe<Scalars["Int"]>;
  status?: InputMaybe<Scalars["proposalstatus"]>;
  submit_time?: InputMaybe<Scalars["timestamp"]>;
  title?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  voting_end_time?: InputMaybe<Scalars["timestamp"]>;
  voting_time?: InputMaybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type Proposals_Max_Fields = {
  __typename?: "proposals_max_fields";
  deposit_end_time?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  proposal_route?: Maybe<Scalars["String"]>;
  proposer_id?: Maybe<Scalars["Int"]>;
  resolved_height?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["proposalstatus"]>;
  submit_time?: Maybe<Scalars["timestamp"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  voting_end_time?: Maybe<Scalars["timestamp"]>;
  voting_time?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "proposals" */
export type Proposals_Max_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposer_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_time?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposals_Min_Fields = {
  __typename?: "proposals_min_fields";
  deposit_end_time?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  proposal_route?: Maybe<Scalars["String"]>;
  proposer_id?: Maybe<Scalars["Int"]>;
  resolved_height?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["proposalstatus"]>;
  submit_time?: Maybe<Scalars["timestamp"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  voting_end_time?: Maybe<Scalars["timestamp"]>;
  voting_time?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "proposals" */
export type Proposals_Min_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposer_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_time?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposals" */
export type Proposals_Mutation_Response = {
  __typename?: "proposals_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Proposals>;
};

/** input type for inserting object relation for remote table "proposals" */
export type Proposals_Obj_Rel_Insert_Input = {
  data: Proposals_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposals_On_Conflict>;
};

/** on_conflict condition type for table "proposals" */
export type Proposals_On_Conflict = {
  constraint: Proposals_Constraint;
  update_columns?: Array<Proposals_Update_Column>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};

/** Ordering options when selecting data from "proposals". */
export type Proposals_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  block?: InputMaybe<Blocks_Order_By>;
  code_proposals_aggregate?: InputMaybe<Code_Proposals_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  contract_proposals_aggregate?: InputMaybe<Contract_Proposals_Aggregate_Order_By>;
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_expedited?: InputMaybe<Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposer_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_time?: InputMaybe<Order_By>;
};

/** primary key columns input for table: proposals */
export type Proposals_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "proposals" */
export enum Proposals_Select_Column {
  /** column name */
  Content = "content",
  /** column name */
  DepositEndTime = "deposit_end_time",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  IsExpedited = "is_expedited",
  /** column name */
  ProposalRoute = "proposal_route",
  /** column name */
  ProposerId = "proposer_id",
  /** column name */
  ResolvedHeight = "resolved_height",
  /** column name */
  Status = "status",
  /** column name */
  SubmitTime = "submit_time",
  /** column name */
  Title = "title",
  /** column name */
  Type = "type",
  /** column name */
  VotingEndTime = "voting_end_time",
  /** column name */
  VotingTime = "voting_time",
}

/** select "proposals_aggregate_bool_exp_bool_and_arguments_columns" columns of table "proposals" */
export enum Proposals_Select_Column_Proposals_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsExpedited = "is_expedited",
}

/** select "proposals_aggregate_bool_exp_bool_or_arguments_columns" columns of table "proposals" */
export enum Proposals_Select_Column_Proposals_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsExpedited = "is_expedited",
}

/** input type for updating data in table "proposals" */
export type Proposals_Set_Input = {
  content?: InputMaybe<Scalars["json"]>;
  deposit_end_time?: InputMaybe<Scalars["timestamp"]>;
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  is_expedited?: InputMaybe<Scalars["Boolean"]>;
  proposal_route?: InputMaybe<Scalars["String"]>;
  proposer_id?: InputMaybe<Scalars["Int"]>;
  resolved_height?: InputMaybe<Scalars["Int"]>;
  status?: InputMaybe<Scalars["proposalstatus"]>;
  submit_time?: InputMaybe<Scalars["timestamp"]>;
  title?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  voting_end_time?: InputMaybe<Scalars["timestamp"]>;
  voting_time?: InputMaybe<Scalars["timestamp"]>;
};

/** aggregate stddev on columns */
export type Proposals_Stddev_Fields = {
  __typename?: "proposals_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  proposer_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "proposals" */
export type Proposals_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  proposer_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposals_Stddev_Pop_Fields = {
  __typename?: "proposals_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  proposer_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "proposals" */
export type Proposals_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  proposer_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposals_Stddev_Samp_Fields = {
  __typename?: "proposals_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  proposer_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "proposals" */
export type Proposals_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  proposer_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposals" */
export type Proposals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposals_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars["json"]>;
  deposit_end_time?: InputMaybe<Scalars["timestamp"]>;
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  is_expedited?: InputMaybe<Scalars["Boolean"]>;
  proposal_route?: InputMaybe<Scalars["String"]>;
  proposer_id?: InputMaybe<Scalars["Int"]>;
  resolved_height?: InputMaybe<Scalars["Int"]>;
  status?: InputMaybe<Scalars["proposalstatus"]>;
  submit_time?: InputMaybe<Scalars["timestamp"]>;
  title?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  voting_end_time?: InputMaybe<Scalars["timestamp"]>;
  voting_time?: InputMaybe<Scalars["timestamp"]>;
};

/** aggregate sum on columns */
export type Proposals_Sum_Fields = {
  __typename?: "proposals_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  proposer_id?: Maybe<Scalars["Int"]>;
  resolved_height?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "proposals" */
export type Proposals_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  proposer_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** update columns of table "proposals" */
export enum Proposals_Update_Column {
  /** column name */
  Content = "content",
  /** column name */
  DepositEndTime = "deposit_end_time",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  IsExpedited = "is_expedited",
  /** column name */
  ProposalRoute = "proposal_route",
  /** column name */
  ProposerId = "proposer_id",
  /** column name */
  ResolvedHeight = "resolved_height",
  /** column name */
  Status = "status",
  /** column name */
  SubmitTime = "submit_time",
  /** column name */
  Title = "title",
  /** column name */
  Type = "type",
  /** column name */
  VotingEndTime = "voting_end_time",
  /** column name */
  VotingTime = "voting_time",
}

export type Proposals_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposals_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposals_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposals_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposals_Var_Pop_Fields = {
  __typename?: "proposals_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  proposer_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "proposals" */
export type Proposals_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  proposer_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposals_Var_Samp_Fields = {
  __typename?: "proposals_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  proposer_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "proposals" */
export type Proposals_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  proposer_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposals_Variance_Fields = {
  __typename?: "proposals_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  proposer_id?: Maybe<Scalars["Float"]>;
  resolved_height?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "proposals" */
export type Proposals_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  proposer_id?: InputMaybe<Order_By>;
  resolved_height?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "proposalstatus". All fields are combined with logical 'AND'. */
export type Proposalstatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["proposalstatus"]>;
  _gt?: InputMaybe<Scalars["proposalstatus"]>;
  _gte?: InputMaybe<Scalars["proposalstatus"]>;
  _in?: InputMaybe<Array<Scalars["proposalstatus"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["proposalstatus"]>;
  _lte?: InputMaybe<Scalars["proposalstatus"]>;
  _neq?: InputMaybe<Scalars["proposalstatus"]>;
  _nin?: InputMaybe<Array<Scalars["proposalstatus"]>>;
};

export type Query_Root = {
  __typename?: "query_root";
  /** An array relationship */
  account_transactions: Array<Account_Transactions>;
  /** An aggregate relationship */
  account_transactions_aggregate: Account_Transactions_Aggregate;
  /** fetch data from the table: "account_transactions" using primary key columns */
  account_transactions_by_pk?: Maybe<Account_Transactions>;
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** An array relationship */
  begin_block_events: Array<Begin_Block_Events>;
  /** An aggregate relationship */
  begin_block_events_aggregate: Begin_Block_Events_Aggregate;
  /** An array relationship */
  blocks: Array<Blocks>;
  /** An aggregate relationship */
  blocks_aggregate: Blocks_Aggregate;
  /** fetch data from the table: "blocks" using primary key columns */
  blocks_by_pk?: Maybe<Blocks>;
  /** An array relationship */
  code_proposals: Array<Code_Proposals>;
  /** An aggregate relationship */
  code_proposals_aggregate: Code_Proposals_Aggregate;
  /** An array relationship */
  codes: Array<Codes>;
  /** An aggregate relationship */
  codes_aggregate: Codes_Aggregate;
  /** fetch data from the table: "codes" using primary key columns */
  codes_by_pk?: Maybe<Codes>;
  /** An array relationship */
  contract_histories: Array<Contract_Histories>;
  /** An aggregate relationship */
  contract_histories_aggregate: Contract_Histories_Aggregate;
  /** An array relationship */
  contract_proposals: Array<Contract_Proposals>;
  /** An aggregate relationship */
  contract_proposals_aggregate: Contract_Proposals_Aggregate;
  /** An array relationship */
  contract_transactions: Array<Contract_Transactions>;
  /** An aggregate relationship */
  contract_transactions_aggregate: Contract_Transactions_Aggregate;
  /** fetch data from the table: "contract_transactions_view" */
  contract_transactions_view: Array<Contract_Transactions_View>;
  /** fetch aggregated fields from the table: "contract_transactions_view" */
  contract_transactions_view_aggregate: Contract_Transactions_View_Aggregate;
  /** An array relationship */
  contracts: Array<Contracts>;
  /** An aggregate relationship */
  contracts_aggregate: Contracts_Aggregate;
  /** fetch data from the table: "contracts" using primary key columns */
  contracts_by_pk?: Maybe<Contracts>;
  /** An array relationship */
  end_block_events: Array<End_Block_Events>;
  /** An aggregate relationship */
  end_block_events_aggregate: End_Block_Events_Aggregate;
  /** execute function "get_top_pool_assets" which returns "top_assets_result" */
  get_top_pool_assets: Array<Top_Assets_Result>;
  /** execute function "get_top_pool_assets" and query aggregates on result of table type "top_assets_result" */
  get_top_pool_assets_aggregate: Top_Assets_Result_Aggregate;
  /** An array relationship */
  lcd_tx_results: Array<Lcd_Tx_Results>;
  /** An aggregate relationship */
  lcd_tx_results_aggregate: Lcd_Tx_Results_Aggregate;
  /** An array relationship */
  pool_transactions: Array<Pool_Transactions>;
  /** An aggregate relationship */
  pool_transactions_aggregate: Pool_Transactions_Aggregate;
  /** An array relationship */
  pools: Array<Pools>;
  /** An aggregate relationship */
  pools_aggregate: Pools_Aggregate;
  /** fetch data from the table: "pools" using primary key columns */
  pools_by_pk?: Maybe<Pools>;
  /** An array relationship */
  profit_by_denoms: Array<Profit_By_Denoms>;
  /** An aggregate relationship */
  profit_by_denoms_aggregate: Profit_By_Denoms_Aggregate;
  /** An array relationship */
  profit_by_routes: Array<Profit_By_Routes>;
  /** An aggregate relationship */
  profit_by_routes_aggregate: Profit_By_Routes_Aggregate;
  /** An array relationship */
  proposals: Array<Proposals>;
  /** An aggregate relationship */
  proposals_aggregate: Proposals_Aggregate;
  /** fetch data from the table: "proposals" using primary key columns */
  proposals_by_pk?: Maybe<Proposals>;
  /** execute function "search_pools_with_denom" which returns "pools" */
  search_pools_with_denom: Array<Pools>;
  /** execute function "search_pools_with_denom" and query aggregates on result of table type "pools" */
  search_pools_with_denom_aggregate: Pools_Aggregate;
  /** execute function "search_pools_with_denoms" which returns "pools" */
  search_pools_with_denoms: Array<Pools>;
  /** execute function "search_pools_with_denoms" and query aggregates on result of table type "pools" */
  search_pools_with_denoms_aggregate: Pools_Aggregate;
  /** fetch data from the table: "top_assets_result" */
  top_assets_result: Array<Top_Assets_Result>;
  /** fetch aggregated fields from the table: "top_assets_result" */
  top_assets_result_aggregate: Top_Assets_Result_Aggregate;
  /** fetch data from the table: "tracking" */
  tracking: Array<Tracking>;
  /** fetch aggregated fields from the table: "tracking" */
  tracking_aggregate: Tracking_Aggregate;
  /** fetch data from the table: "tracking" using primary key columns */
  tracking_by_pk?: Maybe<Tracking>;
  /** An array relationship */
  trade_by_routes: Array<Trade_By_Routes>;
  /** An aggregate relationship */
  trade_by_routes_aggregate: Trade_By_Routes_Aggregate;
  /** An array relationship */
  trades: Array<Trades>;
  /** An aggregate relationship */
  trades_aggregate: Trades_Aggregate;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
  /** An array relationship */
  validators: Array<Validators>;
  /** An aggregate relationship */
  validators_aggregate: Validators_Aggregate;
  /** fetch data from the table: "validators" using primary key columns */
  validators_by_pk?: Maybe<Validators>;
};

export type Query_RootAccount_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Account_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Account_Transactions_Order_By>>;
  where?: InputMaybe<Account_Transactions_Bool_Exp>;
};

export type Query_RootAccount_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Account_Transactions_Order_By>>;
  where?: InputMaybe<Account_Transactions_Bool_Exp>;
};

export type Query_RootAccount_Transactions_By_PkArgs = {
  account_id: Scalars["Int"];
  transaction_id: Scalars["Int"];
};

export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Query_RootAccounts_By_PkArgs = {
  address: Scalars["String"];
};

export type Query_RootBegin_Block_EventsArgs = {
  distinct_on?: InputMaybe<Array<Begin_Block_Events_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Begin_Block_Events_Order_By>>;
  where?: InputMaybe<Begin_Block_Events_Bool_Exp>;
};

export type Query_RootBegin_Block_Events_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Begin_Block_Events_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Begin_Block_Events_Order_By>>;
  where?: InputMaybe<Begin_Block_Events_Bool_Exp>;
};

export type Query_RootBlocksArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

export type Query_RootBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

export type Query_RootBlocks_By_PkArgs = {
  height: Scalars["Int"];
};

export type Query_RootCode_ProposalsArgs = {
  distinct_on?: InputMaybe<Array<Code_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Code_Proposals_Order_By>>;
  where?: InputMaybe<Code_Proposals_Bool_Exp>;
};

export type Query_RootCode_Proposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Code_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Code_Proposals_Order_By>>;
  where?: InputMaybe<Code_Proposals_Bool_Exp>;
};

export type Query_RootCodesArgs = {
  distinct_on?: InputMaybe<Array<Codes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Codes_Order_By>>;
  where?: InputMaybe<Codes_Bool_Exp>;
};

export type Query_RootCodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Codes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Codes_Order_By>>;
  where?: InputMaybe<Codes_Bool_Exp>;
};

export type Query_RootCodes_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootContract_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Contract_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Histories_Order_By>>;
  where?: InputMaybe<Contract_Histories_Bool_Exp>;
};

export type Query_RootContract_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Histories_Order_By>>;
  where?: InputMaybe<Contract_Histories_Bool_Exp>;
};

export type Query_RootContract_ProposalsArgs = {
  distinct_on?: InputMaybe<Array<Contract_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Proposals_Order_By>>;
  where?: InputMaybe<Contract_Proposals_Bool_Exp>;
};

export type Query_RootContract_Proposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Proposals_Order_By>>;
  where?: InputMaybe<Contract_Proposals_Bool_Exp>;
};

export type Query_RootContract_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Transactions_Order_By>>;
  where?: InputMaybe<Contract_Transactions_Bool_Exp>;
};

export type Query_RootContract_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Transactions_Order_By>>;
  where?: InputMaybe<Contract_Transactions_Bool_Exp>;
};

export type Query_RootContract_Transactions_ViewArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_View_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Transactions_View_Order_By>>;
  where?: InputMaybe<Contract_Transactions_View_Bool_Exp>;
};

export type Query_RootContract_Transactions_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_View_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Transactions_View_Order_By>>;
  where?: InputMaybe<Contract_Transactions_View_Bool_Exp>;
};

export type Query_RootContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

export type Query_RootContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

export type Query_RootContracts_By_PkArgs = {
  address: Scalars["String"];
};

export type Query_RootEnd_Block_EventsArgs = {
  distinct_on?: InputMaybe<Array<End_Block_Events_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<End_Block_Events_Order_By>>;
  where?: InputMaybe<End_Block_Events_Bool_Exp>;
};

export type Query_RootEnd_Block_Events_AggregateArgs = {
  distinct_on?: InputMaybe<Array<End_Block_Events_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<End_Block_Events_Order_By>>;
  where?: InputMaybe<End_Block_Events_Bool_Exp>;
};

export type Query_RootGet_Top_Pool_AssetsArgs = {
  args: Get_Top_Pool_Assets_Args;
  distinct_on?: InputMaybe<Array<Top_Assets_Result_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Top_Assets_Result_Order_By>>;
  where?: InputMaybe<Top_Assets_Result_Bool_Exp>;
};

export type Query_RootGet_Top_Pool_Assets_AggregateArgs = {
  args: Get_Top_Pool_Assets_Args;
  distinct_on?: InputMaybe<Array<Top_Assets_Result_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Top_Assets_Result_Order_By>>;
  where?: InputMaybe<Top_Assets_Result_Bool_Exp>;
};

export type Query_RootLcd_Tx_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Lcd_Tx_Results_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Lcd_Tx_Results_Order_By>>;
  where?: InputMaybe<Lcd_Tx_Results_Bool_Exp>;
};

export type Query_RootLcd_Tx_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lcd_Tx_Results_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Lcd_Tx_Results_Order_By>>;
  where?: InputMaybe<Lcd_Tx_Results_Bool_Exp>;
};

export type Query_RootPool_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Pool_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pool_Transactions_Order_By>>;
  where?: InputMaybe<Pool_Transactions_Bool_Exp>;
};

export type Query_RootPool_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pool_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pool_Transactions_Order_By>>;
  where?: InputMaybe<Pool_Transactions_Bool_Exp>;
};

export type Query_RootPoolsArgs = {
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

export type Query_RootPools_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

export type Query_RootPools_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootProfit_By_DenomsArgs = {
  distinct_on?: InputMaybe<Array<Profit_By_Denoms_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Profit_By_Denoms_Order_By>>;
  where?: InputMaybe<Profit_By_Denoms_Bool_Exp>;
};

export type Query_RootProfit_By_Denoms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profit_By_Denoms_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Profit_By_Denoms_Order_By>>;
  where?: InputMaybe<Profit_By_Denoms_Bool_Exp>;
};

export type Query_RootProfit_By_RoutesArgs = {
  distinct_on?: InputMaybe<Array<Profit_By_Routes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Profit_By_Routes_Order_By>>;
  where?: InputMaybe<Profit_By_Routes_Bool_Exp>;
};

export type Query_RootProfit_By_Routes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profit_By_Routes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Profit_By_Routes_Order_By>>;
  where?: InputMaybe<Profit_By_Routes_Bool_Exp>;
};

export type Query_RootProposalsArgs = {
  distinct_on?: InputMaybe<Array<Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Proposals_Order_By>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};

export type Query_RootProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Proposals_Order_By>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};

export type Query_RootProposals_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootSearch_Pools_With_DenomArgs = {
  args: Search_Pools_With_Denom_Args;
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

export type Query_RootSearch_Pools_With_Denom_AggregateArgs = {
  args: Search_Pools_With_Denom_Args;
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

export type Query_RootSearch_Pools_With_DenomsArgs = {
  args: Search_Pools_With_Denoms_Args;
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

export type Query_RootSearch_Pools_With_Denoms_AggregateArgs = {
  args: Search_Pools_With_Denoms_Args;
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

export type Query_RootTop_Assets_ResultArgs = {
  distinct_on?: InputMaybe<Array<Top_Assets_Result_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Top_Assets_Result_Order_By>>;
  where?: InputMaybe<Top_Assets_Result_Bool_Exp>;
};

export type Query_RootTop_Assets_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Top_Assets_Result_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Top_Assets_Result_Order_By>>;
  where?: InputMaybe<Top_Assets_Result_Bool_Exp>;
};

export type Query_RootTrackingArgs = {
  distinct_on?: InputMaybe<Array<Tracking_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tracking_Order_By>>;
  where?: InputMaybe<Tracking_Bool_Exp>;
};

export type Query_RootTracking_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tracking_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tracking_Order_By>>;
  where?: InputMaybe<Tracking_Bool_Exp>;
};

export type Query_RootTracking_By_PkArgs = {
  chain_id: Scalars["String"];
};

export type Query_RootTrade_By_RoutesArgs = {
  distinct_on?: InputMaybe<Array<Trade_By_Routes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Trade_By_Routes_Order_By>>;
  where?: InputMaybe<Trade_By_Routes_Bool_Exp>;
};

export type Query_RootTrade_By_Routes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_By_Routes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Trade_By_Routes_Order_By>>;
  where?: InputMaybe<Trade_By_Routes_Bool_Exp>;
};

export type Query_RootTradesArgs = {
  distinct_on?: InputMaybe<Array<Trades_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Trades_Order_By>>;
  where?: InputMaybe<Trades_Bool_Exp>;
};

export type Query_RootTrades_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trades_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Trades_Order_By>>;
  where?: InputMaybe<Trades_Bool_Exp>;
};

export type Query_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

export type Query_RootTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

export type Query_RootTransactions_By_PkArgs = {
  block_height: Scalars["Int"];
  hash: Scalars["bytea"];
};

export type Query_RootValidatorsArgs = {
  distinct_on?: InputMaybe<Array<Validators_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Validators_Order_By>>;
  where?: InputMaybe<Validators_Bool_Exp>;
};

export type Query_RootValidators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validators_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Validators_Order_By>>;
  where?: InputMaybe<Validators_Bool_Exp>;
};

export type Query_RootValidators_By_PkArgs = {
  operator_address: Scalars["String"];
};

export type Search_Pools_With_Denom_Args = {
  denom?: InputMaybe<Scalars["String"]>;
};

export type Search_Pools_With_Denoms_Args = {
  denoms?: InputMaybe<Scalars["_varchar"]>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** An array relationship */
  account_transactions: Array<Account_Transactions>;
  /** An aggregate relationship */
  account_transactions_aggregate: Account_Transactions_Aggregate;
  /** fetch data from the table: "account_transactions" using primary key columns */
  account_transactions_by_pk?: Maybe<Account_Transactions>;
  /** fetch data from the table in a streaming manner: "account_transactions" */
  account_transactions_stream: Array<Account_Transactions>;
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>;
  /** An array relationship */
  begin_block_events: Array<Begin_Block_Events>;
  /** An aggregate relationship */
  begin_block_events_aggregate: Begin_Block_Events_Aggregate;
  /** fetch data from the table in a streaming manner: "begin_block_events" */
  begin_block_events_stream: Array<Begin_Block_Events>;
  /** An array relationship */
  blocks: Array<Blocks>;
  /** An aggregate relationship */
  blocks_aggregate: Blocks_Aggregate;
  /** fetch data from the table: "blocks" using primary key columns */
  blocks_by_pk?: Maybe<Blocks>;
  /** fetch data from the table in a streaming manner: "blocks" */
  blocks_stream: Array<Blocks>;
  /** An array relationship */
  code_proposals: Array<Code_Proposals>;
  /** An aggregate relationship */
  code_proposals_aggregate: Code_Proposals_Aggregate;
  /** fetch data from the table in a streaming manner: "code_proposals" */
  code_proposals_stream: Array<Code_Proposals>;
  /** An array relationship */
  codes: Array<Codes>;
  /** An aggregate relationship */
  codes_aggregate: Codes_Aggregate;
  /** fetch data from the table: "codes" using primary key columns */
  codes_by_pk?: Maybe<Codes>;
  /** fetch data from the table in a streaming manner: "codes" */
  codes_stream: Array<Codes>;
  /** An array relationship */
  contract_histories: Array<Contract_Histories>;
  /** An aggregate relationship */
  contract_histories_aggregate: Contract_Histories_Aggregate;
  /** fetch data from the table in a streaming manner: "contract_histories" */
  contract_histories_stream: Array<Contract_Histories>;
  /** An array relationship */
  contract_proposals: Array<Contract_Proposals>;
  /** An aggregate relationship */
  contract_proposals_aggregate: Contract_Proposals_Aggregate;
  /** fetch data from the table in a streaming manner: "contract_proposals" */
  contract_proposals_stream: Array<Contract_Proposals>;
  /** An array relationship */
  contract_transactions: Array<Contract_Transactions>;
  /** An aggregate relationship */
  contract_transactions_aggregate: Contract_Transactions_Aggregate;
  /** fetch data from the table in a streaming manner: "contract_transactions" */
  contract_transactions_stream: Array<Contract_Transactions>;
  /** fetch data from the table: "contract_transactions_view" */
  contract_transactions_view: Array<Contract_Transactions_View>;
  /** fetch aggregated fields from the table: "contract_transactions_view" */
  contract_transactions_view_aggregate: Contract_Transactions_View_Aggregate;
  /** fetch data from the table in a streaming manner: "contract_transactions_view" */
  contract_transactions_view_stream: Array<Contract_Transactions_View>;
  /** An array relationship */
  contracts: Array<Contracts>;
  /** An aggregate relationship */
  contracts_aggregate: Contracts_Aggregate;
  /** fetch data from the table: "contracts" using primary key columns */
  contracts_by_pk?: Maybe<Contracts>;
  /** fetch data from the table in a streaming manner: "contracts" */
  contracts_stream: Array<Contracts>;
  /** An array relationship */
  end_block_events: Array<End_Block_Events>;
  /** An aggregate relationship */
  end_block_events_aggregate: End_Block_Events_Aggregate;
  /** fetch data from the table in a streaming manner: "end_block_events" */
  end_block_events_stream: Array<End_Block_Events>;
  /** execute function "get_top_pool_assets" which returns "top_assets_result" */
  get_top_pool_assets: Array<Top_Assets_Result>;
  /** execute function "get_top_pool_assets" and query aggregates on result of table type "top_assets_result" */
  get_top_pool_assets_aggregate: Top_Assets_Result_Aggregate;
  /** An array relationship */
  lcd_tx_results: Array<Lcd_Tx_Results>;
  /** An aggregate relationship */
  lcd_tx_results_aggregate: Lcd_Tx_Results_Aggregate;
  /** fetch data from the table in a streaming manner: "lcd_tx_results" */
  lcd_tx_results_stream: Array<Lcd_Tx_Results>;
  /** An array relationship */
  pool_transactions: Array<Pool_Transactions>;
  /** An aggregate relationship */
  pool_transactions_aggregate: Pool_Transactions_Aggregate;
  /** fetch data from the table in a streaming manner: "pool_transactions" */
  pool_transactions_stream: Array<Pool_Transactions>;
  /** An array relationship */
  pools: Array<Pools>;
  /** An aggregate relationship */
  pools_aggregate: Pools_Aggregate;
  /** fetch data from the table: "pools" using primary key columns */
  pools_by_pk?: Maybe<Pools>;
  /** fetch data from the table in a streaming manner: "pools" */
  pools_stream: Array<Pools>;
  /** An array relationship */
  profit_by_denoms: Array<Profit_By_Denoms>;
  /** An aggregate relationship */
  profit_by_denoms_aggregate: Profit_By_Denoms_Aggregate;
  /** fetch data from the table in a streaming manner: "profit_by_denoms" */
  profit_by_denoms_stream: Array<Profit_By_Denoms>;
  /** An array relationship */
  profit_by_routes: Array<Profit_By_Routes>;
  /** An aggregate relationship */
  profit_by_routes_aggregate: Profit_By_Routes_Aggregate;
  /** fetch data from the table in a streaming manner: "profit_by_routes" */
  profit_by_routes_stream: Array<Profit_By_Routes>;
  /** An array relationship */
  proposals: Array<Proposals>;
  /** An aggregate relationship */
  proposals_aggregate: Proposals_Aggregate;
  /** fetch data from the table: "proposals" using primary key columns */
  proposals_by_pk?: Maybe<Proposals>;
  /** fetch data from the table in a streaming manner: "proposals" */
  proposals_stream: Array<Proposals>;
  /** execute function "search_pools_with_denom" which returns "pools" */
  search_pools_with_denom: Array<Pools>;
  /** execute function "search_pools_with_denom" and query aggregates on result of table type "pools" */
  search_pools_with_denom_aggregate: Pools_Aggregate;
  /** execute function "search_pools_with_denoms" which returns "pools" */
  search_pools_with_denoms: Array<Pools>;
  /** execute function "search_pools_with_denoms" and query aggregates on result of table type "pools" */
  search_pools_with_denoms_aggregate: Pools_Aggregate;
  /** fetch data from the table: "top_assets_result" */
  top_assets_result: Array<Top_Assets_Result>;
  /** fetch aggregated fields from the table: "top_assets_result" */
  top_assets_result_aggregate: Top_Assets_Result_Aggregate;
  /** fetch data from the table in a streaming manner: "top_assets_result" */
  top_assets_result_stream: Array<Top_Assets_Result>;
  /** fetch data from the table: "tracking" */
  tracking: Array<Tracking>;
  /** fetch aggregated fields from the table: "tracking" */
  tracking_aggregate: Tracking_Aggregate;
  /** fetch data from the table: "tracking" using primary key columns */
  tracking_by_pk?: Maybe<Tracking>;
  /** fetch data from the table in a streaming manner: "tracking" */
  tracking_stream: Array<Tracking>;
  /** An array relationship */
  trade_by_routes: Array<Trade_By_Routes>;
  /** An aggregate relationship */
  trade_by_routes_aggregate: Trade_By_Routes_Aggregate;
  /** fetch data from the table in a streaming manner: "trade_by_routes" */
  trade_by_routes_stream: Array<Trade_By_Routes>;
  /** An array relationship */
  trades: Array<Trades>;
  /** An aggregate relationship */
  trades_aggregate: Trades_Aggregate;
  /** fetch data from the table in a streaming manner: "trades" */
  trades_stream: Array<Trades>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table in a streaming manner: "transactions" */
  transactions_stream: Array<Transactions>;
  /** An array relationship */
  validators: Array<Validators>;
  /** An aggregate relationship */
  validators_aggregate: Validators_Aggregate;
  /** fetch data from the table: "validators" using primary key columns */
  validators_by_pk?: Maybe<Validators>;
  /** fetch data from the table in a streaming manner: "validators" */
  validators_stream: Array<Validators>;
};

export type Subscription_RootAccount_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Account_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Account_Transactions_Order_By>>;
  where?: InputMaybe<Account_Transactions_Bool_Exp>;
};

export type Subscription_RootAccount_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Account_Transactions_Order_By>>;
  where?: InputMaybe<Account_Transactions_Bool_Exp>;
};

export type Subscription_RootAccount_Transactions_By_PkArgs = {
  account_id: Scalars["Int"];
  transaction_id: Scalars["Int"];
};

export type Subscription_RootAccount_Transactions_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Account_Transactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Account_Transactions_Bool_Exp>;
};

export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_By_PkArgs = {
  address: Scalars["String"];
};

export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootBegin_Block_EventsArgs = {
  distinct_on?: InputMaybe<Array<Begin_Block_Events_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Begin_Block_Events_Order_By>>;
  where?: InputMaybe<Begin_Block_Events_Bool_Exp>;
};

export type Subscription_RootBegin_Block_Events_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Begin_Block_Events_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Begin_Block_Events_Order_By>>;
  where?: InputMaybe<Begin_Block_Events_Bool_Exp>;
};

export type Subscription_RootBegin_Block_Events_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Begin_Block_Events_Stream_Cursor_Input>>;
  where?: InputMaybe<Begin_Block_Events_Bool_Exp>;
};

export type Subscription_RootBlocksArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

export type Subscription_RootBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

export type Subscription_RootBlocks_By_PkArgs = {
  height: Scalars["Int"];
};

export type Subscription_RootBlocks_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Blocks_Stream_Cursor_Input>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

export type Subscription_RootCode_ProposalsArgs = {
  distinct_on?: InputMaybe<Array<Code_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Code_Proposals_Order_By>>;
  where?: InputMaybe<Code_Proposals_Bool_Exp>;
};

export type Subscription_RootCode_Proposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Code_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Code_Proposals_Order_By>>;
  where?: InputMaybe<Code_Proposals_Bool_Exp>;
};

export type Subscription_RootCode_Proposals_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Code_Proposals_Stream_Cursor_Input>>;
  where?: InputMaybe<Code_Proposals_Bool_Exp>;
};

export type Subscription_RootCodesArgs = {
  distinct_on?: InputMaybe<Array<Codes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Codes_Order_By>>;
  where?: InputMaybe<Codes_Bool_Exp>;
};

export type Subscription_RootCodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Codes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Codes_Order_By>>;
  where?: InputMaybe<Codes_Bool_Exp>;
};

export type Subscription_RootCodes_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootCodes_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Codes_Stream_Cursor_Input>>;
  where?: InputMaybe<Codes_Bool_Exp>;
};

export type Subscription_RootContract_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Contract_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Histories_Order_By>>;
  where?: InputMaybe<Contract_Histories_Bool_Exp>;
};

export type Subscription_RootContract_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Histories_Order_By>>;
  where?: InputMaybe<Contract_Histories_Bool_Exp>;
};

export type Subscription_RootContract_Histories_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Contract_Histories_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_Histories_Bool_Exp>;
};

export type Subscription_RootContract_ProposalsArgs = {
  distinct_on?: InputMaybe<Array<Contract_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Proposals_Order_By>>;
  where?: InputMaybe<Contract_Proposals_Bool_Exp>;
};

export type Subscription_RootContract_Proposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Proposals_Order_By>>;
  where?: InputMaybe<Contract_Proposals_Bool_Exp>;
};

export type Subscription_RootContract_Proposals_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Contract_Proposals_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_Proposals_Bool_Exp>;
};

export type Subscription_RootContract_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Transactions_Order_By>>;
  where?: InputMaybe<Contract_Transactions_Bool_Exp>;
};

export type Subscription_RootContract_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Transactions_Order_By>>;
  where?: InputMaybe<Contract_Transactions_Bool_Exp>;
};

export type Subscription_RootContract_Transactions_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Contract_Transactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_Transactions_Bool_Exp>;
};

export type Subscription_RootContract_Transactions_ViewArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_View_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Transactions_View_Order_By>>;
  where?: InputMaybe<Contract_Transactions_View_Bool_Exp>;
};

export type Subscription_RootContract_Transactions_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_View_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Transactions_View_Order_By>>;
  where?: InputMaybe<Contract_Transactions_View_Bool_Exp>;
};

export type Subscription_RootContract_Transactions_View_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Contract_Transactions_View_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_Transactions_View_Bool_Exp>;
};

export type Subscription_RootContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

export type Subscription_RootContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

export type Subscription_RootContracts_By_PkArgs = {
  address: Scalars["String"];
};

export type Subscription_RootContracts_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Contracts_Stream_Cursor_Input>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

export type Subscription_RootEnd_Block_EventsArgs = {
  distinct_on?: InputMaybe<Array<End_Block_Events_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<End_Block_Events_Order_By>>;
  where?: InputMaybe<End_Block_Events_Bool_Exp>;
};

export type Subscription_RootEnd_Block_Events_AggregateArgs = {
  distinct_on?: InputMaybe<Array<End_Block_Events_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<End_Block_Events_Order_By>>;
  where?: InputMaybe<End_Block_Events_Bool_Exp>;
};

export type Subscription_RootEnd_Block_Events_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<End_Block_Events_Stream_Cursor_Input>>;
  where?: InputMaybe<End_Block_Events_Bool_Exp>;
};

export type Subscription_RootGet_Top_Pool_AssetsArgs = {
  args: Get_Top_Pool_Assets_Args;
  distinct_on?: InputMaybe<Array<Top_Assets_Result_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Top_Assets_Result_Order_By>>;
  where?: InputMaybe<Top_Assets_Result_Bool_Exp>;
};

export type Subscription_RootGet_Top_Pool_Assets_AggregateArgs = {
  args: Get_Top_Pool_Assets_Args;
  distinct_on?: InputMaybe<Array<Top_Assets_Result_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Top_Assets_Result_Order_By>>;
  where?: InputMaybe<Top_Assets_Result_Bool_Exp>;
};

export type Subscription_RootLcd_Tx_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Lcd_Tx_Results_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Lcd_Tx_Results_Order_By>>;
  where?: InputMaybe<Lcd_Tx_Results_Bool_Exp>;
};

export type Subscription_RootLcd_Tx_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lcd_Tx_Results_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Lcd_Tx_Results_Order_By>>;
  where?: InputMaybe<Lcd_Tx_Results_Bool_Exp>;
};

export type Subscription_RootLcd_Tx_Results_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Lcd_Tx_Results_Stream_Cursor_Input>>;
  where?: InputMaybe<Lcd_Tx_Results_Bool_Exp>;
};

export type Subscription_RootPool_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Pool_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pool_Transactions_Order_By>>;
  where?: InputMaybe<Pool_Transactions_Bool_Exp>;
};

export type Subscription_RootPool_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pool_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pool_Transactions_Order_By>>;
  where?: InputMaybe<Pool_Transactions_Bool_Exp>;
};

export type Subscription_RootPool_Transactions_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Pool_Transactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Pool_Transactions_Bool_Exp>;
};

export type Subscription_RootPoolsArgs = {
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

export type Subscription_RootPools_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

export type Subscription_RootPools_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootPools_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Pools_Stream_Cursor_Input>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

export type Subscription_RootProfit_By_DenomsArgs = {
  distinct_on?: InputMaybe<Array<Profit_By_Denoms_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Profit_By_Denoms_Order_By>>;
  where?: InputMaybe<Profit_By_Denoms_Bool_Exp>;
};

export type Subscription_RootProfit_By_Denoms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profit_By_Denoms_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Profit_By_Denoms_Order_By>>;
  where?: InputMaybe<Profit_By_Denoms_Bool_Exp>;
};

export type Subscription_RootProfit_By_Denoms_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Profit_By_Denoms_Stream_Cursor_Input>>;
  where?: InputMaybe<Profit_By_Denoms_Bool_Exp>;
};

export type Subscription_RootProfit_By_RoutesArgs = {
  distinct_on?: InputMaybe<Array<Profit_By_Routes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Profit_By_Routes_Order_By>>;
  where?: InputMaybe<Profit_By_Routes_Bool_Exp>;
};

export type Subscription_RootProfit_By_Routes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profit_By_Routes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Profit_By_Routes_Order_By>>;
  where?: InputMaybe<Profit_By_Routes_Bool_Exp>;
};

export type Subscription_RootProfit_By_Routes_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Profit_By_Routes_Stream_Cursor_Input>>;
  where?: InputMaybe<Profit_By_Routes_Bool_Exp>;
};

export type Subscription_RootProposalsArgs = {
  distinct_on?: InputMaybe<Array<Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Proposals_Order_By>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};

export type Subscription_RootProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Proposals_Order_By>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};

export type Subscription_RootProposals_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootProposals_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Proposals_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};

export type Subscription_RootSearch_Pools_With_DenomArgs = {
  args: Search_Pools_With_Denom_Args;
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

export type Subscription_RootSearch_Pools_With_Denom_AggregateArgs = {
  args: Search_Pools_With_Denom_Args;
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

export type Subscription_RootSearch_Pools_With_DenomsArgs = {
  args: Search_Pools_With_Denoms_Args;
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

export type Subscription_RootSearch_Pools_With_Denoms_AggregateArgs = {
  args: Search_Pools_With_Denoms_Args;
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

export type Subscription_RootTop_Assets_ResultArgs = {
  distinct_on?: InputMaybe<Array<Top_Assets_Result_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Top_Assets_Result_Order_By>>;
  where?: InputMaybe<Top_Assets_Result_Bool_Exp>;
};

export type Subscription_RootTop_Assets_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Top_Assets_Result_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Top_Assets_Result_Order_By>>;
  where?: InputMaybe<Top_Assets_Result_Bool_Exp>;
};

export type Subscription_RootTop_Assets_Result_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Top_Assets_Result_Stream_Cursor_Input>>;
  where?: InputMaybe<Top_Assets_Result_Bool_Exp>;
};

export type Subscription_RootTrackingArgs = {
  distinct_on?: InputMaybe<Array<Tracking_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tracking_Order_By>>;
  where?: InputMaybe<Tracking_Bool_Exp>;
};

export type Subscription_RootTracking_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tracking_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tracking_Order_By>>;
  where?: InputMaybe<Tracking_Bool_Exp>;
};

export type Subscription_RootTracking_By_PkArgs = {
  chain_id: Scalars["String"];
};

export type Subscription_RootTracking_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Tracking_Stream_Cursor_Input>>;
  where?: InputMaybe<Tracking_Bool_Exp>;
};

export type Subscription_RootTrade_By_RoutesArgs = {
  distinct_on?: InputMaybe<Array<Trade_By_Routes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Trade_By_Routes_Order_By>>;
  where?: InputMaybe<Trade_By_Routes_Bool_Exp>;
};

export type Subscription_RootTrade_By_Routes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_By_Routes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Trade_By_Routes_Order_By>>;
  where?: InputMaybe<Trade_By_Routes_Bool_Exp>;
};

export type Subscription_RootTrade_By_Routes_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Trade_By_Routes_Stream_Cursor_Input>>;
  where?: InputMaybe<Trade_By_Routes_Bool_Exp>;
};

export type Subscription_RootTradesArgs = {
  distinct_on?: InputMaybe<Array<Trades_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Trades_Order_By>>;
  where?: InputMaybe<Trades_Bool_Exp>;
};

export type Subscription_RootTrades_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trades_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Trades_Order_By>>;
  where?: InputMaybe<Trades_Bool_Exp>;
};

export type Subscription_RootTrades_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Trades_Stream_Cursor_Input>>;
  where?: InputMaybe<Trades_Bool_Exp>;
};

export type Subscription_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

export type Subscription_RootTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

export type Subscription_RootTransactions_By_PkArgs = {
  block_height: Scalars["Int"];
  hash: Scalars["bytea"];
};

export type Subscription_RootTransactions_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Transactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

export type Subscription_RootValidatorsArgs = {
  distinct_on?: InputMaybe<Array<Validators_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Validators_Order_By>>;
  where?: InputMaybe<Validators_Bool_Exp>;
};

export type Subscription_RootValidators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validators_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Validators_Order_By>>;
  where?: InputMaybe<Validators_Bool_Exp>;
};

export type Subscription_RootValidators_By_PkArgs = {
  operator_address: Scalars["String"];
};

export type Subscription_RootValidators_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Validators_Stream_Cursor_Input>>;
  where?: InputMaybe<Validators_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamp"]>;
  _gt?: InputMaybe<Scalars["timestamp"]>;
  _gte?: InputMaybe<Scalars["timestamp"]>;
  _in?: InputMaybe<Array<Scalars["timestamp"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamp"]>;
  _lte?: InputMaybe<Scalars["timestamp"]>;
  _neq?: InputMaybe<Scalars["timestamp"]>;
  _nin?: InputMaybe<Array<Scalars["timestamp"]>>;
};

/** columns and relationships of "top_assets_result" */
export type Top_Assets_Result = {
  __typename?: "top_assets_result";
  count?: Maybe<Scalars["Int"]>;
  denom?: Maybe<Scalars["String"]>;
};

export type Top_Assets_Result_Aggregate = {
  __typename?: "top_assets_result_aggregate";
  aggregate?: Maybe<Top_Assets_Result_Aggregate_Fields>;
  nodes: Array<Top_Assets_Result>;
};

/** aggregate fields of "top_assets_result" */
export type Top_Assets_Result_Aggregate_Fields = {
  __typename?: "top_assets_result_aggregate_fields";
  avg?: Maybe<Top_Assets_Result_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Top_Assets_Result_Max_Fields>;
  min?: Maybe<Top_Assets_Result_Min_Fields>;
  stddev?: Maybe<Top_Assets_Result_Stddev_Fields>;
  stddev_pop?: Maybe<Top_Assets_Result_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Top_Assets_Result_Stddev_Samp_Fields>;
  sum?: Maybe<Top_Assets_Result_Sum_Fields>;
  var_pop?: Maybe<Top_Assets_Result_Var_Pop_Fields>;
  var_samp?: Maybe<Top_Assets_Result_Var_Samp_Fields>;
  variance?: Maybe<Top_Assets_Result_Variance_Fields>;
};

/** aggregate fields of "top_assets_result" */
export type Top_Assets_Result_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Top_Assets_Result_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Top_Assets_Result_Avg_Fields = {
  __typename?: "top_assets_result_avg_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "top_assets_result". All fields are combined with a logical 'AND'. */
export type Top_Assets_Result_Bool_Exp = {
  _and?: InputMaybe<Array<Top_Assets_Result_Bool_Exp>>;
  _not?: InputMaybe<Top_Assets_Result_Bool_Exp>;
  _or?: InputMaybe<Array<Top_Assets_Result_Bool_Exp>>;
  count?: InputMaybe<Int_Comparison_Exp>;
  denom?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "top_assets_result" */
export type Top_Assets_Result_Inc_Input = {
  count?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "top_assets_result" */
export type Top_Assets_Result_Insert_Input = {
  count?: InputMaybe<Scalars["Int"]>;
  denom?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Top_Assets_Result_Max_Fields = {
  __typename?: "top_assets_result_max_fields";
  count?: Maybe<Scalars["Int"]>;
  denom?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Top_Assets_Result_Min_Fields = {
  __typename?: "top_assets_result_min_fields";
  count?: Maybe<Scalars["Int"]>;
  denom?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "top_assets_result" */
export type Top_Assets_Result_Mutation_Response = {
  __typename?: "top_assets_result_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Top_Assets_Result>;
};

/** Ordering options when selecting data from "top_assets_result". */
export type Top_Assets_Result_Order_By = {
  count?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
};

/** select columns of table "top_assets_result" */
export enum Top_Assets_Result_Select_Column {
  /** column name */
  Count = "count",
  /** column name */
  Denom = "denom",
}

/** input type for updating data in table "top_assets_result" */
export type Top_Assets_Result_Set_Input = {
  count?: InputMaybe<Scalars["Int"]>;
  denom?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Top_Assets_Result_Stddev_Fields = {
  __typename?: "top_assets_result_stddev_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Top_Assets_Result_Stddev_Pop_Fields = {
  __typename?: "top_assets_result_stddev_pop_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Top_Assets_Result_Stddev_Samp_Fields = {
  __typename?: "top_assets_result_stddev_samp_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "top_assets_result" */
export type Top_Assets_Result_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Top_Assets_Result_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Top_Assets_Result_Stream_Cursor_Value_Input = {
  count?: InputMaybe<Scalars["Int"]>;
  denom?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Top_Assets_Result_Sum_Fields = {
  __typename?: "top_assets_result_sum_fields";
  count?: Maybe<Scalars["Int"]>;
};

export type Top_Assets_Result_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Top_Assets_Result_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Top_Assets_Result_Set_Input>;
  /** filter the rows which have to be updated */
  where: Top_Assets_Result_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Top_Assets_Result_Var_Pop_Fields = {
  __typename?: "top_assets_result_var_pop_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Top_Assets_Result_Var_Samp_Fields = {
  __typename?: "top_assets_result_var_samp_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Top_Assets_Result_Variance_Fields = {
  __typename?: "top_assets_result_variance_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "tracking" */
export type Tracking = {
  __typename?: "tracking";
  chain_id: Scalars["String"];
  kafka_offset: Scalars["Int"];
  replay_offset: Scalars["Int"];
  replay_topic: Scalars["String"];
  topic: Scalars["String"];
};

/** aggregated selection of "tracking" */
export type Tracking_Aggregate = {
  __typename?: "tracking_aggregate";
  aggregate?: Maybe<Tracking_Aggregate_Fields>;
  nodes: Array<Tracking>;
};

/** aggregate fields of "tracking" */
export type Tracking_Aggregate_Fields = {
  __typename?: "tracking_aggregate_fields";
  avg?: Maybe<Tracking_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Tracking_Max_Fields>;
  min?: Maybe<Tracking_Min_Fields>;
  stddev?: Maybe<Tracking_Stddev_Fields>;
  stddev_pop?: Maybe<Tracking_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tracking_Stddev_Samp_Fields>;
  sum?: Maybe<Tracking_Sum_Fields>;
  var_pop?: Maybe<Tracking_Var_Pop_Fields>;
  var_samp?: Maybe<Tracking_Var_Samp_Fields>;
  variance?: Maybe<Tracking_Variance_Fields>;
};

/** aggregate fields of "tracking" */
export type Tracking_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tracking_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Tracking_Avg_Fields = {
  __typename?: "tracking_avg_fields";
  kafka_offset?: Maybe<Scalars["Float"]>;
  replay_offset?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "tracking". All fields are combined with a logical 'AND'. */
export type Tracking_Bool_Exp = {
  _and?: InputMaybe<Array<Tracking_Bool_Exp>>;
  _not?: InputMaybe<Tracking_Bool_Exp>;
  _or?: InputMaybe<Array<Tracking_Bool_Exp>>;
  chain_id?: InputMaybe<String_Comparison_Exp>;
  kafka_offset?: InputMaybe<Int_Comparison_Exp>;
  replay_offset?: InputMaybe<Int_Comparison_Exp>;
  replay_topic?: InputMaybe<String_Comparison_Exp>;
  topic?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tracking" */
export enum Tracking_Constraint {
  /** unique or primary key constraint on columns "chain_id" */
  TrackingPkey = "tracking_pkey",
}

/** input type for incrementing numeric columns in table "tracking" */
export type Tracking_Inc_Input = {
  kafka_offset?: InputMaybe<Scalars["Int"]>;
  replay_offset?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "tracking" */
export type Tracking_Insert_Input = {
  chain_id?: InputMaybe<Scalars["String"]>;
  kafka_offset?: InputMaybe<Scalars["Int"]>;
  replay_offset?: InputMaybe<Scalars["Int"]>;
  replay_topic?: InputMaybe<Scalars["String"]>;
  topic?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Tracking_Max_Fields = {
  __typename?: "tracking_max_fields";
  chain_id?: Maybe<Scalars["String"]>;
  kafka_offset?: Maybe<Scalars["Int"]>;
  replay_offset?: Maybe<Scalars["Int"]>;
  replay_topic?: Maybe<Scalars["String"]>;
  topic?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Tracking_Min_Fields = {
  __typename?: "tracking_min_fields";
  chain_id?: Maybe<Scalars["String"]>;
  kafka_offset?: Maybe<Scalars["Int"]>;
  replay_offset?: Maybe<Scalars["Int"]>;
  replay_topic?: Maybe<Scalars["String"]>;
  topic?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "tracking" */
export type Tracking_Mutation_Response = {
  __typename?: "tracking_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Tracking>;
};

/** on_conflict condition type for table "tracking" */
export type Tracking_On_Conflict = {
  constraint: Tracking_Constraint;
  update_columns?: Array<Tracking_Update_Column>;
  where?: InputMaybe<Tracking_Bool_Exp>;
};

/** Ordering options when selecting data from "tracking". */
export type Tracking_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  kafka_offset?: InputMaybe<Order_By>;
  replay_offset?: InputMaybe<Order_By>;
  replay_topic?: InputMaybe<Order_By>;
  topic?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tracking */
export type Tracking_Pk_Columns_Input = {
  chain_id: Scalars["String"];
};

/** select columns of table "tracking" */
export enum Tracking_Select_Column {
  /** column name */
  ChainId = "chain_id",
  /** column name */
  KafkaOffset = "kafka_offset",
  /** column name */
  ReplayOffset = "replay_offset",
  /** column name */
  ReplayTopic = "replay_topic",
  /** column name */
  Topic = "topic",
}

/** input type for updating data in table "tracking" */
export type Tracking_Set_Input = {
  chain_id?: InputMaybe<Scalars["String"]>;
  kafka_offset?: InputMaybe<Scalars["Int"]>;
  replay_offset?: InputMaybe<Scalars["Int"]>;
  replay_topic?: InputMaybe<Scalars["String"]>;
  topic?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Tracking_Stddev_Fields = {
  __typename?: "tracking_stddev_fields";
  kafka_offset?: Maybe<Scalars["Float"]>;
  replay_offset?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Tracking_Stddev_Pop_Fields = {
  __typename?: "tracking_stddev_pop_fields";
  kafka_offset?: Maybe<Scalars["Float"]>;
  replay_offset?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Tracking_Stddev_Samp_Fields = {
  __typename?: "tracking_stddev_samp_fields";
  kafka_offset?: Maybe<Scalars["Float"]>;
  replay_offset?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "tracking" */
export type Tracking_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tracking_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tracking_Stream_Cursor_Value_Input = {
  chain_id?: InputMaybe<Scalars["String"]>;
  kafka_offset?: InputMaybe<Scalars["Int"]>;
  replay_offset?: InputMaybe<Scalars["Int"]>;
  replay_topic?: InputMaybe<Scalars["String"]>;
  topic?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Tracking_Sum_Fields = {
  __typename?: "tracking_sum_fields";
  kafka_offset?: Maybe<Scalars["Int"]>;
  replay_offset?: Maybe<Scalars["Int"]>;
};

/** update columns of table "tracking" */
export enum Tracking_Update_Column {
  /** column name */
  ChainId = "chain_id",
  /** column name */
  KafkaOffset = "kafka_offset",
  /** column name */
  ReplayOffset = "replay_offset",
  /** column name */
  ReplayTopic = "replay_topic",
  /** column name */
  Topic = "topic",
}

export type Tracking_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Tracking_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tracking_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tracking_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tracking_Var_Pop_Fields = {
  __typename?: "tracking_var_pop_fields";
  kafka_offset?: Maybe<Scalars["Float"]>;
  replay_offset?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Tracking_Var_Samp_Fields = {
  __typename?: "tracking_var_samp_fields";
  kafka_offset?: Maybe<Scalars["Float"]>;
  replay_offset?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Tracking_Variance_Fields = {
  __typename?: "tracking_variance_fields";
  kafka_offset?: Maybe<Scalars["Float"]>;
  replay_offset?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "trade_by_routes" */
export type Trade_By_Routes = {
  __typename?: "trade_by_routes";
  /** An object relationship */
  block: Blocks;
  block_height: Scalars["Int"];
  count: Scalars["Int"];
  route: Scalars["json"];
};

/** columns and relationships of "trade_by_routes" */
export type Trade_By_RoutesRouteArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "trade_by_routes" */
export type Trade_By_Routes_Aggregate = {
  __typename?: "trade_by_routes_aggregate";
  aggregate?: Maybe<Trade_By_Routes_Aggregate_Fields>;
  nodes: Array<Trade_By_Routes>;
};

export type Trade_By_Routes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Trade_By_Routes_Aggregate_Bool_Exp_Count>;
};

export type Trade_By_Routes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Trade_By_Routes_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Trade_By_Routes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "trade_by_routes" */
export type Trade_By_Routes_Aggregate_Fields = {
  __typename?: "trade_by_routes_aggregate_fields";
  avg?: Maybe<Trade_By_Routes_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Trade_By_Routes_Max_Fields>;
  min?: Maybe<Trade_By_Routes_Min_Fields>;
  stddev?: Maybe<Trade_By_Routes_Stddev_Fields>;
  stddev_pop?: Maybe<Trade_By_Routes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trade_By_Routes_Stddev_Samp_Fields>;
  sum?: Maybe<Trade_By_Routes_Sum_Fields>;
  var_pop?: Maybe<Trade_By_Routes_Var_Pop_Fields>;
  var_samp?: Maybe<Trade_By_Routes_Var_Samp_Fields>;
  variance?: Maybe<Trade_By_Routes_Variance_Fields>;
};

/** aggregate fields of "trade_by_routes" */
export type Trade_By_Routes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trade_By_Routes_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "trade_by_routes" */
export type Trade_By_Routes_Aggregate_Order_By = {
  avg?: InputMaybe<Trade_By_Routes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Trade_By_Routes_Max_Order_By>;
  min?: InputMaybe<Trade_By_Routes_Min_Order_By>;
  stddev?: InputMaybe<Trade_By_Routes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Trade_By_Routes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Trade_By_Routes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Trade_By_Routes_Sum_Order_By>;
  var_pop?: InputMaybe<Trade_By_Routes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Trade_By_Routes_Var_Samp_Order_By>;
  variance?: InputMaybe<Trade_By_Routes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "trade_by_routes" */
export type Trade_By_Routes_Arr_Rel_Insert_Input = {
  data: Array<Trade_By_Routes_Insert_Input>;
};

/** aggregate avg on columns */
export type Trade_By_Routes_Avg_Fields = {
  __typename?: "trade_by_routes_avg_fields";
  block_height?: Maybe<Scalars["Float"]>;
  count?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "trade_by_routes" */
export type Trade_By_Routes_Avg_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "trade_by_routes". All fields are combined with a logical 'AND'. */
export type Trade_By_Routes_Bool_Exp = {
  _and?: InputMaybe<Array<Trade_By_Routes_Bool_Exp>>;
  _not?: InputMaybe<Trade_By_Routes_Bool_Exp>;
  _or?: InputMaybe<Array<Trade_By_Routes_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  block_height?: InputMaybe<Int_Comparison_Exp>;
  count?: InputMaybe<Int_Comparison_Exp>;
  route?: InputMaybe<Json_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "trade_by_routes" */
export type Trade_By_Routes_Inc_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  count?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "trade_by_routes" */
export type Trade_By_Routes_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  block_height?: InputMaybe<Scalars["Int"]>;
  count?: InputMaybe<Scalars["Int"]>;
  route?: InputMaybe<Scalars["json"]>;
};

/** aggregate max on columns */
export type Trade_By_Routes_Max_Fields = {
  __typename?: "trade_by_routes_max_fields";
  block_height?: Maybe<Scalars["Int"]>;
  count?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "trade_by_routes" */
export type Trade_By_Routes_Max_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Trade_By_Routes_Min_Fields = {
  __typename?: "trade_by_routes_min_fields";
  block_height?: Maybe<Scalars["Int"]>;
  count?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "trade_by_routes" */
export type Trade_By_Routes_Min_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "trade_by_routes" */
export type Trade_By_Routes_Mutation_Response = {
  __typename?: "trade_by_routes_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Trade_By_Routes>;
};

/** Ordering options when selecting data from "trade_by_routes". */
export type Trade_By_Routes_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  route?: InputMaybe<Order_By>;
};

/** select columns of table "trade_by_routes" */
export enum Trade_By_Routes_Select_Column {
  /** column name */
  BlockHeight = "block_height",
  /** column name */
  Count = "count",
  /** column name */
  Route = "route",
}

/** input type for updating data in table "trade_by_routes" */
export type Trade_By_Routes_Set_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  count?: InputMaybe<Scalars["Int"]>;
  route?: InputMaybe<Scalars["json"]>;
};

/** aggregate stddev on columns */
export type Trade_By_Routes_Stddev_Fields = {
  __typename?: "trade_by_routes_stddev_fields";
  block_height?: Maybe<Scalars["Float"]>;
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "trade_by_routes" */
export type Trade_By_Routes_Stddev_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Trade_By_Routes_Stddev_Pop_Fields = {
  __typename?: "trade_by_routes_stddev_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "trade_by_routes" */
export type Trade_By_Routes_Stddev_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Trade_By_Routes_Stddev_Samp_Fields = {
  __typename?: "trade_by_routes_stddev_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "trade_by_routes" */
export type Trade_By_Routes_Stddev_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "trade_by_routes" */
export type Trade_By_Routes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Trade_By_Routes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Trade_By_Routes_Stream_Cursor_Value_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  count?: InputMaybe<Scalars["Int"]>;
  route?: InputMaybe<Scalars["json"]>;
};

/** aggregate sum on columns */
export type Trade_By_Routes_Sum_Fields = {
  __typename?: "trade_by_routes_sum_fields";
  block_height?: Maybe<Scalars["Int"]>;
  count?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "trade_by_routes" */
export type Trade_By_Routes_Sum_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

export type Trade_By_Routes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Trade_By_Routes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Trade_By_Routes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Trade_By_Routes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Trade_By_Routes_Var_Pop_Fields = {
  __typename?: "trade_by_routes_var_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "trade_by_routes" */
export type Trade_By_Routes_Var_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Trade_By_Routes_Var_Samp_Fields = {
  __typename?: "trade_by_routes_var_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "trade_by_routes" */
export type Trade_By_Routes_Var_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Trade_By_Routes_Variance_Fields = {
  __typename?: "trade_by_routes_variance_fields";
  block_height?: Maybe<Scalars["Float"]>;
  count?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "trade_by_routes" */
export type Trade_By_Routes_Variance_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** columns and relationships of "trades" */
export type Trades = {
  __typename?: "trades";
  /** An object relationship */
  block: Blocks;
  block_height: Scalars["Int"];
  count: Scalars["Int"];
};

/** aggregated selection of "trades" */
export type Trades_Aggregate = {
  __typename?: "trades_aggregate";
  aggregate?: Maybe<Trades_Aggregate_Fields>;
  nodes: Array<Trades>;
};

export type Trades_Aggregate_Bool_Exp = {
  count?: InputMaybe<Trades_Aggregate_Bool_Exp_Count>;
};

export type Trades_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Trades_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Trades_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "trades" */
export type Trades_Aggregate_Fields = {
  __typename?: "trades_aggregate_fields";
  avg?: Maybe<Trades_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Trades_Max_Fields>;
  min?: Maybe<Trades_Min_Fields>;
  stddev?: Maybe<Trades_Stddev_Fields>;
  stddev_pop?: Maybe<Trades_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trades_Stddev_Samp_Fields>;
  sum?: Maybe<Trades_Sum_Fields>;
  var_pop?: Maybe<Trades_Var_Pop_Fields>;
  var_samp?: Maybe<Trades_Var_Samp_Fields>;
  variance?: Maybe<Trades_Variance_Fields>;
};

/** aggregate fields of "trades" */
export type Trades_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trades_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "trades" */
export type Trades_Aggregate_Order_By = {
  avg?: InputMaybe<Trades_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Trades_Max_Order_By>;
  min?: InputMaybe<Trades_Min_Order_By>;
  stddev?: InputMaybe<Trades_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Trades_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Trades_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Trades_Sum_Order_By>;
  var_pop?: InputMaybe<Trades_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Trades_Var_Samp_Order_By>;
  variance?: InputMaybe<Trades_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "trades" */
export type Trades_Arr_Rel_Insert_Input = {
  data: Array<Trades_Insert_Input>;
};

/** aggregate avg on columns */
export type Trades_Avg_Fields = {
  __typename?: "trades_avg_fields";
  block_height?: Maybe<Scalars["Float"]>;
  count?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "trades" */
export type Trades_Avg_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "trades". All fields are combined with a logical 'AND'. */
export type Trades_Bool_Exp = {
  _and?: InputMaybe<Array<Trades_Bool_Exp>>;
  _not?: InputMaybe<Trades_Bool_Exp>;
  _or?: InputMaybe<Array<Trades_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  block_height?: InputMaybe<Int_Comparison_Exp>;
  count?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "trades" */
export type Trades_Inc_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  count?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "trades" */
export type Trades_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  block_height?: InputMaybe<Scalars["Int"]>;
  count?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Trades_Max_Fields = {
  __typename?: "trades_max_fields";
  block_height?: Maybe<Scalars["Int"]>;
  count?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "trades" */
export type Trades_Max_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Trades_Min_Fields = {
  __typename?: "trades_min_fields";
  block_height?: Maybe<Scalars["Int"]>;
  count?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "trades" */
export type Trades_Min_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "trades" */
export type Trades_Mutation_Response = {
  __typename?: "trades_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Trades>;
};

/** Ordering options when selecting data from "trades". */
export type Trades_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** select columns of table "trades" */
export enum Trades_Select_Column {
  /** column name */
  BlockHeight = "block_height",
  /** column name */
  Count = "count",
}

/** input type for updating data in table "trades" */
export type Trades_Set_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  count?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Trades_Stddev_Fields = {
  __typename?: "trades_stddev_fields";
  block_height?: Maybe<Scalars["Float"]>;
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "trades" */
export type Trades_Stddev_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Trades_Stddev_Pop_Fields = {
  __typename?: "trades_stddev_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "trades" */
export type Trades_Stddev_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Trades_Stddev_Samp_Fields = {
  __typename?: "trades_stddev_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "trades" */
export type Trades_Stddev_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "trades" */
export type Trades_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Trades_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Trades_Stream_Cursor_Value_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  count?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Trades_Sum_Fields = {
  __typename?: "trades_sum_fields";
  block_height?: Maybe<Scalars["Int"]>;
  count?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "trades" */
export type Trades_Sum_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

export type Trades_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Trades_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Trades_Set_Input>;
  /** filter the rows which have to be updated */
  where: Trades_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Trades_Var_Pop_Fields = {
  __typename?: "trades_var_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "trades" */
export type Trades_Var_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Trades_Var_Samp_Fields = {
  __typename?: "trades_var_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "trades" */
export type Trades_Var_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Trades_Variance_Fields = {
  __typename?: "trades_variance_fields";
  block_height?: Maybe<Scalars["Float"]>;
  count?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "trades" */
export type Trades_Variance_Order_By = {
  block_height?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
};

/** columns and relationships of "transactions" */
export type Transactions = {
  __typename?: "transactions";
  /** An object relationship */
  account: Accounts;
  /** An array relationship */
  account_transactions: Array<Account_Transactions>;
  /** An aggregate relationship */
  account_transactions_aggregate: Account_Transactions_Aggregate;
  /** An object relationship */
  block: Blocks;
  block_height: Scalars["Int"];
  /** An array relationship */
  codes: Array<Codes>;
  /** An aggregate relationship */
  codes_aggregate: Codes_Aggregate;
  /** An array relationship */
  contract_transactions: Array<Contract_Transactions>;
  /** An aggregate relationship */
  contract_transactions_aggregate: Contract_Transactions_Aggregate;
  /** An array relationship */
  contracts: Array<Contracts>;
  /** An aggregate relationship */
  contracts_aggregate: Contracts_Aggregate;
  err_msg?: Maybe<Scalars["String"]>;
  gas_fee: Scalars["String"];
  gas_limit: Scalars["Int"];
  gas_used: Scalars["Int"];
  hash: Scalars["bytea"];
  id: Scalars["Int"];
  is_clear_admin: Scalars["Boolean"];
  is_execute: Scalars["Boolean"];
  is_ibc: Scalars["Boolean"];
  is_instantiate: Scalars["Boolean"];
  is_migrate: Scalars["Boolean"];
  is_send: Scalars["Boolean"];
  is_store_code: Scalars["Boolean"];
  is_update_admin: Scalars["Boolean"];
  /** An array relationship */
  lcd_tx_results: Array<Lcd_Tx_Results>;
  /** An aggregate relationship */
  lcd_tx_results_aggregate: Lcd_Tx_Results_Aggregate;
  memo: Scalars["String"];
  messages: Scalars["json"];
  /** An array relationship */
  pool_transactions: Array<Pool_Transactions>;
  /** An aggregate relationship */
  pool_transactions_aggregate: Pool_Transactions_Aggregate;
  /** An array relationship */
  pools: Array<Pools>;
  /** An aggregate relationship */
  pools_aggregate: Pools_Aggregate;
  sender: Scalars["Int"];
  success: Scalars["Boolean"];
};

/** columns and relationships of "transactions" */
export type TransactionsAccount_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Account_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Account_Transactions_Order_By>>;
  where?: InputMaybe<Account_Transactions_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsAccount_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Account_Transactions_Order_By>>;
  where?: InputMaybe<Account_Transactions_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsCodesArgs = {
  distinct_on?: InputMaybe<Array<Codes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Codes_Order_By>>;
  where?: InputMaybe<Codes_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsCodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Codes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Codes_Order_By>>;
  where?: InputMaybe<Codes_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsContract_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Transactions_Order_By>>;
  where?: InputMaybe<Contract_Transactions_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsContract_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Transactions_Order_By>>;
  where?: InputMaybe<Contract_Transactions_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsLcd_Tx_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Lcd_Tx_Results_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Lcd_Tx_Results_Order_By>>;
  where?: InputMaybe<Lcd_Tx_Results_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsLcd_Tx_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lcd_Tx_Results_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Lcd_Tx_Results_Order_By>>;
  where?: InputMaybe<Lcd_Tx_Results_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsMessagesArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "transactions" */
export type TransactionsPool_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Pool_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pool_Transactions_Order_By>>;
  where?: InputMaybe<Pool_Transactions_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsPool_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pool_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pool_Transactions_Order_By>>;
  where?: InputMaybe<Pool_Transactions_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsPoolsArgs = {
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsPools_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pools_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Pools_Order_By>>;
  where?: InputMaybe<Pools_Bool_Exp>;
};

/** aggregated selection of "transactions" */
export type Transactions_Aggregate = {
  __typename?: "transactions_aggregate";
  aggregate?: Maybe<Transactions_Aggregate_Fields>;
  nodes: Array<Transactions>;
};

export type Transactions_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Transactions_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Transactions_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Transactions_Aggregate_Bool_Exp_Count>;
};

export type Transactions_Aggregate_Bool_Exp_Bool_And = {
  arguments: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transactions_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_Fields = {
  __typename?: "transactions_aggregate_fields";
  avg?: Maybe<Transactions_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Transactions_Max_Fields>;
  min?: Maybe<Transactions_Min_Fields>;
  stddev?: Maybe<Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Transactions_Sum_Fields>;
  var_pop?: Maybe<Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Transactions_Var_Samp_Fields>;
  variance?: Maybe<Transactions_Variance_Fields>;
};

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "transactions" */
export type Transactions_Aggregate_Order_By = {
  avg?: InputMaybe<Transactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transactions_Max_Order_By>;
  min?: InputMaybe<Transactions_Min_Order_By>;
  stddev?: InputMaybe<Transactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transactions_Sum_Order_By>;
  var_pop?: InputMaybe<Transactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Transactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transactions" */
export type Transactions_Arr_Rel_Insert_Input = {
  data: Array<Transactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Transactions_Avg_Fields = {
  __typename?: "transactions_avg_fields";
  block_height?: Maybe<Scalars["Float"]>;
  gas_limit?: Maybe<Scalars["Float"]>;
  gas_used?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  sender?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "transactions" */
export type Transactions_Avg_Order_By = {
  block_height?: InputMaybe<Order_By>;
  gas_limit?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Transactions_Bool_Exp>>;
  _not?: InputMaybe<Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Transactions_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  account_transactions?: InputMaybe<Account_Transactions_Bool_Exp>;
  account_transactions_aggregate?: InputMaybe<Account_Transactions_Aggregate_Bool_Exp>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  block_height?: InputMaybe<Int_Comparison_Exp>;
  codes?: InputMaybe<Codes_Bool_Exp>;
  codes_aggregate?: InputMaybe<Codes_Aggregate_Bool_Exp>;
  contract_transactions?: InputMaybe<Contract_Transactions_Bool_Exp>;
  contract_transactions_aggregate?: InputMaybe<Contract_Transactions_Aggregate_Bool_Exp>;
  contracts?: InputMaybe<Contracts_Bool_Exp>;
  contracts_aggregate?: InputMaybe<Contracts_Aggregate_Bool_Exp>;
  err_msg?: InputMaybe<String_Comparison_Exp>;
  gas_fee?: InputMaybe<String_Comparison_Exp>;
  gas_limit?: InputMaybe<Int_Comparison_Exp>;
  gas_used?: InputMaybe<Int_Comparison_Exp>;
  hash?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_clear_admin?: InputMaybe<Boolean_Comparison_Exp>;
  is_execute?: InputMaybe<Boolean_Comparison_Exp>;
  is_ibc?: InputMaybe<Boolean_Comparison_Exp>;
  is_instantiate?: InputMaybe<Boolean_Comparison_Exp>;
  is_migrate?: InputMaybe<Boolean_Comparison_Exp>;
  is_send?: InputMaybe<Boolean_Comparison_Exp>;
  is_store_code?: InputMaybe<Boolean_Comparison_Exp>;
  is_update_admin?: InputMaybe<Boolean_Comparison_Exp>;
  lcd_tx_results?: InputMaybe<Lcd_Tx_Results_Bool_Exp>;
  lcd_tx_results_aggregate?: InputMaybe<Lcd_Tx_Results_Aggregate_Bool_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  messages?: InputMaybe<Json_Comparison_Exp>;
  pool_transactions?: InputMaybe<Pool_Transactions_Bool_Exp>;
  pool_transactions_aggregate?: InputMaybe<Pool_Transactions_Aggregate_Bool_Exp>;
  pools?: InputMaybe<Pools_Bool_Exp>;
  pools_aggregate?: InputMaybe<Pools_Aggregate_Bool_Exp>;
  sender?: InputMaybe<Int_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint on columns "id" */
  TransactionsIdKey = "transactions_id_key",
  /** unique or primary key constraint on columns "block_height", "hash" */
  TransactionsPkey = "transactions_pkey",
}

/** input type for incrementing numeric columns in table "transactions" */
export type Transactions_Inc_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  gas_limit?: InputMaybe<Scalars["Int"]>;
  gas_used?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
  sender?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  account_transactions?: InputMaybe<Account_Transactions_Arr_Rel_Insert_Input>;
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  block_height?: InputMaybe<Scalars["Int"]>;
  codes?: InputMaybe<Codes_Arr_Rel_Insert_Input>;
  contract_transactions?: InputMaybe<Contract_Transactions_Arr_Rel_Insert_Input>;
  contracts?: InputMaybe<Contracts_Arr_Rel_Insert_Input>;
  err_msg?: InputMaybe<Scalars["String"]>;
  gas_fee?: InputMaybe<Scalars["String"]>;
  gas_limit?: InputMaybe<Scalars["Int"]>;
  gas_used?: InputMaybe<Scalars["Int"]>;
  hash?: InputMaybe<Scalars["bytea"]>;
  id?: InputMaybe<Scalars["Int"]>;
  is_clear_admin?: InputMaybe<Scalars["Boolean"]>;
  is_execute?: InputMaybe<Scalars["Boolean"]>;
  is_ibc?: InputMaybe<Scalars["Boolean"]>;
  is_instantiate?: InputMaybe<Scalars["Boolean"]>;
  is_migrate?: InputMaybe<Scalars["Boolean"]>;
  is_send?: InputMaybe<Scalars["Boolean"]>;
  is_store_code?: InputMaybe<Scalars["Boolean"]>;
  is_update_admin?: InputMaybe<Scalars["Boolean"]>;
  lcd_tx_results?: InputMaybe<Lcd_Tx_Results_Arr_Rel_Insert_Input>;
  memo?: InputMaybe<Scalars["String"]>;
  messages?: InputMaybe<Scalars["json"]>;
  pool_transactions?: InputMaybe<Pool_Transactions_Arr_Rel_Insert_Input>;
  pools?: InputMaybe<Pools_Arr_Rel_Insert_Input>;
  sender?: InputMaybe<Scalars["Int"]>;
  success?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: "transactions_max_fields";
  block_height?: Maybe<Scalars["Int"]>;
  err_msg?: Maybe<Scalars["String"]>;
  gas_fee?: Maybe<Scalars["String"]>;
  gas_limit?: Maybe<Scalars["Int"]>;
  gas_used?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  memo?: Maybe<Scalars["String"]>;
  sender?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "transactions" */
export type Transactions_Max_Order_By = {
  block_height?: InputMaybe<Order_By>;
  err_msg?: InputMaybe<Order_By>;
  gas_fee?: InputMaybe<Order_By>;
  gas_limit?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: "transactions_min_fields";
  block_height?: Maybe<Scalars["Int"]>;
  err_msg?: Maybe<Scalars["String"]>;
  gas_fee?: Maybe<Scalars["String"]>;
  gas_limit?: Maybe<Scalars["Int"]>;
  gas_used?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  memo?: Maybe<Scalars["String"]>;
  sender?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "transactions" */
export type Transactions_Min_Order_By = {
  block_height?: InputMaybe<Order_By>;
  err_msg?: InputMaybe<Order_By>;
  gas_fee?: InputMaybe<Order_By>;
  gas_limit?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transactions" */
export type Transactions_Mutation_Response = {
  __typename?: "transactions_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Transactions>;
};

/** input type for inserting object relation for remote table "transactions" */
export type Transactions_Obj_Rel_Insert_Input = {
  data: Transactions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** on_conflict condition type for table "transactions" */
export type Transactions_On_Conflict = {
  constraint: Transactions_Constraint;
  update_columns?: Array<Transactions_Update_Column>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "transactions". */
export type Transactions_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  account_transactions_aggregate?: InputMaybe<Account_Transactions_Aggregate_Order_By>;
  block?: InputMaybe<Blocks_Order_By>;
  block_height?: InputMaybe<Order_By>;
  codes_aggregate?: InputMaybe<Codes_Aggregate_Order_By>;
  contract_transactions_aggregate?: InputMaybe<Contract_Transactions_Aggregate_Order_By>;
  contracts_aggregate?: InputMaybe<Contracts_Aggregate_Order_By>;
  err_msg?: InputMaybe<Order_By>;
  gas_fee?: InputMaybe<Order_By>;
  gas_limit?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_clear_admin?: InputMaybe<Order_By>;
  is_execute?: InputMaybe<Order_By>;
  is_ibc?: InputMaybe<Order_By>;
  is_instantiate?: InputMaybe<Order_By>;
  is_migrate?: InputMaybe<Order_By>;
  is_send?: InputMaybe<Order_By>;
  is_store_code?: InputMaybe<Order_By>;
  is_update_admin?: InputMaybe<Order_By>;
  lcd_tx_results_aggregate?: InputMaybe<Lcd_Tx_Results_Aggregate_Order_By>;
  memo?: InputMaybe<Order_By>;
  messages?: InputMaybe<Order_By>;
  pool_transactions_aggregate?: InputMaybe<Pool_Transactions_Aggregate_Order_By>;
  pools_aggregate?: InputMaybe<Pools_Aggregate_Order_By>;
  sender?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transactions */
export type Transactions_Pk_Columns_Input = {
  block_height: Scalars["Int"];
  hash: Scalars["bytea"];
};

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  BlockHeight = "block_height",
  /** column name */
  ErrMsg = "err_msg",
  /** column name */
  GasFee = "gas_fee",
  /** column name */
  GasLimit = "gas_limit",
  /** column name */
  GasUsed = "gas_used",
  /** column name */
  Hash = "hash",
  /** column name */
  Id = "id",
  /** column name */
  IsClearAdmin = "is_clear_admin",
  /** column name */
  IsExecute = "is_execute",
  /** column name */
  IsIbc = "is_ibc",
  /** column name */
  IsInstantiate = "is_instantiate",
  /** column name */
  IsMigrate = "is_migrate",
  /** column name */
  IsSend = "is_send",
  /** column name */
  IsStoreCode = "is_store_code",
  /** column name */
  IsUpdateAdmin = "is_update_admin",
  /** column name */
  Memo = "memo",
  /** column name */
  Messages = "messages",
  /** column name */
  Sender = "sender",
  /** column name */
  Success = "success",
}

/** select "transactions_aggregate_bool_exp_bool_and_arguments_columns" columns of table "transactions" */
export enum Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsClearAdmin = "is_clear_admin",
  /** column name */
  IsExecute = "is_execute",
  /** column name */
  IsIbc = "is_ibc",
  /** column name */
  IsInstantiate = "is_instantiate",
  /** column name */
  IsMigrate = "is_migrate",
  /** column name */
  IsSend = "is_send",
  /** column name */
  IsStoreCode = "is_store_code",
  /** column name */
  IsUpdateAdmin = "is_update_admin",
  /** column name */
  Success = "success",
}

/** select "transactions_aggregate_bool_exp_bool_or_arguments_columns" columns of table "transactions" */
export enum Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsClearAdmin = "is_clear_admin",
  /** column name */
  IsExecute = "is_execute",
  /** column name */
  IsIbc = "is_ibc",
  /** column name */
  IsInstantiate = "is_instantiate",
  /** column name */
  IsMigrate = "is_migrate",
  /** column name */
  IsSend = "is_send",
  /** column name */
  IsStoreCode = "is_store_code",
  /** column name */
  IsUpdateAdmin = "is_update_admin",
  /** column name */
  Success = "success",
}

/** input type for updating data in table "transactions" */
export type Transactions_Set_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  err_msg?: InputMaybe<Scalars["String"]>;
  gas_fee?: InputMaybe<Scalars["String"]>;
  gas_limit?: InputMaybe<Scalars["Int"]>;
  gas_used?: InputMaybe<Scalars["Int"]>;
  hash?: InputMaybe<Scalars["bytea"]>;
  id?: InputMaybe<Scalars["Int"]>;
  is_clear_admin?: InputMaybe<Scalars["Boolean"]>;
  is_execute?: InputMaybe<Scalars["Boolean"]>;
  is_ibc?: InputMaybe<Scalars["Boolean"]>;
  is_instantiate?: InputMaybe<Scalars["Boolean"]>;
  is_migrate?: InputMaybe<Scalars["Boolean"]>;
  is_send?: InputMaybe<Scalars["Boolean"]>;
  is_store_code?: InputMaybe<Scalars["Boolean"]>;
  is_update_admin?: InputMaybe<Scalars["Boolean"]>;
  memo?: InputMaybe<Scalars["String"]>;
  messages?: InputMaybe<Scalars["json"]>;
  sender?: InputMaybe<Scalars["Int"]>;
  success?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate stddev on columns */
export type Transactions_Stddev_Fields = {
  __typename?: "transactions_stddev_fields";
  block_height?: Maybe<Scalars["Float"]>;
  gas_limit?: Maybe<Scalars["Float"]>;
  gas_used?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  sender?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "transactions" */
export type Transactions_Stddev_Order_By = {
  block_height?: InputMaybe<Order_By>;
  gas_limit?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transactions_Stddev_Pop_Fields = {
  __typename?: "transactions_stddev_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
  gas_limit?: Maybe<Scalars["Float"]>;
  gas_used?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  sender?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "transactions" */
export type Transactions_Stddev_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
  gas_limit?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transactions_Stddev_Samp_Fields = {
  __typename?: "transactions_stddev_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
  gas_limit?: Maybe<Scalars["Float"]>;
  gas_used?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  sender?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "transactions" */
export type Transactions_Stddev_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
  gas_limit?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transactions" */
export type Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transactions_Stream_Cursor_Value_Input = {
  block_height?: InputMaybe<Scalars["Int"]>;
  err_msg?: InputMaybe<Scalars["String"]>;
  gas_fee?: InputMaybe<Scalars["String"]>;
  gas_limit?: InputMaybe<Scalars["Int"]>;
  gas_used?: InputMaybe<Scalars["Int"]>;
  hash?: InputMaybe<Scalars["bytea"]>;
  id?: InputMaybe<Scalars["Int"]>;
  is_clear_admin?: InputMaybe<Scalars["Boolean"]>;
  is_execute?: InputMaybe<Scalars["Boolean"]>;
  is_ibc?: InputMaybe<Scalars["Boolean"]>;
  is_instantiate?: InputMaybe<Scalars["Boolean"]>;
  is_migrate?: InputMaybe<Scalars["Boolean"]>;
  is_send?: InputMaybe<Scalars["Boolean"]>;
  is_store_code?: InputMaybe<Scalars["Boolean"]>;
  is_update_admin?: InputMaybe<Scalars["Boolean"]>;
  memo?: InputMaybe<Scalars["String"]>;
  messages?: InputMaybe<Scalars["json"]>;
  sender?: InputMaybe<Scalars["Int"]>;
  success?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate sum on columns */
export type Transactions_Sum_Fields = {
  __typename?: "transactions_sum_fields";
  block_height?: Maybe<Scalars["Int"]>;
  gas_limit?: Maybe<Scalars["Int"]>;
  gas_used?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  sender?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "transactions" */
export type Transactions_Sum_Order_By = {
  block_height?: InputMaybe<Order_By>;
  gas_limit?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  BlockHeight = "block_height",
  /** column name */
  ErrMsg = "err_msg",
  /** column name */
  GasFee = "gas_fee",
  /** column name */
  GasLimit = "gas_limit",
  /** column name */
  GasUsed = "gas_used",
  /** column name */
  Hash = "hash",
  /** column name */
  Id = "id",
  /** column name */
  IsClearAdmin = "is_clear_admin",
  /** column name */
  IsExecute = "is_execute",
  /** column name */
  IsIbc = "is_ibc",
  /** column name */
  IsInstantiate = "is_instantiate",
  /** column name */
  IsMigrate = "is_migrate",
  /** column name */
  IsSend = "is_send",
  /** column name */
  IsStoreCode = "is_store_code",
  /** column name */
  IsUpdateAdmin = "is_update_admin",
  /** column name */
  Memo = "memo",
  /** column name */
  Messages = "messages",
  /** column name */
  Sender = "sender",
  /** column name */
  Success = "success",
}

export type Transactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Transactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transactions_Var_Pop_Fields = {
  __typename?: "transactions_var_pop_fields";
  block_height?: Maybe<Scalars["Float"]>;
  gas_limit?: Maybe<Scalars["Float"]>;
  gas_used?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  sender?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "transactions" */
export type Transactions_Var_Pop_Order_By = {
  block_height?: InputMaybe<Order_By>;
  gas_limit?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transactions_Var_Samp_Fields = {
  __typename?: "transactions_var_samp_fields";
  block_height?: Maybe<Scalars["Float"]>;
  gas_limit?: Maybe<Scalars["Float"]>;
  gas_used?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  sender?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "transactions" */
export type Transactions_Var_Samp_Order_By = {
  block_height?: InputMaybe<Order_By>;
  gas_limit?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transactions_Variance_Fields = {
  __typename?: "transactions_variance_fields";
  block_height?: Maybe<Scalars["Float"]>;
  gas_limit?: Maybe<Scalars["Float"]>;
  gas_used?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  sender?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "transactions" */
export type Transactions_Variance_Order_By = {
  block_height?: InputMaybe<Order_By>;
  gas_limit?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
};

/** columns and relationships of "validators" */
export type Validators = {
  __typename?: "validators";
  /** An object relationship */
  account: Accounts;
  account_id: Scalars["Int"];
  /** An array relationship */
  blocks: Array<Blocks>;
  /** An aggregate relationship */
  blocks_aggregate: Blocks_Aggregate;
  commission_max_change: Scalars["String"];
  commission_max_rate: Scalars["String"];
  commission_rate: Scalars["String"];
  consensus_address: Scalars["String"];
  details: Scalars["String"];
  id: Scalars["Int"];
  identity: Scalars["String"];
  jailed: Scalars["Boolean"];
  min_self_delegation: Scalars["String"];
  moniker: Scalars["String"];
  operator_address: Scalars["String"];
  website: Scalars["String"];
};

/** columns and relationships of "validators" */
export type ValidatorsBlocksArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

/** columns and relationships of "validators" */
export type ValidatorsBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

/** aggregated selection of "validators" */
export type Validators_Aggregate = {
  __typename?: "validators_aggregate";
  aggregate?: Maybe<Validators_Aggregate_Fields>;
  nodes: Array<Validators>;
};

export type Validators_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Validators_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Validators_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Validators_Aggregate_Bool_Exp_Count>;
};

export type Validators_Aggregate_Bool_Exp_Bool_And = {
  arguments: Validators_Select_Column_Validators_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Validators_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validators_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Validators_Select_Column_Validators_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Validators_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validators_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validators_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Validators_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validators" */
export type Validators_Aggregate_Fields = {
  __typename?: "validators_aggregate_fields";
  avg?: Maybe<Validators_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Validators_Max_Fields>;
  min?: Maybe<Validators_Min_Fields>;
  stddev?: Maybe<Validators_Stddev_Fields>;
  stddev_pop?: Maybe<Validators_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validators_Stddev_Samp_Fields>;
  sum?: Maybe<Validators_Sum_Fields>;
  var_pop?: Maybe<Validators_Var_Pop_Fields>;
  var_samp?: Maybe<Validators_Var_Samp_Fields>;
  variance?: Maybe<Validators_Variance_Fields>;
};

/** aggregate fields of "validators" */
export type Validators_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validators_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "validators" */
export type Validators_Aggregate_Order_By = {
  avg?: InputMaybe<Validators_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validators_Max_Order_By>;
  min?: InputMaybe<Validators_Min_Order_By>;
  stddev?: InputMaybe<Validators_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validators_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validators_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validators_Sum_Order_By>;
  var_pop?: InputMaybe<Validators_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validators_Var_Samp_Order_By>;
  variance?: InputMaybe<Validators_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validators" */
export type Validators_Arr_Rel_Insert_Input = {
  data: Array<Validators_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Validators_On_Conflict>;
};

/** aggregate avg on columns */
export type Validators_Avg_Fields = {
  __typename?: "validators_avg_fields";
  account_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "validators" */
export type Validators_Avg_Order_By = {
  account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validators". All fields are combined with a logical 'AND'. */
export type Validators_Bool_Exp = {
  _and?: InputMaybe<Array<Validators_Bool_Exp>>;
  _not?: InputMaybe<Validators_Bool_Exp>;
  _or?: InputMaybe<Array<Validators_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  account_id?: InputMaybe<Int_Comparison_Exp>;
  blocks?: InputMaybe<Blocks_Bool_Exp>;
  blocks_aggregate?: InputMaybe<Blocks_Aggregate_Bool_Exp>;
  commission_max_change?: InputMaybe<String_Comparison_Exp>;
  commission_max_rate?: InputMaybe<String_Comparison_Exp>;
  commission_rate?: InputMaybe<String_Comparison_Exp>;
  consensus_address?: InputMaybe<String_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  identity?: InputMaybe<String_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  min_self_delegation?: InputMaybe<String_Comparison_Exp>;
  moniker?: InputMaybe<String_Comparison_Exp>;
  operator_address?: InputMaybe<String_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "validators" */
export enum Validators_Constraint {
  /** unique or primary key constraint on columns "account_id" */
  ValidatorsAccountIdKey = "validators_account_id_key",
  /** unique or primary key constraint on columns "consensus_address" */
  ValidatorsConsensusAddressKey = "validators_consensus_address_key",
  /** unique or primary key constraint on columns "id" */
  ValidatorsIdKey = "validators_id_key",
  /** unique or primary key constraint on columns "operator_address" */
  ValidatorsPkey = "validators_pkey",
}

/** input type for incrementing numeric columns in table "validators" */
export type Validators_Inc_Input = {
  account_id?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "validators" */
export type Validators_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars["Int"]>;
  blocks?: InputMaybe<Blocks_Arr_Rel_Insert_Input>;
  commission_max_change?: InputMaybe<Scalars["String"]>;
  commission_max_rate?: InputMaybe<Scalars["String"]>;
  commission_rate?: InputMaybe<Scalars["String"]>;
  consensus_address?: InputMaybe<Scalars["String"]>;
  details?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  identity?: InputMaybe<Scalars["String"]>;
  jailed?: InputMaybe<Scalars["Boolean"]>;
  min_self_delegation?: InputMaybe<Scalars["String"]>;
  moniker?: InputMaybe<Scalars["String"]>;
  operator_address?: InputMaybe<Scalars["String"]>;
  website?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Validators_Max_Fields = {
  __typename?: "validators_max_fields";
  account_id?: Maybe<Scalars["Int"]>;
  commission_max_change?: Maybe<Scalars["String"]>;
  commission_max_rate?: Maybe<Scalars["String"]>;
  commission_rate?: Maybe<Scalars["String"]>;
  consensus_address?: Maybe<Scalars["String"]>;
  details?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  identity?: Maybe<Scalars["String"]>;
  min_self_delegation?: Maybe<Scalars["String"]>;
  moniker?: Maybe<Scalars["String"]>;
  operator_address?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "validators" */
export type Validators_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  commission_max_change?: InputMaybe<Order_By>;
  commission_max_rate?: InputMaybe<Order_By>;
  commission_rate?: InputMaybe<Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validators_Min_Fields = {
  __typename?: "validators_min_fields";
  account_id?: Maybe<Scalars["Int"]>;
  commission_max_change?: Maybe<Scalars["String"]>;
  commission_max_rate?: Maybe<Scalars["String"]>;
  commission_rate?: Maybe<Scalars["String"]>;
  consensus_address?: Maybe<Scalars["String"]>;
  details?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  identity?: Maybe<Scalars["String"]>;
  min_self_delegation?: Maybe<Scalars["String"]>;
  moniker?: Maybe<Scalars["String"]>;
  operator_address?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "validators" */
export type Validators_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  commission_max_change?: InputMaybe<Order_By>;
  commission_max_rate?: InputMaybe<Order_By>;
  commission_rate?: InputMaybe<Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validators" */
export type Validators_Mutation_Response = {
  __typename?: "validators_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Validators>;
};

/** input type for inserting object relation for remote table "validators" */
export type Validators_Obj_Rel_Insert_Input = {
  data: Validators_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Validators_On_Conflict>;
};

/** on_conflict condition type for table "validators" */
export type Validators_On_Conflict = {
  constraint: Validators_Constraint;
  update_columns?: Array<Validators_Update_Column>;
  where?: InputMaybe<Validators_Bool_Exp>;
};

/** Ordering options when selecting data from "validators". */
export type Validators_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  blocks_aggregate?: InputMaybe<Blocks_Aggregate_Order_By>;
  commission_max_change?: InputMaybe<Order_By>;
  commission_max_rate?: InputMaybe<Order_By>;
  commission_rate?: InputMaybe<Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** primary key columns input for table: validators */
export type Validators_Pk_Columns_Input = {
  operator_address: Scalars["String"];
};

/** select columns of table "validators" */
export enum Validators_Select_Column {
  /** column name */
  AccountId = "account_id",
  /** column name */
  CommissionMaxChange = "commission_max_change",
  /** column name */
  CommissionMaxRate = "commission_max_rate",
  /** column name */
  CommissionRate = "commission_rate",
  /** column name */
  ConsensusAddress = "consensus_address",
  /** column name */
  Details = "details",
  /** column name */
  Id = "id",
  /** column name */
  Identity = "identity",
  /** column name */
  Jailed = "jailed",
  /** column name */
  MinSelfDelegation = "min_self_delegation",
  /** column name */
  Moniker = "moniker",
  /** column name */
  OperatorAddress = "operator_address",
  /** column name */
  Website = "website",
}

/** select "validators_aggregate_bool_exp_bool_and_arguments_columns" columns of table "validators" */
export enum Validators_Select_Column_Validators_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Jailed = "jailed",
}

/** select "validators_aggregate_bool_exp_bool_or_arguments_columns" columns of table "validators" */
export enum Validators_Select_Column_Validators_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Jailed = "jailed",
}

/** input type for updating data in table "validators" */
export type Validators_Set_Input = {
  account_id?: InputMaybe<Scalars["Int"]>;
  commission_max_change?: InputMaybe<Scalars["String"]>;
  commission_max_rate?: InputMaybe<Scalars["String"]>;
  commission_rate?: InputMaybe<Scalars["String"]>;
  consensus_address?: InputMaybe<Scalars["String"]>;
  details?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  identity?: InputMaybe<Scalars["String"]>;
  jailed?: InputMaybe<Scalars["Boolean"]>;
  min_self_delegation?: InputMaybe<Scalars["String"]>;
  moniker?: InputMaybe<Scalars["String"]>;
  operator_address?: InputMaybe<Scalars["String"]>;
  website?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Validators_Stddev_Fields = {
  __typename?: "validators_stddev_fields";
  account_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "validators" */
export type Validators_Stddev_Order_By = {
  account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validators_Stddev_Pop_Fields = {
  __typename?: "validators_stddev_pop_fields";
  account_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "validators" */
export type Validators_Stddev_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validators_Stddev_Samp_Fields = {
  __typename?: "validators_stddev_samp_fields";
  account_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "validators" */
export type Validators_Stddev_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validators" */
export type Validators_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validators_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validators_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars["Int"]>;
  commission_max_change?: InputMaybe<Scalars["String"]>;
  commission_max_rate?: InputMaybe<Scalars["String"]>;
  commission_rate?: InputMaybe<Scalars["String"]>;
  consensus_address?: InputMaybe<Scalars["String"]>;
  details?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  identity?: InputMaybe<Scalars["String"]>;
  jailed?: InputMaybe<Scalars["Boolean"]>;
  min_self_delegation?: InputMaybe<Scalars["String"]>;
  moniker?: InputMaybe<Scalars["String"]>;
  operator_address?: InputMaybe<Scalars["String"]>;
  website?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Validators_Sum_Fields = {
  __typename?: "validators_sum_fields";
  account_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "validators" */
export type Validators_Sum_Order_By = {
  account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "validators" */
export enum Validators_Update_Column {
  /** column name */
  AccountId = "account_id",
  /** column name */
  CommissionMaxChange = "commission_max_change",
  /** column name */
  CommissionMaxRate = "commission_max_rate",
  /** column name */
  CommissionRate = "commission_rate",
  /** column name */
  ConsensusAddress = "consensus_address",
  /** column name */
  Details = "details",
  /** column name */
  Id = "id",
  /** column name */
  Identity = "identity",
  /** column name */
  Jailed = "jailed",
  /** column name */
  MinSelfDelegation = "min_self_delegation",
  /** column name */
  Moniker = "moniker",
  /** column name */
  OperatorAddress = "operator_address",
  /** column name */
  Website = "website",
}

export type Validators_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validators_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validators_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validators_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validators_Var_Pop_Fields = {
  __typename?: "validators_var_pop_fields";
  account_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "validators" */
export type Validators_Var_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validators_Var_Samp_Fields = {
  __typename?: "validators_var_samp_fields";
  account_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "validators" */
export type Validators_Var_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validators_Variance_Fields = {
  __typename?: "validators_variance_fields";
  account_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "validators" */
export type Validators_Variance_Order_By = {
  account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type GetBlockTimestampByHeightQueryQueryVariables = Exact<{
  height: Scalars["Int"];
}>;

export type GetBlockTimestampByHeightQueryQuery = {
  __typename?: "query_root";
  blocks_by_pk?: { __typename?: "blocks"; timestamp: any } | null;
};

export type GetBlockListQueryQueryVariables = Exact<{
  limit: Scalars["Int"];
  offset: Scalars["Int"];
}>;

export type GetBlockListQueryQuery = {
  __typename?: "query_root";
  blocks: Array<{
    __typename?: "blocks";
    hash: any;
    height: number;
    timestamp: any;
    transactions_aggregate: {
      __typename?: "transactions_aggregate";
      aggregate?: {
        __typename?: "transactions_aggregate_fields";
        count: number;
      } | null;
    };
    validator?: {
      __typename?: "validators";
      moniker: string;
      operator_address: string;
    } | null;
  }>;
};

export type GetBlockDetailsByHeightQueryVariables = Exact<{
  height: Scalars["Int"];
}>;

export type GetBlockDetailsByHeightQuery = {
  __typename?: "query_root";
  blocks_by_pk?: {
    __typename?: "blocks";
    hash: any;
    height: number;
    timestamp: any;
    transactions_aggregate: {
      __typename?: "transactions_aggregate";
      aggregate?: {
        __typename?: "transactions_aggregate_fields";
        sum?: {
          __typename?: "transactions_sum_fields";
          gas_used?: number | null;
          gas_limit?: number | null;
        } | null;
      } | null;
    };
    validator?: {
      __typename?: "validators";
      moniker: string;
      operator_address: string;
    } | null;
  } | null;
};

export type GetLatestBlockInfoQueryVariables = Exact<{ [key: string]: never }>;

export type GetLatestBlockInfoQuery = {
  __typename?: "query_root";
  blocks: Array<{ __typename?: "blocks"; height: number; timestamp: any }>;
};

export type GetCodeListQueryQueryVariables = Exact<{ [key: string]: never }>;

export type GetCodeListQueryQuery = {
  __typename?: "query_root";
  codes: Array<{
    __typename?: "codes";
    id: number;
    access_config_permission: string;
    access_config_addresses: any;
    cw2_contract?: string | null;
    cw2_version?: string | null;
    contracts_aggregate: {
      __typename?: "contracts_aggregate";
      aggregate?: {
        __typename?: "contracts_aggregate_fields";
        count: number;
      } | null;
    };
    account: { __typename?: "accounts"; uploader: string };
  }>;
};

export type GetCodeListByUserQueryQueryVariables = Exact<{
  walletAddr: Scalars["String"];
}>;

export type GetCodeListByUserQueryQuery = {
  __typename?: "query_root";
  codes: Array<{
    __typename?: "codes";
    id: number;
    access_config_permission: string;
    access_config_addresses: any;
    cw2_contract?: string | null;
    cw2_version?: string | null;
    contracts_aggregate: {
      __typename?: "contracts_aggregate";
      aggregate?: {
        __typename?: "contracts_aggregate_fields";
        count: number;
      } | null;
    };
    account: { __typename?: "accounts"; uploader: string };
  }>;
};

export type GetCodeListByIDsQueryQueryVariables = Exact<{
  ids: Array<Scalars["Int"]> | Scalars["Int"];
}>;

export type GetCodeListByIDsQueryQuery = {
  __typename?: "query_root";
  codes: Array<{
    __typename?: "codes";
    id: number;
    access_config_permission: string;
    access_config_addresses: any;
    cw2_contract?: string | null;
    cw2_version?: string | null;
    contracts_aggregate: {
      __typename?: "contracts_aggregate";
      aggregate?: {
        __typename?: "contracts_aggregate_fields";
        count: number;
      } | null;
    };
    account: { __typename?: "accounts"; uploader: string };
  }>;
};

export type GetCodeDataByCodeIdQueryVariables = Exact<{
  codeId: Scalars["Int"];
}>;

export type GetCodeDataByCodeIdQuery = {
  __typename?: "query_root";
  codes_by_pk?: {
    __typename?: "codes";
    id: number;
    access_config_permission: string;
    access_config_addresses: any;
    cw2_contract?: string | null;
    cw2_version?: string | null;
    account: { __typename?: "accounts"; address: string };
    transaction?: {
      __typename?: "transactions";
      hash: any;
      block: { __typename?: "blocks"; height: number; timestamp: any };
    } | null;
    code_proposals: Array<{
      __typename?: "code_proposals";
      proposal_id: number;
      block?: { __typename?: "blocks"; height: number; timestamp: any } | null;
    }>;
  } | null;
};

export type GetCodeListByWalletAddressPaginationQueryVariables = Exact<{
  walletAddress: Scalars["String"];
  offset: Scalars["Int"];
  pageSize: Scalars["Int"];
}>;

export type GetCodeListByWalletAddressPaginationQuery = {
  __typename?: "query_root";
  codes: Array<{
    __typename?: "codes";
    id: number;
    access_config_permission: string;
    access_config_addresses: any;
    cw2_contract?: string | null;
    cw2_version?: string | null;
    contracts_aggregate: {
      __typename?: "contracts_aggregate";
      aggregate?: {
        __typename?: "contracts_aggregate_fields";
        count: number;
      } | null;
    };
    account: { __typename?: "accounts"; uploader: string };
  }>;
};

export type GetCodeListCountByWalletAddressQueryVariables = Exact<{
  walletAddress: Scalars["String"];
}>;

export type GetCodeListCountByWalletAddressQuery = {
  __typename?: "query_root";
  codes_aggregate: {
    __typename?: "codes_aggregate";
    aggregate?: { __typename?: "codes_aggregate_fields"; count: number } | null;
  };
};

export type GetInstantiatedListByUserQueryDocumentQueryVariables = Exact<{
  walletAddr: Scalars["String"];
}>;

export type GetInstantiatedListByUserQueryDocumentQuery = {
  __typename?: "query_root";
  contracts: Array<{
    __typename?: "contracts";
    label: string;
    address: string;
    accountByInitBy?: { __typename?: "accounts"; address: string } | null;
  }>;
};

export type GetInstantiatedCountByUserQueryDocumentQueryVariables = Exact<{
  walletAddr: Scalars["String"];
}>;

export type GetInstantiatedCountByUserQueryDocumentQuery = {
  __typename?: "query_root";
  contracts_aggregate: {
    __typename?: "contracts_aggregate";
    aggregate?: {
      __typename?: "contracts_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetInstantiateDetailByContractQueryDocumentQueryVariables = Exact<{
  contractAddress: Scalars["String"];
}>;

export type GetInstantiateDetailByContractQueryDocumentQuery = {
  __typename?: "query_root";
  contracts_by_pk?: {
    __typename?: "contracts";
    init_msg?: string | null;
    transaction?: { __typename?: "transactions"; hash: any } | null;
    contract_proposals: Array<{
      __typename?: "contract_proposals";
      proposal: { __typename?: "proposals"; id: number; title: string };
    }>;
  } | null;
};

export type GetAdminByContractAddressesQueryDocumentQueryVariables = Exact<{
  contractAddresses: Array<Scalars["String"]> | Scalars["String"];
}>;

export type GetAdminByContractAddressesQueryDocumentQuery = {
  __typename?: "query_root";
  contracts: Array<{
    __typename?: "contracts";
    address: string;
    admin?: { __typename?: "accounts"; address: string } | null;
  }>;
};

export type GetContractListByAdminQueryVariables = Exact<{
  address: Scalars["String"];
}>;

export type GetContractListByAdminQuery = {
  __typename?: "query_root";
  contracts: Array<{
    __typename?: "contracts";
    address: string;
    label: string;
    accountByInitBy?: { __typename?: "accounts"; address: string } | null;
  }>;
};

export type GetContractListByCodeIdPaginationQueryVariables = Exact<{
  codeId: Scalars["Int"];
  offset: Scalars["Int"];
  pageSize: Scalars["Int"];
}>;

export type GetContractListByCodeIdPaginationQuery = {
  __typename?: "query_root";
  contracts: Array<{
    __typename?: "contracts";
    address: string;
    label: string;
    admin?: { __typename?: "accounts"; address: string } | null;
    init_by: Array<{
      __typename?: "contract_histories";
      account: { __typename?: "accounts"; address: string };
    }>;
    contract_histories: Array<{
      __typename?: "contract_histories";
      remark: any;
      block: { __typename?: "blocks"; timestamp: any };
      account: { __typename?: "accounts"; address: string };
    }>;
  }>;
};

export type GetContractListCountByCodeIdQueryVariables = Exact<{
  codeId: Scalars["Int"];
}>;

export type GetContractListCountByCodeIdQuery = {
  __typename?: "query_root";
  contracts_aggregate: {
    __typename?: "contracts_aggregate";
    aggregate?: {
      __typename?: "contracts_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetMigrationHistoriesByContractAddressQueryVariables = Exact<{
  contractAddress: Scalars["String"];
  offset: Scalars["Int"];
  pageSize: Scalars["Int"];
}>;

export type GetMigrationHistoriesByContractAddressQuery = {
  __typename?: "query_root";
  contract_histories: Array<{
    __typename?: "contract_histories";
    code_id: number;
    remark: any;
    account: { __typename?: "accounts"; address: string };
    block: { __typename?: "blocks"; height: number; timestamp: any };
    code: {
      __typename?: "codes";
      cw2_contract?: string | null;
      cw2_version?: string | null;
      account: { __typename?: "accounts"; address: string };
    };
  }>;
};

export type GetMigrationHistoriesCountByContractAddressQueryVariables = Exact<{
  contractAddress: Scalars["String"];
}>;

export type GetMigrationHistoriesCountByContractAddressQuery = {
  __typename?: "query_root";
  contract_histories_aggregate: {
    __typename?: "contract_histories_aggregate";
    aggregate?: {
      __typename?: "contract_histories_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetContractListByWalletAddressPaginationQueryVariables = Exact<{
  walletAddress: Scalars["String"];
  offset: Scalars["Int"];
  pageSize: Scalars["Int"];
}>;

export type GetContractListByWalletAddressPaginationQuery = {
  __typename?: "query_root";
  contracts: Array<{
    __typename?: "contracts";
    address: string;
    label: string;
    admin?: { __typename?: "accounts"; address: string } | null;
    init_by: Array<{
      __typename?: "contract_histories";
      account: { __typename?: "accounts"; address: string };
    }>;
    contract_histories: Array<{
      __typename?: "contract_histories";
      remark: any;
      block: { __typename?: "blocks"; timestamp: any };
      account: { __typename?: "accounts"; address: string };
    }>;
  }>;
};

export type GetContractListByAdminPaginationQueryVariables = Exact<{
  walletAddress: Scalars["String"];
  offset: Scalars["Int"];
  pageSize: Scalars["Int"];
}>;

export type GetContractListByAdminPaginationQuery = {
  __typename?: "query_root";
  contracts: Array<{
    __typename?: "contracts";
    address: string;
    label: string;
    admin?: { __typename?: "accounts"; address: string } | null;
    init_by: Array<{
      __typename?: "contract_histories";
      account: { __typename?: "accounts"; address: string };
    }>;
    contract_histories: Array<{
      __typename?: "contract_histories";
      remark: any;
      block: { __typename?: "blocks"; timestamp: any };
      account: { __typename?: "accounts"; address: string };
    }>;
  }>;
};

export type GetContractListCountByAdminQueryVariables = Exact<{
  walletAddress: Scalars["String"];
}>;

export type GetContractListCountByAdminQuery = {
  __typename?: "query_root";
  contracts_aggregate: {
    __typename?: "contracts_aggregate";
    aggregate?: {
      __typename?: "contracts_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetRelatedProposalsByContractAddressPaginationQueryVariables =
  Exact<{
    contractAddress: Scalars["String"];
    offset: Scalars["Int"];
    pageSize: Scalars["Int"];
  }>;

export type GetRelatedProposalsByContractAddressPaginationQuery = {
  __typename?: "query_root";
  contract_proposals: Array<{
    __typename?: "contract_proposals";
    proposal_id: number;
    resolved_height?: number | null;
    proposal: {
      __typename?: "proposals";
      title: string;
      status: any;
      voting_end_time: any;
      deposit_end_time: any;
      type: string;
      is_expedited: boolean;
      account?: { __typename?: "accounts"; address: string } | null;
    };
  }>;
};

export type GetRelatedProposalsCountByContractAddressQueryVariables = Exact<{
  contractAddress: Scalars["String"];
}>;

export type GetRelatedProposalsCountByContractAddressQuery = {
  __typename?: "query_root";
  contract_proposals_aggregate: {
    __typename?: "contract_proposals_aggregate";
    aggregate?: {
      __typename?: "contract_proposals_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetProposalsByWalletAddressPaginationQueryVariables = Exact<{
  walletAddress: Scalars["String"];
  offset: Scalars["Int"];
  pageSize: Scalars["Int"];
}>;

export type GetProposalsByWalletAddressPaginationQuery = {
  __typename?: "query_root";
  proposals: Array<{
    __typename?: "proposals";
    title: string;
    status: any;
    voting_end_time: any;
    deposit_end_time: any;
    type: string;
    id: number;
    is_expedited: boolean;
    resolved_height?: number | null;
  }>;
};

export type GetProposalsCountByWalletAddressQueryVariables = Exact<{
  walletAddress: Scalars["String"];
}>;

export type GetProposalsCountByWalletAddressQuery = {
  __typename?: "query_root";
  proposals_aggregate: {
    __typename?: "proposals_aggregate";
    aggregate?: {
      __typename?: "proposals_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetProposalListQueryVariables = Exact<{
  expression?: InputMaybe<Proposals_Bool_Exp>;
  offset: Scalars["Int"];
  pageSize: Scalars["Int"];
}>;

export type GetProposalListQuery = {
  __typename?: "query_root";
  proposals: Array<{
    __typename?: "proposals";
    type: string;
    id: number;
    title: string;
    voting_end_time: any;
    deposit_end_time: any;
    resolved_height?: number | null;
    status: any;
    is_expedited: boolean;
    account?: { __typename?: "accounts"; address: string } | null;
  }>;
};

export type GetProposalListCountQueryVariables = Exact<{
  expression?: InputMaybe<Proposals_Bool_Exp>;
}>;

export type GetProposalListCountQuery = {
  __typename?: "query_root";
  proposals_aggregate: {
    __typename?: "proposals_aggregate";
    aggregate?: {
      __typename?: "proposals_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetProposalTypesQueryVariables = Exact<{ [key: string]: never }>;

export type GetProposalTypesQuery = {
  __typename?: "query_root";
  proposals: Array<{ __typename?: "proposals"; type: string }>;
};

export type GetTxsByAddressPaginationQueryVariables = Exact<{
  expression?: InputMaybe<Account_Transactions_Bool_Exp>;
  offset: Scalars["Int"];
  pageSize: Scalars["Int"];
}>;

export type GetTxsByAddressPaginationQuery = {
  __typename?: "query_root";
  account_transactions: Array<{
    __typename?: "account_transactions";
    is_signer: boolean;
    block: { __typename?: "blocks"; height: number; timestamp: any };
    transaction: {
      __typename?: "transactions";
      hash: any;
      success: boolean;
      messages: any;
      is_clear_admin: boolean;
      is_execute: boolean;
      is_ibc: boolean;
      is_instantiate: boolean;
      is_migrate: boolean;
      is_send: boolean;
      is_store_code: boolean;
      is_update_admin: boolean;
      account: { __typename?: "accounts"; address: string };
    };
  }>;
};

export type GetTxsCountByAddressQueryVariables = Exact<{
  expression?: InputMaybe<Account_Transactions_Bool_Exp>;
}>;

export type GetTxsCountByAddressQuery = {
  __typename?: "query_root";
  account_transactions_aggregate: {
    __typename?: "account_transactions_aggregate";
    aggregate?: {
      __typename?: "account_transactions_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetTxsQueryVariables = Exact<{
  offset: Scalars["Int"];
  pageSize: Scalars["Int"];
}>;

export type GetTxsQuery = {
  __typename?: "query_root";
  transactions: Array<{
    __typename?: "transactions";
    hash: any;
    success: boolean;
    messages: any;
    is_clear_admin: boolean;
    is_execute: boolean;
    is_ibc: boolean;
    is_instantiate: boolean;
    is_migrate: boolean;
    is_send: boolean;
    is_store_code: boolean;
    is_update_admin: boolean;
    block: { __typename?: "blocks"; height: number; timestamp: any };
    account: { __typename?: "accounts"; address: string };
  }>;
};

export type GetTxsCountQueryVariables = Exact<{ [key: string]: never }>;

export type GetTxsCountQuery = {
  __typename?: "query_root";
  transactions: Array<{ __typename?: "transactions"; id: number }>;
};

export type GetBlockTransactionsByHeightQueryQueryVariables = Exact<{
  limit: Scalars["Int"];
  offset: Scalars["Int"];
  height: Scalars["Int"];
}>;

export type GetBlockTransactionsByHeightQueryQuery = {
  __typename?: "query_root";
  transactions: Array<{
    __typename?: "transactions";
    hash: any;
    success: boolean;
    messages: any;
    is_clear_admin: boolean;
    is_execute: boolean;
    is_ibc: boolean;
    is_instantiate: boolean;
    is_migrate: boolean;
    is_send: boolean;
    is_store_code: boolean;
    is_update_admin: boolean;
    account: { __typename?: "accounts"; address: string };
  }>;
};

export type GetBlockTransactionCountByHeightQueryQueryVariables = Exact<{
  height: Scalars["Int"];
}>;

export type GetBlockTransactionCountByHeightQueryQuery = {
  __typename?: "query_root";
  transactions_aggregate: {
    __typename?: "transactions_aggregate";
    aggregate?: {
      __typename?: "transactions_aggregate_fields";
      count: number;
    } | null;
  };
};

export const GetBlockTimestampByHeightQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getBlockTimestampByHeightQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "height" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "height" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "height" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBlockTimestampByHeightQueryQuery,
  GetBlockTimestampByHeightQueryQueryVariables
>;
export const GetBlockListQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getBlockListQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "height" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "hash" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transactions_aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "validator" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "moniker" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "operator_address" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBlockListQueryQuery,
  GetBlockListQueryQueryVariables
>;
export const GetBlockDetailsByHeightDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getBlockDetailsByHeight" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "height" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "height" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "height" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "hash" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transactions_aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sum" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "gas_used" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "gas_limit" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "validator" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "moniker" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "operator_address" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBlockDetailsByHeightQuery,
  GetBlockDetailsByHeightQueryVariables
>;
export const GetLatestBlockInfoDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getLatestBlockInfo" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "1" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "height" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetLatestBlockInfoQuery,
  GetLatestBlockInfoQueryVariables
>;
export const GetCodeListQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCodeListQuery" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "codes" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "100" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: { kind: "IntValue", value: "0" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contracts_aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "uploader" },
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "access_config_permission" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "access_config_addresses" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cw2_contract" },
                },
                { kind: "Field", name: { kind: "Name", value: "cw2_version" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCodeListQueryQuery,
  GetCodeListQueryQueryVariables
>;
export const GetCodeListByUserQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCodeListByUserQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "walletAddr" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "codes" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "account" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "address" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "walletAddr" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "100" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: { kind: "IntValue", value: "0" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contracts_aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "uploader" },
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "access_config_permission" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "access_config_addresses" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cw2_contract" },
                },
                { kind: "Field", name: { kind: "Name", value: "cw2_version" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCodeListByUserQueryQuery,
  GetCodeListByUserQueryQueryVariables
>;
export const GetCodeListByIDsQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCodeListByIDsQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "ids" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "Int" },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "codes" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_in" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "ids" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contracts_aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "uploader" },
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "access_config_permission" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "access_config_addresses" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cw2_contract" },
                },
                { kind: "Field", name: { kind: "Name", value: "cw2_version" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCodeListByIDsQueryQuery,
  GetCodeListByIDsQueryQueryVariables
>;
export const GetCodeDataByCodeIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCodeDataByCodeId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "codeId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "codes_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "codeId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transaction" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "hash" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "block" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timestamp" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "code_proposals" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "1" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "proposal_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "block" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timestamp" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "access_config_permission" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "access_config_addresses" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cw2_contract" },
                },
                { kind: "Field", name: { kind: "Name", value: "cw2_version" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCodeDataByCodeIdQuery,
  GetCodeDataByCodeIdQueryVariables
>;
export const GetCodeListByWalletAddressPaginationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCodeListByWalletAddressPagination" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "walletAddress" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageSize" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "codes" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "account" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "address" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: {
                                      kind: "Name",
                                      value: "walletAddress",
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pageSize" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contracts_aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "uploader" },
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "access_config_permission" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "access_config_addresses" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cw2_contract" },
                },
                { kind: "Field", name: { kind: "Name", value: "cw2_version" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCodeListByWalletAddressPaginationQuery,
  GetCodeListByWalletAddressPaginationQueryVariables
>;
export const GetCodeListCountByWalletAddressDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCodeListCountByWalletAddress" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "walletAddress" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "codes_aggregate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "account" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "address" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: {
                                      kind: "Name",
                                      value: "walletAddress",
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCodeListCountByWalletAddressQuery,
  GetCodeListCountByWalletAddressQueryVariables
>;
export const GetInstantiatedListByUserQueryDocumentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getInstantiatedListByUserQueryDocument" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "walletAddr" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contracts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "accountByInitBy" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "address" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "walletAddr" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "100" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: { kind: "IntValue", value: "0" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "transaction" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "block" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "timestamp" },
                                  value: { kind: "EnumValue", value: "desc" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "label" } },
                { kind: "Field", name: { kind: "Name", value: "address" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "accountByInitBy" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetInstantiatedListByUserQueryDocumentQuery,
  GetInstantiatedListByUserQueryDocumentQueryVariables
>;
export const GetInstantiatedCountByUserQueryDocumentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getInstantiatedCountByUserQueryDocument" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "walletAddr" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contracts_aggregate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "accountByInitBy" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "address" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "walletAddr" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetInstantiatedCountByUserQueryDocumentQuery,
  GetInstantiatedCountByUserQueryDocumentQueryVariables
>;
export const GetInstantiateDetailByContractQueryDocumentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: {
        kind: "Name",
        value: "getInstantiateDetailByContractQueryDocument",
      },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "contractAddress" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contracts_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "address" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "contractAddress" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "init_msg" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transaction" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "hash" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contract_proposals" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "proposal" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "type" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_in" },
                                        value: {
                                          kind: "ListValue",
                                          values: [
                                            {
                                              kind: "StringValue",
                                              value: "InstantiateContract",
                                              block: false,
                                            },
                                            {
                                              kind: "StringValue",
                                              value: "InstantiateContract2",
                                              block: false,
                                            },
                                            {
                                              kind: "StringValue",
                                              value: "SoftwareUpgrade",
                                              block: false,
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "proposal" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "id" },
                                  value: { kind: "EnumValue", value: "asc" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "1" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "proposal" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetInstantiateDetailByContractQueryDocumentQuery,
  GetInstantiateDetailByContractQueryDocumentQueryVariables
>;
export const GetAdminByContractAddressesQueryDocumentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getAdminByContractAddressesQueryDocument" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "contractAddresses" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "String" },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contracts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "address" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_in" },
                            value: {
                              kind: "Variable",
                              name: {
                                kind: "Name",
                                value: "contractAddresses",
                              },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "address" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "admin" },
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAdminByContractAddressesQueryDocumentQuery,
  GetAdminByContractAddressesQueryDocumentQueryVariables
>;
export const GetContractListByAdminDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getContractListByAdmin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "address" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contracts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "account" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "address" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "address" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "transaction" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "block" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "timestamp" },
                                  value: { kind: "EnumValue", value: "desc" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "address" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "accountByInitBy" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetContractListByAdminQuery,
  GetContractListByAdminQueryVariables
>;
export const GetContractListByCodeIdPaginationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getContractListByCodeIdPagination" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "codeId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageSize" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contracts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "code_id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "codeId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "transaction" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "block" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "timestamp" },
                                  value: { kind: "EnumValue", value: "desc" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pageSize" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "address" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "admin" },
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "init_by" },
                  name: { kind: "Name", value: "contract_histories" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "block" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "timestamp" },
                                  value: { kind: "EnumValue", value: "asc" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "1" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "account" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contract_histories" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "block" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "timestamp" },
                                  value: { kind: "EnumValue", value: "desc" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "1" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "block" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timestamp" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "account" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "remark" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetContractListByCodeIdPaginationQuery,
  GetContractListByCodeIdPaginationQueryVariables
>;
export const GetContractListCountByCodeIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getContractListCountByCodeId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "codeId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contracts_aggregate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "code_id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "codeId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetContractListCountByCodeIdQuery,
  GetContractListCountByCodeIdQueryVariables
>;
export const GetMigrationHistoriesByContractAddressDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getMigrationHistoriesByContractAddress" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "contractAddress" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageSize" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contract_histories" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "contract" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "address" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "block" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "timestamp" },
                            value: { kind: "EnumValue", value: "desc" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pageSize" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code_id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "block" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "height" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "timestamp" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "remark" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "code" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "account" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "cw2_contract" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "cw2_version" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMigrationHistoriesByContractAddressQuery,
  GetMigrationHistoriesByContractAddressQueryVariables
>;
export const GetMigrationHistoriesCountByContractAddressDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: {
        kind: "Name",
        value: "getMigrationHistoriesCountByContractAddress",
      },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "contractAddress" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contract_histories_aggregate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "contract" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "address" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMigrationHistoriesCountByContractAddressQuery,
  GetMigrationHistoriesCountByContractAddressQueryVariables
>;
export const GetContractListByWalletAddressPaginationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getContractListByWalletAddressPagination" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "walletAddress" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageSize" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contracts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "accountByInitBy" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "address" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: {
                                      kind: "Name",
                                      value: "walletAddress",
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pageSize" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "transaction" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "block" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "timestamp" },
                                  value: { kind: "EnumValue", value: "desc" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "address" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "admin" },
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "init_by" },
                  name: { kind: "Name", value: "contract_histories" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "block" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "timestamp" },
                                  value: { kind: "EnumValue", value: "asc" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "1" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "account" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contract_histories" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "block" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "timestamp" },
                                  value: { kind: "EnumValue", value: "desc" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "1" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "block" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timestamp" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "account" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "remark" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetContractListByWalletAddressPaginationQuery,
  GetContractListByWalletAddressPaginationQueryVariables
>;
export const GetContractListByAdminPaginationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getContractListByAdminPagination" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "walletAddress" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageSize" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contracts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "account" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "address" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: {
                                      kind: "Name",
                                      value: "walletAddress",
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pageSize" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "transaction" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "block" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "timestamp" },
                                  value: { kind: "EnumValue", value: "desc" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "address" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "admin" },
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "init_by" },
                  name: { kind: "Name", value: "contract_histories" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "block" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "timestamp" },
                                  value: { kind: "EnumValue", value: "asc" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "1" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "account" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contract_histories" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "block" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "timestamp" },
                                  value: { kind: "EnumValue", value: "desc" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "1" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "block" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timestamp" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "account" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "remark" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetContractListByAdminPaginationQuery,
  GetContractListByAdminPaginationQueryVariables
>;
export const GetContractListCountByAdminDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getContractListCountByAdmin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "walletAddress" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contracts_aggregate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "account" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "address" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: {
                                      kind: "Name",
                                      value: "walletAddress",
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetContractListCountByAdminQuery,
  GetContractListCountByAdminQueryVariables
>;
export const GetRelatedProposalsByContractAddressPaginationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: {
        kind: "Name",
        value: "getRelatedProposalsByContractAddressPagination",
      },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "contractAddress" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageSize" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contract_proposals" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "contract" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "address" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "proposal_id" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pageSize" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "proposal" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "voting_end_time" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "deposit_end_time" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "account" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "is_expedited" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "proposal_id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "resolved_height" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetRelatedProposalsByContractAddressPaginationQuery,
  GetRelatedProposalsByContractAddressPaginationQueryVariables
>;
export const GetRelatedProposalsCountByContractAddressDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: {
        kind: "Name",
        value: "getRelatedProposalsCountByContractAddress",
      },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "contractAddress" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contract_proposals_aggregate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "contract" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "address" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetRelatedProposalsCountByContractAddressQuery,
  GetRelatedProposalsCountByContractAddressQueryVariables
>;
export const GetProposalsByWalletAddressPaginationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getProposalsByWalletAddressPagination" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "walletAddress" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageSize" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "proposals" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "account" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "address" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: {
                                      kind: "Name",
                                      value: "walletAddress",
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pageSize" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "voting_end_time" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "deposit_end_time" },
                },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "is_expedited" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "resolved_height" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProposalsByWalletAddressPaginationQuery,
  GetProposalsByWalletAddressPaginationQueryVariables
>;
export const GetProposalsCountByWalletAddressDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getProposalsCountByWalletAddress" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "walletAddress" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "proposals_aggregate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "account" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "address" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: {
                                      kind: "Name",
                                      value: "walletAddress",
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProposalsCountByWalletAddressQuery,
  GetProposalsCountByWalletAddressQueryVariables
>;
export const GetProposalListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getProposalList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "expression" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "proposals_bool_exp" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageSize" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "proposals" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "expression" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pageSize" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "voting_end_time" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "deposit_end_time" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "resolved_height" },
                },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "is_expedited" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProposalListQuery,
  GetProposalListQueryVariables
>;
export const GetProposalListCountDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getProposalListCount" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "expression" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "proposals_bool_exp" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "proposals_aggregate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "expression" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProposalListCountQuery,
  GetProposalListCountQueryVariables
>;
export const GetProposalTypesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getProposalTypes" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "proposals" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "distinct_on" },
                value: { kind: "EnumValue", value: "type" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "type" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProposalTypesQuery,
  GetProposalTypesQueryVariables
>;
export const GetTxsByAddressPaginationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getTxsByAddressPagination" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "expression" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "account_transactions_bool_exp" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageSize" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "account_transactions" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "expression" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "block_height" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pageSize" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "block" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "height" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "timestamp" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transaction" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "account" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "hash" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "success" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "messages" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "is_clear_admin" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "is_execute" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "is_ibc" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "is_instantiate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "is_migrate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "is_send" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "is_store_code" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "is_update_admin" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "is_signer" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTxsByAddressPaginationQuery,
  GetTxsByAddressPaginationQueryVariables
>;
export const GetTxsCountByAddressDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getTxsCountByAddress" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "expression" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "account_transactions_bool_exp" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "account_transactions_aggregate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "expression" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTxsCountByAddressQuery,
  GetTxsCountByAddressQueryVariables
>;
export const GetTxsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getTxs" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageSize" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "transactions" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "block_height" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pageSize" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "block" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "height" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "timestamp" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "hash" } },
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "messages" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "is_clear_admin" },
                },
                { kind: "Field", name: { kind: "Name", value: "is_execute" } },
                { kind: "Field", name: { kind: "Name", value: "is_ibc" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "is_instantiate" },
                },
                { kind: "Field", name: { kind: "Name", value: "is_migrate" } },
                { kind: "Field", name: { kind: "Name", value: "is_send" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "is_store_code" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "is_update_admin" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTxsQuery, GetTxsQueryVariables>;
export const GetTxsCountDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getTxsCount" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "transactions" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "1" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTxsCountQuery, GetTxsCountQueryVariables>;
export const GetBlockTransactionsByHeightQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getBlockTransactionsByHeightQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "height" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "transactions" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "block_height" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "height" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: { kind: "EnumValue", value: "asc" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "hash" } },
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "messages" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "is_clear_admin" },
                },
                { kind: "Field", name: { kind: "Name", value: "is_execute" } },
                { kind: "Field", name: { kind: "Name", value: "is_ibc" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "is_instantiate" },
                },
                { kind: "Field", name: { kind: "Name", value: "is_migrate" } },
                { kind: "Field", name: { kind: "Name", value: "is_send" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "is_store_code" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "is_update_admin" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBlockTransactionsByHeightQueryQuery,
  GetBlockTransactionsByHeightQueryQueryVariables
>;
export const GetBlockTransactionCountByHeightQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getBlockTransactionCountByHeightQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "height" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "transactions_aggregate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "block_height" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "height" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBlockTransactionCountByHeightQueryQuery,
  GetBlockTransactionCountByHeightQueryQueryVariables
>;
