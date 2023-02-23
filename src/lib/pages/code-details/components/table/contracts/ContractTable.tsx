import { Badge, Flex, Grid, Heading } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import type { ChangeEvent } from "react";
import { useEffect } from "react";

import { NoContracts } from "../NoContracts";
import { Pagination } from "lib/components/pagination";
import { usePaginator } from "lib/components/pagination/usePaginator";
import { TableContainer, TableHeader } from "lib/components/table";
import { ContractsTableRow } from "lib/components/table/contracts/ContractsTableRow";
import { useContractStore } from "lib/hooks";
import {
  useContractListByCodeIdPagination,
  useContractListCountByCodeId,
} from "lib/services/contractService";
import type { ContractInfo, Option } from "lib/types";

interface ContractTableProps {
  codeId: number;
}

export const ContractTable = observer(({ codeId }: ContractTableProps) => {
  const { getContractLocalInfo } = useContractStore();

  const { data: totalData, refetch } = useContractListCountByCodeId(codeId);
  const {
    pagesQuantity,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    offset,
  } = usePaginator({
    total: totalData,
    initialState: {
      pageSize: 10,
      currentPage: 1,
      isDisabled: false,
    },
  });

  const { data: rawCodeContracts } = useContractListByCodeIdPagination(
    codeId,
    offset,
    pageSize
  );
  const codeContracts: Option<ContractInfo[]> =
    rawCodeContracts?.map<ContractInfo>((contract) => ({
      ...contract,
      ...getContractLocalInfo(contract.contractAddress),
    }));

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize, setCurrentPage]);

  const onPageChange = (nextPage: number) => {
    refetch();
    setCurrentPage(nextPage);
  };

  const onPageSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const size = Number(e.target.value);
    refetch();
    setPageSize(size);
  };

  // FIXME - might be a better way to scroll to table header
  const tableHeaderId = "contractTableHeader";
  const templateColumnsStyle =
    "150px minmax(250px, 1fr) 200px 150px minmax(250px, 300px) 70px";

  return (
    <>
      <Flex mb={6} alignItems="center">
        <Heading as="h6" variant="h6" id={tableHeaderId}>
          Contract Instances
        </Heading>
        <Badge
          ml={2}
          variant={!codeContracts?.length ? "gray" : "violet"}
          textAlign="center"
        >
          {totalData ?? 0}
        </Badge>
      </Flex>
      {!codeContracts?.length ? (
        <NoContracts />
      ) : (
        <TableContainer overflow="visible">
          <Grid templateColumns={templateColumnsStyle} minW="min-content">
            <TableHeader borderTopStyle="none">Contract Address</TableHeader>
            <TableHeader>Contract Name</TableHeader>
            <TableHeader>Tags</TableHeader>
            <TableHeader>Instantiator</TableHeader>
            <TableHeader>Timestamp</TableHeader>
            <TableHeader />
          </Grid>
          {codeContracts.map((contractInfo) => (
            <ContractsTableRow
              key={
                contractInfo.name +
                contractInfo.contractAddress +
                contractInfo.description +
                contractInfo.tags +
                contractInfo.lists
              }
              contractInfo={contractInfo}
              templateColumnsStyle={templateColumnsStyle}
            />
          ))}
          {totalData && totalData > 10 && (
            <Pagination
              currentPage={currentPage}
              pagesQuantity={pagesQuantity}
              offset={offset}
              totalData={totalData}
              scrollComponentId={tableHeaderId}
              pageSize={pageSize}
              onPageChange={onPageChange}
              onPageSizeChange={onPageSizeChange}
            />
          )}
        </TableContainer>
      )}
    </>
  );
});
