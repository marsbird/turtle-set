import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserSelection, removeUserSelection } from '../slices/tileSlice.js';

const Tile = ({ _id, number, pattern, color, shape }) => {
  const dispatch = useDispatch();
  const userSelection = useSelector((state) => state.tiles.userSelection);

  return (
    <div
      className='tile'
      onClick={(e) => {
        if (userSelection.length < 3 && !userSelection.includes(_id)) {
          e.target.style.boxShadow = '0 0 1rem black';
          dispatch(addUserSelection(_id));
        } else if (userSelection.includes(_id)) {
          e.target.style.boxShadow = '';
          dispatch(removeUserSelection(_id));
        }
      }}
    >
      {_id} {number} {pattern} {color} {shape}
    </div>
  );
};

export default Tile;
