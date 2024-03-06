import React from 'react';

const Tile = ({ _id, number, pattern, color, shape }) => {
  return (
    <div className='tile'>
      _id: {_id}, num: {number}, pat: {pattern}, col: {color}, sha: {shape},
      {/* {number} */}
    </div>
  );
};

export default Tile;
