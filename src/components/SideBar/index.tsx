import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
/** Styling */
import styled from 'styled-components';
import './styles.css';

const ContentWrapper = styled.div`
  display: inline-block;
  background: #edfdfb;
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
  };

  return (
    <Fragment>
      <div>
        <div className="sideBar">
          <h1 className="sideLink" onClick={() => directTo('/display')}>
            Display
          </h1>
          <h1 className="sideLink" onClick={() => directTo('/position')}>
            Position
          </h1>
          <h1 className="sideLink" onClick={() => directTo('/float')}>
            Float
          </h1>
          <h1 className="sideLink" onClick={() => directTo('/padding')}>
            Padding
          </h1>
          <h1 className="sideLink" onClick={() => directTo('/text-align')}>
            Text Align
          </h1>
          <h1 className="sideLink" onClick={() => directTo('/cursor')}>
            Cursor
          </h1>
          <h1 className="sideLink" onClick={() => directTo('/z-index')}>
            Z Index
          </h1>
          <h1 className="sideLink" onClick={() => directTo('/color')}>
            Color
          </h1>
        </div>
        <ContentWrapper>{children}</ContentWrapper>
      </div>
    </Fragment>
  );
};

export default SideBar;
