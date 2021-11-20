import { useContext } from "react";

import { SectionNews } from "../components/News/News";
import { Search } from "../components/Search/Search";
import { gameContext } from "../context/game.context";
import { StyledContainer, StyledSpan } from "./gameNews.styles";

export const GameNews = () => {
    const { state, handleChange } = useContext(gameContext);
    const { news, searchResultsNews, searchTerm } = state;

    const searchLength = searchResultsNews.length > 0 ? searchResultsNews.length : news.length;
    const newsFiltered = searchResultsNews.length > 0 ? searchResultsNews : news;

    return(
        <>  
            <StyledContainer>
            <StyledSpan> Notícias: {searchLength}</StyledSpan>
            <Search 
                type="search"
                placeholder={"Busque pelo título da notícia."}
                value={searchTerm}
                onChange={handleChange}
            />
                {news.length > 0 ? (
                    newsFiltered.map(item => (
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
