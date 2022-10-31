import React, { useState } from 'react';
import { Button, Heading, PageWrapper } from '../../../themes/styledComponents';
import { Box, Flex } from '@chakra-ui/react';

const colors = ['blue', 'green', 'yellow', 'orange', 'purple'];
const FlexDirection: React.FC = () => {
  const NewBox = (color: string) => <Box boxSize="200px" bg={color} />;
  const [flexDirection, setFlexDirection] = useState<any>('row');
  return (
    <Box padding="20px">
      <Heading>:flex-direction</Heading>
      <Button onClick={() => setFlexDirection('row-reverse')}>Reverse Flex Direction</Button>
      <Flex gap="20px" flexDirection={flexDirection}>
        {colors.map((color) => NewBox(color))}
      </Flex>
    </Box>
  );
};

export default FlexDirection;
