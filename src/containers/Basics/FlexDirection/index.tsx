import React from 'react';
import { Heading, PageWrapper } from '../../../themes/styledComponents';
import { Box, Flex } from '@chakra-ui/react';
const colors = ['blue', 'green', 'yellow', 'orange', 'purple'];
const FlexDirection: React.FC = () => {
  const NewBox = (color: string) => <Box boxSize="200px" bg={color} />;

  return (
    <PageWrapper>
      <Heading>:flex-direction</Heading>

      <Flex gap="20px"></Flex>
    </PageWrapper>
  );
};

export default FlexDirection;
