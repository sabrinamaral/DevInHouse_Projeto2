import { StyledDetails, StyledH2, StyledH4, StyledH6, StyledP, StyledSpan } from "./Details.style";

export const GameContainerDetails = ({ thumbnail, title, genre, storage, memory, os, processor, description, developer}) => {
    
    return(
        <StyledDetails>
            <img src={thumbnail} alt={title}></img>
            <StyledH2>{title}</StyledH2>
            <StyledH4>Gênero - {genre}</StyledH4>
            <p>{description}</p>
            <StyledH4>Desenvolvedor | {developer}</StyledH4>
            <StyledSpan>
                <StyledH6>Requisitos mínimos de sistema</StyledH6>
                <StyledP>Armazenamento - {storage}</StyledP>
                <StyledP>Memória RAM - {memory}</StyledP>
                <StyledP>Sistema Operacional - {os}</StyledP>
                <StyledP>Processador - {processor}</StyledP>
            </StyledSpan>  
        </StyledDetails>
    )
}


