import {
  Flex,
  Heading,
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  Icon,
  Text,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { MdSearchOff } from "react-icons/md";

import { BackButton } from "lib/components/button/BackButton";
import { CustomTab } from "lib/components/CustomTab";
import PageContainer from "lib/components/PageContainer";
import { useValidateAddress } from "lib/hooks";
import { useContractData } from "lib/model/contract";
import type { ContractAddr } from "lib/types";
import { getFirstQueryParam, jsonPrettify } from "lib/utils";

import { CommandSection } from "./components/CommandSection";
import { ContractDesc } from "./components/contract-description/ContractDesc";
import { ContractTop } from "./components/ContractTop";
import { InstantiateInfo } from "./components/InstantiateInfo";
import { JsonInfo } from "./components/JsonInfo";
import { TokenSection } from "./components/TokenSection";

interface ContractDetailsBodyProps {
  contractAddress: ContractAddr;
}

const InvalidContract = () => (
  <Flex
    direction="column"
    alignItems="center"
    borderY="1px solid"
    borderColor="divider.main"
    width="full"
    my="24px"
    py="24px"
  >
    <Icon as={MdSearchOff} color="gray.600" boxSize="128" />
    <Heading as="h5" variant="h5" my="8px">
      Contract does not exist
    </Heading>
    <Text variant="body2" fontWeight="500" color="gray.500" textAlign="center">
      Please double-check your spelling and make sure you have selected the
      correct network.
    </Text>
  </Flex>
);

const ContractDetailsBody = ({ contractAddress }: ContractDetailsBodyProps) => {
  const contractData = useContractData(contractAddress);

  return !contractData ? (
    <InvalidContract />
  ) : (
    <>
      <ContractTop contractData={contractData} />
      {/* Tokens Section */}
      <TokenSection />
      {/* Contract Description Section */}
      <ContractDesc contractData={contractData} />
      {/* Query/Execute commands section */}
      <CommandSection />
      {/* Instantiate/Contract Info Section */}
      <Flex my={12} justify="space-between">
        {/* Instantiate Info */}
        <InstantiateInfo contractData={contractData} />
        {/* Contract Info (Expand) */}
        <Flex direction="column" flex={0.8} gap={4}>
          <JsonInfo
            header="Contract Info"
            jsonString={jsonPrettify(
              JSON.stringify(
                contractData.instantiateInfo?.raw.contract_info ?? {}
              )
            )}
            jsonAreaHeight="180px"
          />
          <JsonInfo
            header="Instantiate Messages"
            jsonString={jsonPrettify(contractData.initMsg ?? "")}
            showViewFullButton
            defaultExpand
          />
        </Flex>
      </Flex>
      {/* History Table section */}
      <Heading as="h6" variant="h6" mb={6}>
        History
      </Heading>
      <Tabs>
        <TabList border="none" mb="32px">
          <CustomTab count={100}>All</CustomTab>
          <CustomTab count={50}>Executes</CustomTab>
          <CustomTab count={20}>Migration</CustomTab>
          <CustomTab count={12}>Related Proposals</CustomTab>
        </TabList>
        {/* TODOs: Wireup with real table data, Make table component, and render each table with different data under each TabPanel */}
        <TabPanels>
          <TabPanel p={0}>
            <Heading as="h6" variant="h6" color="error.main">
              All Table
            </Heading>
          </TabPanel>
          <TabPanel p={0}>
            <Heading as="h6" variant="h6" color="error.main">
              Executes Table
            </Heading>
          </TabPanel>
          <TabPanel p={0}>
            <Heading as="h6" variant="h6" color="error.main">
              Migration Table
            </Heading>
          </TabPanel>
          <TabPanel p={0}>
            <Heading as="h6" variant="h6" color="error.main">
              Related Proposals Table
            </Heading>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

const ContractDetails = observer(() => {
  /**
   * @todos add contract address validation function here
   */
  const router = useRouter();
  const { validateContractAddress } = useValidateAddress();

  const contractAddressParam = getFirstQueryParam(router.query.contractAddress);

  return (
    <PageContainer>
      <BackButton />
      {validateContractAddress(contractAddressParam) ? (
        <InvalidContract />
      ) : (
        <ContractDetailsBody
          contractAddress={contractAddressParam as ContractAddr}
        />
      )}
    </PageContainer>
  );
});

export default ContractDetails;
