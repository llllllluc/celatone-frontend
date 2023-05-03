import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { Tooltip } from "../TooltipComponent";
import { useCurrentNetwork, useInternalNavigate } from "lib/app-provider";
import { CustomIcon } from "lib/components/icon";

export const NewProposalButton = () => {
  const navigate = useInternalNavigate();
  const { isTestnet } = useCurrentNetwork();

  return (
    <Menu>
      <MenuButton
        variant="primary"
        as={Button}
        rightIcon={<CustomIcon name="chevron-down" />}
      >
        Create New Proposal
      </MenuButton>
      <MenuList>
        {/* <MenuItem
          icon={<CustomIcon name="code" />}
          // TODO - Change navigation path
          onClick={() => {
            navigate({
              pathname: "/proposal-storecode",
            });
          }}
        >
          To Store Code
        </MenuItem> */}
        {/* <MenuItem
          icon={<CustomIcon name="contract-address" />}
          onClick={() => {
            // TODO - Change navigation path
            navigate({
              pathname: "/proposal-instantiate",
            });
          }}
        >
          To Instantiate Contract
        </MenuItem> */}
        <Tooltip
          label={isTestnet ? "Not available in testnet" : undefined}
          placement="left"
        >
          <MenuItem
            isDisabled={isTestnet}
            icon={<CustomIcon name="admin" />}
            onClick={() => {
              navigate({
                pathname: "/proposal/whitelist",
              });
            }}
          >
            To Whitelist
          </MenuItem>
        </Tooltip>
      </MenuList>
    </Menu>
  );
};
