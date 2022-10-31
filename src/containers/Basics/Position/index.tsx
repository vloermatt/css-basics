import React, { Fragment, useState, useEffect } from 'react';
/** Utils */
import { PositionTypes } from '../../../utils/constants';
/** Styled Components */
import { Heading, Box, TextCode, Text, Button } from '../../../themes/styledComponents';
/** Components */
import Static from './static';
import Relative from './relative';

const Position:React.FC = () => {
    
    // states
    const [ positionType, setPositionType ] = useState(PositionTypes.STATIC);

    useEffect(() => {
        
        Object.values(PositionTypes).map(type => {
            const button = document.getElementById(type);
            if(button && type === positionType) {
                button.classList.add('active');
            } else {
                button?.classList.remove('active');
            } 
            return null;
        });
    }, [positionType]);

    return (
        <Fragment>
        <Box
            style={{
                marginLeft: '25px',
                padding: '20px'
            }}
        >
            <Heading>Position</Heading>
            <Text style={{marginTop: '50px'}}>
                {`The `}
                <TextCode>position</TextCode>
                {` property specifies the type of positioning method used by an element`}
            </Text>
            { /** map position types and create a button for each */}
            {Object.values(PositionTypes).map(type => {
                return (
                    <Button 
                        key={type.valueOf()}
                        id={type.valueOf()} 
                        style={{ marginTop: "20px", marginLeft: type !== PositionTypes.STATIC ? '20px': 0}}
                        onClick={() => setPositionType(type.valueOf())}
                        >
                        :{type.valueOf()}
                    </Button>
                )
            })}
            <Box style={{marginTop: '25px'}}>
                {positionType === PositionTypes.STATIC && <Static />}
                {positionType === PositionTypes.RELATIVE && <Relative />}
            </Box>
        </Box>
        </Fragment>
    );
}

export default Position;