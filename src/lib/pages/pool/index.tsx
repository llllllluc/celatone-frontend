import {
  Flex,
  Heading,
  Switch,
  Text,
  Image,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import type { ChangeEvent } from "react";
import { useForm } from "react-hook-form";

import { CustomTab } from "lib/components/CustomTab";
import InputWithIcon from "lib/components/InputWithIcon";
import PageContainer from "lib/components/PageContainer";

import type { PoolTypeFilterValue } from "./components/FilterByPoolType";
import { FilterByPoolType } from "./components/FilterByPoolType";
import { PoolList } from "./components/PoolList";
import { UnsupportedPoolList } from "./components/UnsupportedPoolList";

interface PoolFilterState {
  keyword: string;
  poolTypeValue: PoolTypeFilterValue;
}

export type PoolToggleValue = "percent-value" | "amount";
export const PoolIndex = () => {
  const { watch, setValue } = useForm<PoolFilterState>({
    defaultValues: {
      poolTypeValue: "all",
      keyword: "",
    },
  });
  const { keyword, poolTypeValue } = watch();
  return (
    <PageContainer>
      <Heading variant="h5" as="h5">
        Osmosis Pools
      </Heading>
      <Flex mt={12} alignItems="center">
        <Flex grow="2" gap={4}>
          <InputWithIcon
            placeholder="Search with code ID or code name"
            value={keyword}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValue("keyword", e.target.value)
            }
            size="lg"
          />
          <FilterByPoolType
            initialSelected="all"
            setPoolTypeValue={(newVal: PoolTypeFilterValue) => {
              if (newVal === poolTypeValue) return;
              setValue("poolTypeValue", newVal);
            }}
          />
          <Flex minW="250px">
            <FormControl display="flex" alignItems="center" gap={2}>
              <Switch size="md" />
              <FormLabel mb="0" cursor="pointer">
                <Text display="flex" gap={2} alignItems="center">
                  Show only
                  <Image
                    boxSize={4}
                    src="https://assets.alleslabs.dev/webapp-assets/pool/pool-superfluid.svg"
                  />
                  Superfluid
                </Text>
              </FormLabel>
            </FormControl>
          </Flex>
        </Flex>
      </Flex>
      <Tabs>
        <TabList my={8} borderBottom="1px" borderColor="pebble.800">
          <CustomTab count={0}>Pools</CustomTab>
          <CustomTab count={0}>Pools with unsupported tokens</CustomTab>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <PoolList />
          </TabPanel>
          <TabPanel p={0}>
            <UnsupportedPoolList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </PageContainer>
  );
};
