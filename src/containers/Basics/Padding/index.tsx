import { Box, Center, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Button, TextCode } from '../../../themes/styledComponents';
import { PaddingTypes } from '../../../utils/constants';

const Padding = () => {
  const [paddingType, setPaddingType] = useState('');
  return (
    <Box
      style={{
        marginLeft: '25px',
        padding: '20px',
      }}
    >
      <Heading> Padding</Heading>
      <Text style={{ marginTop: '50px' }}>
        {`An element's `}
        <TextCode>padding</TextCode>
        {` is the space between its content and its border.`}
      </Text>
      {Object.values(PaddingTypes).map((type) => {
        return (
          <Button key={type.label} id={type.label} style={{ margin: '20px' }} onClick={() => setPaddingType(type.css)}>
            :{type.label}
          </Button>
        );
      })}
      <Center width="100%" height="100px">
        <Box style={{ border: '1px solid darkblue', padding: paddingType }}>
          <Box bg="blue" boxSize="50px" />
        </Box>
      </Center>
    </Box>
  );
};

export default Padding;
