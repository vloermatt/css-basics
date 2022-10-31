import styled from 'styled-components';

export const Heading = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: black;
`;

export const Text = styled.div`
    font-size: 18px;
    font-weight: 250;
    color: black;
`;
export const Box = styled.div`
    
`;

//top - right - bottom - left
export const TextCode = styled.div`
    display: inline;
    background-color: #a5e1ec;
    font-weight: 400;
    color: black;
    padding: 1px 3px 1px 3px; 
    border-radius: 5px 5px 5px 5px;
`;

export const Button = styled.div`
    padding: 20px;
    background-color: #403f4c;
    color: white;
    font-weight: bold;
    border-radius: 15px;
    display: inline-block;
    cursor: pointer;
    box-shadow: 2px 4px #888888;
    transition: 0.3s;

    &:hover {
        border-radius: 5px;
        transform: scale(1.2);
        box-shadow: 5px 5px 5px #888888;
    }
`;

export const Row = styled.div`
    display: block;
`;

export const PageWrapper = styled.div`
    display: inline-block;
`;