import { useContext } from "react";

import { Card } from "../components/Card/Card";
import { gameContext } from "../context/game.context";
import { Search } from "../components/Search/Search";
import { StyledContainer, StyledDiv, StyledSpan } from "./gameList.styles";

export const GameList = () => {
    const { state, handleChange } = useContext(gameContext);
    const { games, searchResultsGames, searchTerm } = state;

    const searchLength = searchResultsGames.length > 0 ? searchResultsGames.length : games.length;
    const gameFiltered = searchResultsGames.length > 0 ? searchResultsGames : games;

    return(
        <>  

            <StyledDiv>Número de jogos: {searchLength}</StyledDiv>
            <StyledSpan>Pressione esc para limpar.</StyledSpan>
            <StyledContainer>
            <Search 
                type="search"
                placeholder={"Buscar pelo nome do jogo."}
                value={searchTerm}
                onChange={handleChange}
            />
            
                {games.length > 0 ? (
                    gameFiltered.map(game => (
                        <Card 
                        id={game.id}
                        key={game.id}
                        thumbnail={game.thumbnail} 
                        title={game.title} 
                        genre={game.genre} />
                    ))) : (<p> Não há card de jogos disponível</p>)}
            </StyledContainer>
        </>
    )
}