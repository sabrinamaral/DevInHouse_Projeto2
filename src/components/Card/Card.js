import React from 'react';
import { useNavigate } from 'react-router';

import { StyledCard, StyledImg, StyledH2, StyledP, StyledButton } from "./Card.styles"

export const Card = ({ thumbnail, title, genre, id }) => {
    const navigate = useNavigate();

    return (
        <StyledCard>
            <StyledImg src={thumbnail} alt={title} />
            <StyledH2>{title}</StyledH2>
            <StyledP>Gênero: {genre}</StyledP>
            <StyledButton onClick={()=>navigate(`/gamelist/${id}`)}>ver mais</StyledButton>
        </StyledCard>
    )
}