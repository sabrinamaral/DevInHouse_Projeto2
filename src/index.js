import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import { Home } from './pages/Home'
import { GameDetails } from './pages/GameDetails';
import { GameList } from './pages/GameList';
import { GameNews } from './pages/GameNews';
import { GameContext } from './Context/game.context';

const Index = () => {
  return(
    <GameContext>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/gamelist' element={<GameList />} />
          <Route path='/gameList/:gameId' element={<GameDetails />} />
          <Route path='/gamenews' element={<GameNews />} />
        </Routes>
      </BrowserRouter>
    </GameContext>
  )
}



ReactDOM.render(<Index />, document.getElementById('root'));

