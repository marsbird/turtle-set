import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refresh, getSets } from '../slices/tileSlice.js';
import Tile from './Tile.jsx';

const Board = () => {
  const values = useSelector((state) => state.tiles.values);
  // const sets = useSelector((state) => state.tiles.sets);
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
      <button
        type='button'
        // on click refresh the board, populating with new tiles and get all possible sets
        onClick={(e) => {
          dispatch(refresh());
          dispatch(getSets());
        }}
      >
        New Game
      </button>
      <div className='tiles-container'>{tiles}</div>
    </div>
  );
};

export default Board;
