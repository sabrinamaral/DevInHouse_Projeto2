import React from "react";
import { StyledContainerNews, StyledImg, StyledH2, StyledP } from "./News.styles";


export const SectionNews = ({description, image, title, id, url}) => {
    return(
        <>
            <StyledContainerNews>
                <StyledImg src={image} alt={title} key={id} onClick={()=> window.open(url, "_blank")}/>
                <StyledH2>{title}</StyledH2>
                <StyledP>{description}</StyledP>
            </StyledContainerNews>
        </>
    )
}