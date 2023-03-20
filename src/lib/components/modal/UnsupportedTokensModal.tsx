import {
  Modal,
  ModalHeader,
  Flex,
  Text,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  ModalBody,
  Button,
  Heading,
  Tooltip,
} from "@chakra-ui/react";
import { useWallet } from "@cosmos-kit/react";
import { useMemo } from "react";

import { ExplorerLink } from "../ExplorerLink";
import type { IconKeys } from "../icon";
import { CustomIcon } from "../icon";
import { getAddressTypeByLength } from "lib/app-provider";
import type { AddressReturnType } from "lib/app-provider";
import { Copier } from "lib/components/copy";
import type { BalanceWithAssetInfo, Balance, Token, U, Addr } from "lib/types";
import {
  getTokenType,
  getTokenLabel,
  formatUTokenWithPrecision,
} from "lib/utils";

interface UnsupportedTokensModalProps {
  unsupportedAssets: BalanceWithAssetInfo[];
  address: Addr;
}

interface UnsupportedTokenProps {
  balance: Balance;
}

const UnsupportedToken = ({ balance }: UnsupportedTokenProps) => {
  // TODO - Move this to utils
  const [tokenLabel, tokenType] = useMemo(() => {
    const label = getTokenLabel(balance.id);
    const type = !balance.id.includes("/")
      ? getTokenType(balance.type)
      : getTokenType(balance.id.split("/")[0]);
    return [label, type];
  }, [balance]);

  return (
    <Flex
      className="copier-wrapper"
      borderRadius="8px"
      bg="pebble.800"
      direction="column"
      px={4}
      py={3}
      role="group"
    >
      <Flex
        direction="row"
        justifyContent="space-between"
        w="full"
        alignItems="center"
      >
        <Flex gap={1}>
          <Text variant="body2" className="ellipsis">
            {tokenLabel}
          </Text>
          <Tooltip
            hasArrow
            label={`Token ID: ${balance.id}`}
            placement="top"
            bg="honeydew.darker"
            maxW="500px"
          >
            <Flex cursor="pointer" className="info" display="none">
              <CustomIcon name="info-circle" boxSize="3" />
            </Flex>
          </Tooltip>
          <Copier
            type="unsupported_asset"
            value={balance.id}
            copyLabel="Token ID Copied!"
            display="none"
            ml="1px"
          />
        </Flex>
        <Text variant="body3" color="text.dark">
          {`${tokenType} Token`}
        </Text>
      </Flex>
      <Text variant="body2" fontWeight="900">
        {formatUTokenWithPrecision(
          balance.amount as U<Token>,
          balance.precision,
          false
        )}
      </Text>
    </Flex>
  );
};

const unsupportedTokensContent = (
  addressType: AddressReturnType
): { icon: IconKeys; header: string } => {
  switch (addressType) {
    case "contract_address": {
      return {
        icon: "assets-solid",
        header: "Contract Address",
      };
    }
    case "user_address": {
      return {
        icon: "assets-solid",
        header: "Wallet Address",
      };
    }
    default:
      return {
        icon: "question-solid",
        header: "Invalid Address",
      };
  }
};

export const UnsupportedTokensModal = ({
  unsupportedAssets,
  address,
}: UnsupportedTokensModalProps) => {
  const { currentChainName } = useWallet();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (unsupportedAssets.length === 0) return null;

  const addressType = getAddressTypeByLength(currentChainName, address);
  const content = unsupportedTokensContent(addressType);

  return (
    <>
      <Flex onClick={onOpen}>
        <Button variant="ghost" color="text.dark" mb={1} fontWeight={500}>
          {`View ${unsupportedAssets.length} Unsupported Assets`}
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent w="800px">
          <ModalHeader>
            <Flex w="full" direction="row" alignItems="center" gap={2} pt={1}>
              <CustomIcon name={content.icon} boxSize="5" />
              <Heading variant="h5" as="h5">
                Unsupported Assets
              </Heading>
            </Flex>
          </ModalHeader>

          <ModalCloseButton color="pebble.600" />
          <ModalBody maxH="400px" overflow="overlay" pb={6}>
            <Flex direction="column" gap={5}>
              <Flex direction="row" gap={4}>
                <Text variant="body2" fontWeight="700">
                  {content.header}
                </Text>
                <ExplorerLink value={address} type={addressType} />
              </Flex>
              <Flex gap={3} direction="column">
                {unsupportedAssets.map((asset) => (
                  <UnsupportedToken
                    balance={asset.balance}
                    key={asset.balance.id}
                  />
                ))}
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
