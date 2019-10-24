  
import React from 'react';

const uiContext = React.createContext({
  size: 200,
  vanilla: '/img/vanilla.svg',
  setSize: () => null
});

export default uiContext ;