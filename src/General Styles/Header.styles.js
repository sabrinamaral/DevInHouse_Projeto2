import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 7rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #000;
  text-align: center;

  a {
    text-decoration: none;
  }

  li {
    color: #fff;
    font-weight: bold;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
    width: 8rem;
  }

.current {
  color: #fff;
  border-bottom: 2px solid black;
}

`;

export const StyledH1 = styled.h1`
    width: 100vw;
    font-size: 2.5rem;
    text-align: end;
    padding-right: 2rem;
    color: #fff;
`;