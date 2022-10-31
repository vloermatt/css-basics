import React from 'react';
/** Styled Components */
import { Box, Heading, Text, TextCode, Row, PageWrapper } from '../../../themes/styledComponents';
import {  BoxInlineBlock } from './styles';

const InlineBlock: React.FC = () => {
    return(
        <PageWrapper>
            <Heading>:inline-block</Heading>
            <ul style={{ marginTop: '20px'}}>
                <li>
                    <Text>
                        <TextCode>width</TextCode>
                        { ` and `}
                        <TextCode>height</TextCode>
                        {` properties can be set`}
                        
                    </Text>
                </li>
                <li>
                    <Text>
                        {`Unlike `}
                        <TextCode>:inline</TextCode>
                        {` elements, `}
                        <TextCode>vertical</TextCode>
                        {` `}
                        <TextCode>margin</TextCode>
                        {` and `}
                        <TextCode>padding</TextCode>
                        {` is respected`}
                    </Text>
                </li>
                <li>
                    <Text>
                        {` Taking up only the neccessary `}
                        <TextCode>width</TextCode>
                    </Text>
                </li>
                <Box
                    style={{
                        marginTop: '30px',
                        fontSize: '20px',
                        fontWeight: 250,
                        textAlign: 'center'
                    }}
                >
                    <Row>
                        {`Hover over this `}
                        <TextCode>:inline</TextCode>
                        {` element to add `}
                        <TextCode>padding</TextCode>
                        {` and `}
                        <TextCode>margin</TextCode>
                        {` properties `}
                    </Row>
                    <Row>
                        <BoxInlineBlock>:hover over me!</BoxInlineBlock>
                        {` These properties are respected by `}
                        <TextCode>horizontal</TextCode>
                        {` and `}
                        <TextCode>vertical</TextCode>
                        { ` elements`}
                    </Row>
                </Box>
            </ul>
        </PageWrapper>
    );
}

export default InlineBlock;