import { useContext, useEffect } from "react";
import { useParams } from "react-router";

import { ComponentGameDetails } from "../components/Details/Details";
import { gameContext } from "../context/game.context";
import { SimpleSlider } from "../components/Carousel/Carousel";
import { StyledDetails } from "../components/Details/Details.style";
import { CommentForm } from "../components/Form/Form"

export const GameDetails = () => {
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
          <StyledDetails>
              {!game ? (
              <p> Não há detalhes para esse jogo disponível.</p>
              ) : (
              <ComponentGameDetails
                title={game.title}
                thumbnail={game.thumbnail} alt={game.title}
                developer={game.developer}
                memory={game.minimum_system_requirements ? game.minimum_system_requirements.memory : "não especificado"}
                storage={game.minimum_system_requirements ? game.minimum_system_requirements.storage : "não especificado"}
                os={game.minimum_system_requirements ? game.minimum_system_requirements.os : "não especificado"}
                processor={game.minimum_system_requirements ? game.minimum_system_requirements.processor : "não especificado"}
                description={game.description ? game.description.replace(/(<([^>]+)>)/gi, "") : "sem dados"}
                genre={game.genre ? game.genre : "não especificado"}
              />
            )}        
                <SimpleSlider />

                <CommentForm id={gameId}/>

          </StyledDetails>
    ) 
}
