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
  const sets = useSelector((state) => state.tiles.sets);
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

  const match = sets.some((set) => {
    // console.log('set', set);
    return (
      set[0] == userSelection[0] &&
      set[1] == userSelection[1] &&
      set[2] == userSelection[2]
    );
  });

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
      <button
        type='button'
        // on click refresh the board, populating with new tiles
        onClick={(e) => {
          if (match) {
            dispatch(incrementScore());
            dispatch(refresh(userSelection));
          }
          dispatch(clearSelection());
        }}
      >
        Submit
      </button>
      <div className='tiles-container'>{tiles}</div>
    </div>
  );
};

export default Board;
