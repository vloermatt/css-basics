import { Box, Center, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Button, TextCode } from '../../../themes/styledComponents';
import { TextAlignTypes } from '../../../utils/constants';

const Padding = () => {
  const [textAlignType, setTextAlignType] = useState<any>('left');
  return (
    <Box
      style={{
        marginLeft: '25px',
        padding: '20px',
      }}
    >
      <Heading> Padding</Heading>
      <Text style={{ marginTop: '50px' }}>
        {`The `}
        <TextCode>text-align</TextCode>
        {` property specifies the horizontal alignment of text in an element.`}
      </Text>
      {Object.values(TextAlignTypes).map((type) => {
        return (
          <Button key={type} id={type} style={{ margin: '20px' }} onClick={() => setTextAlignType(type)}>
            :{type}
          </Button>
        );
      })}
      <Center width="100%" height="100px">
        <Box style={{ border: '1px solid darkblue', textAlign: textAlignType }}>
          <Box bg="blue" boxSize="50px" />
        </Box>
      </Center>
    </Box>
  );
};

export default Padding;
