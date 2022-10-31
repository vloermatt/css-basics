import React from 'react';
/** Styling */
import './styles.css';
import { Heading, Text, Box } from '../../themes/styledComponents';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Box
        style={{
          marginLeft: '25px',
          padding: '20px',
        }}
      >
        <Heading>Welcome!</Heading>
        <Text style={{ marginTop: '50px' }}>{`Find & learn about CSS topics in the sidebar`}</Text>
        <Text style={{ marginTop: '50px' }}>
          {`Feel free to contribute to this project `}
          <a href="https://github.com/vloermatt/css-basics">here.</a>
        </Text>
      </Box>
    </React.Fragment>
  );
};

export default Home;
