import { useContext, useState, useEffect } from "react";

import { Card } from "../components/Card/Card";
import { gameContext } from "../context/game.context";
import { Search } from "../components/Search/Search";
import { StyledContainer, StyledDiv } from "./gameList.styles";

export const GameList = () => {
    const { state } = useContext(gameContext);
    const { games } = state;

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
    setSearchTerm(event.target.value);
  };

    useEffect(() => {
        const results = games.filter(game =>
        game.title.includes(searchTerm)
        );
        setSearchResults(results);
    // eslint-disable-next-line
    }, [searchTerm]);

    const searchLength = () => {
        if(searchResults.length > 0) { 
            return searchResults.length;
        }
    }

    const gameFiltered = searchResults.length > 0 ? searchResults : games;

    return(
        <>  
           
            <StyledDiv> Número de jogos: {searchLength()}</StyledDiv>
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