import React from "react";

import { StyledDiv, StyledBtn } from "./home.styles";
import BackgroundImage from "../assets/background.jpg"
import { useNavigate } from "react-router";

export const Home = () => {
    const navigate = useNavigate();

    return(
            <div style={{
                    width: '100%',
                    height: '100vh',
                    background: `url(${BackgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    display: "flex",
                    position: "fixed",
                    flexDirection:"column",
                    justifyContent: 'center',
                    alignItems: 'center',                    
                }}>
                    
                <StyledDiv>
                    <StyledBtn onClick={()=>(navigate('/gamelist'))}>Game List</StyledBtn>
                    <StyledBtn onClick={()=>(navigate('/gamenews'))}>News</StyledBtn>
                </StyledDiv>
                
            </div>    
    )
}