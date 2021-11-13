import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { Card } from '../Components/Card';
import { StyledHeader, StyledH1 } from "../General Styles/Header.styles";
import { StyledContainer } from '../General Styles/Container.styles';
import { gameContext } from '../Context/game.context';

export const GameList = () => {
    const { games } = useContext(gameContext);
    
    return(
        <>
            <StyledHeader>
            <NavLink to="/" className="current" exact='true'>
                <li>Home</li>
            </NavLink>
            <NavLink to="/gamenews" className="current" exact='true'>
                <li>News</li>
            </NavLink>
            <StyledH1>Game List</StyledH1>
            </StyledHeader>
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