import React from 'react';
import { render } from 'react-dom';

import { GameRoutes } from './routes/routes';

const Index = () => {
  return(
    <GameRoutes />
    )
}
render(<Index />, document.getElementById('root'));

