import React from "react";
import { Outlet, Link } from "react-router-dom";

import { StyledHeader, StyledH1, StyledDiv, StyledSpan } from "./general styles/header.styles";

export const App = () => {
    return(
        <>
            <StyledHeader>
                <StyledDiv>
                <Link to="/">Home</Link>
                <Link to="/gamelist">Game List</Link> |{" "}
                <Link to="/gamenews">News</Link>
                </StyledDiv>
                <StyledH1><StyledSpan>content by</StyledSpan> MMO Games</StyledH1>
            </StyledHeader>
            <Outlet />
        </>
    )
}