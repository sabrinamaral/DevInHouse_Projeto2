import { useEffect, useState } from 'react';
import { Card } from '../components/Card';

export const GameList = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        const config = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": "ee423169famsh6cd7d0e43bed79fp17338fjsnb77e77cf846a"
            }
        } 
        fetch("https://mmo-games.p.rapidapi.com/games", config).then(response=>response.json()).then(data=> setGames(data))
    }, [])

    return(
        <>
            {games.length > 0 ? (
                games.map(game => (
                    <Card 
                    key={game.id}
                    thumbnail={game.thumbnail} 
                    title={game.title} 
                    platform={game.platform} 
                    description={game.short_description} />
                ))
            ) : (<p> Não há card de jogos disponível</p>)}
            
        </>
    )
}