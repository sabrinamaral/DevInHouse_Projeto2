import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

import { StyledH1, StyledHeader } from '../General Styles/Header.styles';
import { StyledContainer } from '../General Styles/Container.styles';
import { GameContainerDetails } from '../Components/Details';

    export const GameDetails = () => {

        const { gameId } = useParams();
        const [ game, setGame ] = useState(null);

        useEffect(() => {
            if(!gameId) return;
            
            fetch(`https://mmo-games.p.rapidapi.com/game?id=${gameId}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_API_KEY 
            }}).then(response => response.json()).then(data => setGame(data))
        }, [gameId]);
    
        return(
        <>
            <StyledHeader>
            <NavLink to="/" className="current" exact='true'>
                <li>Home</li>
            </NavLink>
            <NavLink to="/gamelist" className="current" exact='true'>
                <li>Game List</li>
            </NavLink>
            <NavLink to="/gamenews" className="current" exact='true'>
                <li>News</li>
            </NavLink>
            <StyledH1>Game Details</StyledH1>
            </StyledHeader>
            <StyledContainer> 
                <GameContainerDetails
                    title={game && game.title}
                    thumbnail={game && game.thumbnail} alt={game && game.title}
                    developer={game && game.developer}
                    memory={game && game.minimum_system_requirements.memory}
                    storage={game && game.minimum_system_requirements.storage}
                    os={game && game.minimum_system_requirements.os}
                    processor={game && game.minimum_system_requirements.processor}
                    description={game && game.short_description}
                    genre={game && game.genre}
                />
            </StyledContainer>
        </>
    )
}
