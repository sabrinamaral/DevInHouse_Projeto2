import { StyledH2, StyledH4, StyledH6, StyledP, StyledP2, StyledImg, StyledSpan } from "./Details.style";

export const ComponentGameDetails = ({ thumbnail, title, genre, storage, memory, os, processor, description, developer}) => {
    
    return(
        <>
            <StyledImg src={thumbnail} alt={title}/>
            <StyledH2>{title}</StyledH2>
            <StyledH4>Gênero - {genre}</StyledH4>
            <StyledP2>{description}</StyledP2>
            <StyledH4>Desenvolvedor | {developer}</StyledH4>
            <StyledSpan>
                <StyledH6>Requisitos mínimos de sistema</StyledH6>
                <StyledP>Armazenamento - {storage}</StyledP>
                <StyledP>Memória RAM - {memory}</StyledP>
                <StyledP>Sistema Operacional - {os}</StyledP>
                <StyledP>Processador - {processor}</StyledP>
            </StyledSpan>  
        </>
    )
}


