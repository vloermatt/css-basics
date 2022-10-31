import React from 'react';
/** Styled Components */
import { Heading, Text, TextCode, PageWrapper } from '../../../themes/styledComponents';
import { BoxStatic } from './styles';

const Static: React.FC = () => {
    return (
        <PageWrapper>
          <Heading>:static</Heading>
          <ul style={{marginTop: '20px'}}>
              <li>
                  <Text>
                    {`HTML elements are positioned `}
                    <TextCode>static</TextCode>
                    {` by default`}
                  </Text>
              </li>
              <li>
                  <Text>
                    <TextCode>static</TextCode>
                    {` elements are positioned according to the normal flow of the page`}
                  </Text>
              </li>
          </ul>
            <BoxStatic style={{width: '20%'}}>im pretty :static</BoxStatic>
            <BoxStatic style={{width: '60%'}}>same</BoxStatic>
            <BoxStatic style={{width: '88%'}}>me too</BoxStatic>
        </PageWrapper>
    );
}

export default Static;