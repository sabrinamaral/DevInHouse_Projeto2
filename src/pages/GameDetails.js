import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

import { StyledContainer } from '../general styles/container.styles';
import { GameContainerDetails } from '../components/Details/Details';
import { gameContext } from '../context/game.context';
import { SimpleSlider } from "../components/Carousel/Carousel";
import { StyledDetails } from "../components/Details/Details.style";
import { FormComment } from "../components/Form/Form"

export const GameDetails = () => {
    const navigate = useNavigate();
    const { gameId } = useParams();
  
    const { state, fetchGameId, clearGame } = useContext(gameContext);
    const { game } = state;
  
    useEffect(() => {
      fetchGameId(gameId);
      
      return () => {
        clearGame();
      };
       // eslint-disable-next-line
    }, [gameId]);

    useEffect(() => {       
        window.scrollTo(0, 0);     
    }, []);

        return(
        <>
            <StyledContainer>
                <StyledDetails>
                    <GameContainerDetails
                        title={game && game.title}
                        thumbnail={game && game.thumbnail} alt={game && game.title} onClick={()=>navigate('/gamelist')}
                        developer={game && game.developer}
                        memory={game && game.minimum_system_requirements.memory}
                        storage={game && game.minimum_system_requirements.storage}
                        os={game && game.minimum_system_requirements.os}
                        processor={game && game.minimum_system_requirements.processor}
                        description={game && game.short_description}
                        genre={game && game.genre}
                    />
                    <SimpleSlider />
                </StyledDetails>
                <FormComment />
            </StyledContainer>
        </>
    ) 
}
