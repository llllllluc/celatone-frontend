import { Flex, Image } from "@chakra-ui/react";

import Searchbar from "../Searchbar";
import { CURR_THEME } from "env";
import { AppLink } from "lib/components/AppLink";

import { NavDrawer } from "./NavDrawer";

const Header = () => {
  return (
    <Flex
      as="header"
      width="100vw"
      height="full"
      align="center"
      justifyContent="space-between"
      px={6}
      mb={1}
      gap={6}
    >
      <AppLink href="/">
        <Image
          src={CURR_THEME.branding.logo}
          alt="Celatone"
          minWidth="128px"
          width="128px"
          maxWidth="128px"
          mr={8}
          transition="all 0.25s ease-in-out"
          _hover={{ cursor: "pointer", opacity: 0.85 }}
        />
      </AppLink>
      <Flex gap={2}>
        <Searchbar />
        <NavDrawer />
      </Flex>
    </Flex>
  );
};

export default Header;
