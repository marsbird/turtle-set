import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refresh } from '../slices/tileSlice.js';
import Tile from './Tile.jsx';

const Board = () => {
  const values = useSelector((state) => state.tiles.values);
  const dispatch = useDispatch();

  const tiles = [];
  for (let i = 0; i < 12; i++) {
    tiles.push(
      <Tile
        key={i}
        number={values[i].number}
        pattern={values[i].pattern}
        color={values[i].color}
        shape={values[i].shape}
      />
    );
  }

  return (
    <div>
      <button
        type='button'
        onClick={(e) => {
          dispatch(refresh());
        }}
      >
        New Game
      </button>
      <div>{tiles}</div>
    </div>
  );
};

export default Board;
