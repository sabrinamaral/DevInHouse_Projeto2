import { useContext } from 'react';

import { Card } from "../components/Card/Card";
import { StyledContainer } from '../general styles/container.styles';
import { gameContext } from '../context/game.context';

export const GameList = () => {
    const { state } = useContext(gameContext);
    const { games } = state;
    return(
        <>
           <StyledContainer>
            {games.length > 0 ? (
                games.map(game => (
                    <Card 
                    id={game.id}
                    key={game.id}
                    thumbnail={game.thumbnail} 
                    title={game.title} 
                    genre={game.genre} />
                ))
            ) : (<p> Não há card de jogos disponível</p>)}
            </StyledContainer>
            
        </>
    )
}