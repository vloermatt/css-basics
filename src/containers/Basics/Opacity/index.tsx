import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react';
import React from 'react';
/** Styling */
import { Heading, Box, Text, TextCode } from '../../../themes/styledComponents';

const Opacity: React.FC = () => {
  const [opacity, setOpacity] = React.useState(50);
  return (
    <React.Fragment>
      <Box
        style={{
          marginLeft: '25px',
          padding: '20px',
        }}
      >
        <Slider defaultValue={opacity} onChange={(e) => setOpacity(e)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Heading>Opacity</Heading>
        <Text style={{ marginTop: 50, marginBottom: 50 }}>
          The property <TextCode>opacity</TextCode> specifies the opacity/transparency of an element.
        </Text>
        <img style={{ opacity: opacity }} src="https://static.javatpoint.com/csspages/images/css-tutorial.png" />
      </Box>
    </React.Fragment>
  );
};

export default Opacity;
