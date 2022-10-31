import React from 'react';
/** Styled Components */
import { Heading, Box, Text, TextCode, Button, PageWrapper } from '../../../themes/styledComponents';
import { BoxRelative } from './styles';

const Relative: React.FC = () => {
    return (
        <PageWrapper>
         <Heading>:relative</Heading>
         <ul style={{marginTop: '20px'}}>
             <li>
                 <Text>
                     {`  element with a `}
                     <TextCode>relative</TextCode>
                     {` position can be adjusted from it's original position using properties like `}
                     <TextCode>top</TextCode>
                     {` and `}
                     <TextCode>left</TextCode>
                 </Text>
             </li>
             <li>
                 <Text>
                     {`Great for centering elements with `}
                     <TextCode>display: block</TextCode>
                     {` horizontally`}
                 </Text>
             </li>
         </ul>
         <Box style={{marginTop: '20px' ,border: '1px solid black', height: '500px'}}>
            <BoxRelative>
                <Text>{`Top: 0`}</Text>
                <Text>{`Left: 0`}</Text>
            </BoxRelative>
         </Box>
         <Button style={{marginTop: '20px', float: 'right'}}>reset</Button>
        </PageWrapper>
    );
}

export default Relative;