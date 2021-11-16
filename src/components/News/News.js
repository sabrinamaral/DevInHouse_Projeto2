import React from "react";
import { StyledContainerNews, StyledImg } from "./News.styles";


export const SectionNews = ({description, image, title, id, url}) => {
    return(
        <>
            <StyledContainerNews>
                <StyledImg src={image} alt={title} key={id} onClick={()=> window.open(url, "_blank")}/>
                <h2>{title}</h2>
                <p>{description}</p>
            </StyledContainerNews>
        </>
    )
}