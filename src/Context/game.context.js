import React, { createContext, useState, useEffect } from "react";


export const gameContext = createContext();
gameContext.displayName = 'Game Context';
const GameProvider = gameContext.Provider;

export const GameContext = ({children}) => {
    const [ games, setGames ] = useState([]);

    useEffect(() => {
        const config = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
            }
        } 
        fetch("https://mmo-games.p.rapidapi.com/games", config)
        .then(response=>response.json())
        .then(data => setGames(data))
    }, []);

    const [ news, setNews ] = useState([]);

    useEffect(() => {
        fetch("https://mmo-games.p.rapidapi.com/latestnews", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "mmo-games.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_API_KEY
	}
})
.then(response => response.json()).then(data => setNews(data))
    }, [])

    return (
        
        <GameProvider value={{games, news}}>
            {children}
        </GameProvider>
    )
}