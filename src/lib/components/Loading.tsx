import { Flex, Spinner, Text } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Flex borderY="1px solid rgba(255,255,255,0.12)" width="full" py="48px">
      <Spinner size="xl" speed="0.65s" />
      <Text mt="20px">Loading ...</Text>
    </Flex>
  );
};
