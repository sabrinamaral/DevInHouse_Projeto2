import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../index.css';
import { App } from '../App'
import { Home } from '../pages/home'
import { GameList } from '../pages/gameList';
import { GameNews } from '../pages/gameNews';
import { GameDetails } from '../pages/gameDetails'
import { GameContext } from '../context/game.context';

export const GameRoutes = () => {
    return(
        <GameContext>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route 
                        index 
                        element={<Home />} />
                        <Route 
                        path='/gamelist' 
                        element={<GameList />} />
                        <Route 
                        path='gamelist/:gameId' 
                        element={<GameDetails />} />
                        <Route 
                        path='/gamenews' 
                        element={<GameNews />} />
                        <Route 
                        path="*" 
                        element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GameContext>
    )

}