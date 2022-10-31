import { Box, Heading, Text } from '@chakra-ui/react';
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
      <Box width="100%" height="100px" border="1px solid darkblue" textAlign={textAlignType} padding="10px">
        <Text width="100%">The quick brown fox jump jumps over the something.</Text>
      </Box>
    </Box>
  );
};

export default Padding;
