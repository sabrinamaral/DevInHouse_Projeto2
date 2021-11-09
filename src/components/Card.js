import { StyledCard, StyledImg, StyledHeader, StyledH2, StyledIcon, StyledP, StyledButton } from "./Card.styles"


export const Card = ({thumbnail, title, platform, description}) => {
    return (
        <StyledCard>
            <StyledImg src={thumbnail} alt={title}/>
            <StyledHeader>
                <StyledH2>{title}</StyledH2>
                <StyledIcon>{platform}</StyledIcon>
            </StyledHeader>
            <StyledP>{description}</StyledP>
            <StyledButton>ver mais</StyledButton>
        </StyledCard>
    )
}