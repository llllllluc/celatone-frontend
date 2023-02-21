import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";

interface AccountTableHeaderProps {
  title: string;
  count: number;
  helperText?: string;
}

export const AccountTableHeader = ({
  title,
  count,
  helperText,
}: AccountTableHeaderProps) => (
  <Box mb={6}>
    <Flex gap={2} h="29px" alignItems="center">
      <Heading as="h6" variant="h6">
        {title}
      </Heading>
      <Badge variant="gray" color="text.main">
        {count}
      </Badge>
    </Flex>
    <Text variant="body2" textColor="gray.400">
      {helperText}
    </Text>
  </Box>
);
