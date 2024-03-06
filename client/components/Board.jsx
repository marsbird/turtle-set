import React from 'react';
import Tile from './Tile.jsx';

const Board = () => {
  const tiles = [];
  for (let i = 0; i < 12; i++) {
    tiles.push(<Tile key={i} />);
  }

  return <div>{tiles}</div>;
};

export default Board;
