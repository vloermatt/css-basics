import styled from 'styled-components';

export const BoxInline = styled.div`
    display: inline;
    padding: 30px;
    margin: 10px;
    border: 5px solid #403f4c;
    background-color: #E1C9E4;
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
    background-color: #E1C9E4;
`;

export const BoxInlineBlock = styled.div`
    display: inline-block;
    padding: 30px;
    margin: 10px;
    border: 5px solid #403f4c;
    background-color: #E1C9E4;
    transition: 0.3s;

    &:hover {
        margin: 30px;
        padding: 50px;
    }
`;

export const BoxBlock = styled.div`
    display: block;
    border: 5px solid #403f4c;
    background-color: #E1C9E4;
    cursor: pointer;
`;