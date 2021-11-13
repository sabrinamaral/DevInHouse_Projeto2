import React from "react";
import { NavLink } from "react-router-dom";

import { StyledHeader, StyledH1 } from "../General Styles/Header.styles";
import { StyledContainer } from "../General Styles/Container.styles";

export const Home = () => {
    return(
        <>
            <StyledHeader>
            <NavLink to="/gamelist" className="current" exact='true'>
                <li>Game List</li>
            </NavLink>
            <NavLink to="/gamenews" className="current" exact='true'>
                <li>News</li>
            </NavLink>
            <StyledH1>HOME</StyledH1>
            </StyledHeader>
            <StyledContainer>

           </StyledContainer>
            
        </>
    )
}