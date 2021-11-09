import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GameList } from './pages/GameList';

ReactDOM.render(
  <React.StrictMode>
    <GameList/>
  </React.StrictMode>,
  document.getElementById('root')
);

