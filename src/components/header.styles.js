import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #000;
  text-align: center;
  border-bottom: .1rem solid #CAE5FF;;
  z-index: 10;
`;

export const StyledDiv = styled.div`
  a {
    width: 10rem;
    color: #CAE5FF;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem;
  }
`;

export const StyledH1 = styled.h1`
    font-size: 2.2rem;
    text-align: end;
    margin-right: 2rem;
    color: #CAE5FF;
`;

export const StyledSpan = styled.span`
    font-size: .8rem;
    color: #CAE5FF;
`;