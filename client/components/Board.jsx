import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  refresh,
  incrementScore,
  clearSelection,
} from '../slices/tileSlice.js';
import Tile from './Tile.jsx';

const Board = () => {
  const values = useSelector((state) => state.tiles.values);
  const score = useSelector((state) => state.tiles.score);
  const userSelection = useSelector((state) => state.tiles.userSelection);
  const dispatch = useDispatch();

  const tiles = [];
  for (let i = 0; i < 12; i++) {
    tiles.push(
      <Tile
        key={i}
        _id={values[i]._id}
        number={values[i].number}
        pattern={values[i].pattern}
        color={values[i].color}
        shape={values[i].shape}
      />
    );
  }

  return (
    <div className='game-board'>
      <div>Score: {score}</div>
      <button
        type='button'
        // on click refresh the full board
        onClick={(e) => {
          dispatch(refresh());
        }}
      >
        New Game
      </button>
      <div className='tiles-container'>{tiles}</div>
    </div>
  );
};

export default Board;
