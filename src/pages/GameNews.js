import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { SectionNews } from "../Components/News";
import { StyledHeader, StyledH1 } from "../General Styles/Header.styles";
import { gameContext } from "../Context/game.context";
import { StyledContainer } from "../General Styles/Container.styles";
//import { MainPhoto } from "../Components/MainPhoto";
//import { randomNumber } from "../utils/utils";


export const GameNews = () => {
    const { news } = useContext(gameContext);
   // const random = randomNumber();

    return(
        <>
            <StyledHeader>
                <NavLink to="/" className="current" exact='true'>
                    <li>Home</li>
                </NavLink>
                <NavLink to="/gamelist" className="current" exact='true'>
                    <li>Game List</li>
                </NavLink>
                <StyledH1>Latest News</StyledH1>
            </StyledHeader>
            
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
