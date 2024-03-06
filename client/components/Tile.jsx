import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addUserSelection } from '../slices/tileSlice.js';

const Tile = ({ _id, number, pattern, color, shape }) => {
  const dispatch = useDispatch();

  return (
    <div
      className='tile'
      onClick={(e) => {
        dispatch(addUserSelection(_id));
      }}
    >
      _id: {_id}, num: {number}, pat: {pattern}, col: {color}, sha: {shape},
      {/* {number} */}
    </div>
  );
};

export default Tile;
