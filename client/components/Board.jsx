import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refresh } from '../slices/tileSlice.js';
import Tile from './Tile.jsx';

const Board = () => {
  const values = useSelector((state) => state.tiles.values);
  const score = useSelector((state) => state.tiles.score);
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
      <h2>Score: {score}</h2>
      <button type='button' onClick={(e) => dispatch(refresh())}>
        NEW GAME
      </button>
      <div className='tiles-container'>{tiles}</div>
    </div>
  );
};

export default Board;
