import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 16rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: .5rem;
    margin: 1rem 2rem;
`;

export const StyledImg = styled.img`
    border-top-right-radius: .5rem;
    border-top-left-radius: .5rem;
    cursor: pointer;    

`;

export const StyledH2 = styled.h2`
    margin-left: .5rem;
    color: #495057;
`;

export const StyledP = styled.p`
    margin-left: .5rem;
`;

export const StyledButton = styled.button`
    width: 6rem;
    background-color: #343a40;
    color: #fff;
    padding: .5rem;
    margin: .6rem;
    align-self: center;
    justify-self: baseline;
    border-radius: 1rem;
    cursor: pointer;    
`;