import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
/** Styling */
import styled from 'styled-components';
import './styles.css';

const ContentWrapper = styled.div`
  display: inline-block;
  background: #EDFDFB;
  position: absolute;
  left: 15%;
  height: 100%;
  width: 85vw;
  overflow: auto;
`;

const SideBar: React.FC = (props) => {
    const { children } = props;

    const history = useHistory();

    const directTo = (path: string) => {
        history.push(path);
    }

    return (
        <Fragment>
        <div>
            <div className="sideBar">
                <h1 className="sideLink" onClick={() => directTo('/display')}>Display</h1>
                <h1 className="sideLink" onClick={() => directTo('/position')}>Position</h1>
                <h1 className="sideLink">Float</h1>
            </div>
            <ContentWrapper>{children}</ContentWrapper>
        </div>
        </Fragment>
    );
}

export default SideBar;