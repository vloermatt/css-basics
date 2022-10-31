import React from 'react';
/** Styled Componenets */
import { Box, Heading, Text, TextCode, Row, PageWrapper } from '../../../themes/styledComponents';
import { BoxInline } from './styles';

const Inline: React.FC = () => {

    return(
            <PageWrapper style={{ marginBottom: '75px'}}>
            <Heading>:inline</Heading>
            <ul style={{marginTop: '20px'}}>
                <li>
                    <Text>
                        {`Most elements have a default `}
                        <TextCode>display</TextCode> 
                        {` value of `}
                        <TextCode>:inline</TextCode>
                    </Text>
                </li>
                <li>
                    <Text>
                        <TextCode>width</TextCode>
                        {` and `}
                        <TextCode>height</TextCode>
                        {` properties have no effect on `}
                        <TextCode>:inline</TextCode>
                        { `elements`}
                    </Text>
                </li>
                <li>
                    <Text>
                        <TextCode>:inline</TextCode>
                        {` elements accept `}
                        <TextCode>padding</TextCode>
                        {` and `}
                        <TextCode>margin</TextCode>
                        {` properties. But will only push away other elements horizontally`}
                    </Text>
                </li>
                <li>
                    <Text>
                        <TextCode>:inline</TextCode>
                        {`  elements, by default, only take up the necessary `}
                        <TextCode>width</TextCode>
                        {` + `}
                        <TextCode>padding</TextCode>
                        {` and `}
                        <TextCode>margin</TextCode>
                    </Text>
                </li>
            </ul>
            <Box
                style={{
                    marginTop: '80px',
                    fontSize: '20px',
                    fontWeight: 250,
                    textAlign: 'center'
                }}
            >
                <Row style={{ marginBottom: '60px' }}> 
                    {`Hover over this `}
                    <TextCode>:inline</TextCode>
                    {` element to add `}
                    <TextCode>padding</TextCode>
                    {` and `}
                    <TextCode>margin</TextCode>
                    {` properties `}
                </Row>
                <Row>
                    <BoxInline>:hover over me!</BoxInline>
                    {` These properties are respected only by `}
                    <TextCode>horizontal</TextCode>
                    { ` elements`}
                </Row>
            </Box>
            </PageWrapper>
    );
}

export default Inline;