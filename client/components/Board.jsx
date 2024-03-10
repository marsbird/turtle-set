import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refresh } from '../slices/tileSlice.js';
import { startGame } from '../slices/appSlice.js';
import Tile from './Tile.jsx';
import Instructions from './Instructions.jsx';

const Board = () => {
  const values = useSelector((state) => state.tiles.values);
  const score = useSelector((state) => state.tiles.score);
  const gameStarted = useSelector((state) => state.app.gameStarted);
  const dispatch = useDispatch();

  const tiles = [];
  for (let i = 0; i < values.length; i++) {
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
      <button
        type='button'
        onClick={(e) => {
          dispatch(refresh());
          dispatch(startGame());
        }}
      >
        NEW GAME
      </button>
      {gameStarted ? (
        <div className='tiles-container'>{tiles}</div>
      ) : (
        <Instructions />
      )}
    </div>
  );
};

export default Board;
