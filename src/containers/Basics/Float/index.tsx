import React, { useState } from 'react';
/** Styling */
import { Heading, TextCode, Text, Box, Button, Row } from '../../../themes/styledComponents';
import { FloatTypes } from '../../../utils/constants';
import { BoxBox, BoxInline } from '../Display/styles';

const Float: React.FC = () => {
  // states
  const [floatType, setFloatType] = useState<any>(FloatTypes.LEFT);
  React.useEffect(() => {
    console.log(floatType);
  }, [floatType]);
  return (
    <React.Fragment>
      <Box
        style={{
          marginLeft: '25px',
          padding: '20px',
        }}
      >
        <Heading>Float</Heading>
        <Text style={{ marginTop: '50px' }}>
          {`The `}
          <TextCode>float</TextCode>
          {` property specifies whether an element should float to the left, right, or not at all`}
        </Text>
        {Object.values(FloatTypes).map((type) => {
          return (
            <Button
              key={type.valueOf()}
              id={type.valueOf()}
              style={{ marginTop: '20px', marginLeft: type !== FloatTypes.LEFT ? '20px' : 0 }}
              onClick={() => setFloatType(type.valueOf())}
            >
              :{type.valueOf()}
            </Button>
          );
        })}
        <Box>{floatType && <BoxBox style={{ float: floatType }}>testing</BoxBox>}</Box>
      </Box>
    </React.Fragment>
  );
};

export default Float;
