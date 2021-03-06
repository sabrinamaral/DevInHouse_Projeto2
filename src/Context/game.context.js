import React, { createContext, useReducer, useEffect } from "react";

export const gameContext = createContext();
gameContext.displayName = "Game Context";
const GameProvider = gameContext.Provider;

const initial_state = {
    games: [],
    game: null,
    news: [],
    searchTerm: "",
    searchResultsGames: [],
    searchResultsNews: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_GAMES":
            return { ...state, games: action.content};
        case "SET_NEWS":
            return {...state, news: action.content};
        case "SET_GAME":
            return {...state, game: action.content};
        case "SET_SEARCH_TERM":
            return {...state, searchTerm: action.content};
        case "SET_SEARCH_GAMERESULTS":
            return {...state, searchResultsGames: action.content};
        case "SET_SEARCH_NEWSRESULTS":
            return {...state, searchResultsNews: action.content}
        default:
            return state;
    }
};

export const GameContext = ({ children }) => {

const [state, dispatch] = useReducer(reducer, initial_state);

    useEffect(() => {
        fetch("https://mmo-games.p.rapidapi.com/games", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
            }
        })
        .then(response => response.json())
        .then(games => dispatch({ type: "SET_GAMES", content: games}))
    }, []);

    useEffect(() => {
        fetch("https://mmo-games.p.rapidapi.com/latestnews", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
            }
        })
        .then(response => response.json())
        .then(news => dispatch({type: "SET_NEWS", content: news}))
    }, []);

    const fetchGameId = (id) => {
        if(!id) return;
        
       fetch(`https://mmo-games.p.rapidapi.com/game?id=${id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY 
        }}).then(response => response.json()).then(game => dispatch({type: "SET_GAME", content: game}))
    };

    const clearGame = () => {
        dispatch({ type: "SET_GAME", content: null });
      };

    //___________________SEARCH BARS LOGIC_______________________//
    
    const { games, news, searchTerm } = state;

    const handleChange = event => {
        dispatch({type: "SET_SEARCH_TERM", content: event.target.value});
    };

    useEffect(() => {
        const gameResults = games.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase()));
        dispatch({type: "SET_SEARCH_GAMERESULTS", content: gameResults});
    // eslint-disable-next-line
    }, [searchTerm]);

    useEffect(() => {
        const newsResults = news.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        dispatch({type: "SET_SEARCH_NEWSRESULTS", content: newsResults});
    // eslint-disable-next-line
    }, [searchTerm]);

    return (
        
        <GameProvider value={{state, fetchGameId, clearGame, handleChange }}>
            {children}
        </GameProvider>
    )
}