import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  IconButton,
  MenuItem,
  chakra,
  MenuButton,
  Menu,
  MenuList,
} from "@chakra-ui/react";
import { useWallet } from "@cosmos-kit/react";
import {
  MdBookmark,
  MdBookmarkBorder,
  MdInput,
  MdKeyboardArrowDown,
  MdPerson,
  MdPersonRemove,
  MdReadMore,
} from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";

import { useInternalNavigate } from "lib/app-provider";
import { ExplorerLink } from "lib/components/ExplorerLink";
import {
  AddToOtherList,
  EditContractDetails,
  SaveContractDetails,
} from "lib/components/modal";
import { ClearAdminContract } from "lib/components/modal/contract/ClearAdminContract";
import type { ContractData } from "lib/model/contract";
import type { ContractAddr } from "lib/types";

const StyledMenuItem = chakra(MenuItem, {
  baseStyle: {
    fontSize: "14px",
  },
});

const StyledIcon = chakra(Icon, {
  baseStyle: {
    boxSize: "4",
    display: "flex",
    alignItems: "center",
  },
});

interface ContractTopProps {
  contractData: ContractData;
}
export const ContractTop = ({ contractData }: ContractTopProps) => {
  const navigate = useInternalNavigate();
  const { address } = useWallet();
  const { contractLocalInfo, instantiateInfo, publicInfo } = contractData;

  const contractAddress = instantiateInfo?.contractAddress as ContractAddr;
  const admin = instantiateInfo?.admin;

  const displayName =
    contractLocalInfo?.name || publicInfo?.name || instantiateInfo?.label;

  const goToQuery = () => {
    navigate({
      pathname: "/query",
      query: { ...(contractAddress && { contract: contractAddress }) },
    });
  };

  const goToExecute = () => {
    navigate({
      pathname: "/execute",
      query: { ...(contractAddress && { contract: contractAddress }) },
    });
  };

  const renderSaveButton = () => {
    if (contractLocalInfo) {
      return (
        <AddToOtherList
          contractLocalInfo={contractLocalInfo}
          triggerElement={
            <IconButton
              fontSize="22px"
              variant="none"
              aria-label="save"
              color={contractLocalInfo.lists ? "primary.main" : "gray.600"}
              icon={
                contractLocalInfo.lists ? <MdBookmark /> : <MdBookmarkBorder />
              }
            />
          }
        />
      );
    }
    if (instantiateInfo) {
      return (
        <SaveContractDetails
          contractLocalInfo={{
            contractAddress,
            instantiator: instantiateInfo.instantiator,
            label: instantiateInfo.label,
          }}
          triggerElement={
            <IconButton
              fontSize="22px"
              variant="none"
              aria-label="save"
              color="none"
              icon={<MdBookmarkBorder />}
            />
          }
        />
      );
    }
    return null;
  };

  return (
    <Flex justify="space-between" my={6}>
      <Flex direction="column" gap={1} textOverflow="ellipsis" maxW="670px">
        <Heading as="h5" variant="h5" color="text.main" className="ellipsis">
          {displayName}
        </Heading>
        <Flex gap={2}>
          <Text
            color="text.dark"
            variant="body2"
            fontWeight={500}
            whiteSpace="nowrap"
          >
            Contract Address:
          </Text>
          <ExplorerLink
            type="contract_address"
            value={contractAddress}
            textFormat="normal"
            maxWidth="none"
          />
        </Flex>
        <Flex gap={2}>
          <Text color="text.dark" variant="body2" fontWeight={500}>
            Label:
          </Text>
          <Text variant="body2" className="ellipsis">
            {contractData.instantiateInfo?.label}
          </Text>
        </Flex>
        {publicInfo?.name && (
          <Flex gap={2}>
            <Text color="text.dark" variant="body2" fontWeight={500}>
              Public Contract Name:
            </Text>
            <Text variant="body2" className="ellipsis">
              {publicInfo?.name}
            </Text>
          </Flex>
        )}
      </Flex>
      <Flex gap={4}>
        <Menu>
          <MenuButton
            variant="outline-gray"
            as={Button}
            isDisabled={!address || address !== admin}
            rightIcon={<Icon as={MdKeyboardArrowDown} boxSize="18px" />}
          >
            Admin
          </MenuButton>
          <MenuList>
            <StyledMenuItem
              icon={<StyledIcon as={MdReadMore} color="gray.600" />}
              onClick={() => {
                navigate({
                  pathname: "/migrate",
                  query: { contract: contractAddress },
                });
              }}
            >
              Migrate
            </StyledMenuItem>
            <StyledMenuItem
              icon={<StyledIcon as={MdPerson} color="gray.600" />}
              onClick={() => {
                navigate({
                  pathname: "/admin",
                  query: { contract: contractAddress },
                });
              }}
            >
              Update Admin
            </StyledMenuItem>
            <ClearAdminContract
              contractAddress={contractAddress}
              triggerElement={
                <StyledMenuItem
                  icon={<StyledIcon as={MdPersonRemove} color="gray.600" />}
                >
                  Clear Admin
                </StyledMenuItem>
              }
            />
          </MenuList>
        </Menu>
        <Button
          variant="outline-primary"
          leftIcon={<SearchIcon />}
          onClick={goToQuery}
        >
          Query
        </Button>
        <Button
          variant="outline-primary"
          leftIcon={<Icon as={MdInput} boxSize="18px" />}
          onClick={goToExecute}
        >
          Execute
        </Button>
        <Flex>
          {contractLocalInfo && (
            <EditContractDetails
              contractLocalInfo={contractLocalInfo}
              triggerElement={
                <IconButton
                  fontSize="22px"
                  variant="none"
                  aria-label="edit"
                  color="gray.600"
                  icon={<RiPencilFill />}
                />
              }
            />
          )}
          {renderSaveButton()}
        </Flex>
      </Flex>
    </Flex>
  );
};
