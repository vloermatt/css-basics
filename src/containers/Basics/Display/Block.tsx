import React from 'react';
/** Utils */
import { getRandomInt } from '../../../utils';
/** Styled Components */
import { Heading, Text, TextCode, PageWrapper } from '../../../themes/styledComponents';
import { BoxBlock } from './styles';

const Block: React.FC = () => {

    // functions
    const morphRandom = (id: string) => {
        const width = getRandomInt(10, 100);
        const height = getRandomInt(50, 100);
        const elmt = document.getElementById(id);
        if (elmt) {
            elmt.style.width = width.toString() + '%';
            elmt.style.height = height.toString() + 'px';
        }
    }
    return(
        <PageWrapper>
             <Heading>:block</Heading>
             <ul style={{marginTop: '20px'}}>
                 <li>
                     <Text>
                         {`Elements with a display property of `}
                         <TextCode>:block</TextCode>
                         {` start on a new line`}
                     </Text>
                 </li>
                 <li>
                     <Text>
                        <TextCode>:block</TextCode>
                        { ` elements take up the full `}
                        <TextCode>width</TextCode>
                        { ` by default`}
                     </Text>
                 </li>
                 <li>
                     <Text>
                         <TextCode>padding</TextCode>
                         {` and `}
                         <TextCode>margin</TextCode>
                         {` properties are respected `}
                     </Text>
                 </li>
                 <li>
                    <Text>
                        <TextCode>width</TextCode>
                        { ` and `}
                        <TextCode>height</TextCode>
                        { ` properties can be adjusted`}
                    </Text>
                 </li>
             </ul>
             <Text style={{marginTop: '50px'}}>
                {`Click on this `}
                <TextCode>:block</TextCode>
                {` element to adjust it's `}
                <TextCode>width</TextCode>
                {` and `}
                <TextCode>height</TextCode>
                {` properties `}
             </Text>
             <div
                style={{
                    height: '300px',
                    padding: '50px',
                    marginTop: '20px'
                }}
             >
                <BoxBlock style={{ backgroundColor: '#7bdff2' }}>
                    <Text style={{textAlign: 'center', padding: '15px'}}>
                        yo i'm full width of my parent
                    </Text>
                </BoxBlock>
                <BoxBlock id="b1" onClick={() => morphRandom('b1')} style={{ marginTop: '10px' }}>
                    <Text style={{textAlign: 'center', padding: '15px'}}>
                        click me!
                    </Text>
                </BoxBlock>
                <BoxBlock style={{ marginTop: '10px', backgroundColor: '#7bdff2' }}>
                    <Text style={{textAlign: 'center', padding: '15px'}}>
                        yeah same, by default
                    </Text>
                </BoxBlock>
             </div>
        </PageWrapper>
    );
}

export default Block;