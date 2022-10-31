import { Box, Heading, Text } from '@chakra-ui/react';

import { TextCode } from '../../../themes/styledComponents';

const ZIndex = () => {
  return (
    <Box
      style={{
        marginLeft: '25px',
        padding: '20px',
      }}
    >
      <Heading> Z Index</Heading>
      <Text style={{ marginTop: '50px' }}>
        {`The `}
        <TextCode>z-index</TextCode>
        {` property specifies the stack order of an element.`}
      </Text>
      <Text>An element with greater stack order is always in front of an element with a lower stack order.</Text>

      <Box width="100%" height="200px" position="relative">
        <Box width="200px" height="100%" position="absolute" bg="red" top="30" left="50px">
          <Box width="200px" height="100%" position="absolute" bg="blue" top="30" left="50px">
            <Box width="200px" height="100%" position="absolute" bg="orange" top="30" left="50px">
              <Box width="200px" height="100%" position="absolute" bg="green" top="30" left="50px" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ZIndex;
