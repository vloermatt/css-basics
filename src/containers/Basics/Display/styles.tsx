import styled from 'styled-components';

export const BoxInline = styled.div`
  display: inline;
  padding: 30px;
  margin: 10px;
  border: 5px solid #403f4c;
  background-color: #e1c9e4;
  transition: 0.3s;

  &:hover {
    margin: 30px;
    padding: 50px;
  }
`;

export const BoxInlineStill = styled.div`
  display: inline;
  padding: 30px;
  margin: 10px;
  border: 5px solid #403f4c;
  background-color: #e1c9e4;
`;

export const BoxInlineBlock = styled.div`
  display: inline-block;
  padding: 30px;
  margin: 10px;
  border: 5px solid #403f4c;
  background-color: #e1c9e4;
  transition: 0.3s;

  &:hover {
    margin: 30px;
    padding: 50px;
  }
`;

export const BoxBlock = styled.div`
  display: block;
  border: 5px solid #403f4c;
  background-color: #e1c9e4;
  cursor: pointer;
`;

export const BoxBox = styled.div`
  padding: 30px;
  margin: 10px;
  border: 5px solid #403f4c;
  background-color: #e1c9e4;
`;
