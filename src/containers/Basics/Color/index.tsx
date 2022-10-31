import { HStack } from '@chakra-ui/react';
import React from 'react';
/** Styling */
import { Heading, Box, Text, TextCode } from '../../../themes/styledComponents';
import { BasicColors } from '../../../utils/constants';

const Color: React.FC = () => {
  return (
    <React.Fragment>
      <Box
        style={{
          marginLeft: '25px',
          padding: '20px',
        }}
      >
        <Heading>Color</Heading>
        <Text style={{ marginTop: 50, marginBottom: 50 }}>
          The following table lists the basic <TextCode>color</TextCode> keywords defined in CSS3 specification.
        </Text>
        <Box>
          {Object.keys(BasicColors).map((col) => (
            <HStack spacing="10">
              <Box style={{ border: '2px solid black', width: 200, height: 50, backgroundColor: col }}>{col}</Box>
            </HStack>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Color;
