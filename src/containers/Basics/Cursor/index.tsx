import React, { useState } from 'react';
/** Styling */
import { Heading, TextCode, Text, Box, Button } from '../../../themes/styledComponents';
import { Cursors, FloatTypes } from '../../../utils/constants';
import { BoxBox } from '../Display/styles';

const Cursor: React.FC = () => {
  // states
  const [cursor, setCursor] = useState<any>(Cursors.DEFAULT);
  return (
    <React.Fragment>
      <Box
        style={{
          marginLeft: '25px',
          padding: '20px',
        }}
      >
        <Heading>Cursor</Heading>
        <Text style={{ marginTop: '50px' }}>
          {`CSS `}
          <TextCode>cursor</TextCode>
          {` property used to define cursor type (i.e. mouse pointer) when the mouse moves over a certain area or, over a link on the webpage.`}
        </Text>
        {Object.values(Cursors).map((type) => {
          return (
            <Button
              key={type.valueOf()}
              id={type.valueOf()}
              style={{ cursor: type, marginTop: '20px', marginLeft: type !== FloatTypes.LEFT ? '20px' : 0 }}
              onClick={() => setCursor(type.valueOf())}
            >
              :{type.valueOf()}
            </Button>
          );
        })}
      </Box>
    </React.Fragment>
  );
};

export default Cursor;
