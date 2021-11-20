import { useContext } from "react";

import { SectionNews } from "../components/News/News";
import { gameContext } from "../context/game.context";
import { StyledContainer } from "./gameNews.styles";

export const GameNews = () => {
    const { state } = useContext(gameContext);
    const { news } = state;

    return(
        <>       
            <StyledContainer>
                {news.length > 0 ? (
                    news.map(item => (
                        <SectionNews
                        key={item.id}
                        image={item.main_image}
                        url={item.article_url}
                        title={item.title}
                        description={item.short_description}
                        />
                    ))
                ) : (<p>Buscando notícias!</p>)}  
            </StyledContainer> 
        </>
    )
}
